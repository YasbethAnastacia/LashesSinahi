import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./assets/Navbar/Navbar";
import { Hero } from "./assets/Hero/Hero";
import { Aboutme } from "./assets/Aboutme/Aboutme2";
import { Servicios } from "./assets/Servicios/Servicios";
import { Galeria } from "./assets/Galeria/Galeria";
import { WhatsappButton } from "./assets/Whatsapp/whatsapp";
import {Chatbot} from "./assets/Whatsapp/chatbot"
import { Contacto } from "./assets/Contacto/Contacto";
import { Footer } from "./assets/Footer/Footer";



function Inicio() {
    return (
        <>
            <Hero />
            <Aboutme />
            
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <WhatsappButton/>
            <Chatbot/>

            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/galeria" element={<Galeria />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;