import PageLayout from "@/components/layout/PageLayout"
import Reveal from "@/components/ui/Reveal"
import { TrendingUp, BarChart3, Rocket, MessageCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Saint Trading Academy",
  description: "Master the financial markets. Forex, Crypto, and Degen trading mentorship by Saint Hub.",
}

const courses = [
  {
    title: "Forex Trading",
    desc: "Master the foreign exchange market with our comprehensive price action strategy.",
    icon: <BarChart3 className="text-gold" size={32} />
  },
  {
    title: "Crypto Trading",
    desc: "Learn how to navigate the volatile world of cryptocurrencies and decentralized finance.",
    icon: <Rocket className="text-gold" size={32} />
  },
  {
    title: "Degen Trading",
    desc: "High-risk, high-reward strategies for the modern digital asset landscape.",
    icon: <TrendingUp className="text-gold" size={32} />
  }
]

export default function TradingPage() {
  const whatsappLink = "https://wa.me/2348114432530?text=Hello%20Saint%20Trading%20Academy%2C%20I%20want%20to%20enroll."

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 bg-midnight relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 transform origin-top-right -z-10" />
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8">
              Trade Like <br /><span className="text-gold">A Professional.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mb-12">
              Saint Trading Academy provides elite mentorship and strategies to help you achieve financial freedom through the global markets.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gold text-midnight px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:scale-105 transition-transform">
              <MessageCircle size={24} />
              Enroll in the Academy
            </a>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {courses.map((course, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="p-8 border border-white/10 rounded-3xl bg-white/5 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6">{course.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4">{course.title}</h3>
                <p className="text-white/50 leading-relaxed mb-8">{course.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-serif font-bold mb-6">What You&apos;ll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                "Market Structure & Analysis",
                "Advanced Risk Management",
                "Trading Psychology & Mindset",
                "Live Trading Sessions",
                "Exclusive Community Access",
                "24/7 Mentorship Support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-midnight rounded-2xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-white/70 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  )
}
