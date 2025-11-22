import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "La experiencia en el estudio ha sido impecable. Materiales excepcionales y un trato exquisito.",
    author: "María G.",
  },
  {
    quote:
      "Cocina de ensueño. El mármol y el nogal crean un ambiente cálido y contemporáneo.",
    author: "Alberto D.",
  },
  {
    quote:
      "Detalle y precisión en cada módulo. Altamente recomendables.",
    author: "Rocío P.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((v) => (v + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#2D2E30]">Testimonios</h2>
        <div className="relative mt-10">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className={`transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 absolute inset-0"}`}
            >
              <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed">
                “{t.quote}”
              </p>
              <footer className="mt-4 text-slate-500">{t.author}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full ${i === index ? "bg-[#C9B47A]" : "bg-slate-200"}`}
            />)
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;