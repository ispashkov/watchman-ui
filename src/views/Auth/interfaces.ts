import { WithStyles } from "@material-ui/core";
import { AuthCredentials } from '../../interfaces';
import styles from "./styles";

export interface Props extends WithStyles<typeof styles>{
  auth: (credentials: AuthCredentials) => void,
  isLoading: boolean
}

export interface State {
  formData: {
    username: string,
    password: string
  }
}


