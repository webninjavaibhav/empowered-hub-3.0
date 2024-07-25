import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Auth from "./helpers/Auth";
import Boarding from "./pages/auth/Boarding";
import Home from "./pages/private/Home";
import Profile from "./pages/private/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Auth />}>
            <Route
              index
              path="/home"
              element={<Home />}
            />
            <Route
              path="/profile"
              element={<Profile />}
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
            element={<Boarding />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
