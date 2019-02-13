import { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  root: {
    display: "block",
    padding: theme.spacing.unit * 4,
    maxWidth: 600
  },
  title: {
    marginBottom: theme.spacing.unit * 3
  }
})
