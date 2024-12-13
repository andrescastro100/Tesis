import './index.css';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado!');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Consultas</h2>
        <div className="form-group">
          <label htmlFor="firstName">Nombre</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Apellido</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Nombre de la compañía</label>
          <input type="text" id="companyName" name="companyName" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Escriba su consulta</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Form;