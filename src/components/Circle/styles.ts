import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  circleBack: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
    color: '#eee'
  },
  circleFront: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1
  },
  label: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
