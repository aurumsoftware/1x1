import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { User } from '../../../types';
import Card from '../../components/Card';
import useLocalStorage from '../../hooks';
import { login } from '../../store/ducks/auth';
import { ReactComponent as GoogleLogo } from '../../svgs/googleLogo.svg';
import { AurumLogo, Container, Content, Description, InterviewImage, LoginButton, LoginLabel } from './styles';

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
    console.log('accessToken', accessToken);

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
    <Container>
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
    </Container>
  );
};

export default Login;
