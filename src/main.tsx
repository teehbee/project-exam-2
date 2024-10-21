import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { router } from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store.tsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
