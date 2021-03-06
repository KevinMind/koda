import React from 'react';
import { Auth } from '@aws-amplify/auth';
import { navigate } from '@reach/router';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import { AuthForm, Email, Password } from '../components/Forms';
import { AppUser } from '../components/Auth';
import withPublicRoute from '../components/Routes/PublicRoute';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  handleUpdate = (event) => {
    if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value,
        username: event.target.value,
        error: '',
      });
    }
    this.setState({
      [event.target.name]: event.target.value,
      error: '',
    });
  };

  login = async (e) => {
    const { setUser } = AppUser;
    e.preventDefault();
    const { username, password } = this.state;
    try {
      this.setState({ loading: true });
      await Auth.signIn(username, password);
      const user = await Auth.currentAuthenticatedUser();
      const userInfo = {
        ...user.attributes,
        username: user.username,
      };
      setUser(userInfo);
      this.setState({ loading: false });
      navigate('/');
    } catch (err) {
      this.setState({ error: err, loading: false });
      console.log('error...: ', err);
    }
  };

  render() {
    return (
      <AuthForm title="Sign in to your account" error={this.state.error}>
        <Email
          handleUpdate={this.handleUpdate}
          email={this.state.email}
          autoComplete="on"
        />
        <Password
          handleUpdate={this.handleUpdate}
          password={this.state.password}
          autoComplete="on"
        />
        <Typography align="center">
          Forgot your password?
          {' '}
          <Link to="/reset">Reset password</Link>
        </Typography>
        <Button
          disableElevation
          size="medium"
          fullWidth
          color="primary"
          onClick={(e) => this.login(e)}
          variant="contained"
          type="submit"
          disabled={this.state.loading}
        >
          {this.state.loading ? null : 'Sign In'}
          {this.state.loading && (
            <CircularProgress />
          )}
        </Button>
        <Typography style={{ marginTop: 40 }} align="center">
          No account?
          {' '}
          <Link to="/signup">Create account</Link>
        </Typography>
      </AuthForm>
    );
  }
}

export default withPublicRoute(SignIn);
