import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
} from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa6";

const NavbarComponent = () => {
  return (
    <Navbar isBlurred className="shadow bg-amber-50">
      <NavbarBrand>
        <Link as={RouterLink} to="/" color="foreground" className="flex">
          <h1 className="flex justify-center items-center text-3xl font-bold space-x-0">
            <FaPaperclip className="text-primary me-2" />
            <span className="text-primary">Li</span>
            <span>nki</span>
            <span className="text-primary">fy</span>
          </h1>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Tooltip content="Feature coming soon">
            <Link color="foreground" href="#">
              Features
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem isActive>
          <Tooltip content="Feature coming soon">
            <Link aria-current="page" href="#">
              Customers
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="Feature coming soon">
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link as={RouterLink} to="/signin">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={RouterLink} to="/signup" color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
