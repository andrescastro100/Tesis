import Map from "../../componentes/Map";
import { Title } from "../../componentes/Title";
import {
  TelephoneFill,
  EnvelopeFill,
  GeoAltFill,
} from "react-bootstrap-icons";
import "./index.css";

export default function Contact() {
  return (
    <section className="container">
      <Title title="Contacto" />
      <section className="contact-container">
        <article className="icons">
          <TelephoneFill />
          <p>381-5555555</p>
        </article>
        <article className="icons">
          <EnvelopeFill />
          <p>estudiocontablediegocastro@gmail.com</p>
        </article>
        <article className="icons">
          <GeoAltFill />
          <p>Bolivia 553, San Miguel de Tucuman - Tucuman</p>
        </article>
      </section>
      <Map />
    </section>
  );
}
