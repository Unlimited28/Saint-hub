export default function StatsStrip() {
  return (
    <div className="bg-white/5 border-y border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-8 md:gap-4">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-1">6</div>
          <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Companies</div>
        </div>
        <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-1">1</div>
          <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Vision</div>
        </div>
        <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-1">Endless</div>
          <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Opportunities</div>
        </div>
      </div>
    </div>
  )
}
