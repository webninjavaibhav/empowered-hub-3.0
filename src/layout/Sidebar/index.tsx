import { useState } from "react";
import Images from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();

  const [fullNavigation, setFullNavigation] = useState<boolean>(false);

  const handleNavigation = (path: string) => navigate(path, { replace: true });

  const toggleHandler = () => setFullNavigation(!fullNavigation);

  const mainRoute = [
    {
      name: "Activity",
      route: "/activity",
      icon: Images.activity,
    },
    {
      name: "Resources",
      route: "/resources",
      icon: Images.resource,
    },
    {
      name: "Shop Empowered",
      route: "/shop-empowered",
      icon: Images.shopEmpowered,
    },
  ];

  const secondryRoute = [
    {
      name: "Professional Development",
      route: "/professional-development",
      icon: Images.professionalDevelopment,
    },
    {
      name: "Community",
      route: "/community",
      icon: Images.community2,
    },
    {
      name: "Mighty Networks",
      route: "/mighty-networks",
      icon: Images.mightyNetwork,
    },
  ];

  return (
    <div
      className={`${
        fullNavigation ? "w-[260px]" : "w-[90px]"
      } transition-all duration-[500ms] ease-in-out bg-sapphire text-white rounded-2xl flex flex-col justify-around`}
    >
      <div
        className={clsx(
          "flex gap-3 min-w-[90px] items-center p-[10px] rounded-t-2xl ",
          fullNavigation ? "ps-[20px]" : "justify-center"
        )}
      >
        <img
          src={Images.logo}
          alt="logo"
        />
        {fullNavigation && (
          <span className="text-fluorite font-bold text-h4 transition-all duration-[700ms] ease-in-out">
            HUB
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 py-2">
        <div className="flex flex-col gap-[4px]">
          {mainRoute?.map((nav) => {
            let isActive = path === nav?.route ? true : false;
            return (
              <div key={nav?.name}>
                <div
                  className="cursor-pointer p-0"
                  onClick={() => handleNavigation(nav?.route)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center min-w-[90px] h-[52px]">
                      <div
                        className={`flex items-center justify-center w-[50px] h-[50px] ${
                          isActive ? "bg-fluorite rounded-lg" : "bg-transparent"
                        }`}
                      >
                        <img
                          src={nav.icon}
                          alt={nav.name}
                        />
                      </div>
                    </div>
                    <div
                      className={`${fullNavigation ? "opacity-1" : "opacity-0"} 
                    ${
                      isActive ? "text-fluorite" : ""
                    } whitespace-nowrap overflow-hidden truncate pr-4 transition-all duration-[700ms] ease-in-out`}
                    >
                      {nav?.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="flex w-[80%] m-auto border-b-2 border-carbon"></div>
        </div>
        <div className="flex flex-col gap-2">
          {secondryRoute?.map((nav) => {
            let isActive = path === nav?.route ? true : false;
            return (
              <div key={nav?.name}>
                <div className="cursor-pointer p-0">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center min-w-[90px] h-[52px]">
                      <div
                        className={`flex items-center justify-center w-[50px] h-[50px]${
                          isActive
                            ? " bg-fluorite rounded-lg"
                            : "bg-transparent"
                        }`}
                      >
                        <img
                          src={nav.icon}
                          alt={nav.name}
                        />
                      </div>
                    </div>
                    <div
                      className={`${fullNavigation ? "opacity-1" : "opacity-0"} 
                    ${
                      isActive ? "text-white" : ""
                    } whitespace-nowrap overflow-hidden transition-all truncate pr-4 duration-[700ms] ease-in-out`}
                    >
                      {nav?.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-around">
        <div className={`flex justify-end mr-[-18px] pb-[60px] relative z-10`}>
          <img
            onClick={toggleHandler}
            className="cursor-pointer h-8 "
            src={fullNavigation ? Images.sidebarLeft : Images.sidebarRight}
            alt=">"
          />
        </div>
        <div className="flex items-center pb-5">
          <div className="flex items-center justify-center min-w-[90px] h-[52px]">
            <img
              src={Images.support}
              alt="profile"
            />
          </div>
          <div
            className={`${
              fullNavigation ? "opacity-1" : "opacity-0"
            } whitespace-nowrap overflow-hidden transition-all duration-[700ms] ease-in-out`}
          >
            Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
