import { Award, Leaf, Heart, Sparkles, Quote } from "lucide-react";

const beneficios = [
    { titulo: "Certificada y capacitada", texto: "Formación constante con las mejores técnicas del momento.", Icono: Award },
    { titulo: "Productos de calidad", texto: "Utilizo productos premium, seguros y de alta calidad.", Icono: Leaf },
    { titulo: "Atención personalizada", texto: "Cada diseño es único y adaptado a tus rasgos y estilo.", Icono: Heart },
    { titulo: "Resultados naturales", texto: "Resultados elegantes, sutiles y duraderos.", Icono: Sparkles },
];

const EtiquetaSobreMi = () => (
    <>
        <div className="h-px w-12 bg-[#e9b6c0] sm:w-16" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d98d9c]">Sobre mí</span>
        <Heart size={13} fill="currentColor" className="shrink-0 text-[#d98d9c]" />
        <div className="h-px w-12 bg-[#e9b6c0] sm:w-16" />
    </>
);

const TituloSobreMi = ({ className = "" }) => (
    <h2 className={className}>
        Pasión por realzar
        <span className="mt-2 block italic text-[#df93a3]">tu belleza natural.</span>
    </h2>
);

export const Aboutme = () => {
    return (
        <section id="sobre-mi" className="entrada-pagina relative overflow-hidden bg-[#fffafa] pb-16 lg:px-16 lg:py-20">
            <div className="relative z-10 mx-auto grid w-full max-w-[1400px] lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
                <div className="relative flex h-[480px] w-full overflow-hidden  lg:hidden">
                    <img className="absolute inset-0 -z-20" src="/Aboutme/onda_celular_fuertenatural.svg" alt="" />
                    <img src="/Aboutme/jenniManchaCelular2.svg" alt="" className="h-full object-fill" />

                    <div className=" hidden sm:flex mb-5 flex w-full flex-col items-center justify-center gap-3">
                        <div className="flex items-center justify-center gap-3">
                            <EtiquetaSobreMi />
                        </div>

                        <TituloSobreMi className="hidden text-center font-serif text-[44px] leading-[1.05] text-[#171313] md:flex md:flex-col sm:text-[54px] lg:hidden lg:text-left lg:text-[60px]" />
                    </div>
                </div>

                <div className="mx-auto hidden w-full max-w-[900px] lg:block">
                    <div className="relative hidden h-[700px] justify-center overflow-hidden rounded-t-full pt-14 lg:flex">
                        <img src="/Aboutme/Mancha.png" alt="" className="absolute inset-0 -z-0 h-full w-full" />
                        <img src="/Aboutme/sinahi.png" alt="Sinahi Bermejo" className="relative z-10 h-full object-contain object-bottom" loading="lazy" />
                    </div>
                </div>

                <div className="px-6 sm:px-10 lg:px-0 lg:pt-0">
                    <div className="mb-5 flex sm:hidden items-center justify-center gap-3 lg:flex">
                        <EtiquetaSobreMi />
                    </div>

                    <div className="flex flex-col text-center font-serif text-[44px] leading-[1.05] text-[#171313] md:hidden sm:text-[54px] lg:flex lg:flex-col lg:text-left lg:text-[60px]">
                        <div className="flex items-center justify-center gap-3">
                            <TituloSobreMi />
                        </div>
                    </div>

                    <p className="mx-auto mt-6 max-w-[700px] text-center text-[15px] leading-7 text-[#555050] lg:mx-0 lg:text-left">
                        Hola, soy Sinahi Bermejo, especialista en pestañas, cejas y micropigmentación. Mi misión es ayudarte a sentirte segura, hermosa y radiante todos los días, resaltando tu belleza natural con técnicas modernas y personalizadas para ti.
                    </p>

                    <div className="my-9 flex items-center gap-4">
                        <div className="h-px flex-1 bg-[#efcbd2]" />
                        <Heart size={14} fill="currentColor" className="shrink-0 text-[#df93a3]" />
                        <div className="h-px flex-1 bg-[#efcbd2]" />
                    </div>

                    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {beneficios.map(({ titulo, texto, Icono }) => (
                            <article key={titulo} className="flex items-center gap-5 sm:items-start lg:block lg:text-center">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#fdf0f3] lg:mx-auto lg:mb-4 lg:h-auto lg:w-auto lg:bg-transparent">
                                    <Icono size={36} strokeWidth={1.2} className="text-[#df93a3]" />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase leading-5 tracking-wide text-[#282222] lg:text-xs">{titulo}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#696060] lg:mt-3 lg:text-xs lg:leading-5">{texto}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 flex items-start gap-4 rounded-3xl bg-[#fdf3f5] p-6 sm:p-7">
                        <Quote size={34} strokeWidth={1.3} className="shrink-0 text-[#e3a2af]" />

                        <div className="w-full">
                            <p className="text-sm leading-6 text-[#5a5151] sm:text-base">
                                Más que un servicio, es una experiencia hecha para ti. Te acompaño en cada paso.
                            </p>

                            <p className="mt-4 text-right font-serif text-xl italic text-[#2d2626]">
                                Sinahi Bermejo
                                <Heart size={11} fill="currentColor" className="ml-2 inline text-[#d99cab]" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 -z-0 w-full">
                <img src="/Aboutme/onda2.svg" alt="" className="w-full" />
            </div>
        </section>
    );
};