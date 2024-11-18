import { createBrowserRouter } from "react-router-dom";
import { Home, Venues, Register, Contact, RentOutVenue, Profile, Login, BookingSuccess, RegisterFormPage, RegistrationComplete, LoginComplete, VenueManagerBookings, UpdateVenue, UpdateProfile, Venue, ContactSuccess, CreateVenueSuccess, UpdateVenueSuccess, UpdateProfileSuccess, NotFound } from "../pages";
import MainLayout from "../layouts/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "venues",
        element: <Venues />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "registration-form",
        element: <RegisterFormPage />,
      },
      {
        path: "registration-complete",
        element: <RegistrationComplete />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "rent-out",
        element: <RentOutVenue />,
      },
      {
        path: "venue-manager-administration:id",
        element: <VenueManagerBookings />,
      },
      {
        path: "update-venue:id",
        element: <UpdateVenue />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login-complete",
        element: <LoginComplete />,
      },
      {
        path: "success",
        element: <BookingSuccess />,
      },
      {
        path: "venue:id",
        element: <Venue />,
      },
      {
        path: "message-sent",
        element: <ContactSuccess />,
      },
      {
        path: "venue-created",
        element: <CreateVenueSuccess />,
      },
      {
        path: "venue-updated",
        element: <UpdateVenueSuccess />,
      },
      {
        path: "profile-updated",
        element: <UpdateProfileSuccess />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
