"use client";

import { useState } from "react";
import { FolderIcon, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { menuGroups, MenuItem } from "./SideBarMenu";
import SubSidebar from "./SubSidebar";

export default function Sidebar() {
  const pathname = usePathname();

  const activeItem =
    menuGroups
      .flatMap((group) => group.items)
      .find((item) => pathname.startsWith(item.href)) || null;

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(activeItem);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile sidebar state

  const handleMenuClick = (item: MenuItem) => {
    if (item.subItems) {
      setSelectedItem((prev) => (prev?.name === item.name ? null : item));
    } else {
      setSelectedItem(null);
    }
    // Close mobile sidebar when clicking a menu item
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <div className="flex h-screen bg-[#F9FBFF]">
        {/* Main Sidebar */}
        <aside
          className={`
            bg-white/90 backdrop-blur-md border-r border-[#E5E9F2] flex flex-col z-40 transition-all duration-300
            ${collapsed ? "w-20" : "w-52"}
            md:relative md:translate-x-0
            fixed top-0 left-0 h-full md:h-auto
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
            md:translate-x-0
          `}
        >
          {/* Header Section */}
          <div
            className={`h-16 flex items-center justify-between px-4 border-b border-[#E5E9F2] bg-gradient-to-r from-[#165DFC] to-[#4EA8FF]`}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <FolderIcon className="w-6 h-6 text-white" />
              {!collapsed && (
                <span className="text-lg font-semibold text-white tracking-wide">
                  OrgOffice
                </span>
              )}
            </div>

            {/* Toggle Section */}
            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => setCollapsed(!collapsed)}
            >
              <MenuIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-medium text-white opacity-90 mt-1 group-hover:opacity-100 transition-opacity">
                {collapsed ? "Expand" : "Collapse"}
              </span>
            </div>

            {/* Close Button for Mobile */}
            <button
              className="md:hidden p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close sidebar"
            >
              <CloseIcon className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4 px-1">
            {menuGroups.map((group) => (
              <div key={group.group}>
                {!collapsed && (
                  <p className="px-3 text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-1">
                    {group.group}
                  </p>
                )}
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/") ||
                    activeItem?.name === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => handleMenuClick(item)}
                      className={`w-full flex items-center gap-3 ${
                        collapsed ? "justify-center" : "px-3"
                      } py-2.5 rounded-lg text-sm font-medium text-left cursor-pointer transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#165DFC] to-[#4EA8FF] text-white shadow-[0_2px_6px_rgba(22,93,252,0.15)]"
                          : "text-[#1E293B] hover:bg-[#E5E9F2]/70 hover:text-[#165DFC]"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={`${
                          isActive ? "text-white" : "text-[#64748B]"
                        } transition-colors`}
                      />
                      {!collapsed && <span>{item.name}</span>}
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </aside>

        {/* SubSidebar for SubMenus */}
        {selectedItem?.subItems && <SubSidebar item={selectedItem} />}
      </div>

      {/* Mobile Toggle Button (can be placed in Topbar) */}
      <button
        className="fixed bottom-4 left-4 z-50 md:hidden p-3 bg-[#165DFC] text-white rounded-full shadow-lg hover:bg-[#4EA8FF] transition-colors"
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <MenuIcon className="w-6 h-6" />
      </button>
    </>
  );
}
