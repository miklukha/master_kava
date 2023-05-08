import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:1880';

let data = '';
let signature = '';

// const onSubmit = async () => {
// const response = await axios.post('/liqpay');
// console.log(response.data);
// data = response.data.data;
// signature = response.data.signature;
// return response.data;
// };

(async function getData() {
  const response = await axios.post('/liqpay');
  console.log(response.data);
  data = response.data.data;
  signature = response.data.signature;
  return response.data;
})();

export function LiqPayForm() {
  return (
    <form
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
      // onSubmit={onSubmit}
    >
      <input type="hidden" name="data" value={data} />
      <input type="hidden" name="signature" value={signature} />
      <input
        type="image"
        // onClick={onSubmit}
        src="//static.liqpay.ua/buttons/p1en.radius.png"
        name="btn_text"
        alt=""
      />
      {/* <button onClick={onSubmit} type="submit" >
        ОФОРМЛЕННЯ ЗАМОВЛЕННЯ
      </button> */}
    </form>
  );
}

///https://www.liqpay.ua/en/checkout/throw_error/?err_description=%D0%9D%D0%B5%20%D0%BD%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%20public_key&err_token=1683489020133653_32341603_HZmZLdxphxOA4rtFpGtn
