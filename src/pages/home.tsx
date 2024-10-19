import { frontpageHeroImageSmall, frontpageHeroImageLarge } from "../assets/img";
import SearchForm from "../components/forms";
import placeHolderImage from "../assets/placeholderImg";
import { frontPageImage1, frontPageImage2 } from "../assets/frontpageImg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <picture>
        <source media="(min-width: 992px)" srcSet={frontpageHeroImageLarge} />
        <img className="position-absolute top-0 banner-img" src={frontpageHeroImageSmall} aria-label="A beautiful fjord" />
      </picture>
      <section className="hero-container d-flex align-items-center justify-content-center position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="text-light secondary-font fs-2rem-to-3rem pt-lg-5">Spend Quality Holidays With Us</h1>
              <p className="text-light fs-1rem-to-1-25rem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>
            <div className="col-12 col-lg-6">
              <SearchForm />
            </div>
          </div>
        </div>
      </section>
      <section className="container text-center">
        <h2 className=" pb-5 py-md-5 secondary-font fs-1-5rem-to-2-5rem">Find your next getaway</h2>
        <div className="row pb-5 g-1">
          <div className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to="venue">
                <img className="img-fluid" src={placeHolderImage} alt="" />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">Name of accommodation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to="venue">
                <img className="img-fluid" src={placeHolderImage} alt="" />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">Name of accommodation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to="venue">
                <img className="img-fluid" src={placeHolderImage} alt="" />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">Name of accommodation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-lg-3 fp-img-container">
            <div className="position-relative">
              <Link to="venue">
                <img className="img-fluid" src={placeHolderImage} alt="" />
                <div className="fp-img-overlay">
                  <div className="fp-img-overlay-text text-start ps-3">
                    <p className="secondary-font text-light">Name of accommodation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-end">
          <Link className="text-decoration-none" to="venue">
            <p className="secondary-font text-decoration-none dark-font fs-1rem-to-1-5rem">See full list..</p>
          </Link>
        </div>
      </section>
      <section className="container my-5">
        <div className="row mb-4">
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src={frontPageImage1} alt="" />
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h3 className="secondary-font fs-1-5rem-to-2-5rem pt-5">Earn money on your property</h3>
            <p className="fw-light pt-3">
              Looking to earn extra income from your property? With Holidaze, it's easy to turn your space into a profitable vacation rental! Our user-friendly platform allows you to list your property online in just a few simple steps. Whether you own a cozy apartment, a luxurious villa, or a charming cottage, Holidaze connects you with travelers searching for unique accommodations. You have full control over pricing, availability, and booking conditions, while our secure system ensures hassle-free payments. Join Holidaze today and start welcoming guests to your property with confidence!
            </p>
            <Link to="register" className="dark-font pt-3">
              Register here!
            </Link>
          </div>
        </div>
        <div className="row flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src={frontPageImage2} alt="" />
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-end">
            <h3 className="secondary-font fs-1-5rem-to-2-5rem pt-5">Find your next getaway</h3>
            <p className="fw-light pt-3">
              Looking to earn extra income from your property? With Holidaze, it's easy to turn your space into a profitable vacation rental! Our user-friendly platform allows you to list your property online in just a few simple steps. Whether you own a cozy apartment, a luxurious villa, or a charming cottage, Holidaze connects you with travelers searching for unique accommodations. You have full control over pricing, availability, and booking conditions, while our secure system ensures hassle-free payments. Join Holidaze today and start welcoming guests to your property with confidence!
            </p>
            <Link to="register" className="dark-font pt-3">
              Register here!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
