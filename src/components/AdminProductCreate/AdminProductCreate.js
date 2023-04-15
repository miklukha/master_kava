import { Wrapper } from './AdminProductCreate.styled';
import { AdminProductEdit } from 'components/AdminProductEdit';

export function AdminProductCreate() {
  return (
    <Wrapper>
      <AdminProductEdit action="create" />
    </Wrapper>
  );
}
