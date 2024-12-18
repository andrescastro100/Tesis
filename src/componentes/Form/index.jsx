import "./index.css";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        "http://localhost:4000/api/consulta",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Formulario enviado correctamente!");
        e.target.reset();
      } else {
        toast.error("Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      toast.error("Error en la conexión con el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Consultas</h2>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="compania">Compañía</label>
          <input
            type="text"
            id="compania"
            name="compania"
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="consulta">Escriba su consulta</label>
          <textarea
            id="consulta"
            name="consulta"
            rows="5"
            required
            disabled={isLoading}
          ></textarea>
        </div>

        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? <span className="spinner"></span> : "Enviar"}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Form;
