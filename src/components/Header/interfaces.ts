import React from "react";
import { WithStyles } from "@material-ui/core";
import styles from "./styles";

export interface Props extends WithStyles<typeof styles> {
  title: string
  open: boolean
  onClickMenu(e: React.MouseEvent<HTMLElement, MouseEvent>): void
  logout(e: React.MouseEvent<HTMLElement, MouseEvent>): void
}
