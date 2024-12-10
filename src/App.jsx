import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/Home";
import NuestroServicio from "./pages/NuestroServicio";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuestro-servicio" element={<NuestroServicio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
