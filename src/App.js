import { PrivateAdminRoute, PrivateRoute } from 'components';
import { createAsyncComponent } from 'helpers';
import { SharedLayout } from 'layouts';
import { Route, Routes } from 'react-router-dom';

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
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          {/* <Route path="/shop/:productId" element={<Product />} /> */}
          <Route path="/shop/:slug" element={<Product />} />

          <Route
            path="/admin"
            element={
              <PrivateAdminRoute>
                <Admin />
              </PrivateAdminRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
