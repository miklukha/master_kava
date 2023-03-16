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

  ${mq.tablet} {
    padding: 20px;
    /* position: fixed; */
    height: 400px;
  }

  ${mq.onlyTablet} {
    width: 200px;
    padding: 15px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  margin-bottom: 20px;
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
  gap: 10px;

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
