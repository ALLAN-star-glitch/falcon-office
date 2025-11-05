"use client";

import Image from "next/image";

export default function BulkSMSPage() {
  return (
    <main className="min-h-screen bg-[#F9FBFF] text-[#1E293B]">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#165DFC] to-[#4EA8FF] text-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/bulksms-bg.jpg"
            alt="Bulk SMS background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bulk SMS Communication
          </h1>
          <p className="text-lg md:text-xl text-[#F9FBFF]/90 mb-8">
            Reach your entire organization, clients, or community instantly with reliable, 
            branded bulk messaging powered by OrgOffice.
          </p>
          <a
            href="#get-started"
            className="inline-block bg-white text-[#165DFC] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#E5E9F2] transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0E47C2]">
          Simplify Your Communication
        </h2>
        <p className="text-[#64748B] max-w-3xl mx-auto mb-10">
          Whether you&apos;re running an organization, event, or business — OrgOffice’s 
          Bulk SMS service helps you send personalized, timely, and targeted messages 
          to your contacts, all from a single dashboard.
        </p>

        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/sms-dashboard.png"
            alt="OrgOffice Bulk SMS dashboard"
            width={1200}
            height={700}
            className="object-cover rounded-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E47C2] mb-12">
            Powerful Bulk SMS Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-xl bg-[#F9FBFF] border border-[#E5E9F2] hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#165DFC] mb-3">
                Personalized Messages
              </h3>
              <p className="text-[#64748B]">
                Send customized messages using name fields and tags to create a 
                personal connection with every recipient.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#F9FBFF] border border-[#E5E9F2] hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#165DFC] mb-3">
                Real-Time Delivery Reports
              </h3>
              <p className="text-[#64748B]">
                Track message status instantly with detailed delivery reports and 
                analytics to measure performance.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#F9FBFF] border border-[#E5E9F2] hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#165DFC] mb-3">
                Group & Contact Management
              </h3>
              <p className="text-[#64748B]">
                Organize your recipients into groups, import contacts easily, and 
                manage everything directly from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gradient-to-r from-[#165DFC] to-[#4EA8FF] text-white py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Integrated With Your OrgOffice Dashboard
          </h2>
          <p className="text-[#F9FBFF]/90 max-w-3xl mx-auto mb-10">
            Manage communication, documents, members, and workflows in one place. 
            No switching platforms — just unified operations.
          </p>

          <Image
            src="/images/integrated-dashboard.png"
            alt="Integrated Dashboard"
            width={1200}
            height={600}
            className="rounded-xl mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="get-started"
        className="bg-white py-20 px-6 md:px-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0E47C2] mb-6">
          Start Messaging Smarter
        </h2>
        <p className="text-[#64748B] max-w-2xl mx-auto mb-8">
          Sign up for OrgOffice Bulk SMS today and experience the easiest way to 
          communicate at scale — professionally, reliably, and instantly.
        </p>
        <a
          href="/signup"
          className="inline-block bg-[#165DFC] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#0E47C2] transition"
        >
          Try It Free
        </a>
      </section>
    </main>
  );
}
