import { placeHolderImage, placeHolderImageLarge } from "../../assets/placeholderImg";

function BookingSuccessContent() {
  return (
    <div className="container py-5 text-center">
      <h1 className="secondary-font fs-1-5rem-to-2-5rem">Booking confirmation</h1>
      <div className="form-box-shadow mt-5 row mx-1 mx-md-0">
        <div className="col-4 col-md-5 px-0">
          <picture>
            <source media="(min-width: 992px)" srcSet={placeHolderImageLarge} />
            <img className="img-fluid form-box-shadow" src={placeHolderImage} aria-label="placeholder" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccessContent;
