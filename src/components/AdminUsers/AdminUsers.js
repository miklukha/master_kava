import { useState, useEffect, Fragment } from 'react';
import {
  IconBtn,
  Item,
  List,
  SearchWrapper,
  Wrapper,
} from 'components/AdminProducts/AdminProducts.styled';
import { AdminUserInformation, Input } from 'components';
import { UilEye, UilUser } from '@iconscout/react-unicons';
import * as API from 'services/api';
import { DebounceInput } from 'react-debounce-input';
import toast from 'react-hot-toast';

export function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [clickedUser, setClickedUser] = useState(false);

  const onSearchChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    (async function getUsers() {
      try {
        const users = await API.getUsers();
        console.log(users);
        setUsers(users);
      } catch (error) {
        toast.error('Щось пішло не так, спробуйте пізніше');
        console.log(error);
      }
    })();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Wrapper>
      <SearchWrapper>
        <DebounceInput
          element={Input}
          debounceTimeout={300}
          onChange={onSearchChange}
          placeholder="Введіть назву"
        />
      </SearchWrapper>
      <List>
        {filteredUsers.map(user => {
          const { _id, name, role } = user;
          const isClicked = _id === clickedUser;

          return (
            <Fragment key={_id}>
              <Item>
                <div>
                  {name}
                  {role === 'admin' && (
                    <UilUser
                      style={{ marginLeft: 10, width: 20, height: 20 }}
                    />
                  )}
                </div>

                <div>
                  <IconBtn type="button" onClick={() => setClickedUser(_id)}>
                    <UilEye />
                  </IconBtn>
                </div>
              </Item>
              {isClicked && <AdminUserInformation user={user} />}
            </Fragment>
          );
        })}
      </List>
    </Wrapper>
  );
}
