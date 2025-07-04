import type { ReactNode } from "react";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarComponent />
      <main className="w-full">{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;
