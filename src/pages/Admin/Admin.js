import { useState } from 'react';
import { adminCategories } from 'helpers';
import {
  CategoryBtn,
  CategoryItem,
  CategoryList,
  Wrapper,
} from './Admin.styled';
import {
  AdminProducts,
  AdminProductCreate,
  AdminUsers,
  AdminCreateUser,
  AdminOrders,
} from 'components';

export function Admin() {
  const [selectedOption, setSelectedOption] = useState(
    adminCategories[0].value
  );

  return (
    <>
      <Wrapper>
        <CategoryList>
          {adminCategories.map(({ id, value }, i) => {
            return (
              <CategoryItem key={id}>
                <CategoryBtn
                  key={id}
                  selected={selectedOption === value ? true : false}
                  type="button"
                  aria-label={`подивитися ${value}`}
                  onClick={() => setSelectedOption(adminCategories[i].value)}
                >
                  {value}
                </CategoryBtn>
              </CategoryItem>
            );
          })}
        </CategoryList>
        {selectedOption === adminCategories[0].value && <AdminProducts />}
        {selectedOption === adminCategories[1].value && <AdminProductCreate />}
        {selectedOption === adminCategories[2].value && <AdminUsers />}
        {selectedOption === adminCategories[3].value && <AdminCreateUser />}
        {selectedOption === adminCategories[4].value && <AdminOrders />}
      </Wrapper>
    </>
  );
}
