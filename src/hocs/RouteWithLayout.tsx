import React, { FunctionComponent } from 'react';
import {Route, RouteComponentProps } from 'react-router-dom';

type RouteWithLayout = FunctionComponent<RouteComponentProps<{}> > | React.ComponentClass<RouteComponentProps<{}>>

interface P {
  layout: RouteWithLayout,
  component: RouteWithLayout
}

const RouteWithLayout: React.FunctionComponent<P> = ({ layout, component, ...rest }) => (
  <Route {...rest} render={(props: RouteComponentProps) => (
    React.createElement(layout, props, React.createElement(component, props))
  )}/>
);

export default RouteWithLayout;
