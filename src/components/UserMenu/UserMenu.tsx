import { IconButton, Menu, MenuItem, Typography, Fade } from '@material-ui/core';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../selectors/authSelectors';
import Avatar from '../Avatar';
import { Container, NameAndOptions, Options } from './styles';
import { logout } from '../../store/ducks/auth';
import useLocalStorage from '../../hooks';
import { useHistory } from 'react-router-dom';

const CLIENT_ID: string = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const UserMenu: React.FC = () => {
  const { name, imageUrl } = useSelector(getUserInfo);
  const [, setUserInfo] = useLocalStorage('userInfo', {});
  const history = useHistory();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const dispatchAndGo = (): void => {
    dispatch(logout());
    history.push('/login');
  };

  const handleLogoutSuccess = (): void => {
    console.log('SUCCESS');
    setUserInfo({});
    dispatchAndGo();
    handleClose();
  };
  const handleLogoutError = (): void => {
    console.log('Error');
    handleClose();
  };

  return (
    <Container>
      <Avatar src={imageUrl}></Avatar>
      <NameAndOptions>
        <Typography variant="subtitle1" color="secondary">
          {name}
        </Typography>
        <IconButton
          color="secondary"
          aria-label="menu"
          component="span"
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Options />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <GoogleLogout
            clientId={CLIENT_ID}
            render={renderProps => <MenuItem onClick={renderProps.onClick}>Sair</MenuItem>}
            onLogoutSuccess={handleLogoutSuccess}
            onFailure={handleLogoutError}
          />
        </Menu>
      </NameAndOptions>
    </Container>
  );
};

export default UserMenu;
