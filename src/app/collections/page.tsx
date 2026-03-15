import PageLayout from "@/components/layout/PageLayout"
import Reveal from "@/components/ui/Reveal"
import { MessageCircle } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Saint Collections",
  description: "Fashion-forward editorial collection by Saint Hub. Male wears, slides, sneakers, and more.",
}

const products = [
  { name: "Premium Male Wears", category: "Male Wears", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1780&auto=format&fit=crop" },
  { name: "Luxury Slides", category: "Slides", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1887&auto=format&fit=crop" },
  { name: "Urban Sneakers", category: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" },
  { name: "Designer Wristwatches", category: "Wristwatches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop" },
  { name: "Classic Shades", category: "Shades", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop" },
  { name: "Tailored Suits", category: "Male Wears", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" },
]

export default function CollectionsPage() {
  const whatsappLink = "https://wa.me/2348114432530?text=Hello%20Saint%20Collections%2C%20I'd%20like%20to%20order%20an%20item."

  return (
    <PageLayout>
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-20 text-center">
            <h1 className="text-6xl md:text-9xl font-serif font-bold uppercase tracking-tighter mb-8">
              The <span className="gradient-text">Collection</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto italic">
              Curating style for the modern individual. A blend of contemporary fashion and timeless elegance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1">
            {products.map((product, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="relative aspect-[3/4] group overflow-hidden bg-white/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{product.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-6">{product.name}</h3>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-midnight py-3 px-6 rounded-full font-bold flex items-center justify-center gap-2 w-max">
                    <MessageCircle size={18} />
                    Order Now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
