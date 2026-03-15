import PageLayout from "@/components/layout/PageLayout"
import Reveal from "@/components/ui/Reveal"
import { CheckCircle2, MessageCircle, Globe, GraduationCap, Briefcase } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Saint Educational Consultants",
  description: "Professional educational consulting by Saint Hub. School admissions, study abroad, and career guidance.",
}

const services = [
  {
    title: "School Admissions",
    desc: "Expert guidance on securing admissions to top-tier local and international institutions.",
    icon: <GraduationCap className="text-gold" size={28} />
  },
  {
    title: "Study Abroad",
    desc: "Complete support for your international education journey, from application to visa.",
    icon: <Globe className="text-gold" size={28} />
  },
  {
    title: "Career Guidance",
    desc: "Strategic mentorship to help you choose the right path for professional success.",
    icon: <Briefcase className="text-gold" size={28} />
  }
]

export default function EducationPage() {
  const whatsappLink = "https://wa.me/2348114432530?text=Hello%20Saint%20Educational%20Consultants%2C%20I%20need%20guidance."

  return (
    <PageLayout>
      <section className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Future-Focused Consulting</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-midnight mb-8 leading-tight">
                Your Bridge to <br /><span className="text-gold">Academic Excellence.</span>
              </h1>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                At Saint Educational Consultants, we simplify the complex process of educational planning and admissions, helping students unlock global opportunities.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-midnight text-white px-8 py-4 rounded-full font-bold hover:bg-gold transition-colors">
                <MessageCircle size={20} />
                Enquire via WhatsApp
              </a>
            </Reveal>
            <Reveal direction="left" className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
              <div className="relative h-[450px] w-full z-10">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  className="rounded-[2rem] shadow-2xl object-cover"
                  alt="Students"
                  fill
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-midnight mb-4">Our Core Services</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-midnight mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-green-500" /> Personalized Strategy</li>
                  <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-green-500" /> Dedicated Consultant</li>
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
