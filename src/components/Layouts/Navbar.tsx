import { NavLink } from "react-router-dom";
import Container from "./Container";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="fixed w-full z-10 bg-white">
      <Container>
        <nav className="h-16 flex justify-between items-center ">
          <h1 className="text-[24px] md:text-[32px]">iRepear</h1>
          <ul className="flex items-center gap-2 md:gap-x-5 text-sm">
            <NavLink to="">home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            <Button>
              <NavLink to="/login">Login</NavLink>
            </Button>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
