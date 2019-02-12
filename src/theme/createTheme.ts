import React from 'react'
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {}

  interface ThemeOptions {
    drawerWidth?: React.CSSProperties['width']
  }
}

export default (options: ThemeOptions) => createMuiTheme({
  ...options,
})
