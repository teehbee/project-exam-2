import { Link } from 'react-router-dom';
import { logoSmall, logoLarge } from '../../assets/logo';

function Footer() {
  return (
    <footer className="bg-dark-gray-color py-3 pt-lg-5 pb-lg-4">
      <div className="container text-light text-center border-bottom-white">
        <div className="row pb-3">
          <div className="col-12 col-lg-3">
            <picture>
            <source media="(min-width: 992px)" srcSet={logoLarge} />
            <img src={logoSmall} aria-label="main logo" />
            </picture>
          </div>
            <div className="col-12 col-lg-2 py-3 py-lg-0 text-decoration-none d-lg-flex flex-column text-start-lg">
              <Link className="text-decoration-none text-light fs-0-875rem fw-light fs-0-75rem-to-1-125rem px-2 py-lg-2" to="/">HOME</Link>
              <Link className="text-decoration-none text-light fs-0-875rem fw-light fs-0-75rem-to-1-125rem px-2 py-lg-2" to="/">ACCOMODATION</Link>
              <Link className="text-decoration-none text-light fs-0-875rem fw-light fs-0-75rem-to-1-125rem px-2 py-lg-2" to="/">CONTACT</Link>
              <Link className="text-decoration-none text-light fs-0-875rem fw-light fs-0-75rem-to-1-125rem px-2 py-lg-2" to="/">RENT OUT</Link>
          </div>
              <div className="col-12 col-lg-2 text-decoration-none d-lg-flex flex-column text-start-lg">
              <Link className="text-decoration-none text-light fs-0-875rem fw-light fs-0-75rem-to-1-125rem px-2 py-lg-1" to="/">Login</Link>
              <Link className="text-decoration-none text-light fs-0-875rem fw-light fs-0-75rem-to-1-125rem px-2 py-lg-1" to="/">Register</Link>
          </div>
          <div className="col-12 col-lg-5 text-decoration-none pt-3 pt-lg-0">
            <p className="fs-0-625rem-to-1rem fw-light">Aknowledgements: </p>
            <p className="fs-0-5rem-to-0-625rem fw-light">This website is not real and is not representing a real company. This website is created by Tor-Håkon Bergseng as an exam delivery for the Front-End development studies at Noroff School of technology and digital media</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;