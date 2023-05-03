import styled from '@emotion/styled';
import { colors, utils, mq } from 'styles/utils/variables';
import checkbox from 'assets/images/checkbox.png';

export const Form = styled.form`
  position: relative;
  flex-shrink: 0;
  width: 270px;
  height: 100vh;
  padding: 50px 20px;
  background-color: ${colors.mainBg};
  border: 1px solid ${colors.auxiliary};
  border-radius: ${utils.borderRadius};

  ${mq.onlyTablet} {
    width: 200px;
    height: 332px;
    padding: 15px;
  }

  ${mq.desktop} {
    padding: 20px;
    height: 250px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  margin-bottom: 20px;

  & button {
    font-weight: 400;
    width: 53px;
    padding: 9px;
    border: 1px solid ${colors.auxiliary};

    background-color: transparent;
    color: ${colors.mainText};

    &:hover,
    &:focus {
      background-color: ${colors.auxiliary};
    }
  }

  ${mq.onlyTablet} {
    flex-wrap: wrap;
  }
`;

export const OptionList = styled.ul`
  margin-bottom: 20px;
`;

export const OptionItem = styled.li`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: normal;
  gap: 7px;

  font-weight: 400;

  &::before {
    content: '';
    flex-shrink: 0;

    width: 14px;
    height: 14px;

    border: 1px solid ${colors.mainText};
    border-radius: 3px;

    cursor: pointer;

    input:checked + & {
      border-color: ${colors.accent};

      background-image: url(${checkbox});
      background-repeat: no-repeat;
      background-size: contain;
    }

    input:focus + & {
      border-color: ${colors.accent};
    }
  }
`;
