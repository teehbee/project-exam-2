import { useScrollToTop } from "../components/utils";
import { Frontpage } from "../components/frontpageContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  useScrollToTop();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Holidaze - Rent and List Accommodations Easily</title>
          <meta name="description" content="Holidaze: A platform where users can rent or rent out accommodations, offering a seamless and convenient experience for all your travel needs." />
        </Helmet>
      </HelmetProvider>
      <Frontpage />
    </>
  );
}

export default Home;
