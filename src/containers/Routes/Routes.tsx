import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login';
import Main from '../Main';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/main" component={Main} exact />
      <Redirect from="*" to="/main" />
    </Switch>
  </Router>
);

export default Routes;
