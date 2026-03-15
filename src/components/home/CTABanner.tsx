import Reveal from "@/components/ui/Reveal"
import { MessageCircle } from "lucide-react"

export default function CTABanner() {
  return (
    <section className="py-24 px-6">
      <Reveal>
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-midnight border border-gold/20 p-12 md:p-24 text-center text-gold relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to work with us? <br /> Let&apos;s talk.</h2>
            <p className="text-gold/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Join the growing network of partners and clients who trust Saint Hub for excellence and growth.
            </p>
            <a
              href="https://wa.me/2348114432530"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-midnight font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-gold/10"
            >
              <MessageCircle size={24} />
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
