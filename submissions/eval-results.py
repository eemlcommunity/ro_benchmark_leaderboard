from argparse import ArgumentParser
import logging
import pandas as pd


def load_data(file_name, has_header, predictions_column):
    """Reads the predictions and true values from the input file.

    Parameters
    ----------
    file_name: str, required
        The file name containing predictions and true values.
    has_header: boolean, required
        Specifies if the first row of the file is header row.
    predictions_column: int, required
        Specifies the zero-based index of the predictions column.

    Returns
    -------
    (predictions, true_values), tuple of lists representing predictions and true values.
    """
    header = 0 if has_header else None
    logging.info("Reading data from input file {} with header={}.".format(
        file_name, header))
    df = pd.read_csv(file_name, header=header)

    def load_column(df, index, col_type):
        logging.info("Index of {} column is {}.".format(col_type, index))
        col = df.columns[index]
        return df[col].to_list()

    predictions = load_column(df, predictions_column, "predictions")

    true_vals_column = 1 if predictions_column == 0 else 0
    true_values = load_column(df, true_vals_column, "true values")
    return predictions, true_values


def eval_f1_score(args):
    logging.info(
        "Evaluating the results from file {} with F1 metric. Average is {}".
        format(args.input_file, args.average))
    load_data(args.input_file, not args.no_header_row, args.predictions_column)


def parse_arguments():
    root_parser = ArgumentParser()
    root_parser.add_argument(
        '--input-file',
        help=
        "The name of the input CSV file containing predictions and true labels"
    )
    root_parser.add_argument(
        '--no-header-row',
        help=
        "When provided, specifies that the input file does not have a header row; i.e. the first row of the file contains predictions and true labels.",
        action='store_true')
    root_parser.add_argument(
        '--predictions-column',
        help=
        "Zero-based index of the column containing the predictions of the model. Default is 0.",
        type=int,
        default=0)

    root_parser.add_argument(
        '--log-level',
        help="The level of details to print when running.",
        choices=['debug', 'info', 'warning', 'error', 'critical'],
        default='info')

    subparsers = root_parser.add_subparsers()
    f1 = subparsers.add_parser('f1',
                               help="Compute the F1 score for the input file.")
    f1.set_defaults(func=eval_f1_score)
    f1.add_argument(
        '--average',
        help="The type of average to perform on the data.",
        choices=['binary', 'micro', 'macro', 'weighted', 'samples'],
        default=None)
    return root_parser.parse_args()


if __name__ == '__main__':
    args = parse_arguments()
    logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s',
                        level=getattr(logging, args.log_level.upper()))
    args.func(args)
    logging.info("Evaluation script finished.")
