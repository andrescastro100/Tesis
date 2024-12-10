import "./index.css";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-column">
        <article className="icons-container">
          <Instagram size={35} />
          <Whatsapp size={35} />
          <Facebook size={35} />
        </article>
        <p>&copy; Todos los derechos reservados</p>
      </section>
      <section className="footer-column">
        <img src={logo} alt="" className="footer-logo" />
      </section>
      <section className="footer-column">
        <p>381-5555555</p>
        <p>estudiocontablediegocastro@gmail.com</p>
        <p>Bolivia 553, San Miguel de Tucuman - Tucuman</p>
      </section>
    </footer>
  );
};

export default Footer;
