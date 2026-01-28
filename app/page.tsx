"use client";

import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background selection:bg-emerald-100 selection:text-emerald-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl space-y-8"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6 border border-slate-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            NRI Concierge & Parity Engine
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Where does your life<br />
            <span className="text-emerald-700">in India begin?</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
            Compare your current global lifestyle with India's top neighborhoods.
            Data-driven parity for schools, commute, and community.
          </p>
        </div>

        {/* Interactive Search Box */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-indigo-100 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 flex items-center gap-2">
            <div className="pl-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <Input
              className="border-none shadow-none focus-visible:ring-0 text-lg h-14 bg-transparent placeholder:text-slate-400"
              placeholder="Search by lifestyle, commute, or brand..."
            />
            <button className="h-12 w-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {[
            { label: "Schools near Stonehill", icon: MapPin },
            { label: "Seattle vs. Bangalore", icon: MapPin },
            { label: "Villas under 5Cr", icon: Search },
          ].map((chip, i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full text-sm text-slate-600 hover:border-emerald-200 hover:bg-emerald-50/50 transition-colors shadow-sm"
            >
              <chip.icon className="w-3.5 h-3.5 text-slate-400" />
              {chip.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Footer / Trust Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-xs text-slate-400"
      >
        Verified RERA Data 2026 • Global Citizen Standard
      </motion.div>
    </main>
  );
}
