import ConsultaTable from "../../componentes/ConsultaTable";

export const Dashboard = () => {

    const consultas = [
        {
          nombre: 'Juan',
          apellido: 'Pérez',
          compania: 'Acme Inc.',
          telefono: 5551234567,
          email: 'juan@example.com',
          consulta: 'Nacido en Galilea, en la región de Cana, San Judas Tadeo era un pariente cercano de Jesús, a menudo referido como “hermano” de Jesús en el sentido de ser un primo según la costumbre judía. Después de la muerte y resurrección de Jesús, San Judas Tadeo viajó extensamente para predicar el Evangelio',
          respondido: false
        },{
            nombre: "Stefano",
            apellido: "Ferrari",
            compania: "Stefasito",
            telefono: 3816685254,
            email: "stefanoferrari.dev@gmail.com",
            consulta: "Me gustaria hacerme monotributista, uds hacen ese tramite?",
            respondido: true
        }
      ];

    return(
        <>
        <ConsultaTable consultas={consultas}/>
        </>
    );
};
