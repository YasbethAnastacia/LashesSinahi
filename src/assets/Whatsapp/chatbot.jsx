import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const respuestas = {
    horario: "Nuestro horario es de lunes a sábado. Escríbenos por WhatsApp para consultar disponibilidad.",
    servicios:
        "Contamos con extensiones de pestañas, microblading y micropigmentación de cejas.",
    ubicacion:
        "Puedes consultar nuestra ubicación en la sección de contacto.",
    cita: "Puedes agendar tu cita directamente desde el botón de WhatsApp.",
};

export const Chatbot = () => {
    const [abierto, setAbierto] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([
        {
            autor: "bot",
            texto: "¡Hola! 👋 ¿En qué puedo ayudarte?",
        },
    ]);

    const enviarMensaje = () => {
        if (!mensaje.trim()) return;

        const textoUsuario = mensaje.toLowerCase();

        let respuesta =
            "No entendí muy bien tu pregunta. Puedes escribir: horario, servicios, ubicación o cita.";

        if (textoUsuario.includes("horario")) {
            respuesta = respuestas.horario;
        } else if (
            textoUsuario.includes("servicio") ||
            textoUsuario.includes("pestaña") ||
            textoUsuario.includes("ceja")
        ) {
            respuesta = respuestas.servicios;
        } else if (
            textoUsuario.includes("ubicación") ||
            textoUsuario.includes("ubicacion") ||
            textoUsuario.includes("donde")
        ) {
            respuesta = respuestas.ubicacion;
        } else if (
            textoUsuario.includes("cita") ||
            textoUsuario.includes("agendar")
        ) {
            respuesta = respuestas.cita;
        }

        setMensajes((anteriores) => [
            ...anteriores,
            {
                autor: "usuario",
                texto: mensaje,
            },
            {
                autor: "bot",
                texto: respuesta,
            },
        ]);

        setMensaje("");
    };

    return (
        <>
            {/* Botón flotante */}
            <button
                onClick={() => setAbierto(!abierto)}
                className="fixed bottom-6 left-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#d98d9c] text-white shadow-lg transition hover:scale-110"
                aria-label="Abrir chatbot"
            >
                {abierto ? <X size={27} /> : <MessageCircle size={27} />}
            </button>

            {/* Ventana del chatbot */}
            {abierto && (
                <section className="fixed bottom-24 left-6 z-[100] flex h-[430px] w-[330px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
                    {/* Encabezado */}
                    <div className="bg-[#d98d9c] px-5 py-4 text-white">
                        <h2 className="font-semibold">Asistente virtual</h2>
                        <p className="text-sm text-white/80">
                            Sinahi Bermejo Lashes & Brows
                        </p>
                    </div>

                    {/* Mensajes */}
                    <div className="flex-1 space-y-3 overflow-y-auto bg-[#fffafa] p-4">
                        {mensajes.map((elemento, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    elemento.autor === "usuario"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <p
                                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                                        elemento.autor === "usuario"
                                            ? "bg-[#d98d9c] text-white"
                                            : "bg-white text-gray-700 shadow"
                                    }`}
                                >
                                    {elemento.texto}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Campo de texto */}
                    <div className="flex items-center gap-2 border-t bg-white p-3">
                        <input
                            type="text"
                            value={mensaje}
                            onChange={(evento) =>
                                setMensaje(evento.target.value)
                            }
                            onKeyDown={(evento) => {
                                if (evento.key === "Enter") {
                                    enviarMensaje();
                                }
                            }}
                            placeholder="Escribe tu mensaje..."
                            className="min-w-0 flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#d98d9c]"
                        />

                        <button
                            onClick={enviarMensaje}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d98d9c] text-white"
                            aria-label="Enviar mensaje"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </section>
            )}
        </>
    );
};