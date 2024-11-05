import { useScrollToTop } from "../components/utils";
import PageNotFound from "../components/error";

function NotFound() {
  useScrollToTop();
  return <PageNotFound />;
}

export default NotFound;
