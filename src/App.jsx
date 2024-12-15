import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/Home";
import NuestroServicio from "./pages/NuestroServicio";
import Login from "./pages/Login";
import Contacto from "./pages/Contacto";
import { Consultas } from "./pages/Consultas";
import { useState } from "react";
import { AuthContext } from "./context";
import ProtectedRoute from "./componentes/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(Boolean(token));
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
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
        <Route path="/dashboard" element={<Dashboard />} />

        <Route element={<ProtectedRoute />}>
        </Route>
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}
