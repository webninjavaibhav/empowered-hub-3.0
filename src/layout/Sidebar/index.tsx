import Images from "../../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();
  const handleNavigation = (path: string) => navigate(path, { replace: true });

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
    <div className="group flex font-button">
      <div
        className={`w-[90px] group-hover:w-[260px]  transition-all duration-[500ms] ease-in-out bg-sapphire text-white rounded-2xl flex flex-col justify-around`}
      >
        <Link to="/">
          <div
            className={clsx(
              "flex gap-3 min-w-[90px] items-center p-[10px] rounded-t-2xl group-hover:ps-[20px] justify-center group-hover:justify-start"
            )}
          >
            <img
              src={Images.logo}
              alt="logo"
            />
            <span className="text-fluorite hidden group-hover:block font-bold text-h4 transition-all duration-[700ms] ease-in-out">
              HUB
            </span>
          </div>
        </Link>
        <div className="flex flex-col gap-3 py-2">
          <div className="flex flex-col gap-2">
            {mainRoute?.map((nav) => {
              let isActive = path === nav?.route ? true : false;
              return (
                <div key={nav?.name}>
                  <div
                    className="cursor-pointer p-0"
                    onClick={() => handleNavigation(nav?.route)}
                  >
                    <div
                      className={clsx(
                        "flex items-center overflow-hidden mx-4 ",
                        isActive && "bg-topaz rounded-lg"
                      )}
                    >
                      <div className="flex items-center justify-center min-w-[60px] h-[52px]">
                        <div
                          className={
                            "flex items-center justify-center w-[50px] h-[50px]"
                          }
                        >
                          <img
                            src={nav.icon}
                            alt={nav.name}
                          />
                        </div>
                      </div>
                      <div
                        className={`whitespace-nowrap group-hover:block truncate pr-4 transition-all duration-[700ms] ease-in-out`}
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
            <div className="flex w-[75%] m-auto border-b-2 border-carbon"></div>
          </div>
          <div className="flex flex-col gap-2">
            {secondryRoute?.map((nav) => {
              let isActive = path === nav?.route ? true : false;
              return (
                <div key={nav?.name}>
                  <div className="cursor-pointer p-0">
                    <div
                      className={clsx(
                        "flex items-center overflow-hidden mx-4 ",
                        isActive && "bg-topaz rounded-lg"
                      )}
                    >
                      <div className="flex items-center justify-center min-w-[60px] h-[52px]">
                        <div
                          className={`flex items-center justify-center w-[50px] h-[50px]`}
                        >
                          <img
                            src={nav.icon}
                            alt={nav.name}
                          />
                        </div>
                      </div>
                      <div
                        className={`whitespace-nowrap overflow-hidden group-hover:block transition-all truncate pr-4 duration-[700ms] ease-in-out`}
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
        <div></div>
        <div></div>
        <div className="flex flex-col justify-around">
          <div className="flex items-center">
            <div className="flex items-center justify-center min-w-[90px] h-[52px]">
              <img
                src={Images.support}
                alt="profile"
              />
            </div>
            <div
              className={`group-hover:block whitespace-nowrap overflow-hidden transition-all duration-[700ms] ease-in-out`}
            >
              Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
