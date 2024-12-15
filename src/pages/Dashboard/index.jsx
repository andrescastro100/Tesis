import { useState, useEffect } from "react";
import axios from "axios";
import ConsultaTable from "../../componentes/ConsultaTable";

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

  //if (loading) return <p>Cargando...</p>;
  //if (error) return <p>{error}</p>;

  return (
    <>
      <ConsultaTable consultas={consultas} />
    </>
  );
};
