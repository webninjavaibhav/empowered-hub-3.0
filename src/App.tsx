import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={<PrivateRoutes />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="*"
            element={<h2>Page not found</h2>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
