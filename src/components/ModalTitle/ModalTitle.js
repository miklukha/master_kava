import { TitleWrapper, Title } from './ModalTitle.styled';

export function ModalTitle({ title }) {
  return (
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  );
}
