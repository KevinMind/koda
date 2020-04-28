import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Card, CardContent, CardHeader, TextField,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export function AuthForm({ children, title, error }) {
  console.log({ error, type: typeof error });
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="stretch"
      style={{ height: '100%' }}
    >
      <Grid item xs={10} sm={6} md={4} lg={4}>
        <Card>
          <CardHeader
            title={title}
          />
          <CardContent>
            <div>
              {error && (
                <Alert severity="error">
                  {error.message ? error.message : error}
                </Alert>
              )}
            </div>
            <Grid container direction="column" justify="space-between" spacing={3}>
              {React.Children.map(children, (child) => (
                <Grid item>
                  {child}
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};

export function Email({ handleUpdate, email, autoComplete }) {
  return (
    <TextField
      fullWidth
      onChange={handleUpdate}
      name="email"
      label="Email Address"
      type="email"
      value={email}
      className="form-control"
      autoComplete={autoComplete}
      id="enterEmailAddress"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    />
  );
}

Email.defaultProps = {
  autoComplete: 'off',
};

Email.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

export function Password({ handleUpdate, password, autoComplete }) {
  return (
    <TextField
      fullWidth
      label="Password"
      onChange={handleUpdate}
      autoComplete={autoComplete}
      name="password"
      value={password}
      type="password"
      placeholder="Password"
      id="enterPassword"
    />
  );
}

Password.defaultProps = {
  autoComplete: 'off',
};

Password.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

export function ConfirmationCode({ handleUpdate, auth_code: authCode, autoComplete }) {
  return (
    <TextField
      fullWidth
      label="Confirmation Code"
      onChange={handleUpdate}
      autoComplete={autoComplete}
      name="auth_code"
      value={authCode}
      type="text"
      placeholder="######"
      id="enterCode"
    />
  );
}

ConfirmationCode.defaultProps = {
  autoComplete: 'off',
};

ConfirmationCode.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  auth_code: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};
