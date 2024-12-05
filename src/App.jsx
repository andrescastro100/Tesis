import Navbar from "./componentes/Navbar"
import Slider from "./componentes/Slider"
import Card from "./componentes/Card"
import Footer from "./componentes/Footer";
import { cardArray } from "./utils/constants";

function App() {

  //dsp hacer el enrutamiento
  return (
    <>
      <Navbar/>
      <Slider/>
      <section className="cards-container">
      {cardArray.map(element => <Card key={element.title} item={element}/>)}

      </section>
      <Footer/>
    </>
  )
}

export default App
