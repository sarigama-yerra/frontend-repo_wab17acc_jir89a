import FloatingNav from "./components/FloatingNav";
import Hero from "./components/Hero";
import AsymmetricGrid from "./components/AsymmetricGrid";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-slate-100">
      <FloatingNav />

      {/* Hero section with Behance-style presentation framing */}
      <Hero />

      {/* Asymmetric grid gallery */}
      <AsymmetricGrid />

      {/* Testimonials carousel */}
      <Testimonials />

      {/* Footer / CTA */}
      <section id="contact" className="bg-[#101112] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif text-3xl text-white">Solicitar cita en estudio</h3>
            <p className="mt-3 text-slate-400 max-w-md">Avenida de la Castellana, Madrid. Atendemos con cita previa para ofrecer una experiencia personalizada.</p>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C9B47A]/40" placeholder="Nombre" />
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C9B47A]/40" placeholder="Email" />
            <input className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C9B47A]/40" placeholder="Teléfono" />
            <textarea className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 h-32 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#C9B47A]/40" placeholder="Mensaje"></textarea>
            <div className="sm:col-span-2 flex items-center gap-3">
              <button type="button" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-slate-900 bg-gradient-to-b from-[#E8D8B0] to-[#C9B47A] hover:from-[#F1E5BD] hover:to-[#D5C285] shadow-[inset_0_1px_rgba(255,255,255,0.6),0_10px_30px_rgba(0,0,0,0.35)] transition">
                Enviar solicitud
              </button>
              <span className="text-slate-500 text-sm">Respuesta en menos de 24h</span>
            </div>
          </form>
        </div>
        <div className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Murelli Cucine Madrid — Todos los derechos reservados</div>
      </section>
    </div>
  );
}

export default App;