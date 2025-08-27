// NOTE: Unused in Next.js. Routing is handled by files under /pages.

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./screens/Login/Login";
import { Register } from "./screens/Register/Register";
import { DashboardLanding } from "./screens/DashboardLanding/DashboardLanding";
import { AllTeams } from "./screens/AllTeams";
import { TeamAddTeam } from "./screens/TeamAddTeam/TeamAddTeam";
import { TicketDetails } from "./screens/TicketDetails/TicketDetails";
import { AllOrders } from "./screens/AllOrders/AllOrders";
import { AllOrdersTwo } from "./screens/AllOrder2/AllOrders";
import { OrderDetails } from "./screens/OrderDetails/OrderDetails";
import { OrderDetailsTwo } from "./screens/OrderDetailsTwo/OrderDetailsTwo";
import { Stadiums } from "./screens/Stadiums/Stadiums";
import { StadiumZone } from "./screens/StadiumZone/StadiumZone";
import { ApiMergeApiData } from "./screens/ApiMergeApiData/ApiMergeApiData";
import { ApiPullDataAdd } from "./screens/ApiPullDataAdd/ApiPullDataAdd";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLanding />} />
        <Route path="/all-teams" element={<AllTeams />} />
        <Route path="/add-teams" element={<TeamAddTeam />} />
        <Route path="/ticket-details" element={<TicketDetails />} />
        <Route path="/all-orders" element={<AllOrders />} />
        <Route path="/all-orders-2" element={<AllOrdersTwo />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/order-details-2" element={<OrderDetailsTwo />} />
        <Route path="/stadiums" element={<Stadiums/>} />
        <Route path="/stadium-zone" element={<StadiumZone/>} />
        <Route path="/merge-api" element={<ApiMergeApiData/>} />
        <Route path="/pull-api" element={<ApiPullDataAdd/>} />
      </Routes>
    </Router>
  );
}

export default App;
