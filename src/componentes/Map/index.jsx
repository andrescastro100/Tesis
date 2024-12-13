const Map = () => {
  const url = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222.55556208780817!2d-65.20111281739047!3d-26.811662992147777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1734044190680!5m2!1ses!2sar"

  return (
    <div style={{ width: "70%", height: "455px", margin: "auto auto 30px auto" }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src={url}
        allowFullScreen
        title="Mapa"
      ></iframe>
    </div>
  );
};

export default Map;