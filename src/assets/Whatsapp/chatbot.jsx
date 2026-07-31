import { useEffect, useRef, useState } from "react";
import {
    CalendarDays,
    Clock3,
    CreditCard,
    MapPin,
    MessageCircle,
    RefreshCcw,
    Send,
    Sparkles,
    X,
} from "lucide-react";

const opciones = [
    {
        id: "horario",
        texto: "Horario",
        Icono: Clock3,
    },
    {
        id: "servicios",
        texto: "Servicios",
        Icono: Sparkles,
    },
    {
        id: "ubicacion",
        texto: "Ubicación",
        Icono: MapPin,
    },
    {
        id: "cita",
        texto: "Agendar cita",
        Icono: CalendarDays,
    },
    {
        id: "pagos",
        texto: "Métodos de pago",
        Icono: CreditCard,
    },
    {
        id: "retoques",
        texto: "Retoques",
        Icono: RefreshCcw,
    },
];

const respuestas = {
    horario:
        "Nuestro horario es de lunes a viernes, de 10:00 a. m. a 6:00 p. m. Trabajamos únicamente con cita previa. 🌸",
    servicios:
        "Contamos con extensiones de pestañas, microblading y micropigmentación de cejas. Podemos ayudarte a elegir el servicio ideal para ti. ✨",
    ubicacion:
        "Nos encontramos en Armería, Colima. Al agendar tu cita te compartimos la ubicación exacta. 📍",
    cita:
        "Será un gusto atenderte. 💕 Puedes agendar tu cita directamente por WhatsApp y consultar los horarios disponibles.",
    pagos:
        "Aceptamos pagos en efectivo y transferencia. No es necesario realizar un anticipo para agendar. 💳",
    retoques:
        "Sí contamos con servicio de retoques. Escríbenos por WhatsApp para revisar tu caso y recomendarte la mejor opción. ✨",
    saludo:
        "¡Hola! Qué gusto saludarte. 💕 Puedes seleccionar una opción o escribir tu pregunta.",
    desconocida:
        "No comprendí completamente tu pregunta. Puedes seleccionar una de las opciones o escribir: horario, servicios, ubicación, cita, pagos o retoques. 🌸",
};

