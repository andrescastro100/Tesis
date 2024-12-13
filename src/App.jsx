import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/Home";
import NuestroServicio from "./pages/NuestroServicio";
import Login from "./pages/Login";
import Contacto from "./pages/Contacto";
import { Consultas } from "./pages/Consultas";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuestro-servicio" element={<NuestroServicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/consultas" element={<Consultas/>} />
      </Routes>
      <Footer />
    </>
  );
}
