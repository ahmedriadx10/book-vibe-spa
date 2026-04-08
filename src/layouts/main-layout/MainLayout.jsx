import { Outlet } from "react-router";
import Navbar from "../../components/shared/navbar/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <ToastContainer/>
    </>
  );
};

export default MainLayout;
