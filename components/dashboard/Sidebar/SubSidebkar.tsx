"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem } from "./SideBarMenu";

interface SubSidebarProps {
  item: MenuItem;
}

export default function SubSidebar({ item }: SubSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-48 bg-white border-r border-[#E5E9F2] shadow-[rgba(0,0,0,0.05)] flex flex-col">
      {/* Header */}
      <div className="h-16 flex items-center px-4 border-b border-[#E5E9F2] bg-gradient-to-r from-[#165DFC] to-[#4EA8FF]">
        <h2 className="text-sm font-semibold text-white truncate">{item.name}</h2>
      </div>

      {/* Links */}
      <nav className="flex-1 overflow-y-auto py-2 px-3 bg-white space-y-1">
        {item.subItems?.map((sub) => {
          const isActive =
            pathname === sub.href || pathname.startsWith(sub.href + "/");

          return (
            <Link
              key={sub.name}
              href={sub.href}
              aria-current={isActive ? "page" : undefined}
              className={`block py-2 px-3 rounded-md text-sm font-medium transition-all ${
                isActive
                  ? "bg-gradient-to-r from-[#165DFC] to-[#4EA8FF] text-white shadow-[0_2px_6px_rgba(22,93,252,0.15)]"
                  : "text-[#1E293B] hover:bg-[#E5E9F2]/70 hover:text-[#165DFC]"
              }`}
            >
              {sub.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
