import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRoutes from "./routes/PrivateRoutes";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Auth from "./helpers/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Auth />}>
            <Route
              path="/*"
              element={<PrivateRoutes />}
            />
          </Route>
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
