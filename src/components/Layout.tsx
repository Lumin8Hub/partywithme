import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingBookButton from "./FloatingBookButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <FloatingBookButton />
    {/* Spacer so the mobile floating button never covers footer content */}
    <div className="h-20 lg:hidden" aria-hidden="true" />
  </div>
);

export default Layout;
