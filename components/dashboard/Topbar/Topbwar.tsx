"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
  MessageSquareIcon,
  SendIcon,
  XIcon,
} from "lucide-react";

export default function Topbarlj() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-6 h-auto md:h-16 bg-linear-to-r from-[#F9FBFF] to-[#FFFFFF] border-b border-[#E5E9F2] shadow-sm sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        <h1 className="text-lg font-semibold text-[#1E293B] tracking-tight cursor-pointer  sm:block">
          Dashboard
        </h1>
        <span className="hidden md:hidden lg:inline-block px-2 py-0.5 text-xs bg-[#165DFC]/10 text-[#165DFC] rounded-full font-medium">
          Admin Panel
        </span>
      </div>

      {/* Middle Section (Search) */}
      <div className="flex-1 md:flex-none relative flex items-center justify-center">
        {/* Desktop & Medium Search */}
        <div className="relative hidden md:block flex-1">
          <SearchIcon className="w-4 h-4 absolute left-3 top-2.5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search OrgOffice..."
            className="pl-10 pr-4 py-2 w-full max-w-md rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#165DFC]/30 focus:border-[#165DFC] text-sm placeholder:text-gray-400 transition-all cursor-text"
          />
        </div>

        {/* Mobile Search Input Overlay */}
        {mobileSearchOpen && (
          <div className="absolute top-14 left-2 right-2 z-50 md:hidden flex items-center gap-2">
            <input
              type="text"
              placeholder="Search OrgOffice..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#165DFC]/30 focus:border-[#165DFC] text-sm placeholder:text-gray-400 transition-all cursor-text"
            />
            <button
              className="p-2 rounded-full bg-[#E5E9F2]/50 hover:bg-[#E5E9F2]/70 transition-colors cursor-pointer"
              onClick={() => setMobileSearchOpen(false)}
              aria-label="Close search"
            >
              <XIcon className="w-5 h-5 text-[#1E293B]" />
            </button>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-3 flex-nowrap mt-2 md:mt-0">
        {/* Mobile Search Button */}
        <button
          className="md:hidden p-2 rounded-full bg-[#E5E9F2]/50 hover:bg-[#E5E9F2]/70 transition-colors cursor-pointer"
          aria-label="Search"
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
        >
          <SearchIcon className="w-5 h-5 text-[#1E293B]" />
        </button>

        {/* Notifications */}
        <button
          className="relative p-2 rounded-full hover:bg-[#E5E9F2]/60 transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <BellIcon className="w-5 h-5 text-[#1E293B]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Messages */}
        <button
          className="relative p-2 rounded-full hover:bg-[#E5E9F2]/60 transition-colors cursor-pointer"
          aria-label="Messages"
        >
          <MessageSquareIcon className="w-5 h-5 text-[#1E293B]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
        </button>

        {/* Bulk SMS */}
        <button
          className="hidden md:flex items-center gap-1 md:gap-2 bg-linear-to-r from-[#165DFC] to-[#4EA8FF] text-white font-medium px-2 md:px-4 py-1.5 md:py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer whitespace-nowrap"
          aria-label="Send Bulk SMS"
        >
          <SendIcon className="w-4 md:w-5 h-4 md:h-5" />
          <span className="text-xs md:text-sm">Send Bulk SMS</span>
        </button>
        {/* Mobile version: icon-only button */}
        <button
          className="md:hidden p-2 rounded-full bg-[#165DFC] text-white hover:bg-[#4EA8FF] transition-colors cursor-pointer"
          aria-label="Send Bulk SMS"
        >
          <SendIcon className="w-5 h-5" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1.5 rounded-full hover:bg-[#E5E9F2]/60 transition-all cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E5E9F2]">
              <Image
                src="/allan_profile.jpg"
                alt="Super Admin Avatar"
                fill
                className="object-cover cursor-pointer"
                sizes="32px"
              />
            </div>
            <span className="hidden md:block text-sm font-medium text-[#1E293B] cursor-pointer">
              Super Admin
            </span>
            <ChevronDownIcon className="w-4 h-4 text-gray-500 cursor-pointer" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 animate-fade-in">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F3F6FC] cursor-pointer"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F3F6FC] cursor-pointer"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-[#F3F6FC] cursor-pointer"
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
