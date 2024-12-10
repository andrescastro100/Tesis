import Banner from "../../componentes/Banner";
import Parragraph from "../../componentes/Parragraph";
import Contable from "../../assets/contable.jpg";
import "./index.css";

export default function Home() {
  return (
    <>
      <Banner title="Estudio Contable Diego Castro" />
      <Parragraph title="En Estudio Contable Diego Castro nos dedicamos de forma exclusiva al asesoramiento y seguimiento de consorcios, empresas y monotributistas, trabajando de manera personalizada y metódica a fin de que nuestros clientes se sientan asegurados y a gusto con nuestro trabajo." />
      <div className="container-image">
        <img height={300} src={Contable} />
      </div>
    </>
  );
}
