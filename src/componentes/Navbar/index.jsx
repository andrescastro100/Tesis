import "./index.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/api/usuarios/logout",
        {},
        { withCredentials: true }
      );

      logout();
      console.log("Usuario deslogueado correctamente");
    } catch (error) {
      console.error("Error al desloguear", error);
    }
  };
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link to="/">INICIO</Link>
        <Link to="/nuestro-servicio">NUESTRO SERVICIO</Link>
        <Link to="/consultas">CONSULTAS</Link>
        <Link to="/contacto">CONTACTO</Link>
        {true && (
          <div>
            <button className="logout-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
