import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-end">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-1e8641f225b4?q=80&w=2100&auto=format&fit=crop"
          alt="Italian luxury kitchen with walnut and carrara marble"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#2D2E30] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
        >
          Murelli Cucine Madrid
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-white/80"
        >
          Cocina italiana de alta gama con una estética Castellana: nogal cálido, mármol Carrara impecable y detalles en oro cepillado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#collections"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-slate-900 bg-gradient-to-b from-[#E8D8B0] to-[#C9B47A] hover:from-[#F1E5BD] hover:to-[#D5C285] shadow-[inset_0_1px_rgba(255,255,255,0.6),0_10px_30px_rgba(0,0,0,0.35)] transition"
          >
            Ver colecciones
          </a>
          <a
            href="#visit"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white/90 border border-white/30 hover:bg-white/10 transition"
          >
            Reservar visita al estudio
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;