import "./index.css";

const Text = ({ title, text }) => {
  return (
    <>
      <h3 className="valores-title">{title}</h3>
      <p className="valores-text">{text}</p>
    </>
  );
};

export default Text;
