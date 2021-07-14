window.BENCHMARK_DATA = {
  "lastUpdate": 1626303194204,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "9fe0ca206ed90e9322c4c6baa3eb0c97b9d32309",
          "message": "Fix pre-commit",
          "timestamp": "2021-07-08T08:46:18+10:00",
          "tree_id": "2b51bf4de43b4bf5648a3abebeb29ada147d33fa",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9fe0ca206ed90e9322c4c6baa3eb0c97b9d32309"
        },
        "date": 1625698852286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 8457650.934789743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.23614000036287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7818324.651879721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.90463999976963 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7782060.591563514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.50067000044874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9406672.265520388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.30751999997301 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 235.11592743481424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.25322099999903 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 13048701.145299371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.6359800002192 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 13058074.349298082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.58096999989539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6966676.85195113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.54045999994014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12685348.80274789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.83109999966109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3506647.2697100244,
            "unit": "iter/sec",
            "range": "stddev: 2.03278076667384e-7",
            "extra": "mean: 285.17268008044994 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1166369.4846986094,
            "unit": "iter/sec",
            "range": "stddev: 3.417171094088264e-7",
            "extra": "mean: 857.3612505460915 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 890312.8670698358,
            "unit": "iter/sec",
            "range": "stddev: 4.4608136438753325e-7",
            "extra": "mean: 1.1232006601130706 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 846864.5421507725,
            "unit": "iter/sec",
            "range": "stddev: 4.0560402025518265e-7",
            "extra": "mean: 1.1808263898501536 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4568249.488186393,
            "unit": "iter/sec",
            "range": "stddev: 1.9642392096034223e-7",
            "extra": "mean: 218.90222996489683 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1523767.5431444633,
            "unit": "iter/sec",
            "range": "stddev: 3.080196128854393e-7",
            "extra": "mean: 656.2680800618637 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3107515.756868171,
            "unit": "iter/sec",
            "range": "stddev: 1.9376362862522743e-7",
            "extra": "mean: 321.80045999439244 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5199618.826058927,
            "unit": "iter/sec",
            "range": "stddev: 1.691372903809915e-7",
            "extra": "mean: 192.32179001051009 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1682909.2935132755,
            "unit": "iter/sec",
            "range": "stddev: 3.186709714420076e-7",
            "extra": "mean: 594.2090900884978 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 925613.5656536183,
            "unit": "iter/sec",
            "range": "stddev: 4.434591373458956e-7",
            "extra": "mean: 1.080364459971861 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 1040401.3429505795,
            "unit": "iter/sec",
            "range": "stddev: 4.501505102959224e-7",
            "extra": "mean: 961.1675405608366 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8551755.13654796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.9350600002872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 5111425.4978488535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 195.64014000025054 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9429647.755463868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.04850000049737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 13967707.498215046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.59371000057035 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5956930.203269492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.87169999929574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6161451.470376691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.2994199999539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 180585.69756590403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.537537099996825 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53248.83467453179,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.77975370000513 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2532527.273799037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.8624800000289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1420544.3383838658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 703.9555000005748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 1837666.765976052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 544.1682999958175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 22353.127351721985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.736469500003295 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2491579.7063827193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 401.3517999999294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2018996.0065863836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 495.2956800002539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8436885.55742136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.52715000031822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 3054983.874724425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 327.3339700001543 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2904757.222570327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 344.26284999995005 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 398770.3485630094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.507709019999993 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 82640.41138921706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.10061740000583 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 71104.9464070715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.063719199998559 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 13503506.320341919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.05484000059914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5734634.162466836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.37903999962145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 115576.8917690259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.652248599992163 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 117566.14551447805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.505850010000131 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "62c12816bb094c6362861e1fff7336f83a8cfb4f",
          "message": "Initial commit backtest config",
          "timestamp": "2021-07-06T04:42:24Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/361/commits/62c12816bb094c6362861e1fff7336f83a8cfb4f"
        },
        "date": 1625700921995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5634488.79604266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.47839000094245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5355169.572795934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.73544999955993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5357550.8920554975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.6524499996558 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6066772.475238069,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.83228999959465 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.47509090595935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.079947999978685 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9023979.05855601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.81586000045718 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 8846591.956547186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.03788000077475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4499220.352610074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.2607299995616 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8233370.608490552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.45694000082585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2524998.367619167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039317961770855175",
            "extra": "mean: 396.03985999519864 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 818189.812834843,
            "unit": "iter/sec",
            "range": "stddev: 0.000005975699001192459",
            "extra": "mean: 1.2222102797090884 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 608639.3628962459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033099204844733153",
            "extra": "mean: 1.6430090805192776 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 561123.7267179628,
            "unit": "iter/sec",
            "range": "stddev: 0.000007506060863747252",
            "extra": "mean: 1.7821381495468813 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3125151.9565603407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011502014345601127",
            "extra": "mean: 319.98444040482354 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1028826.8539693496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041829494517595905",
            "extra": "mean: 971.980849976717 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2099958.4859233075,
            "unit": "iter/sec",
            "range": "stddev: 0.000003692737351609125",
            "extra": "mean: 476.1998899994069 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3288949.823956471,
            "unit": "iter/sec",
            "range": "stddev: 0.000004095306555950319",
            "extra": "mean: 304.0484207804184 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1165288.317057351,
            "unit": "iter/sec",
            "range": "stddev: 0.000002237772701729669",
            "extra": "mean: 858.1567199826168 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 629729.4413065219,
            "unit": "iter/sec",
            "range": "stddev: 0.000023441831291155573",
            "extra": "mean: 1.5879835599321268 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 691301.2556851994,
            "unit": "iter/sec",
            "range": "stddev: 0.000002353765457669773",
            "extra": "mean: 1.4465473507766546 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5414933.3465287555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.6744799991029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3372824.839952534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 296.4873800010537 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 5878881.980139253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.10036999863587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9409032.765538558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.28085000007559 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4073950.8445948674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.4619700006333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4212017.636079335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 237.41590999861728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 118698.76479103169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.424687499996253 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34799.796163675484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.73580049999873 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1787714.3230356127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.3734900003255 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1021182.5426591075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 979.2568500006383 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 1255340.8476283879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 796.5964000050008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14559.931713218408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.68164080001407 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1632293.5302564325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 612.6349099986328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1519811.6260377986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 657.976279999275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5852149.995091934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.87736999883418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2050655.6653630421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 487.64891000018906 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2185679.267698862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.5236699997731 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 268116.71910125576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.729718919998959 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 40416.40472119694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.742428400008976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 36015.82473392754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.765572699991026 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9171461.200793132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.03388000087944 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3929581.274848889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.48003999827048 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 79804.63569800254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.530600400009462 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 84164.77406111176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.881455289999394 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "b80a26b12c2b7a75e69563c2be968aba6cc9d534",
          "message": "Initial commit backtest config",
          "timestamp": "2021-07-06T04:42:24Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/361/commits/b80a26b12c2b7a75e69563c2be968aba6cc9d534"
        },
        "date": 1625701563554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11487228.499367582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.05319999990024 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11957122.714323489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.63216000134344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5707585.661000195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.20543000046018 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9878065.163480649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.23440000143091 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2218543.6292043193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017275787842423508",
            "extra": "mean: 450.7461502385013 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 836217.5731752599,
            "unit": "iter/sec",
            "range": "stddev: 0.000001853344086957262",
            "extra": "mean: 1.195861020000848 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 652033.011637162,
            "unit": "iter/sec",
            "range": "stddev: 0.000002292149101871541",
            "extra": "mean: 1.533664679782305 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 636014.5597525046,
            "unit": "iter/sec",
            "range": "stddev: 0.000002537569562404132",
            "extra": "mean: 1.5722910500494436 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3502910.7641532915,
            "unit": "iter/sec",
            "range": "stddev: 9.49537907127249e-7",
            "extra": "mean: 285.47686976025943 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1301350.3917105407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012067692567613392",
            "extra": "mean: 768.4325500417799 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2137900.938142895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027186119272124882",
            "extra": "mean: 467.74852012958945 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4828291.932045486,
            "unit": "iter/sec",
            "range": "stddev: 4.555108771527877e-7",
            "extra": "mean: 207.11258019900924 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1614127.6480436819,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026494654956879433",
            "extra": "mean: 619.5296891246471 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 863396.4747661485,
            "unit": "iter/sec",
            "range": "stddev: 0.000003296858890187119",
            "extra": "mean: 1.1582164500623549 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 884239.8310328829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015333553892606336",
            "extra": "mean: 1.1309148998998353 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7445464.208370312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.30995999897277 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4289200.915860382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.14366000022346 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8244440.402857213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.293859999696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12464232.327162007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.22957000093811 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5841011.635184335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.2032199998248 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5470929.396012054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 182.78430000009394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 145016.4586431129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.895768999993379 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36924.74151316163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.082112399989455 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1965008.6585147881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 508.9036100002886 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1131976.8658333167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 883.4102800005894 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 612178.083096493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6335115999936534 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 19361.533603220243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.648801200008165 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2091399.8188654403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 478.1486499996391 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1936677.9516250845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.3481099998535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7593616.380786078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.68956000072285 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2450290.7674311306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.11482999970394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2138015.118929295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 467.7235400004065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 323321.7194016817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.092894599999454 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 46407.42704465338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.54827499998646 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38405.39538654846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.038008200021068 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9929383.219450705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.71119000031103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5017351.25498551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 199.30834999968283 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 90024.5465430456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.108081499992295 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91330.01784301967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.949302579999767 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7060353.881823217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.6359600011674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7237673.771123808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.165939999908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7337730.4926990885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.28192000169292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8418585.542966653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.78479999950287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 193.53458995770333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.1670349998858 msec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "322429ac7e842165a7d3b0b7cacbc52463a4242b",
          "message": "Initial commit backtest config",
          "timestamp": "2021-07-06T04:42:24Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/361/commits/322429ac7e842165a7d3b0b7cacbc52463a4242b"
        },
        "date": 1625704877234,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7443700.132326231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.34179000000768 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6835085.450510772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.30395000040153 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6955751.888621473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.76590999972905 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7955912.786652043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.69267999992915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 192.47540501155058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.19546900000023 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11781875.540351838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.8761299994294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11625453.465317206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.01815000019997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6063318.017430812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.92619999894487 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10734076.6680794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.16125000054853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3063220.678283939,
            "unit": "iter/sec",
            "range": "stddev: 1.610698332638223e-7",
            "extra": "mean: 326.45378998950036 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1048094.15881724,
            "unit": "iter/sec",
            "range": "stddev: 8.903817327563139e-8",
            "extra": "mean: 954.1127498778222 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 785368.4352671613,
            "unit": "iter/sec",
            "range": "stddev: 1.6727565186849861e-7",
            "extra": "mean: 1.273287739988973 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 797199.1587300176,
            "unit": "iter/sec",
            "range": "stddev: 1.3797047892795704e-7",
            "extra": "mean: 1.2543916900176555 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4188405.540439257,
            "unit": "iter/sec",
            "range": "stddev: 5.1928541835448704e-8",
            "extra": "mean: 238.75433989019257 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1399003.724566389,
            "unit": "iter/sec",
            "range": "stddev: 1.0367177609776159e-7",
            "extra": "mean: 714.7943800578105 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2847471.298875659,
            "unit": "iter/sec",
            "range": "stddev: 8.276909494741129e-8",
            "extra": "mean: 351.18878999583103 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4527529.8487226665,
            "unit": "iter/sec",
            "range": "stddev: 5.864502681142281e-8",
            "extra": "mean: 220.87099001282695 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1568670.3649656628,
            "unit": "iter/sec",
            "range": "stddev: 1.0590510119325148e-7",
            "extra": "mean: 637.4825599652922 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 864207.4693677488,
            "unit": "iter/sec",
            "range": "stddev: 1.1781602975018323e-7",
            "extra": "mean: 1.157129549842466 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 916594.8880941545,
            "unit": "iter/sec",
            "range": "stddev: 2.5912454369340555e-7",
            "extra": "mean: 1.090994520031927 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7568775.953318677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.12176000024556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4543720.909380863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.0839400006771 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8420302.42696117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.76057999984369 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11985362.037606096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.43511000020953 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5559960.27961731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.8574000008557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5688918.339769922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.78034000052867 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 167783.56269397543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.960059400001683 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54299.795851775925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.416275499998846 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2301958.0063510747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.4127899992145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1278801.1270109357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 781.9824200009862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 273644.3270094692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6543787000027805 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 20183.66709159524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.545010600002115 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2317326.593000401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 431.5317500004312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1910606.6141624288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 523.3939799995824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7531437.916425882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.7767700001914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2674919.828639904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 373.8429800000631 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2661705.1772306077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.6990100009716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 349457.5187470996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8615781500002413 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71423.33354739945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.001026699997965 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63262.66823699567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.807110700006886 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11676494.772331417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.64213999989079 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5217775.604843593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.65255000075376 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 104862.94570288823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.536257000002024 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 108498.87154446144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.216685720000442 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "d78c041adc5d24e8a16d5b9c18c7655c078ef015",
          "message": "Build out `MessageBus`",
          "timestamp": "2021-07-08T10:29:41+10:00",
          "tree_id": "eec305728d67302e2496f334359994bc9e9a3d00",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d78c041adc5d24e8a16d5b9c18c7655c078ef015"
        },
        "date": 1625705225807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7262606.632299573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.69161000027452 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7235439.239277893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.2086099999924 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6706065.247035805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.11874000063108 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8223723.435496363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.59942000039335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.14251257946327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.124459999933606 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11710973.181814365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.39000000041597 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11718933.10834626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.33199999988028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6047999.829715429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.34391999925901 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10745284.324471552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.0640800004312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2675552.567369011,
            "unit": "iter/sec",
            "range": "stddev: 1.155372731875923e-7",
            "extra": "mean: 373.7545702506395 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 938902.8677213254,
            "unit": "iter/sec",
            "range": "stddev: 1.2967325375608346e-7",
            "extra": "mean: 1.0650728998484738 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 731797.2835380584,
            "unit": "iter/sec",
            "range": "stddev: 1.6099495122267737e-7",
            "extra": "mean: 1.3664986499611587 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 750107.0215240764,
            "unit": "iter/sec",
            "range": "stddev: 1.2968842377296928e-7",
            "extra": "mean: 1.3331430999915028 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3947949.5988366185,
            "unit": "iter/sec",
            "range": "stddev: 9.95262488274743e-8",
            "extra": "mean: 253.29604012540582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1312423.194267727,
            "unit": "iter/sec",
            "range": "stddev: 1.1757271622945031e-7",
            "extra": "mean: 761.9493501545094 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2590813.0498045674,
            "unit": "iter/sec",
            "range": "stddev: 8.830177187189573e-8",
            "extra": "mean: 385.9792199500589 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4375890.954307271,
            "unit": "iter/sec",
            "range": "stddev: 7.603309378106317e-8",
            "extra": "mean: 228.52489023193812 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1613932.3679442788,
            "unit": "iter/sec",
            "range": "stddev: 8.769854195109178e-8",
            "extra": "mean: 619.6046500224384 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 832541.3020336592,
            "unit": "iter/sec",
            "range": "stddev: 1.1394093286194474e-7",
            "extra": "mean: 1.201141610100649 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 917441.309779855,
            "unit": "iter/sec",
            "range": "stddev: 2.461688068930112e-7",
            "extra": "mean: 1.089987979983107 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7396352.326118807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.20178000021588 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4515449.384284138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 221.46190000057686 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8372855.3035353515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.4335700006377 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12002627.615133224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.31509000072401 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5566925.692003447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.6323600001415 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5695853.606559027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.56630999933986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 166679.48154092222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.99953869999581 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53467.68550767375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.70288549999941 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2230286.4921239573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.37288999929115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1200365.0117949883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 833.0799299994851 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 602532.3954557212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.6596617999994123 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 18993.059765024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.650811000000886 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2341461.952647818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.08360000005996 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1915610.2794330376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 522.0268499999747 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7555282.188645361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.35773000019435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2694815.8507003095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 371.08287000023665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2701812.8569893516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.12185999969915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 344129.5798735015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.905882139999676 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71780.43501927247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.931372800004738 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62985.109740617976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.876768399994036 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11638851.557229122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.91913000032037 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5233587.847943314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.07351000002382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 103954.46636360997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.619596300001376 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106439.36543017879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.395020309999609 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "f7edbe4635133381741b1f55dfeecb01b34f8863",
          "message": "Initial commit backtest config",
          "timestamp": "2021-07-06T04:42:24Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/361/commits/f7edbe4635133381741b1f55dfeecb01b34f8863"
        },
        "date": 1625707937180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7498996.259358377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.35117999986323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6728469.452778234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.6222100015766 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7188804.386043359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.1051900009188 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8224551.981823916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.5871700014759 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 213.82566835821686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.676707000044189 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12251732.425865158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.6211099981956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12396626.084879916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.66710999855786 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6208741.746940512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.06323000030898 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11081667.12161267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.23912999964523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3035357.8197785863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052573945339731835",
            "extra": "mean: 329.4504501195661 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1160154.4759424531,
            "unit": "iter/sec",
            "range": "stddev: 0.000001505398157198563",
            "extra": "mean: 861.9541800135266 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 819127.867735012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022405985939724947",
            "extra": "mean: 1.2208106199159374 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 849056.0327061262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011471988529090877",
            "extra": "mean: 1.1777785699405285 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3966374.0214091223,
            "unit": "iter/sec",
            "range": "stddev: 8.900777812742039e-7",
            "extra": "mean: 252.11944072907497 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1187890.718578713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017068916638075498",
            "extra": "mean: 841.8282796219501 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2498990.4089086414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013835371827104662",
            "extra": "mean: 400.1615998345187 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4445327.980810071,
            "unit": "iter/sec",
            "range": "stddev: 9.79667810559673e-7",
            "extra": "mean: 224.95527986166053 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1216001.8797934337,
            "unit": "iter/sec",
            "range": "stddev: 0.000002957903999993058",
            "extra": "mean: 822.367149769434 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 609672.762087103,
            "unit": "iter/sec",
            "range": "stddev: 0.000006677480176618774",
            "extra": "mean: 1.6402241697278441 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 807136.4881214589,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026546025431781166",
            "extra": "mean: 1.2389478294153378 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6717305.747790284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.86920999970243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4131918.267021295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.01833999995873 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7530790.200483778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.78819000106523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11855909.909977697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.34612000201014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5076006.3423836455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.00526999940848 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5198281.427367881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.3712699999669 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 147574.04357929254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.7762593999987075 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34937.40289977136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.622619800012217 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2211329.5568152093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 452.2166299989294 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1263490.7647037792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 791.4580999999998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 349498.330097458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.861243999996077 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 13375.554787916879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.76325400000405 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2171747.716580686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.45864000006986 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1489675.935001619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 671.2869400007548 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6566841.051331003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.28021999973862 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2278337.1082675066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.9166100008879 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2236097.855398937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 447.20761999997194 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 288514.37376583775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.466031820000808 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 52190.7413353386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.160486600003424 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 40074.08142780745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.9537847000056 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11854224.804192975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.3581100002666 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5204368.526155053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.14626999882967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 99974.16767486006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.002583899995443 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86584.26938742668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.549442030000137 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "7a8b1d85c3ede9a59c3696e895b2ae9e96e5a3c7",
          "message": "Start integrating mypy",
          "timestamp": "2021-07-08T14:48:02+10:00",
          "tree_id": "d6f3b941d5d017c000b17892d8183a4e75439d1c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/7a8b1d85c3ede9a59c3696e895b2ae9e96e5a3c7"
        },
        "date": 1625720695797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11797451.443611221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.76407000102881 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11735012.1597397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.2150800005802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5665746.776016518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.49924000011197 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10809972.891847042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.50716999986253 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2924018.5028353073,
            "unit": "iter/sec",
            "range": "stddev: 9.25968110720273e-8",
            "extra": "mean: 341.99509990457955 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1022357.6113523521,
            "unit": "iter/sec",
            "range": "stddev: 9.216945337682591e-8",
            "extra": "mean: 978.1313200937802 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 794340.3503959735,
            "unit": "iter/sec",
            "range": "stddev: 1.8847021986899425e-7",
            "extra": "mean: 1.2589062100414594 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 786518.481721216,
            "unit": "iter/sec",
            "range": "stddev: 1.3306260976062793e-7",
            "extra": "mean: 1.271425940063864 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4326216.631900103,
            "unit": "iter/sec",
            "range": "stddev: 7.178030023976647e-8",
            "extra": "mean: 231.14885015843356 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1371906.9107012635,
            "unit": "iter/sec",
            "range": "stddev: 1.2057611785606733e-7",
            "extra": "mean: 728.912429990487 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2769647.631546873,
            "unit": "iter/sec",
            "range": "stddev: 6.568200613596504e-8",
            "extra": "mean: 361.0567599321257 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4796680.928573133,
            "unit": "iter/sec",
            "range": "stddev: 5.5443948332631824e-8",
            "extra": "mean: 208.4774899333297 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1611770.748318552,
            "unit": "iter/sec",
            "range": "stddev: 7.409378913252048e-8",
            "extra": "mean: 620.4356302180258 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 847452.6716993286,
            "unit": "iter/sec",
            "range": "stddev: 1.932712767118197e-7",
            "extra": "mean: 1.1800068999662017 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 909474.8148705801,
            "unit": "iter/sec",
            "range": "stddev: 2.471723225480426e-7",
            "extra": "mean: 1.0995356700914272 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7522151.419596009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.94068999925912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4525013.823920096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.99379999986013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8328507.657210331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.06952999968235 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12057919.00808823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.93305000051987 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4567342.49634165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.9456999997219 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4462159.415651305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.10673999956998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 163648.51081886448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.110657500005345 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 49293.99246179125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.28644769999346 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2297285.3576225583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.2963799999543 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1271678.7527864387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 786.3621199999216 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 623393.786946567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.604122499998084 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 27607.36998287806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.22221169999875 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2337200.37938288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 427.8623300001527 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1869084.9535743995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 535.0211600000421 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7517438.20139525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.02404000000934 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2590197.1399019267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 386.07100000035643 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2704838.2821840732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 369.70786999972916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 348145.0071580931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8723663400000987 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 72729.66936817892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.749546900010046 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 63195.172571330106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.823993499998325 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11751618.726771161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.0946599996405 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5274081.349973118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.6064799996111 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 104146.65098208579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.60184500000878 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105727.14559096443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.458308879999322 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7479165.289266416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.70475999977316 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7302479.432759114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.93978999981482 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7504197.097398764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.25876000067183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9088874.009336071,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.02463000068019 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 199.7830755368436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.005428999993455 msec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "596f9d4d82bf18039e977142a4bc8ac1afe8400b",
          "message": "Improve `MessageBus` and add test",
          "timestamp": "2021-07-08T15:30:28+10:00",
          "tree_id": "f14162f834873d0c3012f609e167c7831f77fbbd",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/596f9d4d82bf18039e977142a4bc8ac1afe8400b"
        },
        "date": 1625723675586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2597301147494437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8501503799999455 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3381995395031865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9568343039999263 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1029875145411171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.709914881000032 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7217390.099365371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.5542399998485 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7154906.516479808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.7642300003099 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7501407.826671279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.30831000075705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9387322.327365741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.52664999952322 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 171.87369483489948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.818225999973947 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12393112.502942065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.68997999998828 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12236912.499731446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.71995999987303 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6192105.746304449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.49595000001682 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10665776.998647295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.75782000006438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2965321.952845527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011531258725657819",
            "extra": "mean: 337.2315100693868 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1036401.251468694,
            "unit": "iter/sec",
            "range": "stddev: 0.000004607835206255501",
            "extra": "mean: 964.8772602145073 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 871814.9625438597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020939445683341205",
            "extra": "mean: 1.1470323898572587 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 856125.3593397847,
            "unit": "iter/sec",
            "range": "stddev: 0.000002010084088174516",
            "extra": "mean: 1.1680532402067456 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4385503.666526909,
            "unit": "iter/sec",
            "range": "stddev: 4.999791467262575e-7",
            "extra": "mean: 228.02397992109036 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1464141.340951786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010636175483142564",
            "extra": "mean: 682.994170050506 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2915022.884288969,
            "unit": "iter/sec",
            "range": "stddev: 0.000001111646518659213",
            "extra": "mean: 343.0504801144707 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4314954.757530905,
            "unit": "iter/sec",
            "range": "stddev: 8.857489870544458e-7",
            "extra": "mean: 231.75214021762258 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1675706.2364820333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015921721207074735",
            "extra": "mean: 596.7633098384795 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 819123.7950732191,
            "unit": "iter/sec",
            "range": "stddev: 0.000007856136447206453",
            "extra": "mean: 1.220816689753974 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 972886.5372915682,
            "unit": "iter/sec",
            "range": "stddev: 0.000001318893826482855",
            "extra": "mean: 1.0278690902475773 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7739856.009244395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.20137000037357 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4610052.911886036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.91724999982398 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8586674.58007633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.4595200009444 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12142413.511145098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.35594999973728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5313563.758850722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 188.19761000031576 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5849737.557395738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.94783999937135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 159215.3612253571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2808010000026115 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37894.43569702231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.38909859999785 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2231692.6330836583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.0903799992575 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1260115.5301641626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 793.5780299999351 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 48842.23630444488,
            "unit": "iter/sec",
            "range": "stddev: 0.0000974188459488856",
            "extra": "mean: 20.47408299994231 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14548.250602824271,
            "unit": "iter/sec",
            "range": "stddev: 0.000129397178520119",
            "extra": "mean: 68.73678680004787 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.5245011323529023,
            "unit": "iter/sec",
            "range": "stddev: 0.4126224606814408",
            "extra": "mean: 396.117865500014 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2225370.577616789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.3633599986424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1860568.0965555871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 537.4702500012063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7261464.345402328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.71327000085876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2580737.5350406608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 387.486130000525 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2597003.4683196577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 385.0591700006589 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 355120.1132702492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.815948639999988 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 50510.78705083298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.797751300006894 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38601.96841397514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.905414699991525 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6294876201085127,
            "unit": "iter/sec",
            "range": "stddev: 0.009954205025380594",
            "extra": "mean: 275.5209838600035 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10349208.156218432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.62574999993012 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4658221.404447111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 214.67420999897513 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 93292.10195595388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.719020999999884 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 104381.65187799117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.580227769999965 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "c84eb822dd0f2836da4293fac737c5c0d04a548c",
          "message": "Add tests",
          "timestamp": "2021-07-08T16:20:22+10:00",
          "tree_id": "0a94d14424ff9ccfd5e42c7a7fd575491d6dd90c",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/c84eb822dd0f2836da4293fac737c5c0d04a548c"
        },
        "date": 1625726399018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.26412548187917345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7860792260000835 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.32025701727320016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.122492080000029 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09828776999071202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.174205804999929 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6204619.028603125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.1702500008505 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5825711.94280326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.6528399992967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5784429.022713612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.87791000171637 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7033330.602121216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.1801499986941 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 180.13087948909322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.551519000164262 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10279332.641059248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.28257999995549 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9781973.505484449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.22885999837672 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4953300.775624291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.88557999972545 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9162941.472838154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.13525999967533 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2666882.506005605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013468041805993466",
            "extra": "mean: 374.96965004947924 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 819375.6114245763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032496068229271895",
            "extra": "mean: 1.2204414996699597 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 668458.2863178038,
            "unit": "iter/sec",
            "range": "stddev: 0.00000244568581959113",
            "extra": "mean: 1.4959796601647213 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 633696.6069059017,
            "unit": "iter/sec",
            "range": "stddev: 0.000006464047978969521",
            "extra": "mean: 1.578042219418876 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3760976.8302743845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012744314162878344",
            "extra": "mean: 265.88837026338297 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1110131.7278395302,
            "unit": "iter/sec",
            "range": "stddev: 0.000009989495510967167",
            "extra": "mean: 900.7940003175463 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2482316.471627788,
            "unit": "iter/sec",
            "range": "stddev: 0.000002494673782815364",
            "extra": "mean: 402.8495203692728 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3978726.0701054055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013842243364386428",
            "extra": "mean: 251.33672999345436 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1294055.1541420373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023082232590906604",
            "extra": "mean: 772.7645895147361 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 743877.2415194666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047803828117212905",
            "extra": "mean: 1.3443078295517807 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 750694.8151371211,
            "unit": "iter/sec",
            "range": "stddev: 0.000003000537956588937",
            "extra": "mean: 1.3320992497028783 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6620218.3322005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.05241999890495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 2832229.915438362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 353.0786800001806 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 5559260.802872123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.88003000027675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9102401.286315791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.86111999955028 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4334129.108293296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 230.72686000205067 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4322232.830891506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.36190000059287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 127521.6253723117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.841807199997675 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 37510.14217980902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.659456399988812 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1889118.1711670754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 529.347509998388 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1113140.6262063598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 898.3590899993033 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 42787.53407917764,
            "unit": "iter/sec",
            "range": "stddev: 0.0001081425322993374",
            "extra": "mean: 23.371293100217372 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12939.270590611271,
            "unit": "iter/sec",
            "range": "stddev: 0.00015619686322141516",
            "extra": "mean: 77.28410910006005 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.1299533048676413,
            "unit": "iter/sec",
            "range": "stddev: 0.4847984516026629",
            "extra": "mean: 469.4938605999823 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1909336.4202437566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 523.7421700007872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1679943.0042378563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.258289999947 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5977513.550440811,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.2936399995706 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2217285.116636032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.00198999989516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2187100.5944144595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 457.2263400018528 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 311854.4865510222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.206623739999941 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44873.950173370205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.284643900002266 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35392.16906992175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.254837899999075 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.141927053551011,
            "unit": "iter/sec",
            "range": "stddev: 0.0038464288508836607",
            "extra": "mean: 318.2760079900004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10369730.673108993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.43452000091202 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4170876.993231326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.75772999847322 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 84459.18482437967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.840038500008632 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92249.12586388193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.840211120000731 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c9b5e6e9050d115773893438045afecdb38c9f2",
          "message": "Convert unittest tests to pytest (tests/unit_tests/indicators)",
          "timestamp": "2021-07-09T06:08:45+10:00",
          "tree_id": "9d29a0eb1dc1c469acb7b413a67d4811b188a1cc",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/4c9b5e6e9050d115773893438045afecdb38c9f2"
        },
        "date": 1625776007413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.290516307958929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.442147557999988 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4040779511268817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4747700220000297 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.12367536966606722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.08568434200015 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5764752.332750981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.46798999824387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5562833.596144538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.76450000105615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6462558.392456088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.73747999976695 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8148571.270173941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.7209000012408 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 188.1174131077632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.315828999982841 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10625232.227731736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.11559000000125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11488571.972710134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.0430200006922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5797003.656350132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.502909999821 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9547592.121155528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.7384499997861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2955557.8613955574,
            "unit": "iter/sec",
            "range": "stddev: 9.004982785880919e-7",
            "extra": "mean: 338.34560069408326 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 827106.1748497388,
            "unit": "iter/sec",
            "range": "stddev: 0.000001003031780902553",
            "extra": "mean: 1.2090346202307956 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 637872.6976204328,
            "unit": "iter/sec",
            "range": "stddev: 0.000007343782659592246",
            "extra": "mean: 1.5677109299872427 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 609549.1853731241,
            "unit": "iter/sec",
            "range": "stddev: 0.000014916595469778867",
            "extra": "mean: 1.6405566999287657 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3218851.6581513765,
            "unit": "iter/sec",
            "range": "stddev: 0.000014732007549436324",
            "extra": "mean: 310.66979973047637 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1117104.6129602587,
            "unit": "iter/sec",
            "range": "stddev: 0.000020708350041487904",
            "extra": "mean: 895.1713101873793 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2506583.4814676074,
            "unit": "iter/sec",
            "range": "stddev: 6.797651439564871e-7",
            "extra": "mean: 398.94940958220104 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4362536.177537738,
            "unit": "iter/sec",
            "range": "stddev: 3.986379893110779e-7",
            "extra": "mean: 229.22446010852582 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1450264.800662582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013369631225554149",
            "extra": "mean: 689.5292497915761 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 775409.296136927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015060370600529953",
            "extra": "mean: 1.2896414899614683 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 748477.8336608774,
            "unit": "iter/sec",
            "range": "stddev: 0.000001369124930948508",
            "extra": "mean: 1.3360449101196537 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7833657.607617322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.65428999955476 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4384476.690132251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.0773899997257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8183918.845007452,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 122.19084999969711 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11972932.074014777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.52173000048424 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5099678.052225225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.09080999998696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5038925.44714212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.45500999963406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 150635.86259706877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.638525399989703 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 49871.811739325974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.051407100004326 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2149924.9751394754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 465.13251000078526 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1143176.5137147782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 874.7555499985538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 75125.75958199841,
            "unit": "iter/sec",
            "range": "stddev: 0.00005388946096210576",
            "extra": "mean: 13.31101350008339 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17159.010262531665,
            "unit": "iter/sec",
            "range": "stddev: 0.00015225899075718263",
            "extra": "mean: 58.27841959996931 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.6412081521453765,
            "unit": "iter/sec",
            "range": "stddev: 0.40136766771213195",
            "extra": "mean: 378.61461210004563 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1893937.4569562953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 528.0005400004484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1519336.5276183307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 658.1820299993524 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6301721.775398987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.68678999822805 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2181629.70487918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 458.37292999976853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2250408.3872365714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 444.36378999989756 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 318279.64909971115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.141891109999051 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 61390.32272301229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.28921229998923 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 53767.86861528369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.598468300001514 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.251435621985196,
            "unit": "iter/sec",
            "range": "stddev: 0.004895527404198662",
            "extra": "mean: 307.5564508299999 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10521481.445506912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.04365000111648 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4763335.804062483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.9369100005788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 96432.15212650567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.369985300008011 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 101777.95440368429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.825310460000765 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b49d3a41e069c9347edc1d89770e34f2695c1a33",
          "message": "Convert analysis tests to pytest",
          "timestamp": "2021-07-09T06:31:52+10:00",
          "tree_id": "71cb6b3840d449101023858eb99b9f141cbbe0af",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/b49d3a41e069c9347edc1d89770e34f2695c1a33"
        },
        "date": 1625777500775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3936353.416532752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 254.04222999895865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4251949.976149808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.186209999938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 120030.47285643463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.331217699992521 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34446.36840806557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.030636500010587 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1792305.7782623235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 557.9405100002077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 991582.5351838581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0084889200015823 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 74783.11662306984,
            "unit": "iter/sec",
            "range": "stddev: 0.000055530669473614246",
            "extra": "mean: 13.372002199912458 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12808.18722281741,
            "unit": "iter/sec",
            "range": "stddev: 0.00013155145831569178",
            "extra": "mean: 78.07506109986662 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.316646467053899,
            "unit": "iter/sec",
            "range": "stddev: 0.4333449790653999",
            "extra": "mean: 431.65844000000106 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2075672.88955521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 481.7714800014983 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1454852.9734290135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 687.3546800011354 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5533906.299240803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.70417999979327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 1993189.2722532854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 501.7085000008592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 1922938.1756993462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.0375199979135 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 283069.8840607899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5326965400008703 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44601.15824568708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.420942400003696 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 39989.194759614504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.00675510000292 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.169700031634485,
            "unit": "iter/sec",
            "range": "stddev: 0.015099060701076986",
            "extra": "mean: 315.4872669400015 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11147018.133502632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.71009000106278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4782670.204970375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.08821999910288 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 100767.64286484159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.92382050001197 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 98170.05336481688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.186405790000208 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23879593279347197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.18767601400009 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2887760126793482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4628915010000583 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09397646600608961,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.640961960999903 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5725470.011015226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.65814999923168 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5881206.105982053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.03315000010844 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5813103.490969356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.02515000008134 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6477768.880218377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.3741399996179 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.26551549320016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.087705000027199 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9391338.875148268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.48109000158001 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9127161.346038777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.5630899999378 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4615629.101669257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.6551900018021 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8115954.261785365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.21409999913158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2276973.88235372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033918472402493603",
            "extra": "mean: 439.17938969343595 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 867724.7729946041,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015864446079684307",
            "extra": "mean: 1.1524391502030085 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 627991.847342471,
            "unit": "iter/sec",
            "range": "stddev: 0.000003375751098518501",
            "extra": "mean: 1.5923773600434288 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 608541.867451445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024795864663953532",
            "extra": "mean: 1.643272309574968 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3297312.4975965656,
            "unit": "iter/sec",
            "range": "stddev: 6.135782039369884e-7",
            "extra": "mean: 303.27729043847285 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1147744.6983440157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010405144638355392",
            "extra": "mean: 871.2739004090508 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2191754.9776073527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012652959387632835",
            "extra": "mean: 456.25537992009413 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3891728.228812954,
            "unit": "iter/sec",
            "range": "stddev: 9.022308989956944e-7",
            "extra": "mean: 256.95525000855923 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1322026.376713292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017367220825423502",
            "extra": "mean: 756.4145599621952 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 762539.1480789713,
            "unit": "iter/sec",
            "range": "stddev: 0.000005105104346660852",
            "extra": "mean: 1.311408079859575 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 855132.8064576305,
            "unit": "iter/sec",
            "range": "stddev: 0.000001679483987851283",
            "extra": "mean: 1.1694089999218704 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6564430.906852934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.33612999963952 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3717040.5829821043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 269.03123000010964 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6927504.77104309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.35211999852982 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11000364.332125587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.90607999951317 nsec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "9e7b753698b3e6bd3334b04c93dabff0c4bc9a88",
          "message": "Update dependencies",
          "timestamp": "2021-07-09T06:57:50+10:00",
          "tree_id": "0666961bed8ed284c9880535900244c2724da3da",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9e7b753698b3e6bd3334b04c93dabff0c4bc9a88"
        },
        "date": 1625779067307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9655153.636202073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.57162999980574 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3609304.6140324385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 277.0616800012249 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 84990.93129772264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.76596119998976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 85064.35604677524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.75580521000029 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28346958242118475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.527715360000002 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3865583333999317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5869316830001026 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1244167938062487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.037500159000047 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7131953.913591358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.21403000015198 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6353879.577125464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.3841600020387 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6491435.556908224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.04913000111264 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9031481.124192167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.72380999848974 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 178.23272274478097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.6106419999650825 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12629518.873415105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.17958000007275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11930665.652402332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.81761999999071 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6160776.933043139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 162.31719000188605 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11067374.078515971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.35566999955336 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2466597.5813454026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012340072218631912",
            "extra": "mean: 405.41676014072436 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 814413.3904795552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016344242034881745",
            "extra": "mean: 1.2278776499624655 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 578637.394796485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021175605888144663",
            "extra": "mean: 1.728198020025502 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 572540.2090017316,
            "unit": "iter/sec",
            "range": "stddev: 0.000004041319599451441",
            "extra": "mean: 1.7466022198573228 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4002646.223386828,
            "unit": "iter/sec",
            "range": "stddev: 4.93488404490382e-7",
            "extra": "mean: 249.83472038002222 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1020107.9290758525,
            "unit": "iter/sec",
            "range": "stddev: 0.000014566162745845282",
            "extra": "mean: 980.288429780103 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2355103.493648092,
            "unit": "iter/sec",
            "range": "stddev: 6.64432763917975e-7",
            "extra": "mean: 424.6097900568202 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4050337.437578561,
            "unit": "iter/sec",
            "range": "stddev: 5.216311140051967e-7",
            "extra": "mean: 246.89300963473215 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1333294.898034303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070595919003796215",
            "extra": "mean: 750.0216204789467 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 831166.9520129375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013634702003337795",
            "extra": "mean: 1.203127720102657 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 842330.4688948194,
            "unit": "iter/sec",
            "range": "stddev: 0.00000117875074438454",
            "extra": "mean: 1.1871825096295652 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7287893.511609342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.21386000042912 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4315507.253128886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.7224700004772 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7989339.664380217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.16678999872967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9554779.749829387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.65966000083426 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5151977.408760904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.10023000091314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5657448.721416345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.75812000106816 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 168306.8845797015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.941527599998153 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 51217.377130043795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.524623400002383 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1849439.292543225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 540.704420000111 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 996355.9873932757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0036573399997906 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 58086.51810338838,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864765626694044",
            "extra": "mean: 17.215698799850543 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16717.82921460624,
            "unit": "iter/sec",
            "range": "stddev: 0.00015166798759722738",
            "extra": "mean: 59.816378500045175 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.5258147614127022,
            "unit": "iter/sec",
            "range": "stddev: 0.4212409339008784",
            "extra": "mean: 395.91185200006294 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1735651.1635495909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 576.1526400010553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1469714.4036299067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 680.4042999988269 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7634530.155397108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.9838299994226 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2508091.6051364206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 398.70952000001125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2363755.0499221347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.05568000074345 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 292749.2518140627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4158925900010217 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 61087.5657573662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.36994349998986 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 51519.005152332225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.410312700006216 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.263134014548518,
            "unit": "iter/sec",
            "range": "stddev: 0.012526216452430959",
            "extra": "mean: 306.45385556999827 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "276e5b3029d0c496638db5c221f683a52bd3887b",
          "message": "Improve `TradingNode` stop sequence",
          "timestamp": "2021-07-09T08:18:15+10:00",
          "tree_id": "af2ca69241bf608b3f10233e52ada560b8b781c8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/276e5b3029d0c496638db5c221f683a52bd3887b"
        },
        "date": 1625783885399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2352128759498723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.251467934999937 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.30690313498794614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.258357070999864 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08527877436221172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.726247328 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5922303.055737756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.85322999996788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5653251.914434517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.8893400003435 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6128120.8681351235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.18215999945096 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6881226.994331883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.32292000012603 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 152.69306281409672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.54908600017734 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10080613.659509774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.20030999865048 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10177464.447548484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.25630000023011 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5056209.373983554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.77662000024065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8548357.287834592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.98153999986971 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2057179.6800414452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014410831587009508",
            "extra": "mean: 486.102409868181 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 638504.9095051136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042972702788668835",
            "extra": "mean: 1.5661586702208297 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 515370.40175478696,
            "unit": "iter/sec",
            "range": "stddev: 0.000002350116707056797",
            "extra": "mean: 1.9403520198193291 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 559507.3841305292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058104253660972675",
            "extra": "mean: 1.7872865101753632 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3442838.6724907225,
            "unit": "iter/sec",
            "range": "stddev: 0.000001591808832898996",
            "extra": "mean: 290.45798979495885 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 950988.3519056033,
            "unit": "iter/sec",
            "range": "stddev: 0.000018014187641921282",
            "extra": "mean: 1.0515375903355562 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 1958146.9587220156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011379069109545869",
            "extra": "mean: 510.68689995190647 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4010275.451876113,
            "unit": "iter/sec",
            "range": "stddev: 7.96786334755463e-7",
            "extra": "mean: 249.35942979482203 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1318433.0880381146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016181086744517779",
            "extra": "mean: 758.4761100679316 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 690237.2329033315,
            "unit": "iter/sec",
            "range": "stddev: 0.000002392408211866368",
            "extra": "mean: 1.4487772498068807 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 801763.9446808381,
            "unit": "iter/sec",
            "range": "stddev: 0.000002266552264951556",
            "extra": "mean: 1.2472499002160475 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5920725.160889882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.89823000155957 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3257646.7965014353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 306.97004999865385 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7045583.79994768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.93287999887616 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9852377.881250653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.49834000003466 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4769200.048250803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.67876999975488 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4969816.811591933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.21465999864085 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 138924.10036013613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.198175099983928 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34985.47883967729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.583287500009646 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1784642.19378863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 560.3364099988539 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 935209.5082511051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0692791200017382 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 23172.484567376738,
            "unit": "iter/sec",
            "range": "stddev: 0.00029329073922651434",
            "extra": "mean: 43.15463009986616 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12305.451821907905,
            "unit": "iter/sec",
            "range": "stddev: 0.00014756260327630774",
            "extra": "mean: 81.26479339991874 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.2563863693090886,
            "unit": "iter/sec",
            "range": "stddev: 0.45843757385419026",
            "extra": "mean: 443.18650989998787 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1938807.700346645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 515.7809100001032 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1711098.680550557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 584.4198299996606 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6217314.412382836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.8411500001239 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2134402.150854838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 468.515270001717 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2376478.7728240197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.790630000738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 308121.2636868206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.245475460000762 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45839.677716663085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.815162099983354 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 34257.30914290377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.19085080000059 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.224181162482088,
            "unit": "iter/sec",
            "range": "stddev: 0.002421905643145099",
            "extra": "mean: 310.15626901999667 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9549239.603609663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.7203799998897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3969856.0887398627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 251.89830000044824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 81681.85954698281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.242620400002124 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88340.49254843841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.319837270000335 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "9ecd65e7b9fb145d6fbe5de5633622e199b14c14",
          "message": "Refactor throttler",
          "timestamp": "2021-07-09T09:04:59+10:00",
          "tree_id": "0597ae0533ffd616f2c5eb23c73c7094944c2a97",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9ecd65e7b9fb145d6fbe5de5633622e199b14c14"
        },
        "date": 1625786486560,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3274942172209137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0534890310000264 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.44351110626852575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2547349679999797 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13751102488625916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.272144185000002 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7009618.317828475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.6611200008665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6670080.413821879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.92323000001306 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7485983.618595663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.58297999957358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9073287.117601987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.21364000043832 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 196.0370713958899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.101075999959903 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11863205.378893424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.29424999917501 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11690947.010006258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.5362699996931 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6064301.241503686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.89945999978772 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10716690.463006701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.31239000061942 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2817794.9266236452,
            "unit": "iter/sec",
            "range": "stddev: 8.238504313019638e-8",
            "extra": "mean: 354.8874300793159 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 995947.6681735258,
            "unit": "iter/sec",
            "range": "stddev: 1.093485304457581e-7",
            "extra": "mean: 1.0040688200353998 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 764148.6808611158,
            "unit": "iter/sec",
            "range": "stddev: 1.170681347845948e-7",
            "extra": "mean: 1.3086458500106346 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 767780.2079368981,
            "unit": "iter/sec",
            "range": "stddev: 1.2425121382373102e-7",
            "extra": "mean: 1.3024560800897689 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4170790.1923242873,
            "unit": "iter/sec",
            "range": "stddev: 7.92790431061157e-8",
            "extra": "mean: 239.76271974561314 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1373175.2248360727,
            "unit": "iter/sec",
            "range": "stddev: 9.883630672644464e-8",
            "extra": "mean: 728.239180195942 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2831349.7465910087,
            "unit": "iter/sec",
            "range": "stddev: 7.082013451604694e-8",
            "extra": "mean: 353.18843996719806 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4609904.571927364,
            "unit": "iter/sec",
            "range": "stddev: 7.051254793038044e-8",
            "extra": "mean: 216.92423007834805 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1532229.7247257205,
            "unit": "iter/sec",
            "range": "stddev: 9.179458607900854e-8",
            "extra": "mean: 652.6436498802468 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 782778.0009849459,
            "unit": "iter/sec",
            "range": "stddev: 1.2836340443163555e-7",
            "extra": "mean: 1.2775014100316184 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 925129.2611864794,
            "unit": "iter/sec",
            "range": "stddev: 2.6910063627530426e-7",
            "extra": "mean: 1.0809300299479219 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7505367.463548525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.2379799998762 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4535944.113912259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.4612699995323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8327033.238772285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 120.09078999994928 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12027870.018155111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.14024000014797 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5560477.504915471,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.84066999929382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5691013.695861155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.71562000057384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 162435.71708018333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.156281500000205 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53747.32619814715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.60557670000844 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2143338.1385502825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 466.5619400009291 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1271899.4211445218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 786.2256900000375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 71177.01710593184,
            "unit": "iter/sec",
            "range": "stddev: 0.00005685229528139678",
            "extra": "mean: 14.049478900074064 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 18455.310447304975,
            "unit": "iter/sec",
            "range": "stddev: 0.0001426646905454775",
            "extra": "mean: 54.1849459999753 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.7640937210368115,
            "unit": "iter/sec",
            "range": "stddev: 0.38879798129243065",
            "extra": "mean: 361.78223349999143 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2276998.715317908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.1745999998875 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1862953.4328535097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 536.7820699996173 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7588348.485545261,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.78097999912097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2610504.209489356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.0677600001309 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2610613.2497606757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.0517599999439 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 350161.520580334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.855824929999926 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70332.27364403466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.218223699992905 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62124.72009707819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.096651999998812 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5529467289078775,
            "unit": "iter/sec",
            "range": "stddev: 0.000320903991700548",
            "extra": "mean: 281.4565137900013 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11582078.309046838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.34028999949805 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4829492.357571709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 207.06109999991895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 104451.04115429113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.573863400009941 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 104121.92829404808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.604124859999956 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "91460bcdb2e2203976c9a05f778de324e45eb224",
          "message": "Refactor `PositionEvent`s",
          "timestamp": "2021-07-09T11:57:22+10:00",
          "tree_id": "3a1dce02594a7b50598735708f0bf483e276a312",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/91460bcdb2e2203976c9a05f778de324e45eb224"
        },
        "date": 1625796989274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2881633782800448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.47025359700001 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.35405526710099217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8244178039999497 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.10653194518698894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.38685572899999 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7202380.18499331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.84298999983002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6461112.823317774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.7720999997182 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6393203.359897689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.4161100009187 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7755971.089359393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.9329200017164 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 185.96558632417972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.377339000006032 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10360580.31261531,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.5196900006049 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12012359.757113326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.24759000061022 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5862310.047970999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.58121999980358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10723554.695492456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.25265999905241 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2413711.501667341,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010699525324941564",
            "extra": "mean: 414.2997202893639 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 913665.2401119844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022630504397855624",
            "extra": "mean: 1.0944927705440932 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 660803.8125409276,
            "unit": "iter/sec",
            "range": "stddev: 0.000003410775503194796",
            "extra": "mean: 1.513308460123426 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 675992.7617790648,
            "unit": "iter/sec",
            "range": "stddev: 0.000004266055337573487",
            "extra": "mean: 1.4793057803876764 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4065723.8675670405,
            "unit": "iter/sec",
            "range": "stddev: 7.720540631361356e-7",
            "extra": "mean: 245.95866137815392 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1335503.3484533161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014358023516797035",
            "extra": "mean: 748.7813498619289 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2512083.3086680523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016728569935420975",
            "extra": "mean: 398.0759700721137 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4100885.2223431244,
            "unit": "iter/sec",
            "range": "stddev: 8.759086078867804e-7",
            "extra": "mean: 243.84978993111872 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1544564.7314810075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018032602111589681",
            "extra": "mean: 647.4315900254624 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 781243.9209591141,
            "unit": "iter/sec",
            "range": "stddev: 0.000003414974826874501",
            "extra": "mean: 1.2800099599780879 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 863456.2791907728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018685536665595826",
            "extra": "mean: 1.1581362300557885 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6618831.050869313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.0840800006008 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4367334.209332393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.97263000004386 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8066215.238124154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.97388000181309 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11906804.488803353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.98558999942907 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4593402.358354378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 217.70355000171548 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5533014.974681851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 180.73329000117155 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 152493.03156396994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.557676700003867 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36666.536488227146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.27282410000953 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2031436.4795227698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 492.2624999994696 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 927639.7575580487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0780046799982301 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 61754.48709495329,
            "unit": "iter/sec",
            "range": "stddev: 0.00006421531714464134",
            "extra": "mean: 16.193155299993123 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14038.248640334568,
            "unit": "iter/sec",
            "range": "stddev: 0.00014202806237750867",
            "extra": "mean: 71.2339569999358 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.213732674007253,
            "unit": "iter/sec",
            "range": "stddev: 0.46508759996292914",
            "extra": "mean: 451.7257263000147 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1778182.3814403345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.3720100015817 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1643619.4782227743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 608.4133300009853 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6584228.612817396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.8780800006425 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2290194.6392905596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 436.6441100000884 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2360622.865457128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 423.6170099989067 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 317255.4157839717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.152034449999519 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 41884.92201447061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.87493999999606 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37949.94748031992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.350497599992195 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.4306940348460517,
            "unit": "iter/sec",
            "range": "stddev: 0.010672636456948398",
            "extra": "mean: 291.4862094499995 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10458506.138443138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.61594999922818 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3635202.4865922295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 275.0878400001966 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 90296.1964459645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.07466360001581 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 90231.96115229251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.082547549999617 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5aac1a0450008f4842962bcdb5e445d2adfd4c9",
          "message": "Convert unittest tests to pytest",
          "timestamp": "2021-07-09T12:10:21+10:00",
          "tree_id": "67a30c4e1b2ac0eb8358e93b66e3551fecf6f76b",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/a5aac1a0450008f4842962bcdb5e445d2adfd4c9"
        },
        "date": 1625797562715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.343507530475657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.911144330999946 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4769749919378789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.096545976000016 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.14704003656991568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.800868820000005 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7162254.061623291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.62085000002844 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7365027.4030549405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.77682000004643 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7910030.052592718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.42176999975163 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 10285676.43441369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.22258000010697 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 212.93231648112308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.696328000022731 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12404256.197949864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.61749000034979 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12631289.624297753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 79.16848000036225 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6647835.122506864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.42491000031077 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 12076784.193811996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.80350000063663 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3160026.224588312,
            "unit": "iter/sec",
            "range": "stddev: 2.6781076465862834e-7",
            "extra": "mean: 316.4530699837087 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 949880.1802815228,
            "unit": "iter/sec",
            "range": "stddev: 5.454753303814277e-7",
            "extra": "mean: 1.0527643599255043 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 783119.7782306712,
            "unit": "iter/sec",
            "range": "stddev: 5.291000875029527e-7",
            "extra": "mean: 1.2769438696329871 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 779481.745599389,
            "unit": "iter/sec",
            "range": "stddev: 5.066872868467574e-7",
            "extra": "mean: 1.2829036800997073 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4156284.615956376,
            "unit": "iter/sec",
            "range": "stddev: 2.2432688064860937e-7",
            "extra": "mean: 240.5994998900951 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1470136.9469549905,
            "unit": "iter/sec",
            "range": "stddev: 3.688106370856727e-7",
            "extra": "mean: 680.2087397852574 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3073426.4631192167,
            "unit": "iter/sec",
            "range": "stddev: 2.2325688329079334e-7",
            "extra": "mean: 325.3697500167618 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4540457.149759268,
            "unit": "iter/sec",
            "range": "stddev: 2.4124078192840373e-7",
            "extra": "mean: 220.24214016710175 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1765553.5249109734,
            "unit": "iter/sec",
            "range": "stddev: 3.0968464661118697e-7",
            "extra": "mean: 566.3946099002715 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 931063.7166520823,
            "unit": "iter/sec",
            "range": "stddev: 4.5521254069880897e-7",
            "extra": "mean: 1.0740403498869 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 949912.401290365,
            "unit": "iter/sec",
            "range": "stddev: 5.316541325799191e-7",
            "extra": "mean: 1.05272865018037 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7689067.6375173945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.05477999968207 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4844603.293609739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.41524999973626 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9032226.71397696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.71466999965196 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12767402.064865045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 78.32446999941567 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 6073747.441456502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.64299999938703 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6230957.8035103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.4889700001877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 182654.97073299927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.4748031000031006 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 57172.110314867714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.491045799999938 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2540409.145085488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.6373800002002 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1358794.5155528355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 735.9464499995738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 81890.46563849613,
            "unit": "iter/sec",
            "range": "stddev: 0.00004928558353265591",
            "extra": "mean: 12.211433800052873 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 20557.116734956966,
            "unit": "iter/sec",
            "range": "stddev: 0.00012032425957338931",
            "extra": "mean: 48.64495409998426 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.1024625361104947,
            "unit": "iter/sec",
            "range": "stddev: 0.34487443666032636",
            "extra": "mean: 322.32460129999936 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2350371.4186205156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 425.4646699996556 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2144616.049710691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 466.28392999991775 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 8116305.357172943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.20876999979191 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2665967.401188563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 375.09836000026553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2986642.837236048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 334.8241000003327 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 380685.6124278868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.626839489998929 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 78618.76330027859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.71960990000025 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 67620.2345924418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.788472800000818 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.7883235082157114,
            "unit": "iter/sec",
            "range": "stddev: 0.0036808503322880584",
            "extra": "mean: 263.9690084100016 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11308691.543631734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.42756000035479 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4584729.421634555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.1153800006541 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 108644.89139125957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.20429839999315 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 115693.6757767912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.643514809999715 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "a239228aad8d264283b7eeb5a99289573b66ef39",
          "message": "Add `PositionEvent`s to maps\n\n- Add serialization tests.",
          "timestamp": "2021-07-09T12:51:16+10:00",
          "tree_id": "899d041c73a7d43350f7a77f9596d50e1a0080d7",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/a239228aad8d264283b7eeb5a99289573b66ef39"
        },
        "date": 1625800201974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2953985482488851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.385256989000027 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3501988483516919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8555205269999533 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.11197351725630358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.930683115999955 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6822972.785602619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.5636800003267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7229526.252672056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.32165000167151 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7613037.814378609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.3536100019519 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7542011.644643403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.59061999860933 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 208.05497311715305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.806422000001476 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10705899.9359806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.40643999848908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10876134.639068918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.94443000069441 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5270067.7857382875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 189.75087999933749 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10015878.171825089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.8414699984096 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3113814.5927879647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010284103906005573",
            "extra": "mean: 321.1495001391995 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 951219.7759285583,
            "unit": "iter/sec",
            "range": "stddev: 0.000002495082417087692",
            "extra": "mean: 1.0512817598055335 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 648001.5185049238,
            "unit": "iter/sec",
            "range": "stddev: 0.000002851431022432887",
            "extra": "mean: 1.5432062602371843 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 561947.3601805093,
            "unit": "iter/sec",
            "range": "stddev: 0.00000452582280961848",
            "extra": "mean: 1.7795261102014592 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3172936.1193331354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031586711226161097",
            "extra": "mean: 315.16550046717384 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1132135.727346033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029865773565195145",
            "extra": "mean: 883.2863196926155 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2735382.616198607,
            "unit": "iter/sec",
            "range": "stddev: 8.372968063860778e-7",
            "extra": "mean: 365.57956977503636 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4245542.128406608,
            "unit": "iter/sec",
            "range": "stddev: 7.732479799824089e-7",
            "extra": "mean: 235.54117937237606 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1564079.1575038794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012337260313280472",
            "extra": "mean: 639.3538301449553 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 837680.1953630083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016601916574649852",
            "extra": "mean: 1.1937730001682212 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 865520.6768936311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015536188456317613",
            "extra": "mean: 1.1553739000078167 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7568616.127719933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.12455000029877 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4144424.576042534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.2880200017753 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6420106.747112927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.76065000004746 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11699825.532118063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.47136000061073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5085103.529912403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.65282999994815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5383992.2496103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 185.73578000086854 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 152247.61015428754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.568247599989263 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 40413.471520350344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.744224200003373 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2176965.8594879704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 459.35493000115457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1278953.4436533689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 781.8892899990715 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 68734.65790868859,
            "unit": "iter/sec",
            "range": "stddev: 0.00005860623505996246",
            "extra": "mean: 14.548701200033063 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14080.427922451065,
            "unit": "iter/sec",
            "range": "stddev: 0.00011987040469750565",
            "extra": "mean: 71.02056880000873 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.3854384518398284,
            "unit": "iter/sec",
            "range": "stddev: 0.4393743399978683",
            "extra": "mean: 419.21014530000775 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2276080.0938923704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 439.3518500000937 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1943996.682604974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 514.4041700009439 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7386147.885328304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.38856999957716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2703626.6122902497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 369.87356000054206 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2500814.7654509717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 399.86967999993794 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 338234.29757011397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9565304499988088 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 54642.36894647137,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.300817099998312 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 43295.971089514365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.096837299999606 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.7222350487236726,
            "unit": "iter/sec",
            "range": "stddev: 0.004521603728756769",
            "extra": "mean: 268.6557906500002 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10951529.080042047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.31144999855678 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4957858.451054516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.69999000017924 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 92652.01856791473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.793072999990727 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 106478.7175897505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.391548119999698 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69022515+Shutchinson@users.noreply.github.com",
            "name": "Shutchinson",
            "username": "Shutchinson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22e87b91a4ea361e8402f5a2cf40015ce1c09694",
          "message": "Convert tests to pytest",
          "timestamp": "2021-07-09T16:16:15+10:00",
          "tree_id": "618a9c49f4ae674c4cd5f74ddc32f738df055cbc",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/22e87b91a4ea361e8402f5a2cf40015ce1c09694"
        },
        "date": 1625812370148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3166357576391844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.158203001000061 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4427272155683624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.258727191000048 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13707861346941672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.295084000999964 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7479224.583870012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.70370000075127 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6848191.683625834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.0239499999716 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7466212.959891369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.93670999903406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7889449.250170814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.75156000000243 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 195.82106106769032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.10670299991034 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11668919.157074314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.69773999965946 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11662524.332462741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.74472999953286 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6061071.477410155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.9873300004856 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10803701.39126505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.5608700003977 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2951830.668113282,
            "unit": "iter/sec",
            "range": "stddev: 7.627561468085675e-8",
            "extra": "mean: 338.77282013577315 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 932771.6493936215,
            "unit": "iter/sec",
            "range": "stddev: 1.6174561479631463e-7",
            "extra": "mean: 1.072073749936635 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 747802.7572290357,
            "unit": "iter/sec",
            "range": "stddev: 1.1437523029930042e-7",
            "extra": "mean: 1.337251020182748 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 765166.1477956717,
            "unit": "iter/sec",
            "range": "stddev: 1.263715185785878e-7",
            "extra": "mean: 1.306905699998424 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3868499.934655053,
            "unit": "iter/sec",
            "range": "stddev: 7.20915796852112e-8",
            "extra": "mean: 258.49813025502044 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1386830.8317882658,
            "unit": "iter/sec",
            "range": "stddev: 1.1040413732738744e-7",
            "extra": "mean: 721.0684800759282 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2565423.295266104,
            "unit": "iter/sec",
            "range": "stddev: 6.567932297094493e-8",
            "extra": "mean: 389.79922020871527 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4302115.732379423,
            "unit": "iter/sec",
            "range": "stddev: 9.02196427735032e-8",
            "extra": "mean: 232.4437700440285 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1451770.8936304445,
            "unit": "iter/sec",
            "range": "stddev: 8.880631972873465e-8",
            "extra": "mean: 688.8139198736098 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 814080.8172254873,
            "unit": "iter/sec",
            "range": "stddev: 1.2620008129573412e-7",
            "extra": "mean: 1.2283792700191043 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 839719.1243682393,
            "unit": "iter/sec",
            "range": "stddev: 2.449669624650282e-7",
            "extra": "mean: 1.1908743899959973 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7499417.482711648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.34369000062907 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4539729.327706044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.2774500005944 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8335318.528413274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.97141999927406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12057245.87418748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.9376800004411 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4856769.968225115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.8981599998333 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5670684.308707107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.34555999961776 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 165732.4384357025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.033821799996986 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53270.40578429842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.772149099993385 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2205416.166877981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.429160000951 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1206805.810330565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 828.6337300000923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79317.14411217588,
            "unit": "iter/sec",
            "range": "stddev: 0.00005139214064070052",
            "extra": "mean: 12.607614799969724 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 18653.555475461544,
            "unit": "iter/sec",
            "range": "stddev: 0.00013508469235454088",
            "extra": "mean: 53.60908280008516 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.7955542936336313,
            "unit": "iter/sec",
            "range": "stddev: 0.38371240535965456",
            "extra": "mean: 357.7108133000024 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2117349.3893910237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 472.2886100000778 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1737553.8841526718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 575.5217199998697 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7549010.060552378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.4677000002339 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2686023.3687280295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 372.2975799996675 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2702508.9255043804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 370.0265300005867 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 347888.70692375436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.874482500000113 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 71685.69829959846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.949783900000057 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 62907.35065159036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.89639349999743 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5016231582611517,
            "unit": "iter/sec",
            "range": "stddev: 0.0003265496355771991",
            "extra": "mean: 285.58184441999856 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11566476.880024783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.45675000025221 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5014515.769513517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 199.4210500004101 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 103579.22357382666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.654445800003941 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 105492.84858441426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.479315549999683 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69022515+Shutchinson@users.noreply.github.com",
            "name": "Shutchinson",
            "username": "Shutchinson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b6828e80231a6f393fc1a7fad8c8279fa91e3c4",
          "message": "Convert tests to pytest",
          "timestamp": "2021-07-09T16:15:24+10:00",
          "tree_id": "1039c7b5c91df65bcaf94c62896fd9c2aa162ced",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/5b6828e80231a6f393fc1a7fad8c8279fa91e3c4"
        },
        "date": 1625812513186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 154330.14267067393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.479615600005673 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 49079.47060268018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.37511790001645 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1946504.0349626152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.7415499984854 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1086672.2388321208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 920.2406800000063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 79791.57164803054,
            "unit": "iter/sec",
            "range": "stddev: 0.00004883495217058821",
            "extra": "mean: 12.532652000027156 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 18032.032221002748,
            "unit": "iter/sec",
            "range": "stddev: 0.00012608672522831157",
            "extra": "mean: 55.45686630014188 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.903289676015123,
            "unit": "iter/sec",
            "range": "stddev: 0.35753572318904026",
            "extra": "mean: 344.4368669999676 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2036995.0485377272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 490.9192099989923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1636019.6022630648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 611.2396200001058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6060086.362293188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.01414999993358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2328405.643103278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 429.47842999865316 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2224116.823779768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.6166700005233 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 295461.6246478493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.384534290000829 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 62647.9968870417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.96220229998835 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 53506.494332029346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.68932009999753 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.925506702939164,
            "unit": "iter/sec",
            "range": "stddev: 0.004591989954543981",
            "extra": "mean: 341.821127599992 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9708068.667195745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.00709999910396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4172806.255568284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 239.64688000205572 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 86880.94136403939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.510004199999457 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91747.90177273074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.8994318200007 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.253462016069864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9453643409999586 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.33102194260642787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0209477719999995 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.11405691937724619,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.767552249000119 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6224857.024326556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.64626000115823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6098106.458658529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.98533000028692 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6234559.334462859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.39626000065255 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6922430.634388062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.45792999822515 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 161.57892338540614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.1889260000498325 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9753806.130188063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.52408000042124 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9643750.223161213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.69409999839263 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5044364.428489099,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.24103000019022 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8976962.063234376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.39625999931013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2419182.667822281,
            "unit": "iter/sec",
            "range": "stddev: 1.1961559106088788e-7",
            "extra": "mean: 413.36274986633725 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 800450.5895792679,
            "unit": "iter/sec",
            "range": "stddev: 2.2364944554612253e-7",
            "extra": "mean: 1.2492963501040322 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 632750.3054090824,
            "unit": "iter/sec",
            "range": "stddev: 4.337238029596607e-7",
            "extra": "mean: 1.5804022399538553 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 633235.183991328,
            "unit": "iter/sec",
            "range": "stddev: 5.127552570661622e-7",
            "extra": "mean: 1.5791920999981812 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3470420.6112598926,
            "unit": "iter/sec",
            "range": "stddev: 2.1782418807631603e-7",
            "extra": "mean: 288.14951039521475 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1151893.2117875153,
            "unit": "iter/sec",
            "range": "stddev: 3.3863885056239e-7",
            "extra": "mean: 868.1360301170571 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2243952.912746029,
            "unit": "iter/sec",
            "range": "stddev: 2.1548737427927016e-7",
            "extra": "mean: 445.64214976162475 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3744517.8407931337,
            "unit": "iter/sec",
            "range": "stddev: 1.0656699137176661e-7",
            "extra": "mean: 267.0570798477456 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1253763.9549649833,
            "unit": "iter/sec",
            "range": "stddev: 2.126925189806628e-7",
            "extra": "mean: 797.5983007327159 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 641210.2479449006,
            "unit": "iter/sec",
            "range": "stddev: 3.492385827975248e-7",
            "extra": "mean: 1.5595508699448146 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 755279.427706299,
            "unit": "iter/sec",
            "range": "stddev: 3.9493370743204647e-7",
            "extra": "mean: 1.3240132900705248 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6249980.078191704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.000509999918 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3776623.1633890253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.78680999844073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6963926.512490893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.5971499995503 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9960635.568270167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.39519999963886 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4629570.902694175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 216.0027399986575 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4726352.463497019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.5796499992939 nsec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "f55f580b05ec1d00c940404d0d2514e7a562cfbc",
          "message": "Update dependencies",
          "timestamp": "2021-07-09T16:27:18+10:00",
          "tree_id": "78c115e97d12f384df2828976258d44edcd352de",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/f55f580b05ec1d00c940404d0d2514e7a562cfbc"
        },
        "date": 1625813019259,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.3254524255006256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0726457130001563 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4498356007647206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2230343669998547 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13857004038072218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.216567140000052 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7302537.025512853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.93870999986757 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6561209.6561074825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.4109199999657 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7268829.594091069,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.573730000895 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7980937.053062515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 125.29856999890399 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 198.30787853287995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.0426640000296175 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11733636.593147852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.22506999952384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11814735.030445075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.64006999929552 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6080577.625653472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.4580600009249 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10853384.237180138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.13715999976557 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2988422.5538439183,
            "unit": "iter/sec",
            "range": "stddev: 7.093427368445715e-8",
            "extra": "mean: 334.6246998148672 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1028281.5684510398,
            "unit": "iter/sec",
            "range": "stddev: 1.303329181414333e-7",
            "extra": "mean: 972.4962798918568 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 784875.9245811321,
            "unit": "iter/sec",
            "range": "stddev: 2.585040740085327e-7",
            "extra": "mean: 1.2740867297384284 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 791868.9248571275,
            "unit": "iter/sec",
            "range": "stddev: 1.6095181090935342e-7",
            "extra": "mean: 1.2628352604951942 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4285679.634055329,
            "unit": "iter/sec",
            "range": "stddev: 6.986341760806203e-8",
            "extra": "mean: 233.33521993890827 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1357172.4286101542,
            "unit": "iter/sec",
            "range": "stddev: 1.3296641674406577e-7",
            "extra": "mean: 736.8260501903023 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2714186.42323563,
            "unit": "iter/sec",
            "range": "stddev: 6.865445904587848e-8",
            "extra": "mean: 368.43453030314777 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4688768.677008221,
            "unit": "iter/sec",
            "range": "stddev: 5.855424014889395e-8",
            "extra": "mean: 213.27561005591633 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1617825.694701757,
            "unit": "iter/sec",
            "range": "stddev: 1.0537808876178711e-7",
            "extra": "mean: 618.11356024009 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 824565.1210362616,
            "unit": "iter/sec",
            "range": "stddev: 1.271900351936982e-7",
            "extra": "mean: 1.2127604897273159 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 907536.8261699645,
            "unit": "iter/sec",
            "range": "stddev: 2.6774507535057304e-7",
            "extra": "mean: 1.1018836604353055 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7477659.184577123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.73169000033158 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4537724.325825525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.37477999901967 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8354392.668705784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.69750999924145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 12018501.280830191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.20505000028788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5556411.551616785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.97227000023486 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5681875.646180041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.99822000192944 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 169246.13287390757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.908554500001628 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53294.99959031154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.763486399984686 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2218831.4533043923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.6876799996462 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1274793.3279565845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 784.4408799996927 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 56186.80115638391,
            "unit": "iter/sec",
            "range": "stddev: 0.00008339267053099628",
            "extra": "mean: 17.797774199971172 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 18443.959155220255,
            "unit": "iter/sec",
            "range": "stddev: 0.0001411991124831711",
            "extra": "mean: 54.218293999906564 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.888896690900192,
            "unit": "iter/sec",
            "range": "stddev: 0.3684120359116129",
            "extra": "mean: 346.15291129998695 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2300133.150105997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.75744000033956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1854937.4372321498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 539.1017399983866 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7523171.179154161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.92266999997082 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2492752.198338557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 401.16302000114956 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2474199.9093047758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 404.1710600017723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 334131.85835523414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9928304499981095 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 70480.71903014336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.188277500011282 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61335.94346400214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.303653999989365 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.5220617097025313,
            "unit": "iter/sec",
            "range": "stddev: 0.0008378450976177287",
            "extra": "mean: 283.92461076000245 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11580100.01495434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.35504000039873 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5025368.057974879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.9903999992748 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 102861.1116503747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.721847099990555 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 109775.42846505952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.109506689999307 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "ac528dfdba12709d5d2db8a50c19bfdcaa591539",
          "message": "Fix tests",
          "timestamp": "2021-07-10T14:38:02+10:00",
          "tree_id": "30c9c2048e7092af9f2a9fa906be0ce4a25d8572",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/ac528dfdba12709d5d2db8a50c19bfdcaa591539"
        },
        "date": 1625893167981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 122560.07855239954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.159263699985786 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34852.722796990085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.692162900006224 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1629122.7721284258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 613.8272799989863 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 907808.8354309401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1015535000001364 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65411.649113306376,
            "unit": "iter/sec",
            "range": "stddev: 0.000060440145391341596",
            "extra": "mean: 15.287796800043909 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12331.043631585173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001398080184127749",
            "extra": "mean: 81.0961366999436 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.1691350547981556,
            "unit": "iter/sec",
            "range": "stddev: 0.46318711368753107",
            "extra": "mean: 461.0132494000254 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1724827.5944224861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 579.7680900013802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1509538.5476526278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 662.4540999996498 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5871989.915146461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 170.3000200018323 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2061787.3122919248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 485.01607999924084 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2032375.4151882988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 492.03507999891366 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 249764.74471361403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.003767630001676 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 42537.50926727586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.508663699999488 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 37619.95942297827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.581634199988002 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.6293223477929177,
            "unit": "iter/sec",
            "range": "stddev: 0.01698281534043422",
            "extra": "mean: 380.3261326399979 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 7111410.991390228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.61907000041174 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3626944.92200947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 275.7141400002183 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 64356.20262305787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.53851780001878 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 76302.83262018992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.10567335000087 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2034272823538212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.915761487000054 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2568410383000649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.893458796999994 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.08351792948423929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.973476907000077 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5724915.082340636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.67507999981535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 4966720.736043418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.3400900000306 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5961924.645265874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.73106999835363 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6380681.135191056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.7230799992103 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 147.99241627821573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.757102999927156 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9201236.09416505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.6810499987223 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 7576213.296550385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.99205999853802 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 3913172.6469811955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 255.54712000030125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8401874.424591068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 119.0210599997954 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 1995202.6954048155,
            "unit": "iter/sec",
            "range": "stddev: 0.000002228864605670589",
            "extra": "mean: 501.20220983217223 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 656157.3744919391,
            "unit": "iter/sec",
            "range": "stddev: 0.000004059049866427285",
            "extra": "mean: 1.5240246301800653 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 492476.4688867356,
            "unit": "iter/sec",
            "range": "stddev: 0.000005727043611376772",
            "extra": "mean: 2.0305538704428727 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 538087.2090131837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033251818076194607",
            "extra": "mean: 1.8584348099147974 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 2722576.5534360367,
            "unit": "iter/sec",
            "range": "stddev: 0.000018007163523158087",
            "extra": "mean: 367.29913020735694 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1039177.5660720685,
            "unit": "iter/sec",
            "range": "stddev: 0.000003009728577921003",
            "extra": "mean: 962.2994497271976 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2162067.2640570886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016725878988783042",
            "extra": "mean: 462.5203001887712 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3695175.921500746,
            "unit": "iter/sec",
            "range": "stddev: 9.461962870595203e-7",
            "extra": "mean: 270.6231100341938 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1159535.4240856695,
            "unit": "iter/sec",
            "range": "stddev: 0.000009529369164642416",
            "extra": "mean: 862.4143594306588 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 556414.9662296181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051760966610887",
            "extra": "mean: 1.7972198102006587 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 551972.6520501666,
            "unit": "iter/sec",
            "range": "stddev: 0.000004445672881363596",
            "extra": "mean: 1.811683959858783 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 4234164.362887383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.17411000032007 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3217926.165652202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 310.75914999973975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6425163.2007371355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.63807000035013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10144040.300406098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.58004999841796 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 3836737.3122439887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 260.63812000074904 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4065732.816603799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.95812000143266 nsec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "c46c0bc27addbe41e461997fc169fc2d2f19eb9a",
          "message": "Refactor domain\n\n- Standardize identifiers on events and objects.\n- Add `TradingEvent` base class.\n- Add `TraderId` to `Order` and `Position`.",
          "timestamp": "2021-07-11T14:12:04+10:00",
          "tree_id": "65e5ec3eb53137f4019c004eda4dc21a29c2a1a8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/c46c0bc27addbe41e461997fc169fc2d2f19eb9a"
        },
        "date": 1625977814665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.29633417746248475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3745685649998904 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3652753606883325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.737660700999868 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1091467949925061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.161973103000037 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5738053.387183236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.27513000029649 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6615031.932444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.1708499992892 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6376009.06723942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.83791999890673 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7894494.813473526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.67055000065375 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 212.62765899244786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.703056999915134 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11789249.713387681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.82303999926444 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11842163.383410629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.44402999884915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5813003.805749389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.02810000071622 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10577069.02020609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.54414999936489 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3227004.3981176647,
            "unit": "iter/sec",
            "range": "stddev: 7.383660111830303e-7",
            "extra": "mean: 309.8849200773657 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 959464.5606144372,
            "unit": "iter/sec",
            "range": "stddev: 0.000004174558803876282",
            "extra": "mean: 1.0422479798103268 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 740487.3132499347,
            "unit": "iter/sec",
            "range": "stddev: 0.000004194775349320655",
            "extra": "mean: 1.3504620296748726 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 728311.3309487186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044288998386064185",
            "extra": "mean: 1.3730391901185612 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4053893.7603153954,
            "unit": "iter/sec",
            "range": "stddev: 7.475929648753387e-7",
            "extra": "mean: 246.67642003578294 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1253562.6720778102,
            "unit": "iter/sec",
            "range": "stddev: 0.000001944120622716755",
            "extra": "mean: 797.726370028613 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2737027.5436274237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010025925916852722",
            "extra": "mean: 365.3598599430552 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4404793.09160809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013621234529075058",
            "extra": "mean: 227.02541962871692 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1629641.1132304529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010773113931176956",
            "extra": "mean: 613.6320395216899 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 701315.4414370236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059264388989168",
            "extra": "mean: 1.425891889605282 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 819844.8430120215,
            "unit": "iter/sec",
            "range": "stddev: 0.000007764868429666427",
            "extra": "mean: 1.2197429898151313 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5647457.573897009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.07083000004786 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3462592.2482238756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 288.8009699995564 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6291657.061355282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.94064000121944 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9896674.756865118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.04404000003342 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4632563.157338697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.86322000075597 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5083779.930641412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 196.70403000191072 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 135767.26200324178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.365545899983772 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 36021.36009018894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.76130600000215 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1908971.0951218954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 523.8424000003761 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1149207.3870691957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 870.1649599993289 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 59867.82895582671,
            "unit": "iter/sec",
            "range": "stddev: 0.00006773271358968938",
            "extra": "mean: 16.703461900010552 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 14047.405351755342,
            "unit": "iter/sec",
            "range": "stddev: 0.00013084060960666873",
            "extra": "mean: 71.18752360022427 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.4392165880174317,
            "unit": "iter/sec",
            "range": "stddev: 0.41371297580244754",
            "extra": "mean: 409.9676941000098 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2112558.288645087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 473.3597200015538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1682272.0106327755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 594.4341899999017 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6629285.012347388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.8458300008897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2446818.821110725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 408.69393000093623 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2385501.4754704395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 419.1990699996495 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 334973.2428567393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.985313069998483 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 51205.49014614671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.52915589999975 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 44152.422870575865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.648813700016035 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.47822706531155,
            "unit": "iter/sec",
            "range": "stddev: 0.004791065296840945",
            "extra": "mean: 287.50279415999785 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10394474.46365967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.20496000025014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4198956.995890625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.1543799992869 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 90898.92758272347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.001229899989085 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 101223.22518152048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.879155680000622 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "943932c92b6452ccafad851a79092a253cf73c58",
          "message": "Push broken tests",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/385/commits/943932c92b6452ccafad851a79092a253cf73c58"
        },
        "date": 1626139021500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2953202974516325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3861539780000385 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.40405955630011614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.474882686000001 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.12405942233741708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.060653364000018 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6269030.818454672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.5142900009705 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5884343.233766737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.9424999992516 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6005196.656917793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.52244000169958 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7752379.088870685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.99265999976706 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 164.51088856172652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.078625000100146 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9824813.745969394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.78310000128477 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10548861.482509937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.79695999971227 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5255442.90456952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.2789199994004 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9274955.403664336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 107.81723000036436 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2733440.5386121916,
            "unit": "iter/sec",
            "range": "stddev: 2.957764722923376e-7",
            "extra": "mean: 365.83930979077195 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 917667.4540433394,
            "unit": "iter/sec",
            "range": "stddev: 5.287442906553877e-7",
            "extra": "mean: 1.0897193701202923 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 717494.3336139045,
            "unit": "iter/sec",
            "range": "stddev: 5.616908373095541e-7",
            "extra": "mean: 1.3937392299158091 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 707656.40920513,
            "unit": "iter/sec",
            "range": "stddev: 5.164849169911148e-7",
            "extra": "mean: 1.4131151601145575 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3809197.0154845016,
            "unit": "iter/sec",
            "range": "stddev: 2.3442875611067997e-7",
            "extra": "mean: 262.5225200836212 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1272777.3697235363,
            "unit": "iter/sec",
            "range": "stddev: 4.637128358467909e-7",
            "extra": "mean: 785.6833597043078 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2582537.1776153664,
            "unit": "iter/sec",
            "range": "stddev: 2.868108201714674e-7",
            "extra": "mean: 387.2161100593985 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4137959.3937303433,
            "unit": "iter/sec",
            "range": "stddev: 2.8025430821826445e-7",
            "extra": "mean: 241.6650104191831 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1365009.432538553,
            "unit": "iter/sec",
            "range": "stddev: 3.597463204928661e-7",
            "extra": "mean: 732.5956701561154 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 727833.9748460465,
            "unit": "iter/sec",
            "range": "stddev: 4.872600938548748e-7",
            "extra": "mean: 1.3739397095491768 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 791029.0848708331,
            "unit": "iter/sec",
            "range": "stddev: 5.950840388574329e-7",
            "extra": "mean: 1.2641760197266194 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6416623.263583409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.84520999937013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3814924.2890167753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.1283999997104 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7297788.142645828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.02781999882063 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10418513.782200254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.98298000128125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4771941.290609292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.5583200002693 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5699804.302940981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 175.44461999932537 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 148945.64949401646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.713858400007666 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 48494.006269368394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.62110509998547 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2093062.3668713758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 477.76885000075714 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1129490.0986979483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 885.3552599998693 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 82184.79601459348,
            "unit": "iter/sec",
            "range": "stddev: 0.000052174915342251653",
            "extra": "mean: 12.167700700047133 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17122.043332595793,
            "unit": "iter/sec",
            "range": "stddev: 0.00013556073475360842",
            "extra": "mean: 58.40424420000545 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.83364196171421,
            "unit": "iter/sec",
            "range": "stddev: 0.3573835754368719",
            "extra": "mean: 352.902735600037 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1928072.4847363932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 518.6526999978014 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1761854.6832789534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 567.5837000012507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6339897.769098872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.731250001234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2224128.745377823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 449.6142600009989 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2227309.099225217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.9722600010282 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 304848.5277322412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2803176300012638 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 60678.5081705207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.480299700015166 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52316.29315457148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.114504100002705 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.09201069667153,
            "unit": "iter/sec",
            "range": "stddev: 0.003413287325097576",
            "extra": "mean: 323.41414635999627 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10159356.620241554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.43142999898191 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4198426.715128874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 238.18446000177573 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 88144.7559722729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.344974400003593 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 89181.15320562341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.213131520000843 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "1f5d2b9c36428b7f3caa4b694b15fcc855fbe181",
          "message": "dt_to_unix_nanos_bug",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/385/commits/1f5d2b9c36428b7f3caa4b694b15fcc855fbe181"
        },
        "date": 1626143098620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2792265997500063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.581320694000169 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3879469174141491,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.577672241000073 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.1194736448124564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.370046813000044 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5786340.533055068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.82080000086353 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5423217.303081076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 184.39238999917507 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5955799.86511257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.90356000001339 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7517905.018497268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.01577999982328 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 165.43943692195094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.044508000059068 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9811021.092804115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.92619000008563 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9845215.490964929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.57218000131252 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5045457.299826995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.19808999955058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8991134.471606113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.22067000087554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2505005.250275856,
            "unit": "iter/sec",
            "range": "stddev: 2.3117276266418885e-7",
            "extra": "mean: 399.20076011412675 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 831438.5126903696,
            "unit": "iter/sec",
            "range": "stddev: 4.5365781057346666e-7",
            "extra": "mean: 1.2027347599814675 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 639241.3053245167,
            "unit": "iter/sec",
            "range": "stddev: 4.816788186080165e-7",
            "extra": "mean: 1.5643544803356235 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 632596.8715675075,
            "unit": "iter/sec",
            "range": "stddev: 5.433681113185818e-7",
            "extra": "mean: 1.5807855601974552 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3601629.9062666916,
            "unit": "iter/sec",
            "range": "stddev: 2.3379207554419168e-7",
            "extra": "mean: 277.65207031961836 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1200324.0775933329,
            "unit": "iter/sec",
            "range": "stddev: 3.1987933571464027e-7",
            "extra": "mean: 833.1083402117656 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2450858.690685046,
            "unit": "iter/sec",
            "range": "stddev: 2.5820271332415095e-7",
            "extra": "mean: 408.0202599197946 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4023173.314843558,
            "unit": "iter/sec",
            "range": "stddev: 2.124135016267695e-7",
            "extra": "mean: 248.56001015677975 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1379903.4176517134,
            "unit": "iter/sec",
            "range": "stddev: 3.9189232973769415e-7",
            "extra": "mean: 724.6884000778664 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 712243.006493759,
            "unit": "iter/sec",
            "range": "stddev: 4.674480251842465e-7",
            "extra": "mean: 1.4040151898757358 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 752451.4437591106,
            "unit": "iter/sec",
            "range": "stddev: 5.246119286843431e-7",
            "extra": "mean: 1.328989409607857 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6302504.59012366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.66707999975915 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3803866.698943671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.8903900017576 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6981226.783068776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.2412999997723 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9977141.371326094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.22911000078238 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4632096.006300301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.8849900001769 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4737949.912737001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.0617500011358 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 147092.65051264313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.798436200006108 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 46259.05154910124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.61739089999628 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1917238.3424108312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 521.583559998362 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1066505.411049279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 937.6417499993295 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 58497.14733195526,
            "unit": "iter/sec",
            "range": "stddev: 0.00007010333713789567",
            "extra": "mean: 17.09485069973198 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16332.056046801285,
            "unit": "iter/sec",
            "range": "stddev: 0.00014773552297703537",
            "extra": "mean: 61.229277999927945 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.737323275521867,
            "unit": "iter/sec",
            "range": "stddev: 0.3747397799379811",
            "extra": "mean: 365.3203875999452 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1920596.6940515288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.6715200006329 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1561154.4068683977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 640.5516299992087 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6277538.383860122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.29810999978145 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2109347.965740723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.080149999736 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2232059.0552906166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.0168199984291 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 307889.9787427787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2479134400000476 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 60407.76461351867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.554163299997526 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52785.197485105746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.944705099988823 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0030291486553735,
            "unit": "iter/sec",
            "range": "stddev: 0.0008942224896984506",
            "extra": "mean: 332.99710075999656 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9446228.10233255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.86235999880955 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3969706.849485675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 251.90776999806988 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 85401.52118711767,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.709393300020565 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87186.3957221739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.469679320000523 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "098e22390c3c12cab9a9844cd5cde5bc343faf9c",
          "message": "dt_to_unix_nanos_bug",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/385/commits/098e22390c3c12cab9a9844cd5cde5bc343faf9c"
        },
        "date": 1626145478965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.24954452148237632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.007300958000087 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3134913974410363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.189880194999887 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.0971160840526126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.296955542999967 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5593205.910358551,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 178.7883400015744 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5793766.255165922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.59929999909218 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 4849976.877757005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.1865499990745 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7000787.168579739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.84107999856133 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.52914653568237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.268446999911248 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9689285.917095909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.2067799997094 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9373933.715015167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 106.67880000028163 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4729035.9354187045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.4595900002314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8122690.31302922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 123.11191999970104 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2672775.6343500707,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010062941730473296",
            "extra": "mean: 374.1428899411403 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 706906.8538354785,
            "unit": "iter/sec",
            "range": "stddev: 0.000002851713765180545",
            "extra": "mean: 1.4146135301621143 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 536573.6370317824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037157215923557045",
            "extra": "mean: 1.8636771003730246 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 523722.8405700786,
            "unit": "iter/sec",
            "range": "stddev: 0.00000569659771155406",
            "extra": "mean: 1.9094068895515195 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3734195.200385142,
            "unit": "iter/sec",
            "range": "stddev: 8.531157537555119e-7",
            "extra": "mean: 267.79532036698583 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1112497.9635432968,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029574206019262533",
            "extra": "mean: 898.8780499112181 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2292262.352014595,
            "unit": "iter/sec",
            "range": "stddev: 0.000004853530299329721",
            "extra": "mean: 436.2502394724288 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3915534.7077756613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012300676476781898",
            "extra": "mean: 255.39296025499425 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1319627.3851336073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013976698809560584",
            "extra": "mean: 757.7896694670017 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 591449.593035625,
            "unit": "iter/sec",
            "range": "stddev: 0.000004707889455897035",
            "extra": "mean: 1.6907611599958727 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 655579.3986435173,
            "unit": "iter/sec",
            "range": "stddev: 0.000004906631959804012",
            "extra": "mean: 1.5253682499314891 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 5670786.890285199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 176.3423700003841 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3373542.4736299985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 296.4243099995656 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6119117.0579155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.42226999995546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9707154.561307022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.01679999884072 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4402168.561051261,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 227.16077000040968 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4098983.9028566834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.9629000014065 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 121276.73892850682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.24560430000929 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 35756.80055012946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.96670800000811 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1905966.8751741885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 524.6680899995226 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1032088.082938875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 968.9095499993527 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 42042.5883683753,
            "unit": "iter/sec",
            "range": "stddev: 0.0001055126398228659",
            "extra": "mean: 23.785405200032983 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 11857.923516256127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018125038334741058",
            "extra": "mean: 84.33179709998058 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.327066342923539,
            "unit": "iter/sec",
            "range": "stddev: 0.4293108368767282",
            "extra": "mean: 429.72560840000824 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1777786.0583131495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 562.4973799990585 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1521627.3768299965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 657.19111999897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5831742.33680782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.4753400005975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2096191.1954417927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 477.0557200004078 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2121319.672121168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 471.4046699996288 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 299189.5254942478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.342363000001569 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45224.799362467704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.1117619999859 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38258.95230599977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.13767339998958 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.116151392767491,
            "unit": "iter/sec",
            "range": "stddev: 0.0037462375995875887",
            "extra": "mean: 320.9086703300022 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10250760.247685054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.55373999951189 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4243279.250345321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.6667899994136 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 78817.38300050708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.687556499986385 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 87833.43131768347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.385186539998813 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "083bb285089a7043ae9366f3d372fb3d51f44f6e",
          "message": "dt_to_unix_nanos_bug",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/385/commits/083bb285089a7043ae9366f3d372fb3d51f44f6e"
        },
        "date": 1626150319698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.33697062617211393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9676177160000634 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4528340116235978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.208314689999952 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.14412159043960096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.938585654999997 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7353820.3906325605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.98373999911928 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7418632.622835991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.79573000040546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6772870.2387965415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.64788999968914 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9459363.331836743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.71536000043125 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 221.86930212340027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.507157999910305 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11292909.385506403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.55113999970854 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11760127.73389435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.03308999934234 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6437077.98114006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.3499900001043 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10960445.178250756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.23716999965836 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3092678.609475212,
            "unit": "iter/sec",
            "range": "stddev: 3.0865356435982157e-7",
            "extra": "mean: 323.34429996581093 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1024024.4530866524,
            "unit": "iter/sec",
            "range": "stddev: 6.023610236597316e-7",
            "extra": "mean: 976.5391802761769 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 784250.2964688392,
            "unit": "iter/sec",
            "range": "stddev: 6.318638082290908e-7",
            "extra": "mean: 1.2751031201423757 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 783954.9386240942,
            "unit": "iter/sec",
            "range": "stddev: 5.809507081092863e-7",
            "extra": "mean: 1.275583519832253 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4176483.839858563,
            "unit": "iter/sec",
            "range": "stddev: 2.3744493605757802e-7",
            "extra": "mean: 239.4358600065516 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1437059.1107942997,
            "unit": "iter/sec",
            "range": "stddev: 3.773274534709395e-7",
            "extra": "mean: 695.8655997436836 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2949199.6829146305,
            "unit": "iter/sec",
            "range": "stddev: 2.670543588648549e-7",
            "extra": "mean: 339.075039846648 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4786530.781526666,
            "unit": "iter/sec",
            "range": "stddev: 2.524630133697183e-7",
            "extra": "mean: 208.91957988851573 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1689473.859985299,
            "unit": "iter/sec",
            "range": "stddev: 3.8095165116168884e-7",
            "extra": "mean: 591.9002499445014 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 875912.6824325297,
            "unit": "iter/sec",
            "range": "stddev: 5.322752688448077e-7",
            "extra": "mean: 1.141666309960101 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 885469.6222266785,
            "unit": "iter/sec",
            "range": "stddev: 6.180729580591949e-7",
            "extra": "mean: 1.1293442201724702 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6243870.86028163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.15705999961938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3775345.78391642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 264.8764000002757 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6948746.394007593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.91085000056592 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10936589.870598534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.43618000052811 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4695943.74711457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 212.94973999943068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5234986.503684431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 191.02245999988554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 161461.1719385197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.193439499998021 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 53936.09988527227,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.54045809999434 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2302383.1184882913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.3325799993636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1289154.9223362328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 775.7019600001058 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 69856.43294490286,
            "unit": "iter/sec",
            "range": "stddev: 0.00005966369255775704",
            "extra": "mean: 14.315073900047537 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 19022.5076346027,
            "unit": "iter/sec",
            "range": "stddev: 0.0001302858650066877",
            "extra": "mean: 52.56930469992085 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.2848064615471695,
            "unit": "iter/sec",
            "range": "stddev: 0.31171288301298006",
            "extra": "mean: 304.43193889998383 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2265782.289548996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 441.3486699991154 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1842737.229891599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 542.67096999979 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7637046.027262241,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.94067999986692 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2594235.9449777626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 385.4699500004699 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2782696.8127691383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 359.36362000029476 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 371711.48613842076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.690258540000059 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 75469.13387141342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.250450199996067 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 61168.739233809996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.34821989999864 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6370840157398665,
            "unit": "iter/sec",
            "range": "stddev: 0.007149740170438176",
            "extra": "mean: 274.94553209999935 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11844540.874694567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.42708000075072 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5013924.922970701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 199.44455000086236 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 114181.16479152764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.758011899999474 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 112494.46137738161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.889326529999835 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b58f7437c6cfd85cb539f81892aadf9c5c81448",
          "message": "Fix dt_to_unix_nanos bug",
          "timestamp": "2021-07-13T15:09:53+10:00",
          "tree_id": "2f583e34269ad9c70fe25be354fa8ebcf9bb5f30",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/9b58f7437c6cfd85cb539f81892aadf9c5c81448"
        },
        "date": 1626154196177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2827918799265154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5361694270000044 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3782345049444719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6438624370000525 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.11583517852064106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.632956004999869 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5631247.658155094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.5805399984165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5438575.719714728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.87166999900728 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5717079.242519282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.91449000090142 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7465824.9995204825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.94366999818885 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.3265155660191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.160422999982984 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9767242.699750446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.3830399981307 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9746488.949146282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.6010500004304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5049205.772603295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.05094999810535 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8860672.569383563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.85824999959004 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2257750.893962553,
            "unit": "iter/sec",
            "range": "stddev: 1.3624223665078208e-7",
            "extra": "mean: 442.9186597485568 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 806242.8351128842,
            "unit": "iter/sec",
            "range": "stddev: 2.777941173751289e-7",
            "extra": "mean: 1.2403210998581926 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 634181.5014072395,
            "unit": "iter/sec",
            "range": "stddev: 2.903479593541875e-7",
            "extra": "mean: 1.5768356500166192 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 620455.6280094545,
            "unit": "iter/sec",
            "range": "stddev: 2.852638553599002e-7",
            "extra": "mean: 1.6117187996314897 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3576071.3336131466,
            "unit": "iter/sec",
            "range": "stddev: 8.503938365169905e-8",
            "extra": "mean: 279.63648001104957 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1160978.369761985,
            "unit": "iter/sec",
            "range": "stddev: 1.7767367294271425e-7",
            "extra": "mean: 861.3424901318467 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2347641.4172535925,
            "unit": "iter/sec",
            "range": "stddev: 1.32275278724086e-7",
            "extra": "mean: 425.9594300265235 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3909087.2918710993,
            "unit": "iter/sec",
            "range": "stddev: 9.005902798221743e-8",
            "extra": "mean: 255.81419020227258 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1329828.4019204315,
            "unit": "iter/sec",
            "range": "stddev: 1.9749845925314406e-7",
            "extra": "mean: 751.9767201210925 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 678547.4305166352,
            "unit": "iter/sec",
            "range": "stddev: 2.6793015656118466e-7",
            "extra": "mean: 1.4737363300287143 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 742194.5512874689,
            "unit": "iter/sec",
            "range": "stddev: 3.287851745879216e-7",
            "extra": "mean: 1.3473556202552572 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6226138.7124895975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.61319000073127 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3771645.2837044317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 265.1362799997514 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6916974.927388875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.57187000061822 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9899322.896049626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.0170100016694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4581621.238743679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.26335000014296 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4731617.900994984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.34420000180398 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 141496.54042381968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.067310599995835 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 45614.86907160508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.92267609998453 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1840651.8263517686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 543.2857999994667 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1059661.2938920422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 943.6977699988347 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 67144.75432737754,
            "unit": "iter/sec",
            "range": "stddev: 0.000060140782856128756",
            "extra": "mean: 14.89319620002334 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15539.329587893466,
            "unit": "iter/sec",
            "range": "stddev: 0.0001670264705656619",
            "extra": "mean: 64.3528405999632 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.591474415245766,
            "unit": "iter/sec",
            "range": "stddev: 0.39631910596027486",
            "extra": "mean: 385.8807148999631 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1894956.892475566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 527.7164900007847 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1550623.6282577955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 644.9018200009959 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6291795.215928492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.93714999947406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2252973.711263169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 443.85782000063045 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2172358.626427423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.32915000068897 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 292383.29984011716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.420167980000315 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 58766.35942319367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.016538200005016 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 51953.87456047181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.247842599997966 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.8616073223483993,
            "unit": "iter/sec",
            "range": "stddev: 0.0004673841883801743",
            "extra": "mean: 349.45395623999957 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9638733.520479223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.74807000061992 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4116974.27257383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.89683000006335 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 85739.08635741523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.663292000002912 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 90661.60056412703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.030028079999283 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "d7e64ecff7cb3fce415e2f6ae040995a3c5ddeaf",
          "message": "`MessageBus` wire up iteration 1\n\n- Refactor and optimize `MessageBus` further.\n- Simplify strategy registration.\n- Simplify component 'wire up'.\n- Simplify `ExecutionEngine` logic.\n- Add `CacheFacade` to `BacktestEngine`.",
          "timestamp": "2021-07-13T16:57:06+10:00",
          "tree_id": "78a3f61844262a867bfd615921f79b5da7186fc8",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d7e64ecff7cb3fce415e2f6ae040995a3c5ddeaf"
        },
        "date": 1626160597568,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28081375576022183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.561079112000016 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3801812836587421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.630324119000079 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.11826398238676626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.45565978600007 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5158988.681365947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 193.8364400007231 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6002978.197582846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.5839799989044 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5739154.948406917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.24168000161444 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7058869.702723792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.66574000000764 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 145.57909763795905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.869117999940499 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 8554574.593085041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 116.89651999859052 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10263699.061827704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.43075999949724 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4109360.0990462652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.3468900017033 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9937092.243947104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.63305999892691 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2608392.532900538,
            "unit": "iter/sec",
            "range": "stddev: 9.88330228139615e-7",
            "extra": "mean: 383.37788020271546 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 882969.2121959632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013512321462968217",
            "extra": "mean: 1.1325423199218676 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 671524.5785770221,
            "unit": "iter/sec",
            "range": "stddev: 0.000002043762605550465",
            "extra": "mean: 1.4891487696831973 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 712954.520955036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015191631011209784",
            "extra": "mean: 1.4026140105829654 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3635520.725798535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014614835203270693",
            "extra": "mean: 275.06375989105436 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1236098.8624188448,
            "unit": "iter/sec",
            "range": "stddev: 0.000001074296725046687",
            "extra": "mean: 808.9967804380649 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2405366.451296711,
            "unit": "iter/sec",
            "range": "stddev: 8.731165424877494e-7",
            "extra": "mean: 415.73706969302293 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4256376.185613416,
            "unit": "iter/sec",
            "range": "stddev: 6.388131829946174e-7",
            "extra": "mean: 234.94163964642212 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1416915.1560150394,
            "unit": "iter/sec",
            "range": "stddev: 0.000001399978158160832",
            "extra": "mean: 705.7585598931837 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 734478.8948779443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021633834722359432",
            "extra": "mean: 1.36150950963156 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 783761.6807830937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015498008717197602",
            "extra": "mean: 1.2758980497756056 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6213014.314163612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.9524699983922 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3820694.0634623873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 261.73255000003337 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6983782.539570029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.18887999934304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9910795.8992069,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.90007000144396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4496443.111191186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 222.39800999841464 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4583925.7675189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.15362000097593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 141200.715249331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.0821171000034155 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 45341.55450681625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.054823899998155 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1946948.7613694463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 513.6242000003222 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1065534.1658082088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 938.4964200012291 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 74423.81916504627,
            "unit": "iter/sec",
            "range": "stddev: 0.00005401562666281085",
            "extra": "mean: 13.436558499938656 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 16503.186132331044,
            "unit": "iter/sec",
            "range": "stddev: 0.0001530636974050624",
            "extra": "mean: 60.59435990005113 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.472037867498893,
            "unit": "iter/sec",
            "range": "stddev: 0.42739467211432003",
            "extra": "mean: 404.52454759997636 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1905356.3396486496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 524.8362099996484 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1593733.5925116527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 627.4574400003985 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6263413.099152505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 159.65735999998287 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2282112.8768632184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 438.19041999995534 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2354918.199566512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 424.64319999908184 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 313147.7019853264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1933812499983105 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 63033.7500977812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.864516999999976 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 54032.07701784534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.507524699998612 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0069211093392045,
            "unit": "iter/sec",
            "range": "stddev: 0.002154040687286718",
            "extra": "mean: 332.5660912400053 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9626180.747325428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.88336000005438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4458350.535167032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.29819999842948 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 97409.73108413922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.26591479999297 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 99960.07434695099,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.003994159999365 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "1b32c94b8dc7794731ad9817428f1683c86b7bc8",
          "message": "Fix SimulatedExchange generate_account_state timestamp",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/389/commits/1b32c94b8dc7794731ad9817428f1683c86b7bc8"
        },
        "date": 1626219767010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.35688803933769314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.801999197999976 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.4791985547547966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.086817645999986 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.14870286154828888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.724820152000007 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7864873.297307522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.14762999962659 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7616338.233712768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.29668999908972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7063552.619402712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.57182000076318 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9588707.724051164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.28934000060508 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 214.6909127150529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.657858999962627 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 12302386.761517888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 81.28503999955683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 12899231.205700072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.52400000072157 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6424340.5414474225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.65799999990304 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 11804970.55366056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.7100800001499 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 3202929.682756196,
            "unit": "iter/sec",
            "range": "stddev: 2.587873684093999e-7",
            "extra": "mean: 312.21415986237844 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 1077890.164562452,
            "unit": "iter/sec",
            "range": "stddev: 4.489974190548268e-7",
            "extra": "mean: 927.738310336963 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 793178.3362799493,
            "unit": "iter/sec",
            "range": "stddev: 5.50863715829221e-7",
            "extra": "mean: 1.2607505201037839 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 812432.7163567451,
            "unit": "iter/sec",
            "range": "stddev: 5.114635895579608e-7",
            "extra": "mean: 1.2308711599951039 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4369042.154325893,
            "unit": "iter/sec",
            "range": "stddev: 2.0905577634404474e-7",
            "extra": "mean: 228.88312007012246 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1450711.0194481309,
            "unit": "iter/sec",
            "range": "stddev: 3.706912761737556e-7",
            "extra": "mean: 689.31716006432 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 3061074.527626636,
            "unit": "iter/sec",
            "range": "stddev: 2.649596380361787e-7",
            "extra": "mean: 326.6826700803449 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 5133689.492496291,
            "unit": "iter/sec",
            "range": "stddev: 1.7251176677420458e-7",
            "extra": "mean: 194.79167983604384 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1473831.2929413465,
            "unit": "iter/sec",
            "range": "stddev: 3.960600722295945e-7",
            "extra": "mean: 678.5037098813973 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 806484.9779654501,
            "unit": "iter/sec",
            "range": "stddev: 5.076527249347595e-7",
            "extra": "mean: 1.239948700002742 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 962867.3200967464,
            "unit": "iter/sec",
            "range": "stddev: 5.553196989171069e-7",
            "extra": "mean: 1.038564690200019 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 8529763.843267247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.23653999979433 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4991249.590802516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.35062999909314 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 9015226.2664418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.9234499995182 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11934441.724768506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.79109999964385 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5923425.976870945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 168.82122000083655 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 6329110.719466328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 158.00007999928312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 165627.64854149707,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.03763929999559 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 55289.19249879609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.086717400001362 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2202197.105624128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 454.091960000369 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1345766.873477775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 743.070749999788 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 72474.89721395666,
            "unit": "iter/sec",
            "range": "stddev: 0.00005636461156417098",
            "extra": "mean: 13.797880900028758 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 20073.036143475227,
            "unit": "iter/sec",
            "range": "stddev: 0.00012423169127373558",
            "extra": "mean: 49.81807399998388 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.9637807108952994,
            "unit": "iter/sec",
            "range": "stddev: 0.3559210523997578",
            "extra": "mean: 337.4068791000127 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2297426.0649238643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.2697199999511 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 2066097.0905275506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 484.0043600006538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7840943.635609263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 127.53567000004297 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2790920.6884481316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 358.3047000006445 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2856020.0332693844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 350.13759999969807 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 393489.424711904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.541364360000671 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 79926.24917249758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.51153420000719 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 67739.82903739405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.762363800002731 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.6626304643036023,
            "unit": "iter/sec",
            "range": "stddev: 0.004694196024976932",
            "extra": "mean: 273.027816959999 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10010482.977768794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.89528000005521 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 5574872.488727195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 179.3763000000581 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 115101.27058692228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.688001399991663 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 112957.22794251818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.852908469999647 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "9dfd9a5f5e7b14fe7ba50c71d8aee055d95e88e8",
          "message": "Fix SimulatedExchange generate_account_state timestamp",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/389/commits/9dfd9a5f5e7b14fe7ba50c71d8aee055d95e88e8"
        },
        "date": 1626224670500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10748078.0556311,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.0398899993179 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4355408.094971827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.5996100008324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 92317.57596939916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.832173500000408 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 93794.8926097819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.661561330000495 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.27948494534400636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.578010253000002 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3530210074367917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8326926129999492 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.10416459318363425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.600191096000117 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6061368.6909656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.97924000077546 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6362743.844232098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.16489999931582 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6232585.765828608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.44705000012982 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8017158.64354065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 124.73247000116315 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 192.45469808860594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.196028000000297 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10006264.922430161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.93739000037749 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11058036.223272754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.43196999982683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5445523.904613625,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.63705999945523 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9847030.322826274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.55345999919518 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2774733.6648885105,
            "unit": "iter/sec",
            "range": "stddev: 0.000002654497167018557",
            "extra": "mean: 360.39494984834164 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 937059.6254431944,
            "unit": "iter/sec",
            "range": "stddev: 0.000004196325714015587",
            "extra": "mean: 1.0671679505207976 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 710868.8823524211,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038751022285750214",
            "extra": "mean: 1.4067291800574822 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 732090.5971683558,
            "unit": "iter/sec",
            "range": "stddev: 0.000003486683745215777",
            "extra": "mean: 1.3659511594164542 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3589087.1335584815,
            "unit": "iter/sec",
            "range": "stddev: 0.000002498637876397782",
            "extra": "mean: 278.62238022862584 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1273739.4958464867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028240301084621115",
            "extra": "mean: 785.0898894639613 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2675597.3811799707,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015295064862829845",
            "extra": "mean: 373.7483102031547 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4314189.658213545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018885421624338827",
            "extra": "mean: 231.79324026614267 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1384438.2470946684,
            "unit": "iter/sec",
            "range": "stddev: 0.000003087070122713659",
            "extra": "mean: 722.314629849734 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 744089.3798227765,
            "unit": "iter/sec",
            "range": "stddev: 0.000004024899467582141",
            "extra": "mean: 1.3439245702420521 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 827538.686875058,
            "unit": "iter/sec",
            "range": "stddev: 0.000004271690426984648",
            "extra": "mean: 1.2084027198488911 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6813035.653650637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.77744999971765 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4106983.8068659166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 243.48768999971068 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7641710.749758372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.8607500004655 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11300215.189954925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.49389000033625 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4782922.746521181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.07717999989472 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5049926.349313956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 198.0226900013804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 137953.90248278924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.248798199998419 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 38906.60245977399,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.702578400000675 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1933092.9094214977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 517.3057099977996 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1159646.3570321978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 862.3318599984486 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 59673.399369797015,
            "unit": "iter/sec",
            "range": "stddev: 0.00006736099355079828",
            "extra": "mean: 16.75788559996363 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 13442.151040958528,
            "unit": "iter/sec",
            "range": "stddev: 0.00015817083947186516",
            "extra": "mean: 74.39285550005934 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.2868533106343065,
            "unit": "iter/sec",
            "range": "stddev: 0.4451020671493558",
            "extra": "mean: 437.2820921000084 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2107868.8387930198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 474.41281999908824 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1782113.0807000468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 561.1316200020156 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6739247.917530633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.38450999832276 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2378757.976711662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 420.38745000127165 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2397027.877202156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 417.1832999986691 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 334252.4953845379,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9917502900002546 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 53201.04036341727,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.796624899982817 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 41448.855006060665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.12611879999531 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.088809608552662,
            "unit": "iter/sec",
            "range": "stddev: 0.0178712610831887",
            "extra": "mean: 323.74931664000314 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "bf984e5dd386ade6835cf85be0e06f1749545558",
          "message": "Betfair fixes",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/390/commits/bf984e5dd386ade6835cf85be0e06f1749545558"
        },
        "date": 1626246074511,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28445289390400014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5155205710000246 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3905327700419346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.560604581000007 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.12180791778516643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.209646944000042 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5915057.642828497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 169.06005999999252 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5827570.691465788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.59809000077075 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5714738.648128966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 174.98613000043406 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6867340.897582741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.6167700007427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 163.9781089233995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.098374999965017 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9851612.063764729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.50622999844927 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9520610.598583082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 105.03528000072038 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4841969.7287957575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 206.5275199993266 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8908498.672120666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.25235999972938 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2519298.4532223484,
            "unit": "iter/sec",
            "range": "stddev: 2.9377191322957194e-7",
            "extra": "mean: 396.93590043725635 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 797045.0097451027,
            "unit": "iter/sec",
            "range": "stddev: 4.152326937024124e-7",
            "extra": "mean: 1.2546342901259777 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 647799.1115564228,
            "unit": "iter/sec",
            "range": "stddev: 6.158412773363226e-7",
            "extra": "mean: 1.5436884400742201 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 646184.1457576927,
            "unit": "iter/sec",
            "range": "stddev: 5.486395995166781e-7",
            "extra": "mean: 1.5475464796918459 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3420446.6379179526,
            "unit": "iter/sec",
            "range": "stddev: 2.674261040843339e-7",
            "extra": "mean: 292.3594798744489 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1147819.1583863066,
            "unit": "iter/sec",
            "range": "stddev: 4.2997412962124517e-7",
            "extra": "mean: 871.2173801018253 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2367071.0879422487,
            "unit": "iter/sec",
            "range": "stddev: 2.646140283323027e-7",
            "extra": "mean: 422.4630198450541 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3959734.569707168,
            "unit": "iter/sec",
            "range": "stddev: 1.1023524806207904e-7",
            "extra": "mean: 252.54217988504024 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1266086.3873914843,
            "unit": "iter/sec",
            "range": "stddev: 2.184530092092943e-7",
            "extra": "mean: 789.8355198813078 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 664036.9387237628,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015499693343222119",
            "extra": "mean: 1.5059403200098131 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 793783.481491711,
            "unit": "iter/sec",
            "range": "stddev: 6.547447749905971e-7",
            "extra": "mean: 1.2597893799966187 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6241069.419774655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.2289499987819 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3852730.7538929195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 259.5561600014662 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7444207.710354363,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.33263000024454 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10357093.95682659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.55218000034438 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5053506.271725995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.8824100001475 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4772550.731758663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.53155999904993 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 153884.99915465133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.498359200008963 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 48698.341541939466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.534580200001074 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1786349.6520023446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 559.8008200013282 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 975995.8886369294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.0245944799999052 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 61877.485808202415,
            "unit": "iter/sec",
            "range": "stddev: 0.00006519705999643625",
            "extra": "mean: 16.160966899974483 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17089.48248013378,
            "unit": "iter/sec",
            "range": "stddev: 0.00013972728806246765",
            "extra": "mean: 58.515522700145084 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.5361198365376807,
            "unit": "iter/sec",
            "range": "stddev: 0.41160800692420013",
            "extra": "mean: 394.3031341000051 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1936144.7083891062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 516.4903199988657 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1651971.280810153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 605.3373999998257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6585365.500372924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.8518599982599 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2220961.1604762604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 450.25550999980624 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2204689.7940820935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.5785500002021 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 317927.97538215446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.145366489998196 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 60865.305863259004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.429721100007555 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 52963.96686549123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.88076100001399 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.1556547068085328,
            "unit": "iter/sec",
            "range": "stddev: 0.007087420629705149",
            "extra": "mean: 316.89145134999535 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9889608.23696966,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 101.11624000046504 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4456690.638028199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.3817399994441 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 90232.05926128151,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.08253549998608 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 96621.25649901797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.349689460001628 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "bfb0c1b039395430577ffaa70eaacf39e3452f04",
          "message": "Fix SimulatedExchange generate_account_state timestamp",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/389/commits/bfb0c1b039395430577ffaa70eaacf39e3452f04"
        },
        "date": 1626249693672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2951488562758479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.388120871000069 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3991466477772187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5053448539999863 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.12529684537670535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.981046904999857 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6590175.379653429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.74103000163086 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6337078.187520655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.80142999801683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6620938.931241822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.03597999996055 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7715123.091740654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.61555999936536 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.46407309787136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.1552070001198445 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10623693.683909884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.12922000137769 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10652666.506150637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.87321000076554 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5199566.917660476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 192.32371000043713 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9253677.064241355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.0651500001295 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2159637.0431803297,
            "unit": "iter/sec",
            "range": "stddev: 4.088183355562393e-7",
            "extra": "mean: 463.0407702802586 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 825712.6927359138,
            "unit": "iter/sec",
            "range": "stddev: 6.253098417657602e-7",
            "extra": "mean: 1.2110750007809656 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 661599.1390367749,
            "unit": "iter/sec",
            "range": "stddev: 7.062821061267061e-7",
            "extra": "mean: 1.5114892704605154 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 658192.4649452309,
            "unit": "iter/sec",
            "range": "stddev: 6.85016037667091e-7",
            "extra": "mean: 1.5193124401434943 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3904115.089196537,
            "unit": "iter/sec",
            "range": "stddev: 2.724883651480615e-7",
            "extra": "mean: 256.13999002416676 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1192682.1843394337,
            "unit": "iter/sec",
            "range": "stddev: 5.525321380290337e-7",
            "extra": "mean: 838.446329735234 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2448784.169191945,
            "unit": "iter/sec",
            "range": "stddev: 3.4788646047784845e-7",
            "extra": "mean: 408.36591994548144 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4193105.7747258167,
            "unit": "iter/sec",
            "range": "stddev: 3.1679644036949126e-7",
            "extra": "mean: 238.4867097862298 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1108263.3915424133,
            "unit": "iter/sec",
            "range": "stddev: 5.549675338938554e-7",
            "extra": "mean: 902.3125798717047 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 649019.8810840673,
            "unit": "iter/sec",
            "range": "stddev: 7.316089665546546e-7",
            "extra": "mean: 1.5407848498102794 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 815114.9636801691,
            "unit": "iter/sec",
            "range": "stddev: 7.143335778907204e-7",
            "extra": "mean: 1.2268208100181255 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6940756.203695457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.07652000045346 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4280447.378640012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.62044000123205 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7634948.672130123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.97665000032066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10558183.72206685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.71326000038971 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4765266.089848662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.8518699995111 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4949775.861764004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.02935000043 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 149684.87740871933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.680701599998429 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 48279.72344797254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.712628999990557 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1791697.62795359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 558.1298899983267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1007436.2800828455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 992.6186100005908 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 57634.13844316719,
            "unit": "iter/sec",
            "range": "stddev: 0.00007400477237433827",
            "extra": "mean: 17.350827599966575 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 17978.08835982902,
            "unit": "iter/sec",
            "range": "stddev: 0.00013012552574216365",
            "extra": "mean: 55.62326650003797 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.657848211929519,
            "unit": "iter/sec",
            "range": "stddev: 0.39218108972560173",
            "extra": "mean: 376.24420970000756 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2064844.0742268793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 484.29807000047737 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1735755.0703731922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 576.118150002003 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6749286.4823309155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.16380999945977 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2462666.650806843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 406.0638900000413 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2368484.2849385785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 422.2109499983162 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 314026.4748437095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1844448799984093 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 61283.59494665755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.317580600002657 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 53534.40284003077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.679577000011705 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0547007836498734,
            "unit": "iter/sec",
            "range": "stddev: 0.005541725617828875",
            "extra": "mean: 327.3643053199998 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10099628.798221264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.01354000021456 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4358891.037088828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 229.41615000036109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 90491.02402344818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.050819799993405 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88971.33360178908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.239575260001402 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "Christopher Sellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d981e21a7e24bcbe94066618c4bb00d872ddc120",
          "message": "Fixes and refinements\n\n- Fix backtest log timestamping.\r\n- Add check_clock method for `Logger`.\r\n- Cleanup base currency check for PnL calcs.\r\n- Improve `Account` repr.\r\n- Refine logging.",
          "timestamp": "2021-07-14T18:34:16+10:00",
          "tree_id": "4975e401a0eb2bbc74bc7ce2c4bdba3f706ea3ec",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/d981e21a7e24bcbe94066618c4bb00d872ddc120"
        },
        "date": 1626252721744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2588059654322682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.863898570999936 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.33777109404142097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.960584898000093 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.10139461803799929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.862456404 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6818507.556859414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.65966000052322 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6208391.361110428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.07231999967553 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6351821.6866043275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.4351499994009 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7349527.429039587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.0631700003978 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 188.42536876247357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.307141000002957 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10883622.835877499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 91.88117000007878 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 11619002.227340506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.06591000102526 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5457999.276486431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 183.21732000003976 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9781133.445579603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 102.23763999988478 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2406160.1156702368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013274507836737654",
            "extra": "mean: 415.5999401234567 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 827099.593988649,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036482406066219663",
            "extra": "mean: 1.2090442399778567 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 590381.2431126738,
            "unit": "iter/sec",
            "range": "stddev: 0.000013083665743158184",
            "extra": "mean: 1.693820750008399 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 627698.8775596952,
            "unit": "iter/sec",
            "range": "stddev: 0.000002826262844300197",
            "extra": "mean: 1.593120580185996 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4054847.3248808617,
            "unit": "iter/sec",
            "range": "stddev: 4.401978819001483e-7",
            "extra": "mean: 246.61840998646767 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1249285.8454015835,
            "unit": "iter/sec",
            "range": "stddev: 0.000002508737677668694",
            "extra": "mean: 800.4573202208576 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2707155.754854345,
            "unit": "iter/sec",
            "range": "stddev: 2.7213360929035655e-7",
            "extra": "mean: 369.39137994068005 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4270530.051333301,
            "unit": "iter/sec",
            "range": "stddev: 2.4073947741390506e-7",
            "extra": "mean: 234.1629699310488 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1363450.314792276,
            "unit": "iter/sec",
            "range": "stddev: 0.000002211062316728586",
            "extra": "mean: 733.4333999199316 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 722198.6019306828,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031491294060260126",
            "extra": "mean: 1.38466066996898 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 821066.8073760684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027581580828357004",
            "extra": "mean: 1.2179276899473734 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6881668.336628544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.31359999978122 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4121025.9607420075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.65801999945324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7363924.252918047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.7971599998109 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11247830.996465243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.90602999940711 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4863284.796762489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 205.62234000067292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4965560.11641511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.3871500003006 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 144410.28579573828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.924714500007667 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 41799.03637757068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.923996499991063 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2046101.9507147765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 488.73419999949874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1147414.568617329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 871.5245799999138 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 51335.349484893115,
            "unit": "iter/sec",
            "range": "stddev: 0.00008508366413681103",
            "extra": "mean: 19.47975439992433 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12893.72717230377,
            "unit": "iter/sec",
            "range": "stddev: 0.0001629159871688623",
            "extra": "mean: 77.55709320017559 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.258459135819809,
            "unit": "iter/sec",
            "range": "stddev: 0.4471440363088957",
            "extra": "mean: 442.7797625999574 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2073975.1254952939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 482.1658599985312 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1752292.8357471004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 570.680870000615 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6590746.539144999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.7278799997257 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2302085.7195860944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 434.38869000056 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2398709.110712841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 416.89089999863427 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 332140.89437993895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0107704800002466 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 44923.57130353441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.260028999994574 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 38811.99901980882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.765227900001264 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.3662499208185284,
            "unit": "iter/sec",
            "range": "stddev: 0.0023480663857230093",
            "extra": "mean: 297.06647560999954 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10416410.59646799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.00236000096629 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4368349.924414581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 228.91938999919148 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 90040.9001784929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.106064000000515 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 97150.3359256024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.29332519000036 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "b717427be314d5d543fca184aee82e03b69afeca",
          "message": "Betfair fixes",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/390/commits/b717427be314d5d543fca184aee82e03b69afeca"
        },
        "date": 1626254803146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65017.78571290924,
            "unit": "iter/sec",
            "range": "stddev: 0.00006111194206869099",
            "extra": "mean: 15.380406899976151 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12482.913497235422,
            "unit": "iter/sec",
            "range": "stddev: 0.00021381827911828543",
            "extra": "mean: 80.10950329996831 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.1918011104298403,
            "unit": "iter/sec",
            "range": "stddev: 0.46755401150839",
            "extra": "mean: 456.2457767000069 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1790812.2805748614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 558.4058199997344 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1498265.1587757901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 667.4385999986043 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6406144.56886806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.10013000014078 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2232103.2472798983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 448.0079499990097 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2214593.145686689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 451.55021000027773 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 315197.77281257795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1726112499995907 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 60141.27498229335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.627515799996218 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 51524.44313656485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.40826410000227 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.890647837981026,
            "unit": "iter/sec",
            "range": "stddev: 0.00024341903695524576",
            "extra": "mean: 345.94321275000084 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9559456.281172536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.6084599988717 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4117389.7461833083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.8723200000604 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 86074.08572147507,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.617898600002263 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 88429.28096312693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.308471460001783 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.22694230840096682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.406406222999976 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.28295224294835397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5341653049999877 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.10414555424736503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.601946114999919 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 5798637.668065366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.4543000000267 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6020656.269635264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.094849998899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 5793833.055617828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.59731000194733 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6967561.264348743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.52224000049318 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 159.95278194001068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.251844999951572 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 9910881.354928253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.89919999927588 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9674045.609523783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.36936999919999 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5143083.938146072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 194.43587000068874 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8932320.61077193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.95298999837178 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2225031.5995893856,
            "unit": "iter/sec",
            "range": "stddev: 8.943446804713893e-8",
            "extra": "mean: 449.4318193883373 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 733181.9228945796,
            "unit": "iter/sec",
            "range": "stddev: 3.330947682620894e-7",
            "extra": "mean: 1.3639179701158355 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 604657.2552575283,
            "unit": "iter/sec",
            "range": "stddev: 2.834121271312364e-7",
            "extra": "mean: 1.653829489855525 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 599641.1603191021,
            "unit": "iter/sec",
            "range": "stddev: 3.0159044086163013e-7",
            "extra": "mean: 1.667664040053296 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3524655.7619200745,
            "unit": "iter/sec",
            "range": "stddev: 1.3055311571188673e-7",
            "extra": "mean: 283.7156498526383 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1099083.5951323211,
            "unit": "iter/sec",
            "range": "stddev: 1.9005960989324345e-7",
            "extra": "mean: 909.848899964345 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2231187.629797778,
            "unit": "iter/sec",
            "range": "stddev: 1.4525211627758117e-7",
            "extra": "mean: 448.1918000283258 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3895924.8852151013,
            "unit": "iter/sec",
            "range": "stddev: 9.389798015074398e-8",
            "extra": "mean: 256.6784600480787 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1162582.5010338486,
            "unit": "iter/sec",
            "range": "stddev: 1.8862167414173277e-7",
            "extra": "mean: 860.1540098106852 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 661582.8479813926,
            "unit": "iter/sec",
            "range": "stddev: 2.40483782940753e-7",
            "extra": "mean: 1.511526489919106 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 755098.2800918717,
            "unit": "iter/sec",
            "range": "stddev: 3.90142222126243e-7",
            "extra": "mean: 1.3243309200470321 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6379903.609881285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 156.74217999958273 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3809876.204948684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 262.4757199987471 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7127278.439432664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.30601000058596 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10093764.00182372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 99.07107000117321 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4455930.645365915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 224.4200100017224 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4581448.906998519,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.27156000199466 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 141266.58404359067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.078814900000907 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 46882.4099846382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.32996150000963 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1804707.12012461,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 554.1065300008086 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1029553.0314931757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 971.2952800009588 nsec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "3049ae83ae66ce923a7bb5b8ce336eb433c63ee9",
          "message": "Betfair fixes",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/390/commits/3049ae83ae66ce923a7bb5b8ce336eb433c63ee9"
        },
        "date": 1626256222026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 126676.46323328331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.894126299993331 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34659.97170956587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.85172579999562 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1819429.218860883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 549.6229199980007 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1047342.7077410618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 954.7973100006856 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 68888.80124729058,
            "unit": "iter/sec",
            "range": "stddev: 0.000056771257539658045",
            "extra": "mean: 14.516147499944053 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12354.473063559752,
            "unit": "iter/sec",
            "range": "stddev: 0.00013557292459596024",
            "extra": "mean: 80.94234329989831 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.2173044690459602,
            "unit": "iter/sec",
            "range": "stddev: 0.44425921585401307",
            "extra": "mean: 450.99805369998194 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1685420.3671855556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 593.3237899989763 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1553824.8019028963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 643.5731999999916 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 6211438.612628722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.9933000008823 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2296509.138462424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 435.4435100003684 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2288133.0122814956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 437.03753000045253 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 296383.0377320989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.374012249998941 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 47398.08115032478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.09790049998992 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 40757.97076529217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.535078200005955 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.070965108477101,
            "unit": "iter/sec",
            "range": "stddev: 0.0052796764411604065",
            "extra": "mean: 325.6305313400003 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10231875.792310826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.7337900008024 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4274857.97853855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.92589999957636 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 84610.34242480603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.818886099990777 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 91467.84435491393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.932803840000815 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.23913333457580369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.181767472000047 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.2766227190214699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6150320680001187 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.09190187342043421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.881171000999984 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6018282.941759606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.16034999969997 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6074030.035118598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 164.63533999967694 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6023793.381490961,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.008349999629 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 8259958.060778051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.06599000162532 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 168.31197229766485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.941348000078506 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10740127.9965814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.10875999972268 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10461479.941609785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 95.58877000017674 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5248915.377239711,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.5155500003275 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8820292.883165034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.3749199993872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2050818.6706831364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032821569631134613",
            "extra": "mean: 487.6101501781705 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 787543.9094991509,
            "unit": "iter/sec",
            "range": "stddev: 0.000004618605525282765",
            "extra": "mean: 1.26977046985985 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 598414.7764729615,
            "unit": "iter/sec",
            "range": "stddev: 0.000006370140831566371",
            "extra": "mean: 1.6710817301236602 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 601337.5733900162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041392389467123045",
            "extra": "mean: 1.6629594494861522 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3675535.4918642812,
            "unit": "iter/sec",
            "range": "stddev: 9.012705494571219e-7",
            "extra": "mean: 272.0691997706126 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1216982.8438946302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035811426281939747",
            "extra": "mean: 821.7042705382482 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2608384.5069663893,
            "unit": "iter/sec",
            "range": "stddev: 0.000001213554454680398",
            "extra": "mean: 383.37905984690224 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4028896.0485666194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011308798453363768",
            "extra": "mean: 248.20694997970347 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1146466.5468910097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017592267609129259",
            "extra": "mean: 872.2452501660882 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 638945.1740707129,
            "unit": "iter/sec",
            "range": "stddev: 0.000002739128913470798",
            "extra": "mean: 1.5650795100759751 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 796603.72123362,
            "unit": "iter/sec",
            "range": "stddev: 0.000005582157846426788",
            "extra": "mean: 1.2553293103519536 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6241679.06157849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.21330000057787 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3984729.877572288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 250.95803999874988 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7115556.2781567965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.53715000045486 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10843899.357752973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.21775000014532 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5062070.859764115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.54761000058352 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4944799.961847362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 202.23264999913226 nsec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "60cb92d6a3be282c17ee48bc9a0c8d2733c6a27a",
          "message": "Betfair fixes",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/390/commits/60cb92d6a3be282c17ee48bc9a0c8d2733c6a27a"
        },
        "date": 1626257987714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.28399725212211807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5211608299998716 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.37861470314752166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6412075170001117 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.11710873585273296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.53907262100006 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6233251.253816278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.42992000166123 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5747225.526896147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 173.9969999994173 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6343651.726952315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.6379099992664 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 6999427.866839083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.86881999851175 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 162.5980303501858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.150136000087514 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10109939.526440693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.91255999946225 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9559900.424054706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.60360000024593 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 4978662.696336682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 200.85715000050186 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8960361.511197817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.60263999954623 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2477263.6123855775,
            "unit": "iter/sec",
            "range": "stddev: 2.816232046939549e-7",
            "extra": "mean: 403.67121004010187 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 735948.9823169784,
            "unit": "iter/sec",
            "range": "stddev: 4.911392273813405e-7",
            "extra": "mean: 1.3587898400942322 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 592673.5299944134,
            "unit": "iter/sec",
            "range": "stddev: 4.707039229812801e-7",
            "extra": "mean: 1.687269549577195 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 580181.4809392228,
            "unit": "iter/sec",
            "range": "stddev: 4.0061657006510263e-7",
            "extra": "mean: 1.7235986201785636 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3535223.0908503975,
            "unit": "iter/sec",
            "range": "stddev: 2.0811769015814253e-7",
            "extra": "mean: 282.867579867343 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1118366.8146301778,
            "unit": "iter/sec",
            "range": "stddev: 4.5503980254023073e-7",
            "extra": "mean: 894.1610095348551 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2281785.9658180973,
            "unit": "iter/sec",
            "range": "stddev: 2.408305439248912e-7",
            "extra": "mean: 438.25319945881347 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4023329.516619921,
            "unit": "iter/sec",
            "range": "stddev: 2.3805656179709715e-7",
            "extra": "mean: 248.55036006101724 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1160094.825894622,
            "unit": "iter/sec",
            "range": "stddev: 3.65305539294077e-7",
            "extra": "mean: 861.9985001905661 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 634546.417724118,
            "unit": "iter/sec",
            "range": "stddev: 4.976020716897178e-7",
            "extra": "mean: 1.5759288399840443 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 742310.760708272,
            "unit": "iter/sec",
            "range": "stddev: 6.084617885631219e-7",
            "extra": "mean: 1.3471446905145967 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6483953.608800402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.22689000160972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3874775.3211582415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 258.0794799996511 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 7512427.80934324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.1127599996762 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10284303.396660658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.23556000153621 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4691218.817132722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 213.16421999927115 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4647807.073976886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 215.15523000061876 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 144288.0765701444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.930579599998055 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 47617.84538185033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.000530199989953 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1894211.9739116407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 527.9240200002278 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1075363.2641622073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 929.9183200005245 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 53900.4630818688,
            "unit": "iter/sec",
            "range": "stddev: 0.00007933905549385335",
            "extra": "mean: 18.552716300064276 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 15942.004467154467,
            "unit": "iter/sec",
            "range": "stddev: 0.0001606405246998832",
            "extra": "mean: 62.72736920004717 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.433419439458241,
            "unit": "iter/sec",
            "range": "stddev: 0.4322964082019463",
            "extra": "mean: 410.9443624000278 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1955233.2531662604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 511.447930000486 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1620274.0878338614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 617.1795299997029 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5991433.687802835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.90495999910127 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2169462.626708127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.94364000055066 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2244630.8710121177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 445.50755000045683 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 320186.48890616524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1231798800013166 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 63981.084529756496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.629619400010597 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 55470.61432831836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.027563100008592 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.918849623134784,
            "unit": "iter/sec",
            "range": "stddev: 0.0027698382815224735",
            "extra": "mean: 342.60072601000275 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 9704453.771687867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 103.04547000032471 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4318515.197744556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 231.56106999977055 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 87430.44798580463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.437662999992426 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 90985.58497180046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.990752000000157 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "f3810a23c90be269ff404fce31814c8dbb91bfa7",
          "message": "Betfair fixes",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/390/commits/f3810a23c90be269ff404fce31814c8dbb91bfa7"
        },
        "date": 1626259661288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 168314.94405591156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.941243100005522 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 54353.25048224498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.398163700010173 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 2058845.7649447473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 485.7090400003017 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 1220578.4746144097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 819.2836600005649 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 92342.95112065662,
            "unit": "iter/sec",
            "range": "stddev: 0.00004209299560520365",
            "extra": "mean: 10.829196899862836 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 19169.54340491216,
            "unit": "iter/sec",
            "range": "stddev: 0.00010918291827006879",
            "extra": "mean: 52.166083399970375 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.0320476374367615,
            "unit": "iter/sec",
            "range": "stddev: 0.33600003598897876",
            "extra": "mean: 329.81012159999636 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2042064.319555936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 489.70053999937596 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1969367.2797090753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 507.77730000049814 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7259033.8313180795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.7593799998067 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2532829.7156067356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.8153299995738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2747937.2403005133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 363.90933000006953 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 362024.3429584397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7622451900003853 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 73485.8001037096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.60807119999663 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 65291.89361311532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.31583700000283 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.362275204629051,
            "unit": "iter/sec",
            "range": "stddev: 0.007853656100494546",
            "extra": "mean: 297.4176529700003 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11312658.69542315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.396549999743 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4586733.058077462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 218.0201000010129 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 102180.66829623081,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.786587000007785 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 104046.09241892789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.611125000001266 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2999031055652076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.334410286000093 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.3783108266859209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6433290550000947 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.13149101214849884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.605082534999838 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6188553.082844657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.58866000068883 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6126143.919553152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 163.23481999961587 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6237971.242050158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.30853000074785 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7558017.420123498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.30983000084962 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 168.48418986607794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.935274999956164 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11282277.04338403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.63458999940121 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 9937418.11570241,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 100.62975999971968 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5249110.721899505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 190.50846000027377 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9096395.044176543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.93365999866 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2863135.6437704205,
            "unit": "iter/sec",
            "range": "stddev: 3.196404995556e-7",
            "extra": "mean: 349.26742020616075 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 845973.2453342971,
            "unit": "iter/sec",
            "range": "stddev: 6.048906966234919e-7",
            "extra": "mean: 1.1820704797878534 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 745041.6731319259,
            "unit": "iter/sec",
            "range": "stddev: 6.464165371784684e-7",
            "extra": "mean: 1.3422068000522813 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 717438.9145183279,
            "unit": "iter/sec",
            "range": "stddev: 6.086647653000814e-7",
            "extra": "mean: 1.3938468903256762 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 4080896.596567623,
            "unit": "iter/sec",
            "range": "stddev: 2.6090825454848744e-7",
            "extra": "mean: 245.04418975993755 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1290843.4149429144,
            "unit": "iter/sec",
            "range": "stddev: 4.4024295984362614e-7",
            "extra": "mean: 774.6873001201493 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2839077.887631067,
            "unit": "iter/sec",
            "range": "stddev: 3.1733578346587634e-7",
            "extra": "mean: 352.2270397570537 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4710758.488068094,
            "unit": "iter/sec",
            "range": "stddev: 2.742560940518484e-7",
            "extra": "mean: 212.28003994110622 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1521565.536107296,
            "unit": "iter/sec",
            "range": "stddev: 4.0613023781960667e-7",
            "extra": "mean: 657.2178301030362 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 781636.8369821316,
            "unit": "iter/sec",
            "range": "stddev: 6.474794707367878e-7",
            "extra": "mean: 1.279366519956966 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 836289.2535045764,
            "unit": "iter/sec",
            "range": "stddev: 5.7099440008024e-7",
            "extra": "mean: 1.1957585199252208 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 7762620.915370618,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 128.82247000106872 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 4288356.464632973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 233.18957000128648 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8504386.307364361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.58637999946586 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 10804858.210201144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.55095999833429 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 5833162.567541981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.4335899987418 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 5368521.3422039775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 186.27103000198986 nsec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "committer": {
            "name": "nautechsystems",
            "username": "nautechsystems"
          },
          "id": "3ebe21818723e1f8dfc696ddb35c9472cc04b545",
          "message": "Betfair fixes",
          "timestamp": "2021-07-09T19:32:06Z",
          "url": "https://github.com/nautechsystems/nautilus_trader/pull/390/commits/3ebe21818723e1f8dfc696ddb35c9472cc04b545"
        },
        "date": 1626303192707,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 0.2382376975450252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.197488518 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 0.319289860014795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1319503850002093 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 0.0960550854460171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.41069294099998 sec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 7312237.285041514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.7570499996873 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 6456989.70101725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.87093000047025 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 7097533.309037658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.89402000081463 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7895954.689191241,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.64713000049231 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 155.20587671313154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.4430550000906806 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10258585.07623722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.47933000198827 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10386661.117540257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.27732999888394 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5784867.711665643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 172.8647999993882 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 9162859.193186132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 109.13624000068012 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2818827.02153977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010342085115612794",
            "extra": "mean: 354.7574903882378 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 828789.611783931,
            "unit": "iter/sec",
            "range": "stddev: 0.000006708806587029654",
            "extra": "mean: 1.2065788298764346 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 599089.9726878979,
            "unit": "iter/sec",
            "range": "stddev: 0.000009137585683609446",
            "extra": "mean: 1.6691983601617721 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 614565.2013228738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040314619172390286",
            "extra": "mean: 1.6271666502552762 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 2924946.0313531924,
            "unit": "iter/sec",
            "range": "stddev: 0.000014559304618850129",
            "extra": "mean: 341.88664996918305 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1078082.7060390476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021577821767659347",
            "extra": "mean: 927.5726197984113 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2325066.690115287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013526978806483676",
            "extra": "mean: 430.09519006545816 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3530374.8471993785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026613018618314375",
            "extra": "mean: 283.2560403021489 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1157161.966538591,
            "unit": "iter/sec",
            "range": "stddev: 0.00000425315940181063",
            "extra": "mean: 864.183259488982 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 646895.659444815,
            "unit": "iter/sec",
            "range": "stddev: 0.000002290983630326209",
            "extra": "mean: 1.5458443497027474 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 702732.4961286492,
            "unit": "iter/sec",
            "range": "stddev: 0.000011761199400245913",
            "extra": "mean: 1.4230165895401115 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 4765591.287196319,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 209.83754999861048 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3206877.1866094866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 311.82983999997305 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6188927.66185125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 161.57887999952436 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 9005096.254229568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.04822999868702 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4037577.246919304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 247.67328000052657 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4126922.341088204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 242.3113199984073 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_mean",
            "value": 110059.2503974201,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.08601500000259 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_np_std",
            "value": 34282.22004593181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.169639500014455 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_mean",
            "value": 1680263.6400842818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.1447000006738 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_functions.py::TestFunctionPerformance::test_fast_std",
            "value": 958608.7412257494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.043178469999475 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 61466.65902451568,
            "unit": "iter/sec",
            "range": "stddev: 0.00006542933549414662",
            "extra": "mean: 16.268982499946105 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 12123.02915020551,
            "unit": "iter/sec",
            "range": "stddev: 0.00015575845302841137",
            "extra": "mean: 82.48763470003269 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 2.143791681217638,
            "unit": "iter/sec",
            "range": "stddev: 0.46523203673172214",
            "extra": "mean: 466.46323370002847 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2004191.1645633255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 498.9544000000023 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1769504.6123174382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 565.1299200007998 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5969052.017179279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 167.5307900018197 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2458348.991992935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 406.77706999986185 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2141489.816905895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 466.9646299998931 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 299355.49659656134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3405098999992333 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 45868.33496281265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.801532600011342 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 35164.999257845644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.43736730001183 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 2.804742146740756,
            "unit": "iter/sec",
            "range": "stddev: 0.019377849822506524",
            "extra": "mean: 356.5390141700004 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 8952291.804625018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.70323999976972 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 3901552.2871964485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 256.3082400001804 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 68520.7922542066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.594110299981367 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 83425.57358348905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.986732090001624 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}