import { createBrowserRouter } from "react-router-dom";
import { Home, Venues, Register, Contact, RentOutVenue, Profile, Login, BookingSuccess, RegisterFormPage, RegistrationComplete, LoginComplete, VenueManagerBookings, UpdateVenue, UpdateProfile } from "../pages";
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
        path: "venue-manager-administration",
        element: <VenueManagerBookings />,
      },
      {
        path: "update-venue",
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
    ],
  },
]);

export { router };
