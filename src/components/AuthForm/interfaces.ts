import { ChangeEvent, FormEvent } from "react";
import { WithStyles } from "@material-ui/core";
import styles from "./styles";

export interface Props extends WithStyles<typeof styles> {
  username: string
  password: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}
