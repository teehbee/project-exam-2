import { frontpageHeroImageSmall, frontpageHeroImageLarge } from "../assets/img";
import SearchForm from "../components/forms";

function Home() {
  return(
    <>
      <picture >
      <source media="(min-width: 992px)" srcSet={frontpageHeroImageLarge} />
      <img className="position-absolute top-0 banner-img" src={frontpageHeroImageSmall} aria-label="A beautiful fjord" />
      </picture>
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-6 pt-lg-5">
          <h1 className="text-light secondary-font fs-2rem-to-3rem">Spend Quality Holidays With Us</h1>
          <p className="text-light pt-3 fw-light">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
        <div className="col-12 col-lg-6 pt-3">
          <SearchForm />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;