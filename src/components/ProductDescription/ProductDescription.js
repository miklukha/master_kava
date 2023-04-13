import { CookingMethods, DescCharacteristics } from 'components';
import { descriptions } from 'helpers';
import { useState } from 'react';
import { DescBtn, DescBtnsWrapper } from './ProductDescription.styled';

export function ProductDescription({ product }) {
  const [selectedOption, setSelectedOption] = useState(descriptions[0].value);

  return (
    <>
      <DescBtnsWrapper>
        {descriptions.map(({ id, value }, i) => {
          return (
            <DescBtn
              key={id}
              selected={selectedOption === value ? true : false}
              type="button"
              aria-label={`подивитися ${value}`}
              onClick={() => setSelectedOption(descriptions[i].value)}
            >
              {value}
            </DescBtn>
          );
        })}
      </DescBtnsWrapper>
      {selectedOption === descriptions[0].value && (
        <DescCharacteristics product={product} />
      )}
      {selectedOption === descriptions[1].value && <CookingMethods />}
    </>
  );
}
