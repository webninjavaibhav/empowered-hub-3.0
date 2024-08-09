import Images from "../../assets";
import { Link } from "react-router-dom";
import useNavbar from "./hooks/useNavbar";
import Loader from "../../components/Loading/Loader";

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
    <div className="sticky top-0">
      <div className="z-10 flex flex-wrap items-center justify-end p-4 bg-white text-sapphire shadow-md rounded-xl border h-[74px]">
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
                {user?.FirstName + " " + user?.LastName}
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
                      {user?.FirstName + " " + user?.LastName}
                    </div>
                    <div className="text-xs text-nowrap">
                      {user?.Email ?? ""}
                    </div>
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
    </div>
  );
}

export default Navbar;
