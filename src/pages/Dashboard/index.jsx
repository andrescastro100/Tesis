import { useState, useEffect } from "react";
import axios from "axios";
import ConsultaTable from "../../componentes/ConsultaTable";
import "./index.css";

export const Dashboard = () => {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get("https://api.example.com/consultas");
        setConsultas(response?.data);
      } catch (err) {
        setError("Ocurrió un error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchConsultas();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Cargando...</p>
      </div>
    );
  }
 
  if (error) {
    return (
      <div className="error-container">
        <div className="error-box">
          <h2 className="error-title">Error</h2>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ConsultaTable consultas={consultas} />
    </>
  );
};
