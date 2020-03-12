import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/ducks/auth';
import { User } from '../../../types';
import useLocalStorage from '../../hooks';

const CLIENT_ID: string = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useLocalStorage('userInfo', {});

  const dispatchAndGo = (accessToken: string, user: User): void => {
    dispatch(login(accessToken, user));
    history.push('/main');
  };

  const handleSuccess = ({ accessToken, profileObj: { googleId, imageUrl, email, name } }: any): void => {
    const user: User = {
      _id: undefined,
      googleId,
      imageUrl,
      email,
      name,
    };
    setUserInfo({ accessToken, user });
    dispatchAndGo(accessToken, user);
  };

  const handleError = (error: any): void => {
    console.log(error);
  };

  useEffect(() => {
    console.log('userInfo', userInfo);
    if (userInfo.accessToken) dispatchAndGo(userInfo.accessToken, userInfo.user);
  }, [userInfo, dispatchAndGo]);

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
