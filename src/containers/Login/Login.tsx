import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { User } from '../../../types';
import Card from '../../components/Card';
import useLocalStorage from '../../hooks';
import { login } from '../../store/ducks/auth';
import { ReactComponent as GoogleLogo } from '../../svgs/googleLogo.svg';
import { AurumLogo, Container, Content, Description, InterviewImage, LoginButton, LoginLabel } from './styles';
import userService from '../../services/userService';
import { CircularProgress } from '@material-ui/core';

const CLIENT_ID: string = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useLocalStorage('userInfo', {});
  const [isLoading, setIsLoading] = useState(false);

  const dispatchAndGo = (accessToken: string, user: User): void => {
    dispatch(login(accessToken, user));
    history.push('/main');
  };

  const handleSuccess = async ({
    accessToken,
    profileObj: { googleId, imageUrl, email, name },
  }: any): Promise<void> => {
    const userToAuth: User = {
      googleId,
      imageUrl,
      email,
      name,
    };

    try {
      setIsLoading(true);
      const user = await userService.authenticate(userToAuth);

      setUserInfo({ accessToken, user });
      dispatchAndGo(accessToken, user);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = (error: any): void => {
    console.log(error);
  };

  useEffect(() => {
    console.log('userInfo', userInfo);
    if (userInfo.accessToken) dispatchAndGo(userInfo.accessToken, userInfo.user);
  }, [userInfo, dispatchAndGo]);

  return (
    <Container>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card>
          <Content>
            <AurumLogo />
            <InterviewImage />

            <Description variant="subtitle2" color="secondary">
              Crie pautas e registre suas reuniões 1 x 1 da empresa
            </Description>

            <GoogleLogin
              clientId={CLIENT_ID}
              render={renderProps => (
                <>
                  <LoginButton color="secondary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <GoogleLogo />
                    <LoginLabel>Logar com seu email Aurum</LoginLabel>
                  </LoginButton>
                </>
              )}
              buttonText="Login"
              onSuccess={handleSuccess}
              onFailure={handleError}
              cookiePolicy={'single_host_origin'}
            />
          </Content>
        </Card>
      )}
    </Container>
  );
};

export default Login;
