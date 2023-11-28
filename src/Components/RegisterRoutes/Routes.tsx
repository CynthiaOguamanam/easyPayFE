import React from "react";
import { useRoutes } from "react-router-dom";
import AdminSignIn from "../Auth/Admin/AdminSignin";
import AdminSignUp from "../Auth/Admin/AdminSignup";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/admin/signup",
      element: <AdminSignUp />,
    },
    {
      path: "/admin/signin",
      element: <AdminSignIn />,
    },
  ]);
  return element;
};

export default Routes;
