import Images from "../../assets";
import { Link } from "react-router-dom";
import useNavbar from "./hooks/useNavbar";
import Loader from "../../components/Loading/Loader";
import clsx from "clsx";

function Navbar() {
  const {
    user,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    logout,
    isLoading,
  } = useNavbar();

  return (
    <div className="sticky top-0 z-10 flex items-center  justify-between p-4 bg-sapphire text-white shadow-md rounded-md rounded-bl-none h-[74px]">
      <Link to="/">
        <div
          className={clsx(
            "flex gap-3 min-w-[90px] items-center p-[10px] rounded-t-2xl group-hover:ps-[20px] justify-center group-hover:justify-start cursor-pointer"
          )}
        >
          <img
            src={Images.logo}
            alt="logo"
          />
          <span className="text-fluorite font-bold text-h4 transition-all duration-[700ms] ease-in-out">
            HUB
          </span>
        </div>
      </Link>
      <div
        className="relative flex justify-between items-center gap-2"
        onMouseEnter={() => !isLoading && handleMouseEnter()}
        onMouseLeave={handleMouseLeave}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <span className="font-button capitalize">
              {user?.FirstName + " " + user?.LastName.replaceAll("_0", "")}
            </span>
            <img
              src={Images.john}
              alt="profile"
              className="rounded-full cursor-pointer"
            />
          </>
        )}

        {isHovered && (
          <div className="absolute bg-white p-6 border right-0 top-[40px] rounded-lg text-carbon shadow-2xl">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="h-[24px] w-[24px]">
                  <img
                    src={Images.profileLogo}
                    alt="profile"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className=" capitalize">
                    {user?.FirstName +
                      " " +
                      user?.LastName.replaceAll("_0", "")}
                  </div>
                  <div className="text-xs text-nowrap">{user?.Email ?? ""}</div>
                  <div className="text-filter-text text-fluorite cursor-pointer">
                    <Link to="profile">View Profile &#8599;</Link>
                  </div>
                </div>
              </div>
              <div className="w-full border-b pt-2"></div>
              <div className="flex gap-2 pt-2">
                <img
                  className="h-[24px] w-[24px]"
                  src={Images.logout}
                  alt="profile"
                />
                <div
                  onClick={logout}
                  className="cursor-pointer"
                >
                  Log - out
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
