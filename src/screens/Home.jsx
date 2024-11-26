import React from "react";
import { useNavigate } from "react-router-dom";
import "../screens/Style.css"; 
import MascotasImage from "../image/sembra.jpg"

const Home = () => {
  const navigate = useNavigate();

  const handleVerMascotas = () => {
    navigate("/mascotas");
  };

  return (
    <div className="home-container">
      <div className="center-content">
        {}
        <img
          src={MascotasImage} 
          alt="Imagen de Mascotas"
          className="mascotas-image"
        />
        {/* Botón */}
        <button className="ver-mascotas-btn" onClick={handleVerMascotas}>
          Ver Mascotas en Adopcion
        </button>
      </div>
    </div>
  );
};

export default Home;
