import PageLayout from "@/components/layout/PageLayout"
import Reveal from "@/components/ui/Reveal"
import { MessageCircle, Gauge, Calendar, ShieldCheck } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Saint Car Dealership",
  description: "Premium automotive solutions. Buy luxury and verified vehicles from Saint Hub.",
}

const cars = [
  { name: "Mercedes-Benz G63", desc: "Ultimate luxury and performance in an iconic silhouette.", image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2060&auto=format&fit=crop" },
  { name: "Range Rover Autobiography", desc: "The pinnacle of refinement and capability.", image: "https://images.unsplash.com/photo-1506469717960-433cebe3f181?q=80&w=2070&auto=format&fit=crop" },
  { name: "Toyota Land Cruiser 300", desc: "Legendary reliability meets modern luxury.", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop" },
  { name: "Lexus LX 600", desc: "Sophisticated design with unmatched comfort.", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop" },
]

export default function CarsPage() {
  const whatsappLink = "https://wa.me/2348114432530?text=Hello%20Saint%20Car%20Dealership%2C%20I'm%20interested%20in%20a%20vehicle."

  return (
    <PageLayout>
      <section className="pt-32 pb-24 px-6 bg-midnight">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Saint Car Dealership</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Drive <span className="italic">Excellence.</span></h1>
              <p className="text-white/50 text-lg">We offer a curated selection of premium vehicles for the discerning driver. Quality, trust, and luxury guaranteed.</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-midnight px-8 py-4 rounded-full font-bold hover:bg-gold transition-colors flex items-center gap-2">
              <MessageCircle size={20} />
              Inquire Now
            </a>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cars.map((car, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="group bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all">
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-10">
                    <h3 className="text-3xl font-serif font-bold mb-4">{car.name}</h3>
                    <p className="text-white/40 mb-8 leading-relaxed">{car.desc}</p>
                    <div className="flex flex-wrap gap-6 mb-10">
                      <div className="flex items-center gap-2 text-gold/60 text-sm">
                        <Gauge size={16} /> <span>Brand New</span>
                      </div>
                      <div className="flex items-center gap-2 text-gold/60 text-sm">
                        <Calendar size={16} /> <span>{new Date().getFullYear()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gold/60 text-sm">
                        <ShieldCheck size={16} /> <span>Verified</span>
                      </div>
                    </div>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-white/10 transition-colors">
                      <MessageCircle size={20} className="text-gold" />
                      Inquire on WhatsApp
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
