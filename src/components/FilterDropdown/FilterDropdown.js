import { useState } from 'react';
import { filterOptions } from 'helpers';
import {
  DropdownWrapper,
  Header,
  List,
  Icon,
  Item,
} from './FilterDropdown.styled';

export function FilterDropdown({ selectedOption, onSetOption }) {
  const [dropdown, setDropdown] = useState(false);
  const isDropdownOpen = () => setDropdown(!dropdown);

  const onOptionClick = option => {
    setDropdown(false);
    onSetOption(option);
  };

  return (
    <DropdownWrapper>
      <Header onClick={isDropdownOpen}>
        {selectedOption?.name || 'За популярністю'}
        <Icon />
      </Header>
      {dropdown && (
        <List>
          {filterOptions.map(option => (
            <Item onClick={() => onOptionClick(option)} key={option.key}>
              {option.name}
            </Item>
          ))}
        </List>
      )}
    </DropdownWrapper>
  );
}
