"use client";

import { useEffect, useState } from "react";
import { Linkedin, Instagram, Phone, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 2 + 1}px`,
    }));
    setStars(generated);
  }, []);

  return (
    <footer className="relative isolate overflow-hidden text-white pt-24 pb-12 bg-gradient-to-b from-[#0f172a] via-[#0a1124] to-black w-full">

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-400/10 pointer-events-none" />

      {/* Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(99,102,241,0.15)] w-full">

          {/* Heading */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Hostiva
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
              Smarter planning. Bigger moments. Zero stress.
            </p>

            <p className="text-gray-500 mt-2 text-xs sm:text-sm">
              Join thousands creating unforgettable experiences with AI-powered precision.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Ready to host something unforgettable?
              </h3>

              <p className="text-gray-400 mt-3 max-w-lg mx-auto md:mx-0">
                Create your event in minutes. Let AI handle the chaos while you enjoy the spotlight.
              </p>

              {/* 🔥 Updated link here */}
              <div className="mt-6">
                <Link
                  href="/create-event"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Calendar size={18} />
                  Create Your First Event
                </Link>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 mt-16 text-center md:text-left">

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {["Home", "Explore", "Pricing", "Create Event", "Contact"].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-300 hover:text-white transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white transition">AI Smart Planning</li>
                <li className="hover:text-white transition">Vendor Automation</li>
                <li className="hover:text-white transition">Budget Optimisation</li>
                <li className="hover:text-white transition">Digital Invitations</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Contact</h3>
              <div className="space-y-3 text-gray-300 text-sm flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <span>+91 9548131405</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>vaibhavkumar5158@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Connect</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/vaibhav-kumar-30a1b228a/"
                  target="_blank"
                  className="p-3 rounded-xl bg-white/10 hover:bg-purple-600 transition transform hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/vikhyatchaudhaary/"
                  target="_blank"
                  className="p-3 rounded-xl bg-white/10 hover:bg-pink-600 transition transform hover:scale-110"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 border-t border-white/10 pt-6 text-center text-gray-400 text-xs sm:text-sm w-full">
            © {new Date().getFullYear()} Hostiva — Crafted with AI precision by Vaibhav Kumar 🚀
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-twinkle {
          animation: twinkle 3s infinite ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </footer>
  );
}