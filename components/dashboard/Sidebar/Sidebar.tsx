"use client";

import { FolderIcon, X } from "lucide-react";

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (value: boolean) => void;
}

export default function Sidebar({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}: SidebarProps) {
  const menuItems = ["Dashboard", "Projects", "Tasks", "Reports", "Settings"];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-1/4 bg-white border-r border-gray-200 flex-col">
        <div className="h-16 flex items-center justify-center bg-gradient-to-r from-[#165DFC] to-[#4EA8FF]">
          <div className="flex items-center gap-2 text-white font-semibold">
            <FolderIcon className="w-6 h-6" />
            <span>OrgOffice</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item}
              className="w-full text-left px-3 py-2 rounded-md text-[#1E293B] hover:bg-[#E5E9F2]/70 hover:text-[#165DFC] font-medium transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>

          {/* Sidebar Drawer */}
          <aside className="w-64 bg-white h-full flex flex-col shadow-xl animate-slideIn">
            <div className="h-16 flex items-center justify-between px-4 bg-gradient-to-r from-[#165DFC] to-[#4EA8FF] text-white">
              <div className="flex items-center gap-2">
                <FolderIcon className="w-6 h-6" />
                <span className="font-semibold">OrgOffice</span>
              </div>
              <button onClick={() => setIsMobileSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="w-full text-left px-3 py-2 rounded-md text-[#1E293B] hover:bg-[#E5E9F2]/70 hover:text-[#165DFC] font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
