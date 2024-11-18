import { useScrollToTop } from "../components/utils";
import { Frontpage } from "../components/frontpageContent";

function Home() {
  useScrollToTop();
  return <Frontpage />;
}

export default Home;
