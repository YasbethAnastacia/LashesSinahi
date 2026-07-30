import { Heart, Sparkles,  } from "lucide-react";
import {ServicioCeja} from "./ServicioCeja.jsx"
import {ServicioPestana} from "./ServicioPestana.jsx"
import {ServicioEfecto} from "./ServicioEfecto.jsx"


export const Servicios = () => {
    return (
        <main id="servicios" className="relative min-h-screen overflow-hidden bg-[#fffafa] px-6 pb-24 pt-[110px] lg:px-12">
            <Sparkles size={34} strokeWidth={1.2} className="absolute right-[18%] top-[115px] text-[#ecc8cf]" />
            

            <section className="flex flex-col items-center justify-center text-center">
                <p className="text-[14px] font-bold tracking-[0.3em] text-[#d98d9c] sm:text-[16px]">MIS SERVICIOS</p>

                <div className="mt-2 flex items-center justify-center gap-3">
                    <div className="h-px w-[55px] bg-[#ecc8cf]" />
                    <Heart size={14} fill="currentColor" className="shrink-0 text-[#d98d9c]" />
                    <div className="h-px w-[55px] bg-[#ecc8cf]" />
                </div>

                <h2 className="mt-4 font-titulo text-[39px] leading-[1] text-[#111111] sm:text-[48px] lg:text-[54px]">Realzamos tu belleza</h2>
                <p className="font-titulo text-[37px] italic leading-[1.05] text-[#dc95a3] sm:text-[46px] lg:text-[52px]">con técnicas que enamoran.</p>
            </section>




            <ServicioCeja/>
            <ServicioPestana/>
            <ServicioEfecto/>




        </main>
    );
};