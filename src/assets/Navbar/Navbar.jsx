import { Link } from "react-router-dom";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

const enlaces = [
    { nombre: "Inicio", ruta: "/" },
    { nombre: "Sobre mí", ruta: "/#sobre-mi" },
    { nombre: "Servicios", ruta: "/servicios" },
    { nombre: "Galería", ruta: "/#galeria" },
    { nombre: "Contacto", ruta: "/#contacto" },
];

export const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="entrada-pagina fixed left-0 top-0 z-50 w-full border-b border-white/50 bg-[#FDE7EB]/75 shadow-[0_4px_20px_rgba(216,143,158,0.08)] backdrop-blur-md">
            <nav className="mx-auto grid h-[70px] w-full grid-cols-[1fr_auto_1fr] items-center px-6 md:px-10 lg:px-16">
                <Link to="/" className="hidden justify-self-start lg:flex">
                    <img src="/Navbar/logotipo.png" alt="Sinahi Bermejo Lashes & Brows" className="h-[65px] w-auto object-contain" />
                </Link>

                <div className="hidden items-center justify-center gap-3 lg:flex">
                    {enlaces.map((enlace) => (
                        <Link key={enlace.nombre} to={enlace.ruta} className="whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-[0.08em] text-[#252525] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:text-[#d78f9e] hover:shadow-[0_6px_18px_rgba(215,143,158,0.18)]">
                            {enlace.nombre}
                        </Link>
                    ))}
                </div>

                <Link to="/#agendar" className="hidden items-center gap-2 justify-self-end rounded-full bg-[#d88f9e] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-white shadow-[0_6px_16px_rgba(216,143,158,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c77d8d] hover:shadow-[0_8px_22px_rgba(199,125,141,0.32)] lg:flex">
                    <CalendarDays size={16} />
                    Agendar cita
                </Link>

                <button type="button" onClick={() => setMenuAbierto(!menuAbierto)} className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end rounded-full text-[#252525] transition-all duration-300 hover:bg-white/70 hover:text-[#d78f9e] lg:hidden" aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}>
                    {menuAbierto ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {menuAbierto && (
                <div className="border-t border-white/60 bg-[#FDE7EB]/90 px-6 pb-7 pt-5 backdrop-blur-md lg:hidden">
                    <div className="flex flex-col items-center gap-3">
                        {enlaces.map((enlace) => (
                            <Link key={enlace.nombre} to={enlace.ruta} onClick={() => setMenuAbierto(false)} className="rounded-full px-6 py-2 text-sm font-medium uppercase tracking-[0.1em] text-[#252525] transition-all duration-300 hover:bg-white/70 hover:text-[#d78f9e] hover:shadow-[0_5px_15px_rgba(215,143,158,0.16)]">
                                {enlace.nombre}
                            </Link>
                        ))}

                        <Link to="/#agendar" onClick={() => setMenuAbierto(false)} className="mt-2 flex items-center gap-2 rounded-full bg-[#d88f9e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-white shadow-[0_6px_16px_rgba(216,143,158,0.25)] transition-all duration-300 hover:bg-[#c77d8d]">
                            <CalendarDays size={16} />
                            Agendar cita
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};