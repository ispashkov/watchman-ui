import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Props } from './interfaces';
import * as routes from '../../constants/routes';
import { RouteInterface } from '../../constants/routes';

const menu = [routes.home, routes.analysis, routes.settings, routes.users, routes.admin];

const Sidebar: React.FunctionComponent<Props> = ({ open, onClose, classes }) => (
  <Drawer
    anchor="left"
    variant={"persistent"}
    open={open}
    onClose={onClose}
    className={classes.root}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={onClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <List>
      { menu.map((item: RouteInterface, idx: number) => (
        <ListItem
          key={idx}
          button
          component={({ innerRef, ...props }) => (
            <NavLink
               to={item.path}
               className={classes.link}
               activeClassName={classes.linkActive}
               exact={item.exact}
               {...props}
            >
              <ListItemText primary={item.title} />
            </NavLink>
          )}
        >
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default withStyles(styles)(Sidebar)