export const Chatbot = () => {
    const [abierto, setAbierto] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const mensajesRef = useRef(null);

    const [mensajes, setMensajes] = useState([
        {
            autor: "bot",
            texto: respuestas.saludo,
            mostrarOpciones: true,
        },
    ]);

    useEffect(() => {
        if (mensajesRef.current) {
            mensajesRef.current.scrollTop =
                mensajesRef.current.scrollHeight;
        }
    }, [mensajes, abierto]);

    const obtenerRespuesta = (texto) => {
        const textoUsuario = texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        if (
            textoUsuario.includes("hola") ||
            textoUsuario.includes("buen dia") ||
            textoUsuario.includes("buenas")
        ) {
            return respuestas.saludo;
        }

        if (
            textoUsuario.includes("horario") ||
            textoUsuario.includes("hora") ||
            textoUsuario.includes("abren") ||
            textoUsuario.includes("cierran")
        ) {
            return respuestas.horario;
        }

        if (
            textoUsuario.includes("servicio") ||
            textoUsuario.includes("pestana") ||
            textoUsuario.includes("ceja") ||
            textoUsuario.includes("microblading") ||
            textoUsuario.includes("micropigmentacion")
        ) {
            return respuestas.servicios;
        }

        if (
            textoUsuario.includes("ubicacion") ||
            textoUsuario.includes("donde") ||
            textoUsuario.includes("direccion") ||
            textoUsuario.includes("armeria")
        ) {
            return respuestas.ubicacion;
        }

        if (
            textoUsuario.includes("cita") ||
            textoUsuario.includes("agendar") ||
            textoUsuario.includes("reservar") ||
            textoUsuario.includes("disponibilidad")
        ) {
            return respuestas.cita;
        }

        if (
            textoUsuario.includes("pago") ||
            textoUsuario.includes("efectivo") ||
            textoUsuario.includes("transferencia") ||
            textoUsuario.includes("anticipo")
        ) {
            return respuestas.pagos;
        }

        if (
            textoUsuario.includes("retoque") ||
            textoUsuario.includes("retocar")
        ) {
            return respuestas.retoques;
        }

        return respuestas.desconocida;
    };

    const agregarConversacion = (
        textoUsuario,
        respuestaBot,
        mostrarWhatsApp = false,
    ) => {
        setMensajes((anteriores) => [
            ...anteriores,
            {
                autor: "usuario",
                texto: textoUsuario,
            },
            {
                autor: "bot",
                texto: respuestaBot,
                mostrarWhatsApp,
                mostrarOpciones: true,
            },
        ]);
    };

    const enviarMensaje = () => {
        const textoLimpio = mensaje.trim();

        if (!textoLimpio) return;

        const respuesta = obtenerRespuesta(textoLimpio);

        const mostrarWhatsApp =
            respuesta === respuestas.cita ||
            respuesta === respuestas.retoques;

        agregarConversacion(
            textoLimpio,
            respuesta,
            mostrarWhatsApp,
        );

        setMensaje("");
    };

    const seleccionarOpcion = (opcion) => {
        const respuesta = respuestas[opcion.id];

        agregarConversacion(
            opcion.texto,
            respuesta,
            opcion.id === "cita" || opcion.id === "retoques",
        );
    };

    return (
        <>
            <button
                type="button"
                onClick={() => setAbierto((estado) => !estado)}
                className="fixed bottom-6 left-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#d98d9c] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#cf7f91]"
                aria-label={
                    abierto
                        ? "Cerrar asistente virtual"
                        : "Abrir asistente virtual"
                }
            >
                {abierto ? (
                    <X size={27} />
                ) : (
                    <MessageCircle size={27} />
                )}
            </button>

            {abierto && (
                <section className="fixed bottom-24 left-4 z-[100] flex h-[520px] w-[calc(100%-2rem)] max-w-[360px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl sm:left-6 sm:w-[360px]">
                    <div className="bg-[#d98d9c] px-5 py-4 text-white">
                        <h2 className="font-semibold">
                            Asistente virtual
                        </h2>

                        <p className="text-sm text-white/85">
                            Sinahi Bermejo Lashes & Brows
                        </p>
                    </div>

                    <div
                        ref={mensajesRef}
                        className="flex-1 space-y-4 overflow-y-auto bg-[#fffafa] p-4"
                    >
                        {mensajes.map((elemento, index) => (
                            <div key={`${elemento.autor}-${index}`}>
                                <div
                                    className={`flex ${
                                        elemento.autor === "usuario"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                                            elemento.autor === "usuario"
                                                ? "rounded-br-md bg-[#d98d9c] text-white"
                                                : "rounded-bl-md bg-white text-gray-700 shadow-sm"
                                        }`}
                                    >
                                        <p>{elemento.texto}</p>

                                        {elemento.mostrarWhatsApp && (
                                            <a
                                                href="https://wa.me/523131360725?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#d98d9c] px-4 py-2 font-semibold text-white transition hover:bg-[#cf7f91]"
                                            >
                                                <MessageCircle
                                                    size={17}
                                                />
                                                Abrir WhatsApp
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {elemento.autor === "bot" &&
                                    elemento.mostrarOpciones && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {opciones.map(
                                                ({
                                                    id,
                                                    texto,
                                                    Icono,
                                                }) => (
                                                    <button
                                                        key={id}
                                                        type="button"
                                                        onClick={() =>
                                                            seleccionarOpcion(
                                                                {
                                                                    id,
                                                                    texto,
                                                                },
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-1.5 rounded-full border border-[#ecc8cf] bg-white px-3 py-2 text-xs font-medium text-[#b96f80] transition hover:border-[#d98d9c] hover:bg-[#fff1f4]"
                                                    >
                                                        <Icono
                                                            size={14}
                                                        />
                                                        {texto}
                                                    </button>
                                                ),
                                            )}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 border-t border-[#f1d7dd] bg-white p-3">
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
                            className="min-w-0 flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#d98d9c]"
                        />

                        <button
                            type="button"
                            onClick={enviarMensaje}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d98d9c] text-white transition hover:bg-[#cf7f91]"
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