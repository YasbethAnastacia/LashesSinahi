import {
    MapPin,
    CalendarDays,
    ArrowRight,
} from "lucide-react";

export const Contacto = () => {
    return (
        <section
            id="contacto"
            className="relative overflow-hidden bg-[#fffafa] px-6 py-24 lg:px-16"
        >
            <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#fde8ed] blur-3xl" />

            <div className="absolute bottom-0 right-[-120px] h-80 w-80 rounded-full bg-[#f8dde3] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="text-center">
                    <div className="mb-5 flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-[#ecc8cf]" />

                        <span className="text-[13px] font-semibold uppercase tracking-[0.45em] text-[#d98d9c]">
                            Contacto
                        </span>

                        <div className="h-px w-16 bg-[#ecc8cf]" />
                    </div>

                    <h2 className="font-titulo text-[48px] leading-none text-[#111111] lg:text-[68px]">
                        Agenda tu cita
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#666666]">
                        Estoy lista para ayudarte a resaltar tu belleza con un
                        servicio personalizado. Si tienes dudas o deseas agendar
                        una cita, será un gusto atenderte.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    <a
                        href="https://www.tiktok.com/@lashes.sinahi.ber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-[24px] border border-[#f1d7dd] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1f4]">
                            <img
                                className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                                src="/Contacto/tiktok.svg"
                                alt="TikTok"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-[#111111]">
                            TikTok
                        </h3>

                        <p className="mt-3 break-words text-[#666666]">
                            @lashes.sinahi.ber
                        </p>
                    </a>

                    <a
                        href="https://www.instagram.com/lashes_sinahib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-[24px] border border-[#f1d7dd] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1f4]">
                            <img
                                className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                                src="/Contacto/instagram.svg"
                                alt="Instagram"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-[#111111]">
                            Instagram
                        </h3>

                        <p className="mt-3 break-words text-[#666666]">
                            @lashes_sinahib
                        </p>
                    </a>

                    <div
                        
                        className="group block rounded-[24px] border border-[#f1d7dd] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1f4]">
                            <MapPin
                                size={28}
                                className="text-[#d98d9c] transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-[#111111]">
                            Ubicación
                        </h3>

                        <p className="mt-3 text-[#666666]">
                            Armería, Colima, México
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <a
                        href="https://wa.me/526141234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-xl bg-[#d98d9c] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#cf7f91]"
                    >
                        <CalendarDays size={20} />

                        Agendar por WhatsApp

                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>

                <div className="mt-20">
                    

                    

                    <div className="mt-8 rounded-[24px] border border-[#f1d7dd] bg-white p-8 text-center shadow-sm">
                        <h4 className="font-semibold text-[#d98d9c]">
                            Sinahi Bermejo Lashes & Brows
                        </h4>

                        <p className="mt-3 text-[#666666]">
                            Armería, Colima, México
                        </p>

                        <p className="mt-2 text-[#666666]">
                            Lunes a Viernes · 10:00 AM - 6:00 PM
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};