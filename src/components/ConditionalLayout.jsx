"use client";

import { usePathname } from "next/navigation";
import Navbar from "./user/Navbar";
import Footer from "./user/Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div className={!isAdminRoute ? "min-h-screen mt-14" : "min-h-screen"}>
        {children}
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}
