// app/javascript/routes.js
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import Isps from './bundles/isps/index';
import IspDetails from './bundles/isps/IspDetails';
import CreateIsp from './bundles/isps/CreateIsp';
import UpdateIsp from './bundles/isps/UpdateIsp';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Isps />
      </Route>
      <Route
        path="/isps/new"
        exact
        component={CreateIsp}
       />
      <Route
        path="/isps/:id"
        exact
        component={IspDetails}
       />
      <Route
        path="/isps/:id/edit"
        exact
        component={UpdateIsp}
       />
    </Switch>
  );
}

