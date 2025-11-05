"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F9FBFF] text-[#1E293B]">
      {/* Hero Section */}
      <section className="relative w-full bg-linear-to-r from-[#165DFC] to-[#4EA8FF] text-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact OrgOffice background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with OrgOffice
          </h1>
          <p className="text-lg md:text-xl text-[#F9FBFF]/90">
            We’re here to help you organize, communicate, and grow smarter.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#0E47C2] mb-6">
            Contact Information
          </h2>
          <p className="text-[#64748B] mb-8">
            Have questions about OrgOffice or need support? Reach out to us via
            any of the following channels — our team will respond promptly.
          </p>

          <ul className="space-y-6">
            <li>
              <h3 className="font-semibold text-[#165DFC] text-lg">
                📍 Office Location
              </h3>
              <p className="text-[#64748B]">
                OrgOffice HQ, Nairobi Innovation Hub, Ngong Road, Nairobi, Kenya
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-[#165DFC] text-lg">📞 Phone</h3>
              <p className="text-[#64748B]">+254 700 123 456</p>
            </li>
            <li>
              <h3 className="font-semibold text-[#165DFC] text-lg">📧 Email</h3>
              <p className="text-[#64748B]">support@orgoffice.africa</p>
            </li>
            <li>
              <h3 className="font-semibold text-[#165DFC] text-lg">💬 Support Hours</h3>
              <p className="text-[#64748B]">Monday – Friday, 9:00 AM – 6:00 PM EAT</p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#0E47C2] mb-6">Send Us a Message</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5E9F2] space-y-5"
          >
            <div>
              <label className="block text-[#64748B] mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-[#E5E9F2] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#165DFC] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#64748B] mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-[#E5E9F2] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#165DFC] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#64748B] mb-1">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-[#E5E9F2] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#165DFC] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#64748B] mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full border border-[#E5E9F2] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#165DFC] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#165DFC] text-white font-semibold py-3 rounded-lg hover:bg-[#0E47C2] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0E47C2] mb-6">Find Us</h2>
          <p className="text-[#64748B] mb-10">
            Visit our office or schedule a consultation with our team.
          </p>

          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-[#E5E9F2]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8599364769925!2d36.78195017497382!3d-1.2920659987033165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e8a867e9f3%3A0x7b5f4c0ebf2dd2e!2sNgong%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1689283011013!5m2!1sen!2ske"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-[#165DFC] to-[#4EA8FF] text-white text-center py-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Partner with OrgOffice?
        </h2>
        <p className="text-[#F9FBFF]/90 max-w-2xl mx-auto mb-8">
          Let’s simplify how your organization manages communication, documents,
          and teamwork — all in one powerful platform.
        </p>
        <a
          href="/signup"
          className="inline-block bg-white text-[#165DFC] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#E5E9F2] transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
