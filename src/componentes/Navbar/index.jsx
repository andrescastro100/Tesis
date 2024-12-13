import "./index.css";
import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>

      <nav className="navbar">
        <a href="/">INICIO</a>
        <a href="/">VALORES</a>
        <a href="/nuestro-servicio">NUESTRO SERVICIO</a>
        <a href="/consultas">CONSULTAS</a>
        <a href="/contacto">CONTACTO</a>
      </nav>
    </header>
  );
};

export default Header;
