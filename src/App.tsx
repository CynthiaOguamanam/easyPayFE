import React from "react";
import Allroutes from "./Components/AllRoutes";
import Routes from "./Components/RegisterRoutes/Routes";
import UserRoutes from "./Components/RegisterRoutes/UserRoutes";
import Cardpay from "./Components/StaffDashboard/Cardpay"

const App = () => {
  return (
    <div>
      <Allroutes />
      <Routes />
      <UserRoutes /> 
      {/* <Cardpay />  */}
    </div>
  );
};

export default App;
