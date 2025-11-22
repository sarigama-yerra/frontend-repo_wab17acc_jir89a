function AsymmetricGrid() {
  const items = [
    {
      title: "Walnut & Carrara",
      copy: "Composiciones con nogal europeo y mármol Carrara para una elegancia atemporal.",
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1600&auto=format&fit=crop",
      span: "md:col-span-2",
    },
    {
      title: "Sistemas a medida",
      copy: "Soluciones modulables con herrajes italianos de precisión.",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
      span: "",
    },
    {
      title: "Detalles en oro cepillado",
      copy: "Tiradores, grifería y apliques con acabado brushed gold.",
      image:
        "https://images.unsplash.com/photo-1616596870637-02d4781d6a98?q=80&w=1600&auto=format&fit=crop",
      span: "",
    },
    {
      title: "Castellana Lifestyle",
      copy: "Líneas puras, proporciones generosas y luz natural.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
      span: "md:row-span-2",
    },
  ];

  return (
    <section id="collections" className="bg-[#f7f6f3] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2D2E30]">Colecciones de Estudio</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">Una selección curada de diseños con maderas nobles, piedras naturales y acabados artesanales.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <article key={i} className={`group relative overflow-hidden rounded-2xl ${card.span}`}>
              <img src={card.image} alt={card.title} className="h-72 w-full object-cover group-hover:scale-[1.03] transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-white text-2xl drop-shadow">{card.title}</h3>
                <p className="text-white/85 text-sm mt-1 max-w-sm">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AsymmetricGrid;