import React from 'react';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface Props {}

const Login: React.FC<Props> = () => {
  const history = useHistory();

  const handleSuccess = (response: any): void => {
    console.log(response);
    history.push('/main');
  };

  const handleError = (error: any): void => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId="605375059137-eiratpqc4lj7k0f41raq5t0m9vhdnlp2.apps.googleusercontent.com"
        render={renderProps => (
          <>
            {console.log('renderProps', renderProps)}
            <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Entrar com sua conta Google
            </Button>
          </>
        )}
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleError}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
