import './index.css';
import axios from 'axios';

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); 

    try {
      const response = await axios.post('http://localhost:5000/endpoint', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Formulario enviado correctamente!');
      } else {
        alert('Hubo un error al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      alert('Error en la conexión con el servidor.');
    }
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
