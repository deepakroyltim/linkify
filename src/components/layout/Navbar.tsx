import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { FaPaperclip } from "react-icons/fa6";
import { MdDashboard, MdSettings, MdLogout } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";
import { authService } from "../../services/authService";
import { useTheme } from "../../hooks/useTheme";
import type { User } from "../../types/User";

const NavbarComponent = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    const authenticated = authService.isAuthenticated();
    setUser(currentUser);
    setIsAuthenticated(authenticated);
  }, []);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <Navbar
      isBlurred
      className="shadow bg-amber-50/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-divider"
    >
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
        <NavbarItem isActive={location.pathname === "/guide"}>
          <Link as={RouterLink} to="/guide" color="foreground">
            Guide
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/about"}>
          <Link as={RouterLink} to="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/faq"}>
          <Link as={RouterLink} to="/faq" color="foreground">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/pricing"}>
          <Link as={RouterLink} to="/pricing" color="foreground">
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <BsMoon /> : <BsSun />}
          </Button>
        </NavbarItem>
        {isAuthenticated && user ? (
          <>
            <NavbarItem className="hidden sm:flex">
              <span className="text-sm text-foreground/70 font-medium">
                Welcome back, {user.firstName}!
              </span>
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Avatar
                    as="button"
                    className="transition-transform"
                    size="sm"
                    src={user.avatar}
                    name={`${user.firstName} ${user.lastName}`}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User menu">
                  <DropdownItem
                    key="profile"
                    className="h-14 gap-2"
                    textValue="Profile"
                  >
                    <div className="flex flex-col">
                      <p className="font-semibold">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </DropdownItem>
                  <DropdownItem
                    key="dashboard"
                    startContent={<MdDashboard className="text-lg" />}
                    onPress={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </DropdownItem>
                  <DropdownItem
                    key="settings"
                    startContent={<MdSettings className="text-lg" />}
                    onPress={() => navigate("/settings")}
                  >
                    Settings
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    startContent={<MdLogout className="text-lg" />}
                    onClick={handleLogout}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link as={RouterLink} to="/signin">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={RouterLink}
                to="/signup"
                color="primary"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
