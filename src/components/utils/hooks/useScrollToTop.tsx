import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls user to the top of the page if entering from a link lower on the page

function useScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}
export default useScrollToTop;
