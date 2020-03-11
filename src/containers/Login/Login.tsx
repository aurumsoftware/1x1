import React from 'react';
import GoogleLogin from 'react-google-login';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface Props {}

const CLIENT_ID: string = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

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
        clientId={CLIENT_ID}
        render={renderProps => (
          <>
            {console.log('renderProps', renderProps)}
            <Button color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
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
