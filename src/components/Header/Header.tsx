import React, { PureComponent } from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { Props } from './interfaces'

class Header extends PureComponent<Props> {
  render(): React.ReactNode {
    const { onClickMenu, title, classes, open } = this.props;

    return (
      <AppBar
        position="static"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          { !open && (
            <IconButton color="inherit" aria-label="Menu" onClick={onClickMenu}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit">
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header)
