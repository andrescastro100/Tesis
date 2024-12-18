import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { TrashFill } from "react-bootstrap-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de toast

const ConsultaTable = () => {
  const [consultas, setConsultas] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/consulta");
        setConsultas(response.data);
        console.log("Datos recibidos:", response.data);
        setError(false);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError(true);
      }
    };

    fetchConsultas();
  }, []);

  const toggleRespondido = async (id, currentStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/consulta/${id}`,
        { respondido: !currentStatus }
      );

      if (response.status === 200) {
        setConsultas((prevConsultas) =>
          prevConsultas.map((consulta) =>
            consulta._id === id
              ? { ...consulta, respondido: !currentStatus }
              : consulta
          )
        );
        toast.success('Estado de la consulta actualizado.');
      }
    } catch (err) {
      console.error("Error al actualizar el estado de respondido:", err);
      toast.error('No se pudo actualizar el estado de la consulta.');
    }
  };

  const deleteConsulta = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/consulta/${id}`);

      if (response.status === 200) {
        setConsultas((prevConsultas) =>
          prevConsultas.filter((consulta) => consulta._id !== id)
        );
        toast.success("Consulta eliminada correctamente.");
      }
    } catch (err) {
      console.error("Error al eliminar la consulta:", err);
      toast.error("No se pudo eliminar la consulta.");
    }
  };

  return (
    <div className="consulta-table-container">
      <h2 className="consulta-table-title">Información de consultas</h2>
      {consultas.length === 0 ? (
        <div className="no-consultas">
          No hay información sobre consultas para mostrar
        </div>
      ) : (
        <div className="table-responsive">
          <table className="consulta-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Compañía</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Consulta</th>
                <th>Respondido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((consulta, index) => (
                <tr key={index}>
                  <td data-label="Nombre">{consulta.nombre}</td>
                  <td data-label="Apellido">{consulta.apellido}</td>
                  <td data-label="Compañía">{consulta.compania || "N/A"}</td>
                  <td data-label="Teléfono">{consulta.telefono}</td>
                  <td data-label="Email">{consulta.email}</td>
                  <td data-label="Consulta">{consulta.consulta || "Sin consulta"}</td>
                  <td data-label="Respondido">
                    <span
                      className={`status ${
                        consulta.respondido ? "responded" : "not-responded"
                      }`}
                      onClick={() => toggleRespondido(consulta._id, consulta.respondido)}
                      style={{ cursor: "pointer" }}
                    >
                      {consulta.respondido ? "Sí" : "No"}
                    </span>
                  </td>
                  <td data-label="Acciones">
                    <TrashFill
                      className="delete-icon"
                      onClick={() => deleteConsulta(consulta._id)}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ConsultaTable;
