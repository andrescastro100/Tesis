import './index.css';
import bannerImage from '../../assets/banner.jpeg';

function MonotributoBanner() {
  return (
    <section className="monotributo-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="overlay">
        <div className="container">
            <h1>MONOTRIBUTO</h1>
            <div className="underline"></div>
        </div>
      </div>
    </section>
  );
}

export default MonotributoBanner;
