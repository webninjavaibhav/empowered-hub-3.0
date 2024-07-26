import SignUp from "./pages/auth/SignUp";
import Home from "./pages/private/Home";
import Profile from "./pages/private/Profile";

import OktaAuth, { toRelativeUrl } from "@okta/okta-auth-js";
import { Route, Routes, useNavigate } from "react-router-dom";

// for the authontication
import Okta from "./helpers/Okta";
import { LoginCallback, Security } from "@okta/okta-react";

function App() {
  const oktaAuth = new OktaAuth(Okta.oidc);

  const navigation = useNavigate();

  const triggerLogin = async () => {
    await oktaAuth.signInWithRedirect();
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigation(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  const customAuthHandler = async () => {
    const previousAuthState = oktaAuth.authStateManager.getPreviousAuthState();
    if (!previousAuthState || !previousAuthState.isAuthenticated) {
      // App initialization stage
      await triggerLogin();
    } else {
      // Ask the user to trigger the login process during token autoRenew process
      alert("Something went wrong !");
    }
  };

  return (
    <>
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login/callback"
            element={<LoginCallback />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
        </Routes>
      </Security>
    </>
  );
}

export default App;
