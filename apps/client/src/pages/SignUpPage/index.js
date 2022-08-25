import React, { useState } from 'react';
import CenteredElement from '../../components/CenteredElement';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AuthService from '../../api/authentication';
import withAuthRedirect from '../../hooks/useAuthRedirect';

const theme = createTheme();

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    AuthService.createUserWithEmailAndPassword({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    })
      .then(() => {
        navigate("/login", { replace: true });
      })
      .catch(() => {
        setErrorMessage('Unable to create account')
      })
  };

  return (
    <CenteredElement>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      {errorMessage && (
        <Alert severity="error" onClose={() => setErrorMessage('')}>{errorMessage}</Alert>
      )}
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </CenteredElement>
  );
}

const redirectOptions = {
  inaccessibleWhenLoggedIn: true,
};
export default withAuthRedirect(SignUp, redirectOptions);