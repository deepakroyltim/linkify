import type { ReactNode } from "react";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 text-foreground flex flex-col">
      <NavbarComponent />
      <main className="w-full flex-1">{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;
