import { Menu, Phone, MapPin } from "lucide-react";

function FloatingNav() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-full px-6 py-3 flex items-center gap-6 text-sm text-white/90">
        <div className="font-serif tracking-wide text-lg text-white/95">Murelli Cucine Madrid</div>
        <nav className="hidden md:flex items-center gap-6">
          <a className="hover:text-white transition" href="#collections">Colecciones</a>
          <a className="hover:text-white transition" href="#materials">Materiales</a>
          <a className="hover:text-white transition" href="#studio">Estudio</a>
          <a className="hover:text-white transition" href="#contact">Contacto</a>
        </nav>
        <div className="ml-auto hidden sm:flex items-center gap-4">
          <a href="#visit" className="inline-flex items-center gap-2 hover:text-white transition"><MapPin size={16}/>Visítanos</a>
          <a href="tel:+34-910-000-000" className="inline-flex items-center gap-2 hover:text-white transition"><Phone size={16}/>Llámanos</a>
        </div>
        <button className="md:hidden text-white/90 hover:text-white">
          <Menu />
        </button>
      </div>
    </div>
  );
}

export default FloatingNav;