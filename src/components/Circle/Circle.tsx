import React from 'react';
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from "@material-ui/core/styles";
import styles from './styles';
import { Props } from './intefaces';

const Circle: React.FunctionComponent<Props> = ({ size, color, value, classes }) => {
  const rootCss = {
    width: `${size}px`,
    height: `${size}px`
  };

  return (
    <div className={classes.root} style={rootCss}>
      <CircularProgress
        className={classes.circleBack}
        variant="static"
        color={undefined}
        value={100}
        size={size}
      />
      <CircularProgress
        className={classes.circleFront}
        variant="static"
        color={color}
        value={value}
        size={size}
      />
      <Typography variant="subtitle1" className={classes.label}>{ value }%</Typography>
    </div>
  )
};

export default withStyles(styles)(Circle);
