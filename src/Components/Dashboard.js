import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import UrlBuilder from "./UrlBuilder";
import TaskDetails from "./TaskDetails";
import DatasetDetails from "./DatasetDetails";
import AboutPage from "./AboutPage";

const Dashboard = (props) => {
  const { location } = props;
  return (
    <Switch location={location}>
      <Route exact path={UrlBuilder.taskUrlTemplate} component={TaskDetails} />
      <Route
        exact
        path={UrlBuilder.datasetUrlTemplate}
        component={DatasetDetails}
      />
      <Route exact path={UrlBuilder.aboutPageUrl} component={AboutPage} />
      <Route path="/" component={Homepage} />
    </Switch>
  );
};

export default Dashboard;