"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  FolderOpen,
  Search,
  Users,
  Clock,
  PlugZap,
} from "lucide-react";

export default function DocumentManagementPage() {
  const features = [
    {
      title: "Secure Storage",
      description:
        "All your documents are encrypted and safely stored on reliable, compliant cloud infrastructure.",
      icon: ShieldCheck,
    },
    {
      title: "Version Control",
      description:
        "Track every change and restore previous versions effortlessly — no confusion, no lost data.",
      icon: Clock,
    },
    {
      title: "Smart Search",
      description:
        "Find any document in seconds using AI-powered tagging and full-text search across folders.",
      icon: Search,
    },
    {
      title: "Role-Based Access",
      description:
        "Control who can view, edit, or share files using flexible, secure permission settings.",
      icon: Users,
    },
    {
      title: "Activity Tracking",
      description:
        "Monitor document activity — who viewed, edited, or downloaded — all in real time.",
      icon: FolderOpen,
    },
    {
      title: "Seamless Integrations",
      description:
        "Connect OrgOffice Documents with chat, tasks, and analytics to streamline collaboration.",
      icon: PlugZap,
    },
  ];

  return (
    <main className="bg-[#F9FBFF] text-[#1E293B]">
      {/* --- HERO / HEADER SECTION --- */}
      <section className="relative py-28 px-6 md:px-16 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/dashboard.jpg"
          alt="Document management background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0E47C2]/95 via-[#165DFC]/85 to-[#4EA8FF]/70"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Smarter Document Management
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            Centralize, organize, and protect your organization’s documents — all
            within OrgOffice.
          </p>
          <button className="mt-8 bg-white text-[#165DFC] hover:bg-[#E5E9F2] font-semibold px-8 py-4 rounded-xl shadow transition">
            Explore Features
          </button>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-[#E5E9F2] shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-transform hover:-translate-y-1"
          >
            <feature.icon className="w-10 h-10 text-[#165DFC] mb-5" />
            <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
              {feature.title}
            </h3>
            <p className="text-[#64748B] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </section>

      {/* --- PREVIEW SECTION --- */}
      <section className="relative py-24 px-6 md:px-16 bg-white grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#165DFC] mb-4">
            Organize and Collaborate Effortlessly
          </h2>
          <p className="text-[#1E293B] mb-6 leading-relaxed">
            Manage folders, share securely, and work together in real-time.
            OrgOffice simplifies teamwork with built-in versioning and access
            control, helping you stay organized at scale.
          </p>
          <button className="border border-[#165DFC] text-[#165DFC] hover:bg-[#F0F6FF] px-6 py-3 rounded-lg font-medium transition">
            Learn More
          </button>
        </div>
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/file-organization.png"
            alt="Document management dashboard"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="text-center bg-[#0E47C2] text-white py-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simplify How Your Team Manages Documents
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Centralize your files, empower collaboration, and maintain total
          control with OrgOffice.
        </p>
        <button className="bg-white text-[#165DFC] font-semibold px-8 py-4 rounded-xl shadow hover:bg-[#E5E9F2] transition">
          Get Started
        </button>
      </section>
    </main>
  );
}
