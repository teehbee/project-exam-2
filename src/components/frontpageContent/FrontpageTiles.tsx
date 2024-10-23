import { Link } from "react-router-dom";
import { frontPageImage1, frontPageImage2 } from "../../assets/frontpageImg";

function FrontpageTiles() {
  return (
    <section className="container my-5">
      <div className="row mb-4">
        <div className="col-12 col-lg-6">
          <img className="img-fluid" src={frontPageImage1} alt="People dining around a table" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <h3 className="secondary-font fs-1-5rem-to-2-5rem pt-5">Earn money on your property</h3>
          <p className="fw-light pt-3">
            Looking to earn extra income from your property? With Holidaze, it's easy to turn your space into a profitable vacation rental! Our user-friendly platform allows you to list your property
            online in just a few simple steps. Whether you own a cozy apartment, a luxurious villa, or a charming cottage, Holidaze connects you with travelers searching for unique accommodations. You
            have full control over pricing, availability, and booking conditions, while our secure system ensures hassle-free payments. Join Holidaze today and start welcoming guests to your property
            with confidence!
          </p>
          <Link to="register" className="font-gray pt-3">
            Register here!
          </Link>
        </div>
      </div>
      <div className="row flex-lg-row-reverse">
        <div className="col-12 col-lg-6">
          <img className="img-fluid" src={frontPageImage2} alt="Landscape in northern Norway" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-end">
          <h3 className="secondary-font fs-1-5rem-to-2-5rem pt-5">Find your next getaway</h3>
          <p className="fw-light pt-3">
            Looking to earn extra income from your property? With Holidaze, it's easy to turn your space into a profitable vacation rental! Our user-friendly platform allows you to list your property
            online in just a few simple steps. Whether you own a cozy apartment, a luxurious villa, or a charming cottage, Holidaze connects you with travelers searching for unique accommodations. You
            have full control over pricing, availability, and booking conditions, while our secure system ensures hassle-free payments. Join Holidaze today and start welcoming guests to your property
            with confidence!
          </p>
          <Link to="register" className="font-gray pt-3">
            Register here!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FrontpageTiles;
