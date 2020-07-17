import React, { useState, useEffect, useCallback } from 'react';
import Autosuggest, { RenderSuggestionsContainerParams } from 'react-autosuggest';
import { User } from '../../../types';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../store/selectors/authSelectors';
import userService from '../../services/userService';
import Loading from '../Loading';

import { StyledInput, Container, StyledPersonAdd, SuggestionContainer, SuggestionItem } from './styles';

interface Props {
  onClick(user: User): void;
}

const UserSuggest: React.FC<Props> = ({ onClick }) => {
  const { _id: loggedUserId } = useSelector(getUserInfo);
  const [usersList, setUsersList] = useState<User[]>([]);
  const [usersSuggestions, setUserSuggestions] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  const loadUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const users = await userService.all();
      const filteredUsers = users.filter((user: User) => user._id !== loggedUserId);
      setUsersList(filteredUsers);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [loggedUserId]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const getSuggestionValue = (suggestion: User): string => {
    onClick(suggestion);
    return suggestion.email;
  };

  const onChange = (event: any, { newValue }: { newValue: string }): void => {
    setSearchValue(newValue);
  };

  const handleSuggestionFetch = ({ value }: { value: string }): void => {
    if (value.length >= 1) {
      const suggestionFilter = usersList.filter(user => {
        return user.email.toLowerCase().includes(value.toLowerCase());
      });

      if (!!suggestionFilter) {
        setUserSuggestions(suggestionFilter);
      }
    }
  };

  const handleSuggestionClear = (): void => {
    setUserSuggestions([]);
  };

  const renderInputComponent = (inputProps: any) => (
    <Container>
      <StyledPersonAdd />
      <StyledInput {...inputProps} />
    </Container>
  );

  const renderSuggestion = (suggestion: User) => <SuggestionItem>{suggestion.email}</SuggestionItem>;

  const renderSuggestionsContainer = ({ containerProps, children, query }: RenderSuggestionsContainerParams) => {
    return <SuggestionContainer {...containerProps}>{children}</SuggestionContainer>;
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Autosuggest
      suggestions={usersSuggestions}
      onSuggestionsFetchRequested={handleSuggestionFetch}
      onSuggestionsClearRequested={handleSuggestionClear}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        placeholder: 'Nova reunião',
        value: searchValue,
        onChange: onChange,
      }}
      renderInputComponent={renderInputComponent}
      renderSuggestionsContainer={renderSuggestionsContainer}
    />
  );
};

export default UserSuggest;
