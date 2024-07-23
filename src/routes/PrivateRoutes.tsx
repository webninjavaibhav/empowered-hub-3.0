import { Route, Routes } from "react-router";

import Home from "../pages/private/Home";

function PrivateRoutes() {
  return (
    <div className="bg-tapoz">
      <Routes>
        <Route
          path="home"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default PrivateRoutes;
