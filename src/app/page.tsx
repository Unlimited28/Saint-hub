import PageLayout from "@/components/layout/PageLayout"
import Hero from "@/components/home/Hero"
import StatsStrip from "@/components/home/StatsStrip"
import CompaniesGrid from "@/components/home/CompaniesGrid"
import WhySaintHub from "@/components/home/WhySaintHub"
import CTABanner from "@/components/home/CTABanner"

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <StatsStrip />
      <section id="companies" className="py-24">
        <CompaniesGrid />
      </section>
      <section id="about" className="py-24 bg-white/5">
        <WhySaintHub />
      </section>
      <CTABanner />
    </PageLayout>
  )
}
