import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="secondary-font fw-bold py-3">404 Not Found</h1>
      <p className="pb-3">The page you are looking for might have been removed, had its name changed or is temporary unavailable</p>
      <Link className="font-gray" to="/">
        Return back to homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
