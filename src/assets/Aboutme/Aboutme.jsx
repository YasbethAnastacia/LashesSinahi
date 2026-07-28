import { Award, Leaf, Heart, Sparkles, Quote } from "lucide-react";

const beneficios = [
    { titulo: "Certificada y capacitada", texto: "Formación constante con las mejores técnicas del momento.", Icono: Award },
    { titulo: "Productos de calidad", texto: "Utilizo productos premium, seguros y de alta calidad.", Icono: Leaf },
    { titulo: "Atención personalizada", texto: "Cada diseño es único y adaptado a tus rasgos y estilo.", Icono: Heart },
    { titulo: "Resultados naturales", texto: "Resultados elegantes, sutiles y duraderos.", Icono: Sparkles },
];

export const Aboutme = () => {
    return (
        <section id="sobre-mi" className="overflow-hidden bg-[#fffafa] px-16 pb-15 pt-20 entrada-pagina ">
            <div className="mx-auto grid max-w-[1400px] grid-cols-[0.85fr_1.15fr] items-center gap-16 ">
                <div className="mx-auto w-full max-w-[400px] ">
                    
                            <div className="flex h-[700px]  justify-center overflow-hidden rounded-t-full bg-[#f6dce2] pt-15">
                                <img src="/Aboutme/jenni.png" alt="Sinahi realizando un servicio de belleza" className="h-full object-cover" loading="lazy" />
                            </div>
                        
                </div>

                <div>
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-14 bg-[#e9b6c0]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d98d9c]">Sobre mí</span>
                        <Heart size={13} fill="currentColor" className="text-[#d98d9c]" />
                        <div className="h-px w-14 bg-[#e9b6c0]" />
                    </div>

                    <h2 className="font-serif text-[60px] leading-tight text-[#171313]">
                        Pasión por realzar
                        <span className="block italic text-[#df93a3]">tu belleza natural.</span>
                    </h2>

                    <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#555050]">
                        Hola, soy Sinahi Bermejo, especialista en pestañas, cejas y micropigmentación. Mi misión es ayudarte a sentirte segura, hermosa y radiante todos los días, resaltando tu belleza natural con técnicas modernas y personalizadas para ti.
                    </p>

                    <div className="my-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-[#efcbd2]" />
                        <Heart size={14} fill="currentColor" className="text-[#df93a3]" />
                        <div className="h-px flex-1 bg-[#efcbd2]" />
                    </div>

                    <div className="grid grid-cols-4 gap-8">
                        {beneficios.map(({ titulo, texto, Icono }) => (
                            <article key={titulo} className="text-center">
                                <Icono size={36} strokeWidth={1.2} className="mx-auto mb-4 text-[#df93a3]" />
                                <h3 className="text-xs font-bold uppercase leading-5 tracking-wide text-[#282222]">{titulo}</h3>
                                <p className="mt-3 text-xs leading-5 text-[#696060]">{texto}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 flex items-start gap-5 rounded-2xl bg-[#fdf3f5] p-7">
                        <Quote size={34} strokeWidth={1.3} className="shrink-0 text-[#e3a2af]" />
                        <div className="w-full">
                            <p className="text-sm leading-6 text-[#5a5151]">Más que un servicio, es una experiencia hecha para ti. Te acompaño en cada paso.</p>
                            <p className="mt-3 text-right font-serif text-xl italic text-[#2d2626]">
                                Sinahi Bermejo
                                <Heart size={11} fill="currentColor" className="ml-2 inline text-[#d99cab]" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};