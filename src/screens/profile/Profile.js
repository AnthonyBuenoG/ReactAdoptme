import React, { useState } from 'react';
import './Profile.css';
import Usuario from '../../image/usuario.jpg';

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro

  const user = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    descripcion: 'Desarrollador de software apasionado por la tecnología y la innovación.',
    imagen: Usuario, // Reemplaza con una URL de imagen real
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Alterna entre claro y oscuro
  };

  return (
    <div className={`profile-container ${darkMode ? 'dark' : ''}`}>
      <div className="dark-mode-toggle">
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>
      <div className="profile-card">
        <img src={user.imagen} alt="Imagen de perfil" className="profile-image" />
        <h2 className="profile-name">{user.nombre}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-description">{user.descripcion}</p>
        <div className="profile-actions">
          <button className="profile-btn edit-btn">Editar Perfil</button>
          <button className="profile-btn settings-btn">Configuración</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
