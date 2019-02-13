import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from "@material-ui/core";
import styles from './styles';
import { Props } from './interfaces';

const AuthForm: React.FunctionComponent<Props> = ({ classes, username, password, onChange, onSubmit }) => (
  <Card className={classes.root}>

    <Typography
      className={classes.title}
      variant="h4"
      component="h1"
      align="center"
    >
      Авторизация
    </Typography>

    <form onSubmit={onSubmit}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Login"
            name="username"
            placeholder="Login"
            defaultValue={username}
            onChange={onChange}
            autoComplete="off"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Password"
            name="password"
            placeholder="Password"
            defaultValue={password}
            onChange={onChange}
            autoComplete="off"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>

  </Card>
);

export default withStyles(styles)(AuthForm);
