import React from 'react';
import './Maltrato.css';
import perroTriste from '../../image/perrostristes.jpg'; 

const Maltrato = () => {
  const fixedPhoneNumber = "921-172-1978"; 

  return (
    <div className="maltrato-container">
      <h1>Reflexionemos sobre el maltrato animal</h1>
      <p>
        Los animales son seres vivos que sienten y merecen nuestro respeto. Cada acto de
        crueldad hacia ellos es un reflejo de nuestra falta de humanidad. Es momento de 
        tomar conciencia y actuar para proteger a quienes no pueden defenderse por sí mismos.
      </p>
      <div className="image-container">
        <img src={perroTriste} alt="Perro triste" className="sad-dog-image" />
      </div>
      <div className="report-section">
        <p>Si conoces un caso de maltrato animal, no te quedes callado.</p>
        <p>Reporta llamando al:</p>
        <p><strong>{fixedPhoneNumber}</strong> (Linea fija)</p>
      </div>
    </div>
  );
};

export default Maltrato;
