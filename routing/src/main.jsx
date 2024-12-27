import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/Products'
import Contacts from './pages/Contacts'
import About from './pages/About'
// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/prducts",
    element: <Products />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
