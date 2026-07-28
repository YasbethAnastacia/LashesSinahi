import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const enlaces = [
        { nombre: "Inicio", href: "#inicio" },
        { nombre: "Servicios", href: "#servicios" },
        { nombre: "Galería", href: "#galeria" },
        { nombre: "Sobre mí", href: "#sobre-mi" },
        { nombre: "Contacto", href: "#contacto" },
    ];

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-[#fffafa] entrada-pagina">
            <nav className="mx-auto grid h-[70px] w-full  grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10 lg:px-16 ">

                {/* Logo */}
                <div
                    
                    className=" justify-self-start  "
                >
                    <img
                        src="/Navbar/Logo.jpg"
                        alt="Sinahi Bermejo Lashes & Brows"
                        className="h-[65px] w-auto object-contain"
                    />
                </div>

                
                <div className="hidden items-center justify-center gap-10 lg:flex">
                    {enlaces.map((enlace) => (
                        <a
                            key={enlace.nombre}
                            href={enlace.href}
                            className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.08em] text-[#252525] transition-colors hover:text-[#d78f9e]"
                        >
                            {enlace.nombre}
                        </a>
                    ))}
                </div>

                {/* Botón escritorio */}
                <a
                    href="#agendar"
                    className="hidden justify-self-end items-center gap-2 rounded-lg bg-[#d88f9e] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#c77d8d] lg:flex"
                >
                    <CalendarDays size={16} />

                    Agendar cita
                </a>

                {/* Logo móvil */}
                <a
                    href="#inicio"
                    className="col-start-1 justify-self-start lg:hidden"
                >
                    <img
                        src="/logo.png"
                        alt="Sinahi Bermejo Lashes & Brows"
                        className="h-[55px] w-auto object-contain"
                    />
                </a>

                {/* Botón menú móvil */}
                <button
                    type="button"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end text-[#252525] lg:hidden"
                    aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                >
                    {menuAbierto ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Menú móvil */}
            {menuAbierto && (
                <div className="border-t border-[#f0dfe2] bg-[#fffafa] px-6 pb-7 pt-5 lg:hidden">
                    <div className="flex flex-col items-center gap-5">
                        {enlaces.map((enlace) => (
                            <a
                                key={enlace.nombre}
                                href={enlace.href}
                                onClick={() => setMenuAbierto(false)}
                                className="text-sm font-medium uppercase tracking-[0.1em] text-[#252525] transition-colors hover:text-[#d78f9e]"
                            >
                                {enlace.nombre}
                            </a>
                        ))}

                        <a
                            href="#agendar"
                            onClick={() => setMenuAbierto(false)}
                            className="mt-2 flex items-center gap-2 rounded-lg bg-[#d88f9e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-white"
                        >
                            <CalendarDays size={16} />

                            Agendar cita
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};