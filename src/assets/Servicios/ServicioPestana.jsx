import { Clock3, Heart, Sparkles, ClockFading } from "lucide-react";

const pestanas = [
    {
        id: 1,
        imagen: "/Servicios/Pestanas/clasica.png",
        nombre: "Clásica",
        descripcion: "Aplicación de una extensión por cada pestaña natural. Look natural y elegante.",
        duracion: "3 - 4 semanas",
        procedimiento: "1.5 - 2 h",
    },
    {
        id: 2,
        imagen: "/Servicios/Pestanas/hibrida.png",
        nombre: "Híbrida",
        descripcion: "Combinación de técnicas clásica y volumen. Más densidad con un acabado natural.",
        duracion: "3 - 4 semanas",
        procedimiento: "2 - 2.5 h",
    },
    {
        id: 3,
        imagen: "/Servicios/Pestanas/volumen.png",
        nombre: "Volumen",
        descripcion: "Aplicación de abanicos de pestañas finas que aportan volumen y definición.",
        duracion: "3 - 4 semanas",
        procedimiento: "2 - 2.5 h",
    },
    {
        id: 4,
        imagen: "/Servicios/Pestanas/megavolumen.png",
        nombre: "Megavolumen",
        descripcion: "Máximo volumen y efecto dramático para una mirada impactante.",
        duracion: "3 - 4 semanas",
        procedimiento: "2.5 - 3 h",
    },
];

export const ServicioPestana = () => {
    return (
            <section className="mx-auto mt-16 grid w-full max-w-[1450px] gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start ">
                <div className="flex flex-col ">
                    <div className="rounded-xl bg-[#fff2f4] px-6 py-5">
                        <h3 className="text-center text-[16px] font-bold tracking-[0.18em] text-[#242424] font-titulo ">PESTAÑAS</h3>
                    </div>

                    
                    <p className="mt-6 px-3 text-[14px] leading-7 text-[#555555]">Aplicaciones profesionales que aportan volumen, longitud y definición a tu mirada .</p>

                    <div className="mt-8 flex items-center gap-3 px-3">
                        <div className="h-px flex-1 bg-[#ecc8cf]" />
                        <Heart size={13} fill="currentColor" className="text-[#d98d9c]" />
                        <div className="h-px flex-1 bg-[#ecc8cf]" />
                    </div>

                    <img src="/Servicios/Pestanas/pestanas_logo.png" alt="Ilustración decorativa de ceja y ojo" className=" mx-auto mt-4 lg:mt-16 w-[210px] object-contain opacity-80 lg:block" />
                </div>

                <div className="min-w-0  ">
                    <div className="-mx-6 items-stretch flex snap-x snap-mandatory gap-5  px-6  overflow-x-auto ">
                        {pestanas.map((pestana) => (
                            <article key={pestana.id} className=" min-w-[340px] shrink-0 flex flex-1 flex-col  snap-center overflow-hidden rounded-[18px] border border-[#f1e4e6] bg-white shadow-[0_12px_35px_rgba(202,143,155,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(202,143,155,0.18)]  xl:min-w-0 xl:max-w-[380px] xl:snap-none ">
                                <div className="h-[230px] w-full overflow-hidden ">
                                    <img src={pestana.imagen} alt={pestana.nombre} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                                </div>

                                <div className="flex-1 flex flex-col px-7 py-5  gap-7">
                                    <h3 className="text-center text-[17px] font-bold uppercase leading-6 tracking-[0.07em] font-bold  text-[#d98d9c] font-titulo ">{pestana.nombre}</h3>
                                    <p className=" text-center text-[13px] leading-6 text-[#555555] ">{pestana.descripcion}</p>

                                    <div className="border-t border-[#f1e4e6] mt-auto">
                                        <div className="grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-[#f1e4e6] py-4">
                                            <Clock3 size={20} strokeWidth={1.7} className="text-[#e7a8b4]" />
                                            <span className="text-[11px] font-bold uppercase text-[#4a4a4a]">Duración</span>
                                            <span className="text-[12px] font-semibold text-[#444444]">{pestana.duracion}</span>
                                        </div>

                                        <div className="grid grid-cols-[28px_1fr_auto] items-center gap-3 border-b border-[#f1e4e6] py-4">
                                            <ClockFading size={20} strokeWidth={1.7} className="text-[#e7a8b4]" />
                                            <span className="text-[11px] font-bold uppercase text-[#4a4a4a]">Procedimiento</span>
                                            <span className="text-[12px] font-semibold text-[#444444]">{pestana.procedimiento}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-1 text-center text-[12px] tracking-[0.12em] text-[#c78491] lg:hidden">DESLIZA PARA VER MÁS</p>
                </div>
            </section>

    );
};