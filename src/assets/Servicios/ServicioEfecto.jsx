import { Clock3, Heart, Sparkles, ClockFading } from "lucide-react";

const pestanas = [
    {
        id: 1,
        imagen: "/Servicios/Efecto/wispys.png",
        nombre: "Wispys"
    },
    {
        id: 2,
        imagen: "/Servicios/Efecto/medusa.png",
        nombre: "Medusa",
        
    },
    {
        id: 3,
        imagen: "/Servicios/Efecto/rimel.png",
        nombre: "Rimel",
        
    },
    {
        id: 4,
        imagen: "/Servicios/Efecto/gato.png",
        nombre: "Ojo de Gato",
        
    },
    {
        id: 5,
        imagen: "/Servicios/Efecto/capping.png",
        nombre: "Cappping",
        
    },
    {
        id: 6,
        imagen: "/Servicios/Efecto/9d.png",
        nombre: "9D",
        
    },
];

export const ServicioEfecto = () => {
    return (
            <section className="mx-auto mt-16 grid w-full max-w-[1450px] gap-8  ">
                <div className="flex flex-col items-center justify-center  ">
                    
                        <h3 className="text-center text-[24px] font-bold tracking-[0.18em] text-[#242424] font-titulo ">EFECTOS</h3>
                    <div className="mt-8 flex items-center gap-3 px-3">
                        <div className="h-px flex-1 bg-[#ecc8cf]" />
                        <Heart size={13} fill="currentColor" className="text-[#d98d9c]" />
                        <div className="h-px flex-1 bg-[#ecc8cf]" />
                    </div>

                    
                    <p className="mt-6 px-3 text-[14px] leading-7 text-[#555555]">Dale a tu mirada un estilo único con nuestros efectos especiales.</p>

                    

                    
                </div>

                <div className="min-w-0  ">
                    <div className="-mx-6 items-stretch flex snap-x snap-mandatory gap-5  overflow-x-auto ">
                        {pestanas.map((pestana) => (
                            <article key={pestana.id} className=" bg-green-500 min-w-[340px] shrink-0 flex flex-1 flex-col  snap-center overflow-hidden rounded-[18px] border border-[#f1e4e6] bg-white shadow-[0_12px_35px_rgba(202,143,155,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(202,143,155,0.18)]  xl:min-w-0 xl:max-w-[380px] xl:snap-none ">
                                <div className="h-[230px] w-full overflow-hidden ">
                                    <img src={pestana.imagen} alt={pestana.nombre} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                                </div>

                                <div className="flex-1 flex flex-col px-7 py-3 bg-[#d98d9c] ">
                                    <h3 className="text-center text-[17px] font-bold uppercase leading-6 tracking-[0.07em] font-bold  text-white font-titulo ">{pestana.nombre}</h3>
                                    

                                    
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-1 text-center text-[12px] tracking-[0.12em] text-[#c78491] lg:hidden">DESLIZA PARA VER MÁS</p>
                </div>
            </section>

    );
};