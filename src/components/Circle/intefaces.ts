import { WithStyles } from '@material-ui/core/styles';
import styles from './styles';

export interface Props extends WithStyles<typeof styles> {
  size: number,
  color: "inherit" | "primary" | "secondary" | undefined,
  value: number
}
