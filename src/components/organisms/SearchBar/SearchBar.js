import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import { SearchBarWrapper, SearchResults, SearchResultsItem, SearchWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { useFindStudentsMutation } from 'store';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const [findStudents] = useFindStudentsMutation();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { data } = await findStudents({ searchPhrase: inputValue });
    setMatchingStudents(data.students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
    onInputValueChange: getMatchingStudents,
    items: matchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input name="Search" id="Search" placeholder="Search" {...getInputProps()} />
        <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
