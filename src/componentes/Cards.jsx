import React from "react"
import { BsBuildingFill } from "react-icons/bs"
import { BsCalculator } from "react-icons/bs"
import { BsBuildingsFill } from "react-icons/bs"
import { FiBookOpen } from "react-icons/fi";
function Cards(){
    return(
        <div>
        <section>
            <div>
                <div className="card-icons">
                    <BsBuildingFill />
                </div>
                <div className="card-titulo">
                    <h2>ATENCION Y AUDITORIA A CONSORCIOS</h2>
                </div>
                <div className="card-text">
                    <p>Revisión detallada de la gestión administrativa, financiera y contable del consorcio. Nuestro objetivo principal es garantizar la transparencia en el manejo de los fondos comunes, verificar el cumplimiento de las normativas legales y optimizar la administración del inmueble.Esto incluye la auditoría de cuentas, análisis de gastos e ingresos, control de documentación, y la elaboración de informes claros y precisos para los propietarios y administradores, con el fin de mejorar la toma de decisiones y mantener la seguridad y comodidad del inmueble.</p>
                </div>
            </div>
            <div>
                <div className="card-icons">
                    <BsCalculator />
                </div>    
                <div className="card-titulo">
                    <h2>AUDITORIAS CONTABLES EN GENERAL</h2>
                </div>
                <div className="card-text">
                    <p>Revisión exhaustiva de los estados financieros y registros contables. Nuestro objetivo es verificar la exactitud de la información, asegurar el cumplimiento de normativas contables y detectar posibles errores. Este proceso incluye el análisis de riesgos financieros, la evaluación de la continuidad del negocio y la presentación de informes claros</p>
                </div>
            </div>
        </section>
        <section>
            <div>
                <div className="card-icons">
                    <BsBuildingsFill />
                </div>
                <div className="card-titulo">
                    <h2>INSCRIPCIONES PREVISIONALES & REGISTRO PUBLICO DE COMERCIO</h2>
                </div>
                <div className="card-text">
                    <p>Gestión de trámites para registrar formalmente empresas y asegurar su cumplimiento con las normativas vigentes. Abarcan el alta de empleadores y trabajadores en los sistemas de seguridad social, garantizando el acceso a beneficios previsionales.</p>
                </div>
            </div>
            <div>
                <div className="card-icons">
                    <FiBookOpen />
                </div>
                <div className="card-titulo">  
                    <h2>CONFECCION DE CONTRATOS LABORALES Y COMERCIALES</h2>
                </div>
                <div className="card-text"> 
                    <p>Redacción y revisión de acuerdos que regulan las relaciones laborales y comerciales.
                    Contratos laboraces: Creación de contratos de trabajo que cumplen con la normativa vigente, asegurando la claridad en las condiciones de empleo y los derechos de las partes.
                    Contratos comerciales: Abarca contratos como alquileres, comodatos y acuerdos comerciales.
                    </p>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Cards;