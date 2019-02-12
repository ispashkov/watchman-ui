import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import { Props } from './interfaces';

const Content: React.FunctionComponent<Props> = ({ children, classes, open }) => (
  <main className={classNames(classes.content, {
    [classes.contentShift]: open,
  })}>
    { React.Children.toArray(children) }
  </main>
);

export default withStyles(styles)(Content)
