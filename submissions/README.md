# LiRo Evaluation Script #

LiRo benchmark provides an evaluation script to allow you to calculate the scores before submission and also to make the evaluation more transparent.

However, to use the script you'll need to [setup a virtual environment](https://docs.python.org/3/library/venv.html). You _can_ install the dependencies from [requirements.txt](../requirements.txt "Requirements file") to be available system-wide but that is not a recommended approach.

After setting the virtual environment (given that you've already cloned this repository) and activating it you can use the evaluation script as follows:
```sh
python eval-results.py <metric> --input-file <path-to-input-file> [--no-header-row] [--predictions-column] [<metric-args>]
```
where:
- `metric` is the metric to evaluate with. To get a list of supported metrics run `python eval-results.py --help`.
- `<path-to-input-file>` is the path to the `CSV` file containing predictions and true values.
- `--no-header-row` is a flag which signals that the input file has no header row, i.e. the first row of the file contains predictions and true values, *not column headers*.
- `--predictions-column` allows you to specify whether the predictions column is the first or the second column in the input file. Possible values are `0` and `1`.
- `<metric-args>` represents the additional arguments available and/or needed for the chosen metric. To see the full list of arguments run `python eval-results.py <metric> --help`.
