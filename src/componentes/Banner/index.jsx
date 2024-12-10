import './index.css';
import bannerImage from '../../assets/banner.jpeg';

export default function Banner({title}) {
  return (
    <section className="monotributo-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="overlay">
        <div className="container">
            <h1>{title}</h1>
            <div className="underline"></div>
        </div>
      </div>
    </section>
  );
}