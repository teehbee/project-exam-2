import { Link } from "react-router-dom";
import { frontPageImage1, frontPageImage2 } from "../../assets/frontpageImg";

function FrontpageTiles() {
  return (
    <section className="container my-5 pb-5">
      <div className="row mb-4 gx-lg-5">
        <div className="col-12 col-lg-6">
          <img className="img-fluid form-box-shadow-no-br" src={frontPageImage1} alt="People dining around a table" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start d-flex flex-column justify-content-center p-0">
          <h3 className="secondary-font fs-1-5rem-to-2-5rem pt-3 pt-lg-0 px-3">Earn money on your property</h3>
          <p className="p-3">Find your perfect stay with Holidaze! Easily search and book unique accommodations, from apartments to villas, using our simple filters. With secure payments and detailed listings, booking your next getaway is a breeze!</p>
          <Link to="register" className="font-gray p-3 link-hover-md">
            Register here!
          </Link>
        </div>
      </div>
      <div className="row flex-lg-row-reverse gx-lg-5">
        <div className="col-12 col-lg-6">
          <img className="img-fluid form-box-shadow-no-br" src={frontPageImage2} alt="Landscape in northern Norway" />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-end d-flex flex-column justify-content-center">
          <h3 className="secondary-font fs-1-5rem-to-2-5rem pt-3 pt-lg-0">Find your next getaway</h3>
          <p className="p-3">Turn your property into a vacation rental with Holidaze! List your space in minutes, set your own prices, and manage bookings with ease. Our secure system ensures hassle-free payments, so you can start earning extra income right away.</p>
          <Link to="venues" className="font-gray p-3 link-hover-md">
            Look for accommodation here
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FrontpageTiles;
