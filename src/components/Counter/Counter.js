import { Input } from './Counter.styled';
import { useState, useEffect } from 'react';

export function Counter({ handleQuantityChange, cartQuantity = '1' }) {
  const [quantity, setQuantity] = useState(cartQuantity); //! stored as a STRING
  //! it is necessary to do check if it number or not

  useEffect(() => {
    handleQuantityChange(quantity);
  }, [quantity, handleQuantityChange]);

  return (
    <label>
      <Input
        type="number"
        name="quantity"
        min="1"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
    </label>
  );
}
