import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import store from './store';
import history from './utils/history';
import BaseLayout from './layouts/Base';
import * as routes from './constants/routes';


import HomeView from './views/Home/Home';
import AnalysisView from './views/Analysis';
import SettingsView from './views/Settings';
import UsersView from './views/Users';
import AdminView from './views/Admin';
import Auth from './containers/AuthContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router history={history}>
            <Switch>
              <Route path={routes.home.path} component={BaseLayout(HomeView)} exact />
              <Route path={routes.analysis.path} component={BaseLayout(AnalysisView)} />
              <Route path={routes.settings.path} component={BaseLayout(SettingsView)} />
              <Route path={routes.users.path} component={BaseLayout(UsersView)} />
              <Route path={routes.admin.path} component={BaseLayout(AdminView)} />
              <Route path={routes.auth.path} component={Auth}/>
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
