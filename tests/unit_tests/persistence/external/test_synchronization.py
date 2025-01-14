import logging
import os
import time

import dask
import pytest
from dask import compute
from dask import delayed
from distributed import Client

from nautilus_trader.persistence.external.synchronization import named_lock
from tests.test_kit import PACKAGE_ROOT


logger = logging.getLogger()

TEST_DATA = PACKAGE_ROOT + "/data"


@delayed
def _run():
    with named_lock("test.file"):
        with open("test.file", "ab") as f:
            f.write(b"hello")
            time.sleep(0.1)


@pytest.mark.parametrize("scheduler", ("sync", Client()))
def test_named_lock_sync(scheduler):
    if os.path.exists("test.file"):
        os.unlink("test.file")
    tasks = (_run(), _run(), _run())
    with dask.config.set(scheduler=scheduler):
        compute(tasks)
    r = open("test.file", "rb").read()
    assert r == b"hellohellohello"
    os.unlink("test.file")
