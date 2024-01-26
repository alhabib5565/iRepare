import { LayoutDashboard } from "lucide-react";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-light-grey h-screen sticky top-0 left-0 overflow-y-auto p-4">
      <nav className="w-full flex flex-col gap-4">
        <NavItem to="/admin/dashboard" Icon={LayoutDashboard}>
          Dashboard
        </NavItem>
        <NavItem to="/admin/add-service" Icon={LayoutDashboard}>
          Add sercice
        </NavItem>
        <NavItem to="/admin/service-list" Icon={LayoutDashboard}>
          Sercice List
        </NavItem>
      </nav>
    </div>
  );
};

export default Sidebar;
