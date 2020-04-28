import React from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { Auth } from 'aws-amplify'
import { Input, InputLabel, FormGroup, Typography, Button, CircularProgress, Grid } from '@material-ui/core';

import { AuthForm, Email, Password, ConfirmationCode } from '../Forms'

const initialState = {
  username: ``,
  password: ``,
  email: '',
  phone_number: '',
  auth_code: '',
  stage: 0,
  error: '',
  loading: false,
};

class SignUp extends React.Component {
  state = initialState;

  handleUpdate = event => {
    if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value,
        username: event.target.value,
        error: '',
      })
    }
    if (event.target.name === 'phone_number') {
      this.setState({
        [event.target.name]: event.target.value.replace(/\D/g, ''),
        error: '',
      })
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: '',
    })
  };

  signUp = async e => {
    e.preventDefault();
    const { username, password, email, phone_number } = this.state;
    this.setState({ loading: true });
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number },
      });
      this.setState({ stage: 1, loading: false })
    } catch (err) {
      this.setState({ error: err, loading: false });
      console.log('error signing up...', err)
    }
  };

  resendCode = async e => {
    e.preventDefault();
    const { email } = this.state
    this.setState({ loading: true });
    try {
      await Auth.resendSignUp(email);
      this.setState({ stage: 1, loading: false })
    } catch (err) {
      this.setState({ error: err, loading: false });
      console.log('error resending code...', err)
    }
  };

  verify = async e => {
    e.preventDefault()
    const { email, auth_code } = this.state;
    this.setState({ loading: true });
    try {
      await Auth.verifyCurrentUserAttributeSubmit(email, auth_code);
      this.setState({ loading: false });
      navigate('/signin')
    } catch (err) {
      this.setState({ error: err, loading: false });
      console.log('error signing up...', err)
    }
  };

  confirmSignUp = async e => {
    e.preventDefault()
    this.setState({ loading: true });
    const { email, auth_code } = this.state;
    try {
      this.setState({ loading: true });
      await Auth.confirmSignUp(email, auth_code);
      this.setState({ loading: false });
      navigate('/signin')
    } catch (err) {
      this.setState({ error: err, loading: false });
      console.log('error confirming signing up...', err)
    }
  };

  render() {
    if (this.state.stage === 0) {
      return (
        <AuthForm title="Create a new account" error={this.state.error}>
          <Email
            handleUpdate={this.handleUpdate}
            email={this.state.email}
            autoComplete="off"
          />
          <Password
            handleUpdate={this.handleUpdate}
            password={this.state.password}
            autoComplete="off"
          />
          <FormGroup>
            <InputLabel htmlFor="exampleInputPhoneNum1">Phone Number</InputLabel>
            <Input
              placeholder="+1 (###) ###-####"
              onChange={this.handleUpdate}
              name="phone_number"
              value={this.state.phone_number}
              type="tel"
              className="form-control"
              format="+1##########"
              mask="_"
            />
          </FormGroup>
          <Button
            disableElevation
            size="medium"
            fullWidth
            color="primary"
            variant="contained"
            onClick={e => this.signUp(e)}
            type="submit"
            disabled={this.state.loading}
          >
            {this.state.loading ? null : 'Create Account'}
            {this.state.loading && (
              <CircularProgress />
            )}
          </Button>
          <Typography style={{ marginTop: 40 }} align="center">
            Have an account? <Link to="/signin">Sign in</Link>
          </Typography>
        </AuthForm>
      )
    }
    return (
      <AuthForm>
        <Email
          handleUpdate={this.handleUpdate}
          email={this.state.email}
          autoComplete="off"
        />
        <ConfirmationCode
          handleUpdate={this.handleUpdate}
          auth_code={this.state.auth_code}
          autoComplete="off"
        />
        <Button
          disableElevation
          size="medium"
          fullWidth
          color="primary"
          onClick={e => this.confirmSignUp(e)}
          type="submit"
          disabled={this.state.loading}
        >
          {this.state.loading ? null : 'Confirm'}
          {this.state.loading && (
            <CircularProgress />
          )}
        </Button>
        <Typography style={{ marginTop: 40 }} align="center">
          Have an account? <Link to="/signin">Sign in</Link>
        </Typography>
        <Grid
          alignItems="center"
          justify="center"
        >
          <Typography
            style={{ marginTop: 20, marginBottom: 20 }}
            align="center"
          >
            Lost your code?
          </Typography>
          <Button
            onClick={e => this.resendCode(e)}
            disabled={this.state.loading}
          >
            Resend Code
          </Button>
        </Grid>
      </AuthForm>
    )
  }
}

export default SignUp
