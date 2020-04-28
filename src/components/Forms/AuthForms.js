import React from 'react';
import {
  Grid, Card, CardContent,Typography, CardHeader,
  FormGroup, InputLabel, Input
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export function AuthForm({ children, title, error }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: '100%' }}
    >
      <Card>
        <CardHeader>
          <Typography variant="h2">{title}</Typography>
          {error && (
            <Alert severity="error">
              {error.message ? error.message : error}
            </Alert>
          )}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </Grid>
  );
}

export function Email({ handleUpdate, email, autoComplete }) {
  return (
    <FormGroup>
      <InputLabel htmlFor="enterEmailAddress">Email Address</InputLabel>
      <Input
        onChange={handleUpdate}
        name="email"
        type="email"
        value={email}
        className="form-control"
        autoComplete={autoComplete}
        id="enterEmailAddress"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </FormGroup>
  );
}

export function Password({ handleUpdate, password, autoComplete }) {
  return (
    <FormGroup>
      <InputLabel htmlFor="enterPassword">Password</InputLabel>
      <Input
        onChange={handleUpdate}
        autoComplete={autoComplete}
        name="password"
        value={password}
        type="password"
        placeholder="Password"
        id="enterPassword"
      />
    </FormGroup>
  );
}

export function ConfirmationCode({ handleUpdate, auth_code: authCode, autoComplete }) {
  return (
    <FormGroup>
      <InputLabel htmlFor="enterCode">Confirmation Code</InputLabel>
      <Input
        onChange={handleUpdate}
        autoComplete={autoComplete}
        name="auth_code"
        value={authCode}
        type="text"
        placeholder="######"
        id="enterCode"
      />
    </FormGroup>
  );
}
