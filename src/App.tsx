import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import * as routes from './constants/routes';

import HomeView from './views/Home';
import AnalysisView from './views/Analysis';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path={routes.home.path} children={HomeView} exact />
            <Route path={routes.analysis.path} children={AnalysisView}/>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
