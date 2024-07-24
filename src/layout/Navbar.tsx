import { useState } from "react";
import Images from "../assets";
import { Link } from "react-router-dom";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between p-4 bg-gray-200 bg-carbon text-white">
        <Link
          to="/home"
          className="self-center text-2xl font-semibold whitespace-nowrap"
        >
          HUB <span className="text-topaz">3.0</span>
        </Link>

        <div
          className="relative flex justify-between items-center gap-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="font-button">John Doe</span>
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
                  <div className="text-xs">admin@gmail.com</div>
                </div>
                <div>
                  <div className="text-body-text font-h5">Log - out</div>
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
