"use client";

interface TopbarProps {
  setIsMobileSidebarOpen: (value: boolean) => void;
}

export default function Topbar({ setIsMobileSidebarOpen }: TopbarProps) {
  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4 bg-white shadow-sm">
      <p className="text-gray-700 font-medium">Topbar Area</p>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-[#165DFC] text-2xl font-semibold"
        onClick={() => setIsMobileSidebarOpen(true)}
      >
        ☰
      </button>
    </div>
  );
}
