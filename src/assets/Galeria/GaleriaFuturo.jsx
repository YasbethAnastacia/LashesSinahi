import { useMemo, useState } from "react";
import {
    Grid2X2,
    Eye,
    Sparkles,
} from "lucide-react";

const trabajos = [
    {
        id: 1,
        imagen: "/Galeria/volumen-wispy.jpg",
        categoria: "pestanas",
        tipo: "volumen",
        efecto: "wispy",
        nombre: "Volumen + Wispy",
    },
    {
        id: 2,
        imagen: "/Galeria/hibridas-medusa.jpg",
        categoria: "pestanas",
        tipo: "hibridas",
        efecto: "medusa",
        nombre: "Híbridas + Medusa",
    },
    {
        id: 3,
        imagen: "/Galeria/clasicas-rimel.jpg",
        categoria: "pestanas",
        tipo: "clasicas",
        efecto: "rimel",
        nombre: "Clásicas + Rímel",
    },
    {
        id: 4,
        imagen: "/Galeria/megavolumen-ojo-gato.jpg",
        categoria: "pestanas",
        tipo: "megavolumen",
        efecto: "ojo-gato",
        nombre: "Megavolumen + Ojo de gato",
    },
    {
        id: 5,
        imagen: "/Galeria/volumen-capping.jpg",
        categoria: "pestanas",
        tipo: "volumen",
        efecto: "capping",
        nombre: "Volumen + Capping",
    },
    {
        id: 6,
        imagen: "/Galeria/megavolumen-9d.jpg",
        categoria: "pestanas",
        tipo: "megavolumen",
        efecto: "9d",
        nombre: "Megavolumen + Efecto 9D",
    },
    {
        id: 7,
        imagen: "/Galeria/microblading.jpg",
        categoria: "cejas",
        tipo: "microblading",
        efecto: null,
        nombre: "Microblading",
    },
    {
        id: 8,
        imagen: "/Galeria/efecto-polvo.jpg",
        categoria: "cejas",
        tipo: "efecto-polvo",
        efecto: null,
        nombre: "Efecto polvo",
    },
    {
        id: 9,
        imagen: "/Galeria/compacta.jpg",
        categoria: "cejas",
        tipo: "compacta",
        efecto: null,
        nombre: "Micropigmentación compacta",
    },
];

const tiposPestanas = [
    { nombre: "Todo", valor: "todo" },
    { nombre: "Clásicas", valor: "clasicas" },
    { nombre: "Híbridas", valor: "hibridas" },
    { nombre: "Volumen", valor: "volumen" },
    { nombre: "Megavolumen", valor: "megavolumen" },
];

const efectosPestanas = [
    { nombre: "Todos", valor: "todos" },
    { nombre: "Wispy", valor: "wispy" },
    { nombre: "Medusa", valor: "medusa" },
    { nombre: "Rímel", valor: "rimel" },
    { nombre: "Ojo de gato", valor: "ojo-gato" },
    { nombre: "Capping", valor: "capping" },
    { nombre: "Efecto 9D", valor: "9d" },
];

const tiposCejas = [
    { nombre: "Todo", valor: "todo" },
    { nombre: "Microblading", valor: "microblading" },
    { nombre: "Efecto polvo", valor: "efecto-polvo" },
    { nombre: "Compacta", valor: "compacta" },
];

