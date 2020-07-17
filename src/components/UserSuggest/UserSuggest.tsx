import React, { useState } from 'react';

import Autosuggest from 'react-autosuggest';
import { User } from '../../../types';

import { StyledInput, Container, StyledPersonAdd, SuggestionContainer, SuggestionItem } from './styles';

const getSuggestionValue = (suggestion: User): string => suggestion.email;

interface Props {
  suggestionsData: User[];
}

const UserSuggest: React.FC<Props> = ({ suggestionsData }) => {
  const [suggestions, setSuggestions] = useState<User[]>(suggestionsData);
  const [searchValue, setSearchValue] = useState('');

  const onChange = (event: any, { newValue }: any): void => {
    setSearchValue(newValue);
  };

  const handleSuggestionFetch = ({ value }: { value: string }): void => {
    setSuggestions(suggestionsData);

    if (value.length >= 1) {
      const suggestionFilter = suggestionsData.filter(userEmail => {
        return userEmail.email.toLowerCase().includes(value.toLowerCase());
      });

      if (!!suggestionFilter) {
        setSuggestions(suggestionFilter);
      }
    }
  };

  const handleSuggestionClear = (): void => {
    setSuggestions([]);
  };

  const renderInputComponent = (inputProps: any) => (
    <Container>
      <StyledPersonAdd />
      <StyledInput {...inputProps} />
    </Container>
  );

  const renderSuggestion = (suggestion: User) => <SuggestionItem>{suggestion.email}</SuggestionItem>;

  const renderSuggestionsContainer = ({ containerProps, children, query }: any) => {
    return <SuggestionContainer {...containerProps}>{children}</SuggestionContainer>;
  };

  return (
    <Autosuggest
      suggestions={suggestions}
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
