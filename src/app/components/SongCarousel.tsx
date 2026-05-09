"use client";

const platforms = [
  { id: 1, name: "Toneladas de alabanza", logo: "/assets/conectados.webp", bg: "bg-[#c691df]", txt: "text-white"},
  { id: 2, name: "Quema mi vida", logo: "/assets/Quema.webp", bg: "bg-[#4eb8f4]", txt: "text-white"},
  { id: 3, name: "Sana mi herida", logo: "/assets/Sana.webp", bg: "bg-[#e1a77f]", txt: "text-white"},
    { id: 4, name: "Dios te hizo tan bien", logo: "/assets/Diostehizotanbn.webp", bg: "bg-[#456152]", txt: "text-white"},
  { id: 5, name: "Baila y dejate de historias", logo: "/assets/Baila.webp", bg: "bg-green-500", txt: "text-white"},
  { id: 6, name: "Todo estará bien", logo: "/assets/Todoestarabien.webp", bg: "bg-green-500", txt: "text-white"},
  { id: 7, name: "Quema mi vida", logo: "/assets/Quema.webp", bg: "bg-green-500", txt: "text-white"},
  { id: 8, name: "No estás solo", logo: "/assets/Noestassolo.webp", bg: "bg-green-500", txt: "text-white"},
  { id: 9, name: "La fé de Maria", logo: "/assets/Lafedemaria.webp", bg: "bg-green-500", txt: "text-white"},
  { id: 10, name: "Noche", logo: "/assets/Noche.webp", bg: "bg-green-500", txt: "text-white"},
  { id: 11, name: "Huracán", logo: "/assets/Huracan.webp", bg: "bg-green-500", txt: "text-white"},
];

const items = [...platforms, ...platforms];

export default function MusicCarousel() {
  return (
    <div className="relative overflow-hidden w-full py-2">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex gap-3 w-max animate-scroll">
        {items.map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            className={`flex items-center gap-3 rounded-xl pr-4 ${p.bg} min-w-[260px] transition-colors hover:shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-0.5 active:translate-y-0`}
          >
            <div className={`flex items-center justify-center flex-shrink-0`}>
              <img src={p.logo} alt={p.name} className="w-13 h-13 rounded-xl object-contain" />
            </div>
            <div className="overflow-hidden">
              <p className={`text-lg font-medium ${p.txt}`}>{p.name}</p>
              <p className={`text-sm font-light ${p.txt}`}>{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}