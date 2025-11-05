"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    {name: "Document Management", href: "/document-management"},
     { name: "Bulk SMS", href: "/bulk-sms" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(14, 71, 194, 0.95)" : "rgba(0,0,0,0)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.2)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        height: scrolled ? "68px" : "80px",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="relative flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight flex items-center space-x-2"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-linear-to-r from-[#4EA8FF] via-[#AEEBFF] to-[#165DFC] text-transparent bg-clip-text bg-size-[200%_200%]"
          >
            OrgOffice
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-white transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/dashboard/overview"
            className="px-4 py-2 rounded-lg text-white/90 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="#get-started"
            className="px-5 py-2 bg-linear-to-r from-[#4EA8FF] to-[#165DFC] rounded-lg text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0A2540]/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="flex flex-col space-y-5 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-white transition text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="/dashboard/overview"
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-white transition text-base"
                >
                  Login
                </Link>
                <Link
                  href="#get-started"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-linear-to-r from-[#4EA8FF] to-[#165DFC] rounded-lg text-white font-semibold text-center shadow hover:opacity-90"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
