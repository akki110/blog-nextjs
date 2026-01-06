// import { Menu } from "lucide-react";
import { Menu } from "@/lib/icons";

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-surface" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Mind Spill</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 hidden sm:inline">
            Welcome, Admin
          </span>
          <button className="px-3 py-1 text-sm font-medium cursor-pointer bg-red-50 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition-colors">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
