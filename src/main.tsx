import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
