import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
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
    ],
  },
]);

export { router };