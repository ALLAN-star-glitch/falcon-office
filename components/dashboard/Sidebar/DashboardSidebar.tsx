"use client";

import { FC } from "react";
import { X as CloseIcon } from "lucide-react";

interface DashboardSidebarProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r min-h-screen">
        <div className="p-4 text-lg font-semibold border-b">Dashboard</div>
        <nav className="flex-1 p-4 space-y-3">
          <a href="#" className="block hover:text-blue-600">
            Overview
          </a>
          <a href="#" className="block hover:text-blue-600">
            Settings
          </a>
          <a href="#" className="block hover:text-blue-600">
            Reports
          </a>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ease-in-out ${
          isMobileSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay - OrgOffice color w/ opacity */}
        <div
          className={`absolute inset-0 bg-[#3B82F6]/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out`}
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>

        {/* Sliding Sidebar */}
        <aside
          className={`absolute left-0 top-0 bottom-0 w-64 bg-white shadow-2xl rounded-r-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="p-1 rounded hover:bg-gray-100 transition"
            >
              <CloseIcon size={24} />
            </button>
          </div>

          <nav className="p-4 space-y-3">
            <a href="#" className="block hover:text-blue-600 transition">
              Overview
            </a>
            <a href="#" className="block hover:text-blue-600 transition">
              Settings
            </a>
            <a href="#" className="block hover:text-blue-600 transition">
              Reports
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default DashboardSidebar;
