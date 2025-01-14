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

import asyncio

import pytest

from nautilus_trader.network.http_client import HTTPClient
from tests.test_kit.stubs import TestStubs


@pytest.fixture()
async def client():
    client = HTTPClient(
        loop=asyncio.get_event_loop(),
        logger=TestStubs.logger(),
    )
    await client.connect()
    return client


@pytest.mark.skip(reason="WIP")
@pytest.mark.asyncio
async def test_client_get(client):
    resp = await client.get("https://httpbin.org/get")
    assert len(resp) > 100


@pytest.mark.skip(reason="WIP")
@pytest.mark.asyncio
async def test_client_post(client):
    resp = await client.get("https://httpbin.org/get")
    assert len(resp) > 100
