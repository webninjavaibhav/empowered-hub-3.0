import { Outlet } from "react-router";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function index() {
  return (
    <div className="flex w-screen h-screen overflow-auto p-4 pe-0">
      <Sidebar />
      <div className="w-full overflow-auto px-4">
        <Banner />
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default index;
