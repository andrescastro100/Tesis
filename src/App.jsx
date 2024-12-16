import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { Route, useNavigate } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/Home";
import NuestroServicio from "./pages/NuestroServicio";
import Login from "./pages/Login";
import Contacto from "./pages/Contacto";
import { Consultas } from "./pages/Consultas";
import { useState } from "react";
import { AuthContext } from "./context";
import ProtectedRoute from "./componentes/ProtectedRoute";
import  ConsultaTable  from "./componentes/ConsultaTable";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(Boolean(token));
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    navigate("/dashboard")
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/")
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuestro-servicio" element={<NuestroServicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/consultas" element={<Consultas />} />
        

        <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<ConsultaTable />} />
        </Route>
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}
