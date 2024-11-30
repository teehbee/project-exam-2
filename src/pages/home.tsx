import { useScrollToTop } from "../components/utils";
import { Frontpage } from "../components/frontpageContent";
import { Helmet } from "react-helmet";

function Home() {
  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Holidaze - Rent and List Accommodations Easily</title>
        <meta name="description" content="Holidaze: A platform where users can rent or rent out accommodations, offering a seamless and convenient experience for all your travel needs." />
      </Helmet>
      <Frontpage />
    </>
  );
}

export default Home;
