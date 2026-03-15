import Reveal from "@/components/ui/Reveal"
import { Shield, Star, Lightbulb, TrendingUp } from "lucide-react"

const pillars = [
  {
    title: "Trust",
    desc: "Built on integrity and transparency, we foster lasting relationships with our clients.",
    icon: <Shield size={24} className="text-gold" />,
  },
  {
    title: "Excellence",
    desc: "We set the highest standards in every industry we touch, delivering premium value.",
    icon: <Star size={24} className="text-gold" />,
  },
  {
    title: "Innovation",
    desc: "Constantly evolving and adapting to modern trends to provide cutting-edge solutions.",
    icon: <Lightbulb size={24} className="text-gold" />,
  },
  {
    title: "Growth",
    desc: "Empowering our subsidiaries and clients to reach their full potential.",
    icon: <TrendingUp size={24} className="text-gold" />,
  },
]

export default function WhySaintHub() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal direction="right">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Partner With <span className="text-gold">Saint Hub?</span></h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            As a leading Nigerian investment group, we bring a wealth of experience and a track record of success across diverse sectors. Our commitment to excellence ensures that every subsidiary under our wing thrives.
          </p>
          <div className="space-y-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{pillar.title}</h4>
                  <p className="text-white/50 text-sm">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="left" className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-tr from-midnight to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute bottom-10 left-10 z-20">
            <div className="text-6xl font-serif font-bold text-white/20 mb-2">01</div>
            <h3 className="text-3xl font-serif font-bold text-white uppercase tracking-tighter">One Vision.</h3>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
