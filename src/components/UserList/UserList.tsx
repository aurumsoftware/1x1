import { List } from '@material-ui/core';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../../types';
import userService from '../../services/userService';
import { setActiveMeeting } from '../../store/ducks/meeting';
import { getUserInfo } from '../../store/selectors/authSelectors';
import { getActiveMeetingUser } from '../../store/selectors/meetingSelectors';
import Avatar from '../Avatar';
import Loading from '../Loading';
import { ActiveStatus, UserItem, Username } from './styles';

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { _id: loggedUserId } = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const activeMeetingUser = useSelector(getActiveMeetingUser);

  const orderArrayByString = (a: string, b: string): number => a.localeCompare(b);

  const sortUsers = useCallback(
    (users: User[]): User[] => users.sort((a, b) => orderArrayByString(a.name, b.name)),
    [],
  );

  const loadUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const users = await userService.all();
      const filteredUsers = users.filter((user: User) => user._id !== loggedUserId);
      setUserList(sortUsers(filteredUsers));
      if (users.length) dispatch(setActiveMeeting(filteredUsers[0]));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, loggedUserId, sortUsers]);

  const handleSelectMeeting = (user: User): void => {
    dispatch(setActiveMeeting(user));
  };

  const mapUserItem = (user: User): ReactElement => {
    const isActive = user._id === activeMeetingUser._id;

    return (
      <UserItem isActive={isActive} onClick={(): void => handleSelectMeeting(user)} key={user._id}>
        <ActiveStatus isActive={isActive} />
        <Avatar src={user.imageUrl}></Avatar>
        <Username isActive={isActive}>{user.name}</Username>
      </UserItem>
    );
  };

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return isLoading ? <Loading /> : <List>{userList.map(mapUserItem)}</List>;
};

export default UserList;
