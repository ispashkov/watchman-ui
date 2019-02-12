import React from "react";
import { WithStyles } from "@material-ui/core";
import styles from "./styles";

export interface Props extends WithStyles<typeof styles> {
  open: boolean,
  onClose(e: React.SyntheticEvent<HTMLElement>): void
}
