import React, { PureComponent } from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { Props } from './interfaces'

class Header extends PureComponent<Props> {
  render(): React.ReactNode {
    const { onClickMenu, title, classes, open, logout } = this.props;

    return (
      <AppBar
        position="static"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          {/*{ !open && (*/}
            {/*<IconButton color="inherit" aria-label="Menu" onClick={onClickMenu}>*/}
              {/*<MenuIcon />*/}
            {/*</IconButton>*/}
          {/*)}*/}
          <Typography variant="h6" color="inherit" className={classes.title}>
            { title }
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            aria-label="Выход"
            onClick={logout}
          >
            <ExitToApp />
            Выход
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header)
