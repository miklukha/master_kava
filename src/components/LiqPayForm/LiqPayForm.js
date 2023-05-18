import { useLocation } from 'react-router-dom';
import { Btn } from './LiqPayForm.styled';

export function LiqPayForm() {
  const location = useLocation();
  const { data, signature } = location.state;

  return (
    <form
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
    >
      <input type="hidden" name="data" value={data} />
      <input type="hidden" name="signature" value={signature} />
      <Btn type="submit">Перейти на сторінку оплати</Btn>
      <p>*Без оплати, замовлення не буде враховане</p>
    </form>
  );
}

///https://www.liqpay.ua/en/checkout/throw_error/?err_description=%D0%9D%D0%B5%20%D0%BD%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%20public_key&err_token=1683489020133653_32341603_HZmZLdxphxOA4rtFpGtn
