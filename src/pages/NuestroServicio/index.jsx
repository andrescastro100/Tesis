import Card from "../../componentes/Card";
import { cardArray } from "../../utils/constants";

export default function NuestroServicio() {
  return (
    <>
      <section className="cards-container">
        {cardArray.map((element) => (
          <Card key={element.title} item={element} />
        ))}
      </section>
    </>
  );
}