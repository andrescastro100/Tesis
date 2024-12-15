import Banner from "../../componentes/Banner";
import Parragraph from "../../componentes/Parragraph";
import Contable from "../../assets/contable.jpg";
import "./index.css";
import { valoresTextArray } from "../../utils/constants";
import Text from "../../componentes/Text";

export default function Home() {
  return (
    <>
      <Banner title="Estudio Contable Diego Castro" />
      <Parragraph title="En Estudio Contable Diego Castro nos dedicamos de forma exclusiva al asesoramiento y seguimiento de consorcios, empresas y monotributistas, trabajando de manera personalizada y metódica a fin de que nuestros clientes se sientan asegurados y a gusto con nuestro trabajo." />
      <div className="container-image">
        <img height={400} src={Contable} />
      </div>

        <section className="valores-container">
          <h1>Nuestros valores</h1>
          {valoresTextArray.map((valor, index) => (
            <Text key={index} title={valor.title} text={valor.text} />
          ))}
        </section>
    </>
  );
}
