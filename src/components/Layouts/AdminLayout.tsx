// import Sidebar from "@/pages/admin/Sidebar";
import Sidebar from "@/pages/admin/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 ">
      <Sidebar />
      <div className="col-span-10 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
