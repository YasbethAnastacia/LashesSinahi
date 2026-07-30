import { Heart } from "lucide-react";

export const Footer = () => {
    const añoActual = new Date().getFullYear();

    return (
        <footer className="border-t border-[#f1d7dd] bg-[#fffafa] px-6 py-8">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
                <div>
                    <p className="font-titulo text-[24px] text-[#111111]">
                        Sinahi Bermejo
                    </p>

                    <p className="mt-1 text-[12px] uppercase tracking-[0.25em] text-[#d98d9c]">
                        Lashes & Brows
                    </p>
                </div>

                <div className="text-[13px] leading-6 text-[#777777]">
                    <p>
                        © {añoActual} Sinahi Bermejo. Todos los
                        derechos reservados.
                    </p>

                    <p className="flex flex-wrap items-center justify-center gap-1 md:justify-end">
                        Desarrollado con
                        <Heart
                            size={13}
                            fill="currentColor"
                            className="text-[#d98d9c]"
                        />
                        por
                        <span className="font-semibold text-[#555555]">
                            Yasbeth Anastacia Vázquez Hernández
                        </span>
                        y
                        <span className="font-semibold text-[#555555]">
                            José Francisco Bermejo Saltos
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};