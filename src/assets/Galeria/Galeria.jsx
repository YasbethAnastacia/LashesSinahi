import { useMemo, useState } from "react";
import {
    Grid2X2,
    Eye,
    Sparkles,
} from "lucide-react";

const trabajos = [
    {
        id: 1,
        imagen: "/Galeria/PESTAÑAS/foto1.jpg",
        categoria: "pestanas",
        nombre: "Pestañas",
    },
    {
        id: 2,
        imagen: "/Galeria/PESTAÑAS/foto2.jpg",
        categoria: "pestanas",
        nombre: "Pestañas",
    },
    {
        id: 3,
        imagen: "/Galeria/PESTAÑAS/foto3.jpg",
        categoria: "pestanas",
        nombre: "Pestañas",
    },
    {
        id: 4,
        imagen: "/Galeria/PESTAÑAS/foto4.jpg",
        categoria: "pestanas",
        nombre: "Pestañas",
    },
    {
        id: 5,
        imagen: "/Galeria/PESTAÑAS/foto5.jpg",
        categoria: "pestanas",
        nombre: "Pestañas",
    },
    {
        id: 6,
        imagen: "/Galeria/PESTAÑAS/foto6.jpg",
        categoria: "pestanas",
        nombre: "Pestañas",
    },
    {
        id: 7,
        imagen: "/Galeria/PESTAÑAS/foto7.jpg",
        categoria: "pestanas",
        nombre: "Pestañas",
    },
    {
        id: 8,
        imagen: "/Galeria/PESTAÑAS/foto8.jpg",
        categoria: "pestanas",
        nombre: "Pestañas",
    },

    {
        id: 9,
        imagen: "/Galeria/CEJAS/foto1.jpg",
        categoria: "cejas",
        nombre: "Cejas",
    },
    {
        id: 10,
        imagen: "/Galeria/CEJAS/foto2.jpg",
        categoria: "cejas",
        nombre: "Cejas",
    },
    {
        id: 11,
        imagen: "/Galeria/CEJAS/foto3.jpg",
        categoria: "cejas",
        nombre: "Cejas",
    },
    {
        id: 12,
        imagen: "/Galeria/CEJAS/foto4.jpg",
        categoria: "cejas",
        nombre: "Cejas",
    },
];
export const Galeria = () => {
    const [categoria, setCategoria] = useState("todo");

    const trabajosFiltrados = useMemo(() => {
        if (categoria === "todo") {
            return trabajos;
        }

        return trabajos.filter(
            (trabajo) => trabajo.categoria === categoria
        );
    }, [categoria]);

    return (
        <main
            id="galeria"
            className="relative overflow-hidden bg-[#fffafa] px-4 pb-20 pt-28 sm:px-6 lg:px-16"
        >
            <div className="pointer-events-none absolute left-[-70px] top-[180px] h-[250px] w-[250px] rounded-full bg-[#fde8ed] blur-3xl" />

            <div className="pointer-events-none absolute right-[-100px] top-[300px] h-[350px] w-[350px] rounded-full bg-[#f9dce3] opacity-60 blur-3xl" />

            <section className="relative z-10 mx-auto w-full max-w-[1500px]">
                <div className="mx-auto mb-10 max-w-[800px] text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <div className="h-px w-14 bg-[#ecc8cf]" />

                        <span className="text-[12px] font-semibold uppercase tracking-[0.45em] text-[#d98d9c] sm:text-[14px]">
                            Galería
                        </span>

                        <div className="h-px w-14 bg-[#ecc8cf]" />
                    </div>

                    <Sparkles
                        size={17}
                        className="mx-auto mb-3 text-[#d98d9c]"
                    />

                    <h2 className="font-titulo text-[42px] leading-[0.95] text-[#111111] sm:text-[58px] lg:text-[70px]">
                        Resultados que
                    </h2>

                    <p className="font-titulo mt-2 text-[42px] italic leading-[0.95] text-[#d98d9c] sm:text-[58px] lg:text-[70px]">
                        hablan por sí solos.
                    </p>

                    <p className="mx-auto mt-6 max-w-[670px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
                        Explora algunos de mis trabajos y descubre
                        cómo realzo tu belleza con técnicas
                        personalizadas y resultados naturales.
                    </p>
                </div>

                <div className="mx-auto mb-8 grid max-w-[1050px] grid-cols-3 overflow-hidden rounded-[16px] border border-[#f1d7dd] bg-white/70 shadow-[0_8px_30px_rgba(217,141,156,0.08)]">
                    <button
                        type="button"
                        onClick={() => setCategoria("todo")}
                        className={`relative flex min-h-[72px] items-center justify-center gap-3 px-3 text-[12px] font-semibold uppercase tracking-[0.08em] transition-all sm:text-[14px] ${
                            categoria === "todo"
                                ? "bg-[#fff4f6] text-[#d98d9c]"
                                : "text-[#444444] hover:bg-[#fff7f8]"
                        }`}
                    >
                        <Grid2X2 size={22} />

                        <span>Todo</span>

                        {categoria === "todo" && (
                            <span className="absolute bottom-0 left-[15%] h-[3px] w-[70%] rounded-full bg-[#d98d9c]" />
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setCategoria("pestanas")}
                        className={`relative flex min-h-[72px] items-center justify-center gap-3 border-x border-[#f1d7dd] px-3 text-[12px] font-semibold uppercase tracking-[0.08em] transition-all sm:text-[14px] ${
                            categoria === "pestanas"
                                ? "bg-[#fff4f6] text-[#d98d9c]"
                                : "text-[#444444] hover:bg-[#fff7f8]"
                        }`}
                    >
                        <Eye size={23} />

                        <span>Pestañas</span>

                        {categoria === "pestanas" && (
                            <span className="absolute bottom-0 left-[15%] h-[3px] w-[70%] rounded-full bg-[#d98d9c]" />
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setCategoria("cejas")}
                        className={`relative flex min-h-[72px] items-center justify-center gap-3 px-3 text-[12px] font-semibold uppercase tracking-[0.08em] transition-all sm:text-[14px] ${
                            categoria === "cejas"
                                ? "bg-[#fff4f6] text-[#d98d9c]"
                                : "text-[#444444] hover:bg-[#fff7f8]"
                        }`}
                    >
                        <span className="text-[25px] leading-none">
                            ︵
                        </span>

                        <span>Cejas</span>

                        {categoria === "cejas" && (
                            <span className="absolute bottom-0 left-[15%] h-[3px] w-[70%] rounded-full bg-[#d98d9c]" />
                        )}
                    </button>
                </div>

                {trabajosFiltrados.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {trabajosFiltrados.map((trabajo) => (
                            <article
                                key={trabajo.id}
                                className="group relative h-[260px] overflow-hidden rounded-[20px] bg-[#f8e5e8] shadow-[0_10px_28px_rgba(80,40,50,0.08)] sm:h-[290px]"
                            >
                                <img
                                    src={trabajo.imagen}
                                    alt={trabajo.nombre}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />

                                <div className="absolute bottom-4 left-4">
                                    <span className="inline-flex items-center gap-2 rounded-[9px] bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.04em] text-[#d98d9c] shadow-md backdrop-blur-sm sm:text-[11px]">
                                        <Sparkles size={13} />

                                        {trabajo.nombre}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[260px] items-center justify-center rounded-[20px] border border-dashed border-[#eebbc6] bg-white/60 px-6 text-center">
                        <div>
                            <Sparkles
                                size={30}
                                className="mx-auto mb-4 text-[#d98d9c]"
                            />

                            <p className="font-titulo text-[28px] text-[#111111]">
                                No hay resultados disponibles
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};