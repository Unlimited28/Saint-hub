"use client"

import { motion } from "framer-motion"
import { ArrowDown, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.1),transparent_70%)]" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px]"
        />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase border border-gold/30 text-gold rounded-full">
            Saint Hub Group
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            One Group. <br />
            <span className="gradient-text">Infinite Possibilities.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Saint Hub is a Nigerian investment group driving excellence across
            technology, fashion, education, trading, fragrance and automotive industries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#companies"
              className="w-full sm:w-auto px-8 py-4 bg-white text-midnight font-bold rounded-full hover:bg-gold transition-all transform hover:scale-105"
            >
              Explore Our Companies
            </Link>
            <a
              href="https://wa.me/2348114432530"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} className="text-gold" />
              Contact Us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </div>
  )
}
