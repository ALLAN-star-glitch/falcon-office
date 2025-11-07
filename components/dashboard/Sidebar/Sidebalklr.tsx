"use client";

import { useState } from "react";
import { FolderIcon, Menu as MenuIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { menuGroups, MenuItem } from "./SideBarMenu";
import SubSidebar from "./SubSidebkar";


export default function Sidebarkk() {
  const pathname = usePathname();
  const router = useRouter();

  const activeItem =
    menuGroups
      .flatMap((group) => group.items)
      .find((item) => pathname.startsWith(item.href)) || null;

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(activeItem);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMenuClick = (item: MenuItem) => {
    if (item.subItems) {
      setSelectedItem((prev) => (prev?.name === item.name ? null : item));
    } else {
      router.push(item.href);
      setSelectedItem(null);
      setIsMobileOpen(false); // close sidebar on mobile navigation
    }
  };

  return (
    <div className="flex h-screen bg-[#F9FBFF]">
      {/* Main Sidebar */}
      <aside
        className={`
          bg-white/90 backdrop-blur-md border-r border-[#E5E9F2] flex flex-col transition-all duration-300
          ${collapsed ? "w-20" : "w-52"}
          ${isMobileOpen ? "fixed inset-0 z-50 w-52" : "md:static"}
          ${!isMobileOpen && "hidden md:flex"}
        `}
      >
        {/* Header Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#E5E9F2] bg-gradient-to-r from-[#165DFC] to-[#4EA8FF]">
          <div className="flex items-center gap-2 cursor-pointer">
            <FolderIcon className="w-6 h-6 text-white" />
            {!collapsed && (
              <span className="text-lg font-semibold text-white tracking-wide">
                OrgOffice
              </span>
            )}
          </div>

          {/* Collapse Toggle */}
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
              if (window.innerWidth < 768) {
                setIsMobileOpen(!isMobileOpen);
              } else {
                setCollapsed(!collapsed);
              }
            }}
          >
            <MenuIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-medium text-white opacity-90 mt-1 group-hover:opacity-100 transition-opacity">
              {collapsed ? "Expand" : "Collapse"}
            </span>
          </div>
        </div>

        {/* Menu Items */}
        <nav
          className={`
            flex-1 overflow-y-auto py-4 px-1
            ${isMobileOpen ? "block" : "hidden md:block"}
          `}
        >
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
  );
}
