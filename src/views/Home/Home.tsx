import React from 'react';
import BaseLayout from '../../layouts/Base/Base';
import Panel from '../../components/Panel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Circle from '../../components/Circle';
import { withStyles } from '@material-ui/core/styles';
import { Props } from './interfaces';
import styles from './styles';
import { ReactComponent as IMacIcon } from '../../assets/imac.svg';

const circleSize = 120;

const macStyle = {
  width: `${circleSize}px`,
  height: `${circleSize}px`
};

const HomeView: React.FunctionComponent<Props> = props => {
  const {
    classes,
    online = 0,
    total = 0,
    SLA = 57.89,
    favoritesSLA = 57.89
  } = props;

  return (
    <BaseLayout>
      <Grid container>
        <Grid item xs={12} className={classes.sectionTitle}>
          <Typography variant="h5" component="h2">Информация о ПК</Typography>
        </Grid>
        <Grid item xs={12}>
          <Panel>
            <Grid container>
              <Grid item xs={4} className={classes.info}>
                <IMacIcon className={classes.IMac} style={macStyle} />
                <div>
                  <Typography variant="h6" color="secondary">Online: { online }</Typography>
                  <Typography variant="h6" color="primary">Всего: { total }</Typography>
                </div>
              </Grid>
              <Grid item xs={4} className={classes.circularItem}>
                <Circle
                  color="primary"
                  value={SLA}
                  size={circleSize}
                />
                <Typography className={classes.circularLabel} variant="subtitle1">Операции в SLA</Typography>
              </Grid>
              <Grid item xs={4} className={classes.circularItem}>
                <Circle
                  color="secondary"
                  value={favoritesSLA}
                  size={circleSize}
                />
                <Typography className={classes.circularLabel} variant="subtitle1">Избранные операции в SLA</Typography>
              </Grid>
            </Grid>
          </Panel>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default withStyles(styles)(HomeView);
