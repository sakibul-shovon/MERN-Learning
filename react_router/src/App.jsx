import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import Reports from "./components/Reports";
import NotFound from "./NotFound";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
        <Outlet /> {/* To render nested routes */}
      </div>
    ),
    children: [
      {
        path: "courses", // This matches "/dashboard/courses"
        element: <Courses />,
      },
      {
        path: "mocktest", 
        element: <MockTest/>
      },
      {
        path: "reports", 
        element: <Reports/>,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
