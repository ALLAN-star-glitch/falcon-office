"use client";

import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function FeaturesPage() {
  return (
    <main className="bg-[#F9FBFF] text-[#1E293B]">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-16 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/features-background.jpg" //  Replace with your actual hero image
          alt="Features background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0E47C2]/95 via-[#165DFC]/85 to-[#4EA8FF]/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Tools to Simplify Your Organization
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
            Everything you need — from team collaboration to communication —
            beautifully integrated in one place.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 space-y-24 px-6 md:px-16">
        {/* Feature 1 */}
        <FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#165DFC] mb-4">
                Smart Organization Dashboard
              </h2>
              <p className="text-[#64748B] text-lg mb-6">
                Get a complete overview of your organization — members, teams,
                departments, and projects — all updated in real time. Make
                decisions faster with clear analytics and beautiful data
                visualization tools.
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2">
                <li>Centralized performance tracking</li>
                <li>Customizable metrics and roles</li>
                <li>Modern, minimal dashboard view</li>
              </ul>
            </div>
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/dashboard.jpg"
                alt="OrgOffice dashboard preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Feature 2 */}
        <FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg md:order-last">
              <Image
                src="/collaboration.jpg"
                alt="Team collaboration workspace"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#5C6BF0] mb-4">
                Team & Project Collaboration
              </h2>
              <p className="text-[#64748B] text-lg mb-6">
                Bring your teams together in a workspace built for collaboration.
                Assign roles, track milestones, and keep everyone aligned.
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2">
                <li>Role-based access management</li>
                <li>Progress tracking and reports</li>
                <li>Built-in file and task sharing</li>
              </ul>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Feature 3 */}
        <FadeInWhenVisible>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#165DFC] mb-4">
                Bulk SMS & Communication Tools
              </h2>
              <p className="text-[#64748B] text-lg mb-6">
                Instantly reach all members, clients, or partners with built-in
                bulk messaging. Schedule announcements, send alerts, and manage
                communication templates effortlessly.
              </p>
              <ul className="list-disc list-inside text-[#64748B] space-y-2">
                <li>Personalized message campaigns</li>
                <li>Real-time delivery reports</li>
                <li>Integrated notifications and alerts</li>
              </ul>
            </div>
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/bulksms.png"
                alt="Bulk SMS interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-[#0E47C2] text-white py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Organization?
        </h2>
        <p className="text-white/90 mb-6">
          Get started with OrgOffice and unlock seamless organization management today.
        </p>
        <button className="bg-white text-[#165DFC] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#E5E9F2] transition">
          Get Started
        </button>
      </section>
    </main>
  );
}
