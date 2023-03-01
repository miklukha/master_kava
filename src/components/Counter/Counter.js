import {
  CounterBtn,
  CounterNumber,
  CounterWrapper,
  BtnsWrapper,
} from './Counter.styled';

export function Counter() {
  return (
    <CounterWrapper>
      <BtnsWrapper>
        <CounterBtn type="button" onClick={() => console.log('+')}>
          +
        </CounterBtn>
        <CounterBtn type="button" onClick={() => console.log('-')}>
          -
        </CounterBtn>
      </BtnsWrapper>
      <CounterNumber>1</CounterNumber>
    </CounterWrapper>
  );
}
