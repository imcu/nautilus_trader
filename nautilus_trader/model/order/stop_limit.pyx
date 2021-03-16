# -------------------------------------------------------------------------------------------------
#  Copyright (C) 2015-2021 Nautech Systems Pty Ltd. All rights reserved.
#  https://nautechsystems.io
#
#  Licensed under the GNU Lesser General Public License Version 3.0 (the "License");
#  You may not use this file except in compliance with the License.
#  You may obtain a copy of the License at https://www.gnu.org/licenses/lgpl-3.0.en.html
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
# -------------------------------------------------------------------------------------------------

from cpython.datetime cimport datetime

from nautilus_trader.core.constants cimport *  # str constants only
from nautilus_trader.core.correctness cimport Condition
from nautilus_trader.core.uuid cimport UUID
from nautilus_trader.model.c_enums.order_side cimport OrderSide
from nautilus_trader.model.c_enums.order_type cimport OrderType
from nautilus_trader.model.c_enums.time_in_force cimport TimeInForce
from nautilus_trader.model.events cimport OrderAmended
from nautilus_trader.model.events cimport OrderInitialized
from nautilus_trader.model.events cimport OrderTriggered
from nautilus_trader.model.identifiers cimport ClientOrderId
from nautilus_trader.model.identifiers cimport InstrumentId
from nautilus_trader.model.identifiers cimport StrategyId
from nautilus_trader.model.objects cimport Price
from nautilus_trader.model.objects cimport Quantity
from nautilus_trader.model.order.base cimport PassiveOrder


cdef class StopLimitOrder(PassiveOrder):
    """
    Represents a stop-limit order.

    A stop-limit order is an instruction to submit a buy or sell limit order
    when the user-specified stop trigger price is attained or penetrated. The
    order has two basic components: the stop price and the limit price. When a
    trade has occurred at or through the stop price, the order becomes
    executable and enters the market as a limit order, which is an order to buy
    or sell at a specified price or better.

    A stop-limit eliminates the price risk associated with a stop order where
    the execution price cannot be guaranteed, but exposes the trader to the
    risk that the order may never fill even if the stop price is reached. The
    trader could "miss the market" altogether.
    """
    def __init__(
        self,
        ClientOrderId cl_ord_id not None,
        StrategyId strategy_id not None,
        InstrumentId instrument_id not None,
        OrderSide order_side,
        Quantity quantity not None,
        Price price not None,
        Price trigger not None,
        TimeInForce time_in_force,
        datetime expire_time,  # Can be None
        UUID init_id not None,
        datetime timestamp not None,
        bint post_only=True,
        bint reduce_only=False,
        bint hidden=False,
    ):
        """
        Initialize a new instance of the `StopLimitOrder` class.

        Parameters
        ----------
        cl_ord_id : ClientOrderId
            The client order identifier.
        strategy_id : StrategyId
            The strategy identifier associated with the order.
        instrument_id : InstrumentId
            The order instrument_id.
        order_side : OrderSide (Enum)
            The order side (BUY or SELL).
        quantity : Quantity
            The order quantity (> 0).
        price : Price
            The order limit price.
        trigger : Price
            The order stop trigger price.
        time_in_force : TimeInForce (Enum)
            The order time-in-force.
        expire_time : datetime, optional
            The order expiry time.
        init_id : UUID
            The order initialization event identifier.
        timestamp : datetime
            The order initialization timestamp.
        post_only : bool, optional
            If the order will only make a market (once triggered).
        reduce_only : bool, optional
            If the order will only reduce an open position (once triggered).
        hidden : bool, optional
            If the order will be hidden from the public book (once triggered).


        Raises
        ------
        ValueError
            If quantity is not positive (> 0).
        ValueError
            If order_side is UNDEFINED.
        ValueError
            If time_in_force is UNDEFINED.
        ValueError
            If time_in_force is GTD and the expire_time is None.

        """
        if post_only:
            Condition.false(hidden, "A post-only order is not hidden")
        if hidden:
            Condition.false(post_only, "A hidden order is not post-only")
        super().__init__(
            cl_ord_id,
            strategy_id,
            instrument_id,
            order_side,
            OrderType.STOP_LIMIT,
            quantity,
            price,
            time_in_force,
            expire_time,
            init_id,
            timestamp,
            options={
                TRIGGER: str(trigger),
                POST_ONLY: post_only,
                REDUCE_ONLY: reduce_only,
                HIDDEN: hidden,
            },
        )

        self.trigger = trigger
        self.is_triggered = False
        self.is_post_only = post_only
        self.is_reduce_only = reduce_only
        self.is_hidden = hidden

    def __repr__(self) -> str:
        cdef str id_string = f"id={self.id.value}, " if self.id.not_null() else ""
        return (f"{type(self).__name__}("
                f"cl_ord_id={self.cl_ord_id.value}, "
                f"{id_string}"
                f"state={self._fsm.state_string_c()}, "
                f"trigger={self.trigger}, "
                f"{self.status_string_c()})")

    @staticmethod
    cdef StopLimitOrder create(OrderInitialized event):
        """
        Return a stop-limit order from the given initialized event.

        Parameters
        ----------
        event : OrderInitialized
            The event to initialize with.

        Returns
        -------
        StopLimitOrder

        Raises
        ------
        ValueError
            If event.order_type is not equal to STOP_LIMIT.

        """
        Condition.not_none(event, "event")
        Condition.equal(event.order_type, OrderType.STOP_LIMIT, "event.order_type", "OrderType")

        return StopLimitOrder(
            cl_ord_id=event.cl_ord_id,
            strategy_id=event.strategy_id,
            instrument_id=event.instrument_id,
            order_side=event.order_side,
            quantity=event.quantity,
            price=Price(event.options[PRICE]),
            trigger=Price(event.options[TRIGGER]),
            time_in_force=event.time_in_force,
            expire_time=event.options.get(EXPIRE_TIME),
            init_id=event.id,
            timestamp=event.timestamp,
            post_only=event.options[POST_ONLY],
            reduce_only=event.options[REDUCE_ONLY],
            hidden=event.options[HIDDEN],
        )

    cdef void _amended(self, OrderAmended event) except *:
        self.id = event.order_id
        self.quantity = event.quantity
        if self.is_triggered:
            self.price = event.price
        else:
            self.trigger = event.price

    cdef void _triggered(self, OrderTriggered event) except *:
        self.is_triggered = True