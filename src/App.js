import {
  Shop,
  Home,
  PaymentDelivery,
  AboutUs,
  Reviews,
  Profile,
  Product,
  PlacingOrder,
  Contacts,
} from 'pages';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'layouts';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/payment-delivery" element={<PaymentDelivery />} />

          <Route path="/placing-order" element={<PlacingOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop/:productId" element={<Product />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
