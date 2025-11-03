"use client";

import { motion } from "framer-motion";
import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#F9FBFF] border-t border-[#E5E9F2] text-[#1E293B] px-6 md:px-16 py-14 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 relative z-10">
        {/* Brand Info */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold mb-3 text-[#165DFC]"
          >
            OrgOffice
          </motion.h3>
          <p className="text-[#64748B] leading-relaxed text-sm">
            Empowering organizations, institutions, and enterprises with one
            unified management system — built for collaboration, clarity, and
            growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-lg text-[#165DFC]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-[#64748B]">
            <li>
              <a href="#features" className="hover:text-[#0E47C2] transition">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[#0E47C2] transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-[#0E47C2] transition">
                Support
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#0E47C2] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold mb-3 text-lg text-[#165DFC]">
            Solutions
          </h4>
          <ul className="space-y-2 text-sm text-[#64748B]">
            <li>Team & Project Management</li>
            <li>File & Document Sharing</li>
            <li>Bulk SMS Communication</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold mb-3 text-lg text-[#165DFC]">
            Get in Touch
          </h4>
          <p className="text-[#64748B] text-sm mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#165DFC]" />{" "}
            support@orgoffice.com
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-[#165DFC] transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#165DFC] transition">
              <Twitter />
            </a>
            <a href="#" className="hover:text-[#165DFC] transition">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-[#165DFC] transition">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#E5E9F2] mt-12 pt-6 text-center text-sm text-[#64748B] relative z-10">
        © {new Date().getFullYear()} OrgOffice. All rights reserved.  
      </div>

      {/* Soft Animated Gradient Accent */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(135deg,#165DFC_0%,#4EA8FF_100%)] opacity-5 bg-size-[200%_200%] pointer-events-none"
      />
    </footer>
  );
}
