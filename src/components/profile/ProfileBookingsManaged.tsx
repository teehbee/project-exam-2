import { Link } from "react-router-dom";
import { VenueManagerBookingsData } from "../api/const/interfaces";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useApi } from "../api";
import { DELETE_VENUE_ENDPOINT } from "../api/const";
import Spinner from "react-bootstrap/Spinner";

const ProfileBookingsManaged: React.FC<VenueManagerBookingsData> = ({ venue }) => {
  const id = venue.id;
  const name = venue.name;
  const img = venue.media.length > 0 ? venue.media[0].url : "https://img.freepik.com/premium-vector/cartoon-hotel-with-sign-that-says-hotel-it_534019-32.jpg";
  const alt = venue.media.length > 0 ? venue.media[0].alt : "Accommodation image";
  const [show, setShow] = useState(false);
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [SelectedVenueId, setSelectedVenueId] = useState<string | null>(null);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  // api call for deleting venue, using deleteTrigger to control autofetch, so call is triggered by delete button

  const { data, error, loading } = useApi(SelectedVenueId ? `${DELETE_VENUE_ENDPOINT}/${SelectedVenueId}` : "", "DELETE", null, true, deleteTrigger);

  // open confirmation modal
  const handleShow = () => {
    setShow(true);
    setSelectedVenueId(venue.id);
  };

  // close confirmation modal
  const handleClose = () => {
    setShow(false);
    setSelectedVenueId(null);
  };

  // handle deletion by setting deleteTrigger to true to trigger api call
  const handleDelete = () => {
    setDeleteTrigger(true);
    setDeleteLoader(true);
  };

  useEffect(() => {
    if (deleteTrigger && !loading) {
      if (data === null) {
        setDeleteLoader(false);
        setShow(false);
        setSelectedVenueId(null);
        setDeleteTrigger(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }

      if (error) {
        setDeleteError(true);
        setDeleteLoader(false);
      }
    }
  }, [deleteTrigger, data, error, loading, SelectedVenueId]);

  return (
    <div className="profile-booking-container form-box-shadow mt-3 row mx-1 mx-md-0">
      <div className="col-4 col-md-3 px-0">
        <Link to={`/venue/${id}`}>
          <img className="form-box-shadow" src={img} alt={alt || "venue image"} />
        </Link>
      </div>
      <div className="col-8 col-md-9 text-start ps-3 ps-md-5 py-3 d-flex justify-content-between">
        <div>
          <Link className="text-decoration-none font-gray" to={`/venue/${id}`}>
            <h4 className="secondary-font fs-1rem-to-1-5rem mt-1 mb-0 fw-bold">{name}</h4>
          </Link>
        </div>
        <div className="d-flex flex-column justify-content-between p-md-3">
          <Link to={`/update-venue/${id}`}>
            <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem">Update</button>
          </Link>
          <Link to={`/venue-manager-administration/${id}`}>
            <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem">Bookings</button>
          </Link>
          <button className="main-button-gray my-1 py-1 fs-0-625rem-to-0-875rem" onClick={handleShow}>
            Delete
          </button>
          <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="mx-auto">
              <p className="font-gray mt-3">Are you sure you want to delete this venue?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="main-button-gray w-50" onClick={handleClose}>
                I changed my mind
              </Button>
              <Button className="main-button-red " onClick={handleDelete}>
                I am sure{deleteLoader && <Spinner className="ms-1" animation="border" size="sm" variant="light" />}
              </Button>
              {deleteError && <p className="text-danger pt-2 fs-0-75rem-to-0-875rem">Something went wrong, please try again later</p>}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProfileBookingsManaged;
