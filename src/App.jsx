import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./assets/Navbar/Navbar";
import { Hero } from "./assets/Hero/Hero";
import { Aboutme } from "./assets/Aboutme/Aboutme2";
import { Servicios } from "./assets/Servicios/Servicios";

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

            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/servicios" element={<Servicios />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;