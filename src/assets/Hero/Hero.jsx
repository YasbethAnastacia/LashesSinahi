import { CalendarDays, Heart, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const carrusel = [
    "/Hero/foto1.svg",
    "/Hero/foto2.svg",
    "/Hero/foto3.svg",
];
const carrusel_celular = [
    "/Hero/foto4.svg",
    "/Hero/foto6.svg",
    "/Hero/foto5.svg",
];

export const Hero = () => {
    const [imagenActual, setImagenActual] = useState(0);
    useEffect(() => {
        const intervalo = setInterval(() => {
            setImagenActual((imagenAnterior) =>
                imagenAnterior === carrusel.length - 1
                    ? 0
                    : imagenAnterior + 1
            );
        }, 4000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <main className="relative isolate min-h-screen bg-[#fffafa] entrada-pagina">
            <section className="min-h-screen flex flex-col lg:grid  lg:grid-cols-[1fr_1.4fr] lg:pt-[70px]">


                <section className="lg:hidden  flex items-center justify-center  w-full">
                    <div className="relative z-10 grid w-full  max-w-[600px]">
                    {carrusel_celular.map((elemento, index) => (
                        <img
                            key={elemento}
                            src={elemento}
                            alt={`Diseño de pestañas y cejas ${index + 1}`}
                            className={`col-start-1 row-start-1 block h-auto w-full transition-opacity duration-[3000ms] ${
                                index === imagenActual
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    ))}
                    </div>
                </section>


                <section className="relative z-10 flex flex-col  px-20 py-6 items-center justify-center lg:items-start lg:px-24 lg:py-12 ">
                    <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-4 aparecer-elemento retraso-1">
                            <span className="text-[13px] font-semibold uppercase tracking-[1em] text-[#d98d9c]">
                                Lashes & Brows
                            </span>

                            <Heart
                                size={15}
                                fill="currentColor"
                                className="shrink-0 text-[#d98d9c]"
                            />

                            <div className="h-px flex-1 bg-[#ecc8cf]" />
                        </div>

                        <div className="flex flex-col gap-3 aparecer-elemento retraso-2 items-center lg:items-start">
                            <h1 className="font-titulo text-[76px] leading-[0.98] text-[#111111]">
                                Realzamos
                                <br />
                                tu mirada.
                            </h1>

                            <h2 className="font-titulo text-[72px] italic leading-[0.98] text-[#dc95a3]">
                                Resaltamos
                                <br />
                                tu belleza.
                            </h2>
                        </div>

                        <p className="max-w-[500px] text-[15px] leading-6 text-[#666666] aparecer-elemento retraso-1">
                            Especialista en pestañas, cejas y micropigmentación
                            con técnicas modernas y resultados naturales.
                        </p>

                        <div className="flex gap-4 aparecer-elemento retraso-3">
                            <button
                                type="button"
                                className="flex h-[52px] flex-1 items-center justify-center gap-3 rounded-md bg-[#d78c9b] px-7 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:bg-[#c87989]"
                            >
                                <CalendarDays size={17} />
                                Agendar cita
                            </button>

                            <button
                                type="button"
                                className="aparecer-elemento retraso-1 h-[52px] flex-1 rounded-md border border-[#e2a4af] px-7 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#333333] transition duration-300 hover:bg-[#fbecef]"
                            >
                                Ver servicios
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-3 aparecer-elemento retraso-3">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#df9aa7]">
                                Desliza para descubrir
                            </span>

                            <ArrowDown
                                size={28}
                                strokeWidth={1.2}
                                className="animate-bounce text-[#dd8e9e]"
                                
                            />
                        </div>
                    </div>
                </section>

                <section className="hidden md:flex relative z-10 overflow-hidden aparecer-elemento retraso-1">
                    {carrusel.map((elemento, index) => (
                        <img
                            key={elemento}
                            src={elemento}
                            alt={`Diseño de pestañas y cejas ${index + 1}`}
                            className={`absolute inset-0 h-full w-full object-cover object-left transition-opacity duration-3000 ${
                                index === imagenActual
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    ))}
                </section>
            </section>

            <div className="pointer-events-none absolute bottom-0 left-0 -z-10 w-full aparecer-elemento retraso-3">
                <img
                    src="/Aboutme/wave.svg"
                    alt=""
                    className="block w-full"
                />
            </div>
        </main>
    );
};