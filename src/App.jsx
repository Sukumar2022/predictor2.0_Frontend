import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AppLayout from "./AppLayout";
import "./Components/charts/chartSetup";
import Teams from "./Pages/Teams";
import About from "./Pages/About";
import Login from "./admin/Login";
import Pricing from "./Pages/Pricing";
import SuperAdminDashboard from "./admin/SuperAdminDashboard";
import Admin_appLayout from "./admin/Admin_appLayout";
import Register from "./admin/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "teams",
          element: <Teams />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
      ],
    },
    {
      path:"/login",
      element:<Login />
    },

    {
      path: "adminDashboard",
      element: <Admin_appLayout />,
      children: [
        {
          index: true,
          element: <SuperAdminDashboard/>,
        },
        {
          path: "addAdmin",
          element:<Register/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
