import { Input } from './Counter.styled';
import { useState } from 'react';

export function Counter() {
  const [quantity, setQuantity] = useState('1'); //! stored as a STRING
  //! it is necessary to do check if it number or not

  return (
    <label>
      <Input
        type="number"
        name="quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
    </label>
  );
}
