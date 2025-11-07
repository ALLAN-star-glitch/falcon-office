"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bell,
  ChevronDown,
  Search,
  MessageSquare,
  Send,
  X,
  Menu,
} from "lucide-react";

interface DashboardTopbarProps {
  onToggleSidebar: () => void;
}

export default function DashboardTopbar({ onToggleSidebar }: DashboardTopbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        {/* Mobile Sidebar Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={onToggleSidebar}
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>

        <h1 className="hidden md:block text-lg font-semibold text-gray-800 tracking-tight">
          Dashboard
        </h1>
        <span className="hidden lg:inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full font-medium">
          Admin Panel
        </span>
      </div>

      {/* Search */}
      <div className="flex-1 flex justify-center relative">
        {/* Desktop Search */}
        <div className="hidden md:block relative w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search OrgOffice..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-sm"
          />
        </div>

        {/* Mobile Search Overlay */}
        {mobileSearchOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white shadow-lg rounded-md p-3 z-50 md:hidden">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search OrgOffice..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-sm"
              />
              <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                onClick={() => setMobileSearchOpen(false)}
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Search Button */}
        <button
          className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
        >
          <Search className="w-5 h-5 text-gray-700" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Messages */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <MessageSquare className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full" />
        </button>

        {/* Bulk SMS */}
        <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white font-medium px-3 py-2 rounded-lg shadow hover:bg-blue-700 transition-all">
          <Send className="w-4 h-4" />
          <span className="text-sm">Send Bulk SMS</span>
        </button>

        {/* Mobile SMS icon */}
        <button className="md:hidden p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          <Send className="w-5 h-5" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/allan_profile.jpg"
                alt="Admin Avatar"
                fill
                className="object-cover"
              />
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-800">
              Super Admin
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
