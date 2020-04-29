import React from 'react';
import { Auth } from '@aws-amplify/auth';
import { navigate } from '@reach/router';
import {
  Button, CircularProgress, Grid, Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';
import {
  AuthForm, ConfirmationCode, Email, Password,
} from '../components/Forms';
import withPublicRoute from '../components/Routes/PublicRoute';

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      auth_code: '',
      password: '',
      error: '',
      loading: false,
      stage: 0,
    };
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: '',
    });
  };

  reset = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    try {
      this.setState({ loading: true });
      await Auth.forgotPassword(email);
      console.log('forgotPassword');
      this.setState({ loading: false, stage: 1 });
    } catch (err) {
      this.setState({ error: err, loading: false });
      console.log('error...: ', err);
    }
  };

  confirmReset = async (e) => {
    e.preventDefault();
    const { email, auth_code, password } = this.state;
    this.setState({ loading: true });
    Auth.forgotPasswordSubmit(email, auth_code, password)
      .then((data) => {
        console.log(data);
        this.setState({ loading: false });
      })
      .then(() => navigate('/signin'))
      .catch((err) => {
        console.log(err);
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    if (this.state.stage === 0) {
      return (
        <AuthForm title="Reset your password" error={this.state.error}>
          <Email
            handleUpdate={this.handleUpdate}
            email={this.state.email}
            autoComplete="on"
          />
          <Button
            disableElevation
            size="medium"
            fullWidth
            color="primary"
            variant="contained"
            onClick={(e) => this.reset(e)}
            type="submit"
            className="btn btn-primary btn-block"
            disabled={this.state.loading}
          >
            {this.state.loading ? null : 'Send Code'}
            {this.state.loading && (
              <CircularProgress />
            )}
          </Button>
          <Typography style={{ marginTop: 40 }} align="center">
            <Link to="/signin">Back to Sign In</Link>
          </Typography>
        </AuthForm>
      );
    }

    return (
      <>
        <AuthForm title="Confirm Password Update" error={this.state.error}>
          <Email
            handleUpdate={this.handleUpdate}
            email={this.state.email}
            autoComplete="on"
          />
          <ConfirmationCode
            handleUpdate={this.handleUpdate}
            email={this.state.auth_code}
            autoComplete="off"
          />
          <Password
            handleUpdate={this.handleUpdate}
            password={this.state.password}
            autoComplete="on"
          />
          <Typography style={{ marginTop: 40 }} align="center">
            <Link to="/signin">Back to Sign In</Link>
          </Typography>
          <Button
            disableElevation
            size="medium"
            fullWidth
            color="primary"
            variant="contained"
            onClick={(e) => this.confirmReset(e)}
            type="submit"
            className="btn btn-primary btn-block"
            disabled={this.state.loading}
          >
            {this.state.loading ? null : 'Confirm Reset'}
            {this.state.loading && (
              <CircularProgress />
            )}
          </Button>
        </AuthForm>
        <Grid
          justify="center"
          alignItems="center"
        >
          <Typography
            style={{ marginTop: 20, marginBottom: 20 }}
            align="center"
          >
            Lost your code?
          </Typography>
          <Button
            onClick={(e) => this.reset(e)}
            disabled={this.state.loading}
          >
            Resend Code
          </Button>
        </Grid>
      </>
    );
  }
}

export default withPublicRoute(Reset);
