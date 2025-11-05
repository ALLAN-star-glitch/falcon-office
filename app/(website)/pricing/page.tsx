"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small teams getting started.",
      features: [
        "Up to 20 members",
        "Basic dashboard access",
        "Email support",
        "Community resources",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "KES 2,500/mo",
      description: "For growing organizations that need structure and control.",
      features: [
        "Unlimited members",
        "Team collaboration tools",
        "File & document management",
        "Bulk SMS communication",
        "Advanced analytics",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored for large institutions and NGOs.",
      features: [
        "Dedicated account manager",
        "Custom integrations",
        "Enhanced security & compliance",
        "Priority support",
      ],
      highlight: false,
    },
  ];

  return (
    <main className="bg-[#F9FBFF] text-[#1E293B]">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-16 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/pricing.jpg"
          alt="Pricing background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0E47C2]/95 via-[#165DFC]/85 to-[#4EA8FF]/70"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            Choose the plan that best fits your organization’s needs — no hidden
            fees, just powerful tools.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-16 grid gap-12 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-2xl border shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2 ${
              plan.highlight
                ? "bg-linear-to-br from-[#165DFC] to-[#4EA8FF] text-white border-transparent"
                : "bg-white border-[#E5E9F2]"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-4 right-4 bg-white text-[#165DFC] text-xs font-semibold px-3 py-1 rounded-full shadow">
                Most Popular
              </div>
            )}
            <h3
              className={`text-2xl font-bold mb-2 ${
                plan.highlight ? "text-white" : "text-[#165DFC]"
              }`}
            >
              {plan.name}
            </h3>
            <p
              className={`mb-6 ${
                plan.highlight ? "text-white/80" : "text-[#64748B]"
              }`}
            >
              {plan.description}
            </p>
            <div className="text-4xl font-bold mb-6">
              {plan.price}
              <span
                className={`text-sm font-medium ${
                  plan.highlight ? "text-white/70" : "text-[#64748B]"
                }`}
              >
                {plan.name !== "Enterprise" && "/month"}
              </span>
            </div>
            <ul
              className={`space-y-3 mb-8 ${
                plan.highlight ? "text-white/90" : "text-[#64748B]"
              }`}
            >
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 ${
                      plan.highlight ? "bg-white" : "bg-[#165DFC]"
                    }`}
                  ></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.highlight
                  ? "bg-white text-[#165DFC] hover:bg-[#E5E9F2]"
                  : "bg-[#165DFC] text-white hover:bg-[#0E47C2]"
              }`}
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </section>

      {/* CTA Footer Section */}
      <section className="text-center bg-[#0E47C2] text-white py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Growing with OrgOffice
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          From small teams to large enterprises, OrgOffice helps organizations
          collaborate better, communicate faster, and operate smarter.
        </p>
        <button className="bg-white text-[#165DFC] font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#E5E9F2] transition">
          Create Free Account
        </button>
      </section>
    </main>
  );
}
