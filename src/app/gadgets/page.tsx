import PageLayout from "@/components/layout/PageLayout"
import Reveal from "@/components/ui/Reveal"
import { Smartphone, Laptop, Speaker, MessageCircle } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Saint Gadgets & Accessories",
  description: "Tech That Moves With You. Premium phones, accessories, and gadgets by Saint Hub.",
}

const categories = [
  {
    name: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop",
    items: ["iPhones", "Samsung", "Google Pixel"]
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
    items: ["Chargers", "Cases", "AirPods"]
  },
  {
    name: "Gadgets",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    items: ["Smart Watches", "Laptops", "Tablets"]
  }
]

export default function GadgetsPage() {
  const whatsappLink = "https://wa.me/2348114432530?text=Hello%20Saint%20Gadgets%2C%20I'm%20interested%20in%20your%20products."

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-900/20 to-midnight">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Saint Gadgets & Accessories</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Tech That Moves With You</h1>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              Explore the latest in technology. From high-end smartphones to essential accessories, we provide gadgets that empower your lifestyle.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-midnight px-8 py-4 rounded-full font-bold hover:bg-gold transition-colors">
              <MessageCircle size={20} />
              Order via WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Reveal key={cat.name} delay={idx * 0.1}>
                <div className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-gold/30 transition-all">
                  <div className="h-64 overflow-hidden relative">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-4">{cat.name}</h3>
                    <ul className="space-y-2 mb-8">
                      {cat.items.map(item => (
                        <li key={item} className="text-white/40 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-3 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors font-bold text-sm">
                      Enquire for {cat.name}
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
