import { Outlet } from "react-router";
import Banner from "./Banner";
import Navbar from "./Navbar";

function index() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default index;
