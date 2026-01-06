"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/admin/Footer";

const AdminLayout = ({ children }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  // If it's the login page, render without admin panel UI
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">{children}</div>
      </div>
    );
  }

  // For all other admin pages, render with full admin panel layout
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <Navbar onMenuClick={toggleMobileSidebar} />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          isMobileOpen={isMobileSidebarOpen}
          onClose={closeMobileSidebar}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
