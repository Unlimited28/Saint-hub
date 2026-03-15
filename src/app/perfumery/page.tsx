import PageLayout from "@/components/layout/PageLayout"
import Reveal from "@/components/ui/Reveal"
import { MessageCircle } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Saint Perfumery",
  description: "Exquisite luxury fragrances by Saint Hub. Black and gold aesthetic, unforgettable scents.",
}

const fragrances = [
  { name: "Oud Royale", notes: "Rich Oud, Amber, Vanilla", type: "Intense", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop" },
  { name: "Midnight Rose", notes: "Bulgarian Rose, Pink Pepper", type: "Floral", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop" },
  { name: "Desert Sandalwood", notes: "Sandalwood, Cedar, Musk", type: "Woody", image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=1935&auto=format&fit=crop" },
  { name: "Azure Breeze", notes: "Sea Salt, Citrus, Sage", type: "Fresh", image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=1935&auto=format&fit=crop" },
]

export default function PerfumeryPage() {
  const whatsappLink = "https://wa.me/2348114432530?text=Hello%20Saint%20Perfumery%2C%20I'd%20like%20to%20order%20a%20fragrance."

  return (
    <PageLayout>
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">The Essence of <br /><span className="text-gold">Luxury.</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg mb-12 italic tracking-widest uppercase">Saint Perfumery — Unforgettable Scents</p>
            <div className="w-px h-24 bg-gold mx-auto" />
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {fragrances.map((frag, idx) => (
              <Reveal key={idx} delay={idx * 0.1} direction={idx % 2 === 0 ? "right" : "left"}>
                <div className="group relative flex flex-col md:flex-row gap-8 items-center bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-gold/30 transition-all">
                  <div className="w-full md:w-1/2 aspect-[4/5] rounded-2xl overflow-hidden relative">
                    <Image
                      src={frag.image}
                      alt={frag.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{frag.type}</span>
                    <h3 className="text-3xl font-serif font-bold mb-4">{frag.name}</h3>
                    <p className="text-white/60 mb-6 font-light">{frag.notes}</p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-midnight px-6 py-3 rounded-full font-bold text-sm hover:bg-gold transition-colors">
                      <MessageCircle size={18} />
                      Order Now
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
