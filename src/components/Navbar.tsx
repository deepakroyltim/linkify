import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { FaPaperclip } from "react-icons/fa6";

const NavbarComponent = () => {
  return (
    <Navbar isBlurred className="shadow bg-amber-50">
      <NavbarBrand>
        <div className="flex">
          <h1 className="flex justify-center items-center text-3xl font-bold space-x-0">
            <FaPaperclip className="text-primary me-2" />
            <span className="text-primary">Li</span>
            <span>nki</span>
            <span className="text-primary">fy</span>
          </h1>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
