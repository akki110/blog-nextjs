"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const AdminLayout = ({ children }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)] sticky top-[73px]">
          <nav className="p-4 space-y-2">
            <Link
              href="/admin/dashboard"
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname === "/admin/dashboard"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              📊 Dashboard
            </Link>
            <Link
              href="/admin/users"
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname === "/admin/users"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              👥 Users
            </Link>
            <Link
              href="/admin/settings"
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                pathname === "/admin/settings"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              ⚙️ Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
