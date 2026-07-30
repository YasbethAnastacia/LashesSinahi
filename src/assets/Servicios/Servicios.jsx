import {
    Clock3,
    Heart,
    Sparkles,
    ClockFading,
} from "lucide-react";

const cejas = [
    {
        id: 1,
        imagen: "/Servicios/Cejas/micro.png",
        nombre: "Microblading",
        descripcion:
            "Técnica pelo a pelo que crea trazos naturales para rellenar, definir y dar forma a tus cejas.",
        duracion: "12 - 18 meses",
        procedimiento: "2 - 2.5 horas",
    },
    {
        id: 2,
        imagen: "/Servicios/Cejas/pigmentacion.png",
        nombre: "Micropigmentación efecto polvo",
        descripcion:
            "Acabado suave y difuminado tipo maquillaje. Ideal para cejas con un look más lleno y natural.",
        duracion: "1 - 2 años",
        procedimiento: "2 - 2.5 horas",
    },
    {
        id: 3,
        imagen: "/Servicios/Cejas/compacto.png",
        nombre: "Micropigmentación compacta",
        descripcion:
            "Efecto más definido e intenso, perfecto para cejas con poca cantidad de vello.",
        duracion: "2 - 3 años",
        procedimiento: "2.5 - 3 horas",
    },
];

export const Servicios = () => {
    return (
        <main
            id="servicios"
            className="relative min-h-screen overflow-hidden bg-[#fffafa] px-6 pb-24 pt-[110px] lg:px-12"
        >
            {/* Decoraciones */}
            <Sparkles
                size={34}
                strokeWidth={1.2}
                className="absolute right-[18%] top-[115px] text-[#ecc8cf]"
            />

            <Sparkles
                size={32}
                strokeWidth={1.2}
                className="absolute bottom-[150px] left-[17%] hidden text-[#e7a8b4] lg:block"
            />

            {/* Encabezado */}
            <section className="flex flex-col items-center justify-center text-center">
                <p className="text-[14px] font-bold tracking-[0.3em] text-[#d98d9c] sm:text-[16px]">
                    MIS SERVICIOS
                </p>

                <div className="mt-2 flex items-center justify-center gap-3">
                    <div className="h-px w-[55px] bg-[#ecc8cf]" />

                    <Heart
                        size={14}
                        fill="currentColor"
                        className="shrink-0 text-[#d98d9c]"
                    />

                    <div className="h-px w-[55px] bg-[#ecc8cf]" />
                </div>

                <h2 className="mt-4 font-titulo text-[39px] leading-[1] text-[#111111] sm:text-[48px] lg:text-[54px]">
                    Realzamos tu belleza
                </h2>

                <p className="font-titulo text-[37px] italic leading-[1.05] text-[#dc95a3] sm:text-[46px] lg:text-[52px]">
                    con técnicas que enamoran.
                </p>
            </section>

           
            <section className="mx-auto mt-16 grid w-full max-w-[1450px] gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
                
                <div className="flex flex-col">
                    <div className="rounded-xl bg-[#fff2f4] px-6 py-5">
                        <h3 className="text-center text-[16px] font-bold tracking-[0.18em] text-[#242424]">
                            MICROPIGMENTACIÓN
                        </h3>
                    </div>

                    <p className="mt-6 px-3 text-[14px] leading-7 text-[#555555]">
                        Técnicas semipermanentes que realzan y definen tus cejas
                        con un acabado natural y duradero.
                    </p>

                    <div className="mt-8 flex items-center gap-3 px-3">
                        <div className="h-px flex-1 bg-[#ecc8cf]" />

                        <Heart
                            size={13}
                            fill="currentColor"
                            className="text-[#d98d9c]"
                        />

                        <div className="h-px flex-1 bg-[#ecc8cf]" />
                    </div>

                    <img
                        src="/Servicios/Cejas/ceja.png"
                        alt="Ilustración decorativa de ceja y ojo"
                        className="mx-auto mt-16 hidden w-[210px] object-contain opacity-80 lg:block"
                    />
                </div>

                
                <div className="min-w-0">
                    <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 xl:grid-cols-3">
                        {cejas.map((ceja) => (
                            <article
                                key={ceja.id}
                                className="
                                    min-w-[85%]
                                    snap-center
                                    overflow-hidden
                                    rounded-[18px]
                                    border
                                    border-[#f1e4e6]
                                    bg-white
                                    shadow-[0_12px_35px_rgba(202,143,155,0.10)]
                                    transition
                                    duration-300
                                    sm:min-w-[60%]
                                    lg:min-w-0
                                    lg:snap-none
                                    hover:-translate-y-2
                                    hover:shadow-[0_18px_45px_rgba(202,143,155,0.18)]
                                "
                            >
                                
                                <div className="h-[230px] w-full overflow-hidden">
                                    <img
                                        src={ceja.imagen}
                                        alt={ceja.nombre}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>

                                
                                <div className="flex min-h-[360px] flex-col px-7 pb-7 pt-5">
                                    <h3 className="min-h-[52px] text-center text-[17px] font-bold uppercase leading-6 tracking-[0.04em] text-[#202020]">
                                        {ceja.nombre}
                                    </h3>

                                    <p className="mt-3 min-h-[82px] text-center text-[13px] leading-6 text-[#555555]">
                                        {ceja.descripcion}
                                    </p>

                                    <div className="mt-5 border-t border-[#f1e4e6]">
                                        
                                        <div className="grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-[#f1e4e6] py-4">
                                            <Clock3
                                                size={20}
                                                strokeWidth={1.7}
                                                className="text-[#e7a8b4]"
                                            />

                                            <span className="text-[11px] font-bold uppercase text-[#4a4a4a]">
                                                Duración
                                            </span>

                                            <span className="text-[12px] font-semibold text-[#444444]">
                                                {ceja.duracion}
                                            </span>
                                        </div>

                                        
                                        <div className="grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-[#f1e4e6] py-4">
                                            <ClockFading
                                                size={20}
                                                strokeWidth={1.7}
                                                className="text-[#e7a8b4]"
                                            />

                                            <span className="text-[11px] font-bold uppercase text-[#4a4a4a]">
                                                Procedimiento
                                            </span>

                                            <span className="text-[12px] font-semibold text-[#444444]">
                                                {ceja.procedimiento}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Texto indicativo solo en celular */}
                    <p className="mt-1 text-center text-[12px] tracking-[0.12em] text-[#c78491] lg:hidden">
                        DESLIZA PARA VER MÁS
                    </p>
                </div>
            </section>
        </main>
    );
};