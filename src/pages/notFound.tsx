import { useScrollToTop } from "../components/utils";
import PageNotFound from "../components/error";
import { Helmet } from "react-helmet";

function NotFound() {
  useScrollToTop();
  return (
    <>
      <Helmet>
        <title>Page Not Found - Holidaze</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist. Please check the URL or return to the homepage. If you need assistance, feel free to contact us." />
      </Helmet>
      <PageNotFound />
    </>
  );
}

export default NotFound;