export const Galeria = () => {
    const [categoria, setCategoria] = useState("todo");
    const [tipoPestana, setTipoPestana] = useState("todo");
    const [efectoPestana, setEfectoPestana] = useState("todos");
    const [tipoCeja, setTipoCeja] = useState("todo");

    const cambiarCategoria = (nuevaCategoria) => {
        setCategoria(nuevaCategoria);
        setTipoPestana("todo");
        setEfectoPestana("todos");
        setTipoCeja("todo");
    };

    const trabajosFiltrados = useMemo(() => {
        return trabajos.filter((trabajo) => {
            if (categoria === "todo") {
                return true;
            }

            if (categoria === "pestanas") {
                const coincideCategoria =
                    trabajo.categoria === "pestanas";

                const coincideTipo =
                    tipoPestana === "todo" ||
                    trabajo.tipo === tipoPestana;

                const coincideEfecto =
                    efectoPestana === "todos" ||
                    trabajo.efecto === efectoPestana;

                return (
                    coincideCategoria &&
                    coincideTipo &&
                    coincideEfecto
                );
            }

            if (categoria === "cejas") {
                const coincideCategoria =
                    trabajo.categoria === "cejas";

                const coincideTipo =
                    tipoCeja === "todo" ||
                    trabajo.tipo === tipoCeja;

                return coincideCategoria && coincideTipo;
            }

            return true;
        });
    }, [
        categoria,
        tipoPestana,
        efectoPestana,
        tipoCeja,
    ]);

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

                

                <div className="mx-auto mb-4 grid max-w-[1050px] grid-cols-3 overflow-hidden rounded-[16px] border border-[#f1d7dd] bg-white/70 shadow-[0_8px_30px_rgba(217,141,156,0.08)]">
                    <button
                        type="button"
                        onClick={() => cambiarCategoria("todo")}
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
                        onClick={() =>
                            cambiarCategoria("pestanas")
                        }
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
                        onClick={() =>
                            cambiarCategoria("cejas")
                        }
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

                

                {categoria === "pestanas" && (
                    <div className="mx-auto mb-5 max-w-[1320px] rounded-[20px] border border-[#f1d7dd] bg-white/75 px-4 py-4 shadow-[0_8px_30px_rgba(217,141,156,0.07)] sm:px-7">
                        <div className="grid gap-4 border-b border-[#f4dfe4] pb-4 lg:grid-cols-[130px_1fr] lg:items-center">
                            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#d98d9c]">
                                Tipo
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {tiposPestanas.map((tipo) => (
                                    <button
                                        key={tipo.valor}
                                        type="button"
                                        onClick={() =>
                                            setTipoPestana(
                                                tipo.valor
                                            )
                                        }
                                        className={`min-w-[115px] rounded-[11px] border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] transition-all ${
                                            tipoPestana ===
                                            tipo.valor
                                                ? "border-[#d98d9c] bg-[#d98d9c] text-white shadow-[0_6px_16px_rgba(217,141,156,0.25)]"
                                                : "border-[#eebbc6] bg-white text-[#d98d9c] hover:bg-[#fff0f3]"
                                        }`}
                                    >
                                        {tipo.nombre}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4 pt-4 lg:grid-cols-[130px_1fr] lg:items-center">
                            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#d98d9c]">
                                Efecto
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {efectosPestanas.map(
                                    (efecto) => (
                                        <button
                                            key={efecto.valor}
                                            type="button"
                                            onClick={() =>
                                                setEfectoPestana(
                                                    efecto.valor
                                                )
                                            }
                                            className={`min-w-[115px] rounded-[11px] border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] transition-all ${
                                                efectoPestana ===
                                                efecto.valor
                                                    ? "border-[#d98d9c] bg-[#d98d9c] text-white shadow-[0_6px_16px_rgba(217,141,156,0.25)]"
                                                    : "border-[#eebbc6] bg-white text-[#d98d9c] hover:bg-[#fff0f3]"
                                            }`}
                                        >
                                            {efecto.nombre}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}

                

                {categoria === "cejas" && (
                    <div className="mx-auto mb-5 max-w-[1050px] rounded-[20px] border border-[#f1d7dd] bg-white/75 px-4 py-4 shadow-[0_8px_30px_rgba(217,141,156,0.07)] sm:px-7">
                        <div className="grid gap-4 lg:grid-cols-[130px_1fr] lg:items-center">
                            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#d98d9c]">
                                Tipo
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {tiposCejas.map((tipo) => (
                                    <button
                                        key={tipo.valor}
                                        type="button"
                                        onClick={() =>
                                            setTipoCeja(tipo.valor)
                                        }
                                        className={`min-w-[130px] rounded-[11px] border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] transition-all ${
                                            tipoCeja === tipo.valor
                                                ? "border-[#d98d9c] bg-[#d98d9c] text-white shadow-[0_6px_16px_rgba(217,141,156,0.25)]"
                                                : "border-[#eebbc6] bg-white text-[#d98d9c] hover:bg-[#fff0f3]"
                                        }`}
                                    >
                                        {tipo.nombre}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                

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

                            <p className="mt-2 text-[14px] text-[#777777]">
                                Prueba seleccionando otra combinación
                                de tipo y efecto.
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};