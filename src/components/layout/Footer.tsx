import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react"

const companies = [
  { name: "Saint Gadgets", href: "/gadgets" },
  { name: "Saint Collections", href: "/collections" },
  { name: "Saint Education", href: "/education" },
  { name: "Saint Perfumery", href: "/perfumery" },
  { name: "Saint Trading Academy", href: "/trading" },
  { name: "Saint Car Dealership", href: "/cars" },
]

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image
              src="/logo.png"
              alt="Saint Hub Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-serif text-xl font-bold tracking-tight text-white">SAINT HUB</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            A premier Nigerian investment group driving excellence across diverse industries.
            One Group. Infinite Possibilities.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/2348114432530" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-midnight transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-white">Our Companies</h4>
          <ul className="space-y-4">
            {companies.map((company) => (
              <li key={company.name}>
                <Link href={company.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="text-white/60 hover:text-gold text-sm transition-colors">Home</Link></li>
            <li><Link href="/#about" className="text-white/60 hover:text-gold text-sm transition-colors">About Us</Link></li>
            <li><Link href="/#companies" className="text-white/60 hover:text-gold text-sm transition-colors">Our Group</Link></li>
            <li><a href="https://wa.me/2348114432530" className="text-white/60 hover:text-gold text-sm transition-colors">Contact Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-white">Get In Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Phone size={16} className="text-gold" />
              <span>08114432530</span>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <MessageCircle size={16} className="text-gold" />
              <span>WhatsApp Chat Available</span>
            </li>
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={16} className="text-gold mt-1" />
              <span>Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Saint Hub. All Rights Reserved.
        </p>
        <p className="text-white/40 text-xs italic">
          Premium African Excellence.
        </p>
      </div>
    </footer>
  )
}
