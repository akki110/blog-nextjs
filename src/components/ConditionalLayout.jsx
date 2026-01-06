"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

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
