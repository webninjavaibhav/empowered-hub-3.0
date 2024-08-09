import { Outlet } from "react-router";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import clsx from "clsx";

function index() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleShow = () => setIsShow(false);
  const handleClose = () => setIsShow(true);

  return (
    <div className="w-screen h-screen p-2">
      <div>
        <Banner
          handleClose={handleClose}
          handleShow={handleShow}
          isShow={isShow}
        />
      </div>
      <Navbar />
      <div className="overflow-auto flex flex-col  pe-0 ">
        <div className="flex">
          <Sidebar />
          <div
            className={clsx(
              "w-full overflow-auto",
              isShow ? " h-[78vh]" : " h-[87vh]"
            )}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
