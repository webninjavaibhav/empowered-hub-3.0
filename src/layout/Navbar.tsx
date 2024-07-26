import { useState } from "react";
import Images from "../assets";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

function Navbar() {
  const info: any = localStorage.getItem("okta-token-storage");
  const users = JSON.parse(info);
  const userInfo = (users && users?.idToken?.claims?.name) || "";
  const email = (users && users?.idToken?.claims?.preferred_username) || "";

  const { oktaAuth } = useOktaAuth();
  const [isHovered, setIsHovered] = useState(false);

  const isCorsError = (err: any) =>
    err.name === "AuthApiError" &&
    !err.errorCode &&
    err.xhr.message === "Failed to fetch";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const logout = async () => {
    const basename = window.location.origin;
    try {
      await oktaAuth.signOut({ postLogoutRedirectUri: basename });
    } catch (err) {
      if (isCorsError(err)) {
        alert(JSON.stringify(err));
      } else {
        throw err;
      }
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between p-4 bg-sapphire text-white">
        <Link
          to="/"
          className="self-center text-2xl font-semibold whitespace-nowrap"
        >
          HUB <span className="text-topaz">3.0</span>
        </Link>

        <div
          className="relative flex justify-between items-center gap-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="font-button">{userInfo}</span>
          <img
            src={Images.john}
            alt="profile"
            className="rounded-full cursor-pointer"
          />
          {isHovered && (
            <div className="absolute bg-white p-6 min-w-[200px] border-topaz border right-0 top-[40px] rounded-lg text-carbon">
              <div className="flex flex-col gap-3">
                <div>
                  <Link
                    to="/profile"
                    className="text-body-text font-h5"
                  >
                    Profile
                  </Link>
                  <div className="text-xs text-nowrap">{email}</div>
                </div>
                <div>
                  <div
                    onClick={logout}
                    className="text-body-text font-h5 cursor-pointer"
                  >
                    Log - out
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
