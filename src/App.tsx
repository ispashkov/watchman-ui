import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import * as routes from './constants/routes';

import HomeView from './views/Home/Home';
import AnalysisView from './views/Analysis';
import SettingsView from './views/Settings';
import UsersView from './views/Users';
import AdminView from './views/Admin';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path={routes.home.path} component={HomeView} exact />
            <Route path={routes.analysis.path} component={AnalysisView} />
            <Route path={routes.settings.path} component={SettingsView} />
            <Route path={routes.users.path} component={UsersView} />
            <Route path={routes.admin.path} component={AdminView} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
