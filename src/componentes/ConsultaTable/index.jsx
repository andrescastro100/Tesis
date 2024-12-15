import './index.css';

const ConsultaTable = ({ consultas = [] }) => {

  return (
    <div className="consulta-table-container">
      <h2 className="consulta-table-title">Información de consultas</h2>
      {consultas.length === 0 ? (
        <div className="no-consultas">No hay información sobre consultas para mostrar</div>
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
              </tr>
            </thead>
            <tbody>
              {consultas.map((consulta, index) => (
                <tr key={index}>
                  <td data-label="Nombre">{consulta.nombre}</td>
                  <td data-label="Apellido">{consulta.apellido}</td>
                  <td data-label="Compañía">{consulta.compania || 'N/A'}</td>
                  <td data-label="Teléfono">{consulta.telefono}</td>
                  <td data-label="Email">{consulta.email}</td>
                  <td data-label="Consulta">{consulta.consulta || 'Sin consulta'}</td>
                  <td data-label="Respondido">
                    <span className={`status ${consulta.respondido ? 'responded' : 'not-responded'}`}>
                      {consulta.respondido ? 'Sí' : 'No'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ConsultaTable;
