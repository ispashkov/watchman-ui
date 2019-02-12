import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
  sectionTitle: {
    marginBottom: theme.spacing.unit * 2
  },
  circularContainer: {
    height: theme.spacing.unit * 3,
    width: theme.spacing.unit * 3
  },
  circularItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  circularLabel: {
    marginTop: theme.spacing.unit
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  IMac: {
    marginRight: theme.spacing.unit * 3
  }
});
