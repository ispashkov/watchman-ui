import React, { Component, ChangeEvent, FormEvent } from 'react';
import { withStyles } from '@material-ui/core';
import AuthForm from "../../components/AuthForm";
import { State, Props } from './interfaces';
import styles from './styles';

class Auth extends Component<Props, State> {
  state = {
    formData: {
      username: "",
      password: ""
    }
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const { formData } = this.state;

    this.setState({
      formData: {
        ...formData,
        [name]: value
      }
    });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { auth } = this.props;
    const { formData } = this.state;

    auth(formData)
  };

  render() {
    const { classes } = this.props;
    const { formData } = this.state;

    return (
      <div className={classes.root}>
        <AuthForm
          {...formData }
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Auth)
