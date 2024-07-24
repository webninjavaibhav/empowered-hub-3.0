import { Route, Routes } from "react-router";

import Home from "../pages/private/Home";
import Profile from "../pages/private/Profile";
import Navbar from "../layout/Navbar";

function PrivateRoutes() {
  return (
    <div className=" bg-white h-[100vh]">
      <Navbar />

      <Routes>
        <Route
          path="home"
          element={<Home />}
        />
        <Route
          path="profile"
          element={<Profile />}
        />
      </Routes>
    </div>
  );
}

export default PrivateRoutes;
