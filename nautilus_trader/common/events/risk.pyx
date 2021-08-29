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

from orjson import orjson

from libc.stdint cimport int64_t

from nautilus_trader.core.correctness cimport Condition
from nautilus_trader.core.message cimport Event
from nautilus_trader.core.uuid cimport UUID4
from nautilus_trader.model.c_enums.trading_state cimport TradingState
from nautilus_trader.model.c_enums.trading_state cimport TradingStateParser
from nautilus_trader.model.identifiers cimport TraderId


cdef class RiskEvent(Event):
    """
    The base class for all risk events.
    """

    def __init__(
        self,
        TraderId trader_id not None,
        UUID4 event_id not None,
        int64_t ts_event,
        int64_t ts_init,
    ):
        """
        Initialize a new instance of the ``RiskEvent`` class.

        Parameters
        ----------
        trader_id : TraderId
            The trader ID associated with the event.
        event_id : UUID4
            The event ID.
        ts_event : int64
            The UNIX timestamp (nanoseconds) when the component state event occurred.
        ts_init : int64
            The UNIX timestamp (nanoseconds) when the event object was initialized.

        """
        super().__init__(event_id, ts_event, ts_init)

        self.trader_id = trader_id


cdef class TradingStateChanged(RiskEvent):
    """
    Represents an event where trading state has changed at the `RiskEngine`.
    """

    def __init__(
        self,
        TraderId trader_id not None,
        TradingState state,
        dict config not None,
        UUID4 event_id not None,
        int64_t ts_event,
        int64_t ts_init,
    ):
        """
        Initialize a new instance of the ``RiskEvent`` class.

        Parameters
        ----------
        trader_id : TraderId
            The trader ID associated with the event.
        trader_id : TraderId
            The trading state for the event.
        event_id : UUID4
            The event ID.
        ts_event : int64
            The UNIX timestamp (nanoseconds) when the component state event occurred.
        ts_init : int64
            The UNIX timestamp (nanoseconds) when the event object was initialized.

        """
        super().__init__(trader_id, event_id, ts_event, ts_init)

        self.state = state
        self.config = config

    def __str__(self) -> str:
        return (f"{type(self).__name__}("
                f"trader_id={self.trader_id.value}, "
                f"state={TradingStateParser.to_str(self.state)}, "
                f"config={self.config}, "
                f"event_id={self.id})")

    def __repr__(self) -> str:
        return (f"{type(self).__name__}("
                f"trader_id={self.trader_id.value}, "
                f"state={TradingStateParser.to_str(self.state)}, "
                f"config={self.config}, "
                f"event_id={self.id}, "
                f"ts_init={self.ts_init})")

    @staticmethod
    cdef TradingStateChanged from_dict_c(dict values):
        Condition.not_none(values, "values")
        return TradingStateChanged(
            trader_id=TraderId(values["trader_id"]),
            state=TradingStateParser.from_str(values["state"]),
            config=orjson.loads(values["config"]),
            event_id=UUID4(values["event_id"]),
            ts_event=values["ts_event"],
            ts_init=values["ts_init"],
        )

    @staticmethod
    cdef dict to_dict_c(TradingStateChanged obj):
        Condition.not_none(obj, "obj")
        return {
            "type": "TradingStateChanged",
            "trader_id": obj.trader_id.value,
            "state": TradingStateParser.to_str(obj.state),
            "config": orjson.dumps(obj.config),
            "event_id": obj.id.value,
            "ts_event": obj.ts_event,
            "ts_init": obj.ts_init,
        }

    @staticmethod
    def from_dict(dict values) -> TradingStateChanged:
        """
        Return a trading state changed event from the given dict values.

        Parameters
        ----------
        values : dict[str, object]
            The values for initialization.

        Returns
        -------
        AccountState

        """
        return TradingStateChanged.from_dict_c(values)

    @staticmethod
    def to_dict(TradingStateChanged obj):
        """
        Return a dictionary representation of this object.

        Returns
        -------
        dict[str, object]

        """
        return TradingStateChanged.to_dict_c(obj)