import React from "react";
import { useRoutes } from "react-router-dom";
import OptionSignin from "../Auth/Staff/OptionSignin";
import OptionSignup from "../Auth/Staff/OptionSignup";
import StaffSignin from "../Auth/Staff/StaffSignin";
import StaffSignup from "../Auth/Staff/StaffSignup";

const UserRoutes = () => {
  let element = useRoutes([
    {
      path: "/user/signup",
      element: <StaffSignup />,
    },
    {
      path: "/optionsignup",
      element: <OptionSignup />,
    },
    {
      path: "/optionsignin",
      element: <OptionSignin />,
    },
    {
      path: "/user/signin",
      element: <StaffSignin />,
    },
  ]);
  return element;
};

export default UserRoutes;
