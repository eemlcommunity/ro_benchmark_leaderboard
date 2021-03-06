import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import data from '../data/datasets.json';
import './Datasets.scss';
import UrlBuilder from './UrlBuilder.js';
import ContactEmail from './ContactEmail';

class Datasets extends React.Component {
  constructor(props) {
    super(props);
    this.urlBuilder = new UrlBuilder();
  }

  renderDataset(dataset) {
    return (
      <div className="row dataset-row">
        <div className="row dataset-title">
          <h2>
            <a href={this.urlBuilder.buildDatasetUrl(dataset)}>{dataset.dataset_name}</a>
          </h2>
        </div>
        <div className="row dataset-description">{ReactHtmlParser(dataset.short_description)}</div>
        <div className="row dataset-info">
          <ul>
            <li>
              <span>area:</span> {dataset.area}
            </li>
            <li>
              <span>task:</span> <a href={this.urlBuilder.buildTaskUrl({ id: dataset.task_id })}>{dataset.task}</a>
            </li>
            <li>
              <span>submissions:</span> {dataset.models.length}
            </li>
            <li>
              <span>preferred metric:</span> {dataset.preferred_metric}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row header-row">
            <h1>Datasets</h1>
            <p>
              LiRo Benchmark contains {data.datasets.length} datasets. If you would like to add another dataset please
              send us an email at <ContactEmail />.
            </p>
          </div>
          {data.datasets.map((ds) => this.renderDataset(ds))}
        </div>
      </>
    );
  }
}

export default Datasets;
