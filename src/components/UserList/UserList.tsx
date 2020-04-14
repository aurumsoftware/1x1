import React, { useState, useCallback, useEffect, ReactElement } from 'react';
import { List, ListItem, ListItemIcon, CircularProgress, Typography } from '@material-ui/core';
import userService from '../../services/userService';
import { User } from '../../../types';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../selectors/authSelectors';
import Avatar from '../Avatar';
import { Username } from './styles';

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { _id: loggedUserId } = useSelector(getUserInfo);

  const loadUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const users = await userService.all();
      setUserList(users.filter((user: User) => user._id !== loggedUserId));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const mapUserItem = (user: User): ReactElement => (
    <ListItem button key={user._id}>
      <Avatar src={user.imageUrl}></Avatar>
      <Username>{user.name}</Username>
    </ListItem>
  );

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return isLoading ? <CircularProgress /> : <List>{userList.map(mapUserItem)}</List>;
};

export default UserList;
