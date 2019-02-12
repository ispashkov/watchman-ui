import React from 'react';
import Paper from "@material-ui/core/Paper";
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing.unit * 3
  }
});

interface Props extends WithStyles<typeof styles> {}

const Panel: React.FunctionComponent<Props> = ({ children, classes }) => (
  <Paper className={classes.root} elevation={1}>
    { children }
  </Paper>
);

export default withStyles(styles)(Panel)
