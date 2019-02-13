import { createStyles, Theme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export default (theme: Theme & ThemeOptions) => createStyles({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.drawerWidth,
  },
  title: {
    flexGrow: 1,
    paddingRight: theme.spacing.unit * 2
  }
});
