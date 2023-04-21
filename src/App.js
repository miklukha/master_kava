import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'layouts';
import { createAsyncComponent } from 'helpers';

const Home = createAsyncComponent('Home');
const Shop = createAsyncComponent('Shop');
const AboutUs = createAsyncComponent('AboutUs');
const Contacts = createAsyncComponent('Contacts');
const Reviews = createAsyncComponent('Reviews');
const PaymentDelivery = createAsyncComponent('PaymentDelivery');
const PlacingOrder = createAsyncComponent('PlacingOrder');
const Profile = createAsyncComponent('Profile');
const Product = createAsyncComponent('Product');
const Admin = createAsyncComponent('Admin');

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/payment-delivery" element={<PaymentDelivery />} />
          <Route path="/placing-order" element={<PlacingOrder />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/shop/:productId" element={<Product />} /> */}
          <Route path="/shop/:slug" element={<Product />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Route>

        {/* For admin system (maybe) */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="customers" element={<Customers />} />
        </Route> */}
      </Routes>
    </>
  );
}
