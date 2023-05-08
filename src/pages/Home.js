import { Hero, Features, Popular, ReviewsHome } from 'layouts';
// import Cookies from 'js-cookie';
export function Home() {
  // console.log(Cookies.get());

  return (
    <>
      <Hero />
      <Features />
      <Popular />
      <ReviewsHome />
    </>
  );
}
