import { useState } from 'react';
import { css } from '@emotion/css';
import {
  DropdownWrapper,
  Header,
  List,
  Icon,
  Item,
} from './FilterDropdown.styled';

export function FilterDropdown({
  desc,
  filterOptions = [],
  selectedOption,
  onSetOption,
}) {
  const [dropdown, setDropdown] = useState(false);
  const isDropdownOpen = () => setDropdown(!dropdown);

  const onOptionClick = option => {
    setDropdown(false);
    onSetOption(option);
  };

  const myStyle = desc
    ? css`
        width: 200px;
      `
    : css`
        width: 214px;
      `;

  return (
    <DropdownWrapper className={myStyle}>
      <Header onClick={isDropdownOpen}>
        {selectedOption?.name || filterOptions[0].name}
        <Icon />
      </Header>
      {dropdown && (
        <List className={myStyle}>
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
