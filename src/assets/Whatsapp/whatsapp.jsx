import { FaWhatsapp } from "react-icons/fa"; /**npm install react-icons */

export const WhatsappButton = () => {
    const telefono = "3131360725";
    const mensaje = "Hola, quiero información sobre sus servicios.";

    return (
        <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110"
        >
            <FaWhatsapp size={34} />
        </a>
    );
};