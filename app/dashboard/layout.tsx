"use client";

import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/Sidebar/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/Topbar/DashboardTopbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Sidebar */}
      <DashboardSidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <DashboardTopbar
          onToggleSidebar={() => setIsMobileSidebarOpen(true)}
        />

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
