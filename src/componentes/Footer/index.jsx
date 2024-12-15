import "./index.css";
import {
  EnvelopeFill,
  Facebook,
  GeoAltFill,
  Instagram,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-column">
        <article className="icons-container">
          <a
            className="links"
            target="_blank"
            href="https://www.instagram.com/diegocastro.contable?igsh=MTZ3amJ5ZzV1dmV6eQ%3D%3D&utm_source=qr"
          >
            <Instagram size={35} />
          </a>
          <a className="links" target="_blank" href="https://wa.me/3816704183">
            <Whatsapp size={35} />
          </a>

          <a
            target="_blank"
            className="links"
            href="https://www.facebook.com/profile.php?id=61570529461501"
          >
            <Facebook size={35} />
          </a>
        </article>
        <p>&copy; Todos los derechos reservados</p>
      </section>
      <section className="footer-column">
        <img src={logo} alt="" className="footer-logo" />
      </section>
      <section className="footer-column">
        <div className="footer-icon">
          <TelephoneFill />
          <p>381-5555555</p>
        </div>
        <div className="footer-icon">
          <EnvelopeFill />
          <p>estudiocontablediegocastro@gmail.com</p>
        </div>
        <div className="footer-icon">
          <GeoAltFill />
          <p>Bolivia 553, San Miguel de Tucuman - Tucuman</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
