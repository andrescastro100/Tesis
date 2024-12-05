import "./index.css";

export default function Card({ item }) {
  return (
    <article className="card">
      <div className="card-header">
        <item.icon className="card-icon"/>
        <h2>{item.title}</h2>
        <div className="underline"></div>

      </div>
      <div className="card-footer">
      {item.description.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      </div>
    </article>
  );
}
