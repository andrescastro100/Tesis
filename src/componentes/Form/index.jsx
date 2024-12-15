import './index.css';
import axios from 'axios';

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); 

    try {
      const response = await axios.post('http://localhost:4000/api/consulta', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
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
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" required />
        </div>

        <div className="form-group">
          <label htmlFor="compania">Compañía</label>
          <input type="text" id="compania" name="compania" />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="consulta">Escriba su consulta</label>
          <textarea id="consulta" name="consulta" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Form;