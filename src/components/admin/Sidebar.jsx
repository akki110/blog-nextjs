"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Settings,
  Users,
  X,
} from "@/lib/icons";

const Sidebar = ({ isMobileOpen, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      name: "Blog",
      href: "",
      icon: <Users className="w-4 h-4" />,
      dropdown: [
        {
          name: "Category",
          href: "/admin/category",
        },
        {
          name: "Blog",
          href: "/admin/blog",
        },
      ],
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  const pathname = usePathname();

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 lg:top-[73px] left-0 z-50 lg:z-auto
          w-64 bg-white border-r border-gray-200 
          h-screen lg:min-h-[calc(100vh-73px)]
          transition-transform duration-300 ease-in-out
          ${
            isMobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-800">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100%-73px)] lg:h-auto">
          {navItems.map((data, i) => (
            <div key={i}>
              {data.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(i)}
                    className={`w-full px-4 py-3 flex items-center justify-between gap-2 rounded-lg font-medium transition-colors text-gray-700 hover:bg-gray-100`}
                  >
                    <div className="flex items-center gap-2">
                      {data.icon}
                      {data.name}
                    </div>
                    {openDropdowns[i] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Dropdown items */}
                  {openDropdowns[i] && (
                    <div className="ml-6 mt-2 space-y-1">
                      {data.dropdown.map((item, j) => (
                        <Link
                          key={j}
                          href={item.href}
                          onClick={handleLinkClick}
                          className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                            pathname === item.href
                              ? "bg-surface text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={data.href}
                  onClick={handleLinkClick}
                  className={`px-4 py-3 flex items-center gap-2 rounded-lg font-medium transition-colors ${
                    pathname === data.href
                      ? "bg-surface text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {data.icon}
                  {data.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
