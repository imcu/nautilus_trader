# -------------------------------------------------------------------------------------------------
#  Copyright (C) 2015-2020 Nautech Systems Pty Ltd. All rights reserved.
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

import asyncio

from nautilus_trader.common.clock cimport Clock
from nautilus_trader.common.messages cimport DataRequest
from nautilus_trader.common.messages cimport DataResponse
from nautilus_trader.common.logging cimport Logger
from nautilus_trader.common.uuid cimport UUIDFactory
from nautilus_trader.core.constants cimport *  # str constants only
from nautilus_trader.core.correctness cimport Condition
from nautilus_trader.core.message cimport Command
from nautilus_trader.core.message cimport Message
from nautilus_trader.core.message cimport MessageType
from nautilus_trader.data.engine cimport DataEngine
from nautilus_trader.trading.portfolio cimport Portfolio


cdef class LiveDataEngine(DataEngine):
    """
    Provides a high-performance asynchronous live data engine.
    """

    def __init__(
            self,
            Portfolio portfolio not None,
            Clock clock not None,
            UUIDFactory uuid_factory not None,
            Logger logger not None,
            dict config=None,
    ):
        """
        Initialize a new instance of the `DataEngine` class.

        Parameters
        ----------
        portfolio : int
            The portfolio to register.
        clock : Clock
            The clock for the component.
        uuid_factory : UUIDFactory
            The UUID factory for the component.
        logger : Logger
            The logger for the component.
        config : dict, option
            The configuration options.

        """
        super().__init__(
            portfolio,
            clock,
            uuid_factory,
            logger,
            config,
        )

        self._queue = asyncio.Queue()

    cpdef void on_start(self) except *:
        self._process_queue()

    async def _process_queue(self):
        while True:
            item = await self._queue.get()

            print(item)
            if isinstance(item, Message):
                self._process_message(item)
            else:
                self.process(item)  # Data

    cdef inline void _process_message(self, Message message) except *:
        if message.type == MessageType.COMMAND:
            self.execute(message)
        elif message.type == MessageType.REQUEST:
            self.send(message)
        elif message.type == MessageType.RESPONSE:
            self.receive(message)

    cpdef int queue_size(self) except *:
        """
        Return the number of messages in the internal queue.

        Returns
        -------
        int

        """
        return self._queue.qsize()

    cpdef void execute(self, Command command) except *:
        """
        Execute the given command.

        Parameters
        ----------
        command : Command
            The command to execute.

        """
        Condition.not_none(command, "command")

        self._queue.put_nowait(command)

    cpdef void process(self, data) except *:
        """
        Process the given data.

        Parameters
        ----------
        data : object
            The data to process.

        """
        Condition.not_none(data, "data")

        self._queue.put_nowait(data)

    cpdef void send(self, DataRequest request) except *:
        """
        Handle the given request.

        Parameters
        ----------
        request : DataRequest
            The request to handle.

        """
        Condition.not_none(request, "request")

        self._queue.put_nowait(request)

    cpdef void receive(self, DataResponse response) except *:
        """
        Handle the given response.

        Parameters
        ----------
        response : DataResponse
            The response to handle.

        """
        Condition.not_none(response, "response")

        self._queue.put_nowait(response)