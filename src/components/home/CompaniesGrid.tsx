"use client"

import Reveal from "@/components/ui/Reveal"
import { Smartphone, ShoppingBag, GraduationCap, Wind, TrendingUp, Car } from "lucide-react"
import Link from "next/link"

const companies = [
  {
    name: "Saint Gadgets",
    desc: "Premium technology, phones, and accessories for the modern lifestyle.",
    icon: <Smartphone size={32} className="text-gold" />,
    href: "/gadgets",
    color: "from-blue-500/10 to-transparent",
  },
  {
    name: "Saint Collections",
    desc: "Luxury fashion and editorial style curated for excellence.",
    icon: <ShoppingBag size={32} className="text-gold" />,
    href: "/collections",
    color: "from-pink-500/10 to-transparent",
  },
  {
    name: "Saint Educational Consultants",
    desc: "Your bridge to global education and professional growth.",
    icon: <GraduationCap size={32} className="text-gold" />,
    href: "/education",
    color: "from-green-500/10 to-transparent",
  },
  {
    name: "Saint Perfumery",
    desc: "Exquisite fragrances that define your presence.",
    icon: <Wind size={32} className="text-gold" />,
    href: "/perfumery",
    color: "from-purple-500/10 to-transparent",
  },
  {
    name: "Saint Trading Academy",
    desc: "Master the markets with our expert trading mentorship.",
    icon: <TrendingUp size={32} className="text-gold" />,
    href: "/trading",
    color: "from-orange-500/10 to-transparent",
  },
  {
    name: "Saint Car Dealership",
    desc: "Premium automotive solutions for the discerning driver.",
    icon: <Car size={32} className="text-gold" />,
    href: "/cars",
    color: "from-red-500/10 to-transparent",
  },
]

export default function CompaniesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <Reveal className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Subsidiaries</h2>
        <div className="h-1 w-20 bg-gold mx-auto mb-6" />
        <p className="text-white/60 max-w-2xl mx-auto">
          From technology to luxury lifestyle, Saint Hub drives growth across multiple high-impact sectors.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <Reveal key={company.name} delay={index * 0.1}>
            <Link
              href={company.href}
              className="group relative block p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-all hover:-translate-y-2"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-midnight border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                  {company.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{company.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {company.desc}
                </p>
                <span className="text-gold font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Learn More <span>→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
