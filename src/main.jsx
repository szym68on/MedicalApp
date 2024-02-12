import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DoctorPage from "./pages/DoctorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/doctor", element: <DoctorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
