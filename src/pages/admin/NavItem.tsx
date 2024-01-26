import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TNavItem = {
  children: ReactNode;
  to: string;
  Icon: LucideIcon;
};

const NavItem = ({ children, to, Icon }: TNavItem) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex gap-2 p-3  rounded-md bg-grey hover:bg-dark-grey hover:text-white w-full transition-all",
          {
            "bg-dark-grey text-white": isActive,
          }
        )
      }
    >
      <Icon className="shrink-0" />
      <span className="truncate">{children}</span>
    </NavLink>
  );
};

export default NavItem;
