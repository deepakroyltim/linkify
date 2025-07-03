import type { ReactNode } from "react";
import NavbarComponent from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarComponent />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
