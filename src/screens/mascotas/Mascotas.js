import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlusCircle, faHome, faCog, faBell, faPaw, faHeadset, faDoorOpen, faQuestionCircle, faChartLine, faClipboard, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Mascotas.css';
import SembraImage from '../../image/sembra.jpg';
import SabanaImage from '../../image/sabana.jpg';
import MascotasImage from '../../image/mascotas.jpg';
import SalvajesImage from '../../image/salvajes.jpg';
import Perro01 from '../../image/perro1.jpg';
import Perro02 from '../../image/perro2.jpg';
import Perro03 from '../../image/perro3.jpg';
import Perro04 from '../../image/perro4.jpg';
import Perro05 from '../../image/perro5.jpg';
import Perro06 from '../../image/perro6.jpg';
import Perro07 from '../../image/perro7.jpg';
import Perro08 from '../../image/perro8.jpg';
import Perro09 from '../../image/perro9.jpg';
import Perro10 from '../../image/perro10.jpg';
import Perro11 from '../../image/perro11.jpg';
import Perro12 from '../../image/perro12.jpg';
import Perro13 from '../../image/perro13.jpg';
import Perro14 from '../../image/perro14.jpg';
import Perro15 from '../../image/perro15.jpg';
import Perro16 from '../../image/perro16.jpg';
import Perro17 from '../../image/perro17.jpg';
import Perro18 from '../../image/perro18.jpg';
import Perro19 from '../../image/perro19.jpg';
import Perro20 from '../../image/perro20.jpg';
import Perro21 from '../../image/perro21.jpg';
import Perro22 from '../../image/perro22.jpg';
import Perro23 from '../../image/perro23.jpg';
import Perro24 from '../../image/perro24.jpg';
import Perro25 from '../../image/perro25.jpg';
import Perro26 from '../../image/perro26.jpg';
import Perro27 from '../../image/perro27.jpg';
import Perro28 from '../../image/perro28.jpg';
import Perro29 from '../../image/perro29.jpg';
import Perro30 from '../../image/perro30.jpg';
import Perro31 from '../../image/perro31.jpg';
import Perro33 from '../../image/perro33.jpg';
import Perro34 from '../../image/perro34.jpg';
import Perro35 from '../../image/perro35.jpg';
import Perro36 from '../../image/perro36.jpg';
import Perro37 from '../../image/perro37.jpg';
import Perro38 from '../../image/perro38.jpg';
import Perro39 from '../../image/perro39.jpg';
import Perro40 from '../../image/perro40.jpg';



const mascotasData = [
    { id: 1, nombre: 'Bobby', descripcion: 'Un perro juguetón que ama los paseos.', imagen: Perro01 },
    { id: 2, nombre: 'Mimi', descripcion: 'Una gata muy cariñosa y tranquila.', imagen: Perro02 },
    { id: 3, nombre: 'Rex', descripcion: 'Aguila pecho rojo rescatada de vendedores en mercado negro, es muy amigable te gustaria darle hogar?.', imagen: Perro03 },
    { id: 4, nombre: 'Max', descripcion: 'Un conejo pequeño y adorable.', imagen: Perro04 },
    { id: 5, nombre: 'Rocky', descripcion: 'Un perro protector y fuerte.', imagen: Perro05 },
    { id: 6, nombre: 'Bella', descripcion: 'Una perra amorosa y sociable.', imagen: Perro06 },
    { id: 7, nombre: 'Charlie', descripcion: 'Un perro tranquilo y fiel.', imagen: Perro07 },
    { id: 8, nombre: 'Daisy', descripcion: 'Una perra juguetona y cariñosa.', imagen: Perro08 },
    { id: 9, nombre: 'Luna', descripcion: 'Una perra rápida y energética.', imagen: Perro09 },
    { id: 10, nombre: 'Buddy', descripcion: 'Un perro divertido y lleno de energía.', imagen: Perro10 },
    { id: 11, nombre: 'Rocky', descripcion: 'Un perro protector y fuerte.', imagen: Perro11 },
    { id: 12, nombre: 'Oscar', descripcion: 'Un perro curioso y juguetón.', imagen: Perro12 },
    { id: 13, nombre: 'Coco', descripcion: 'Una perra simpática y amorosa.', imagen: Perro13 },
    { id: 14, nombre: 'Toby', descripcion: 'Un perro muy inteligente y leal.', imagen: Perro14 },
    { id: 15, nombre: 'Zoe', descripcion: 'Una perra dulce y amigable.', imagen: Perro15 },
    { id: 16, nombre: 'Penny', descripcion: 'Una perra alegre y extrovertida.', imagen: Perro16 },
    { id: 17, nombre: 'Rexy', descripcion: 'Un perro con mucha energía y carácter.', imagen: Perro17 },
    { id: 18, nombre: 'Nala', descripcion: 'Una perra tranquila y cariñosa.', imagen: Perro18 },
    { id: 19, nombre: 'Maya', descripcion: 'Una perra juguetona y divertida.', imagen: Perro19 },
    { id: 20, nombre: 'Milo', descripcion: 'Un perro muy activo y juguetón.', imagen: Perro20 },
    { id: 21, nombre: 'Lily', descripcion: 'Una perra juguetona y amorosa.', imagen: Perro21 },
    { id: 22, nombre: 'Sasha', descripcion: 'Una perra muy protectora y amigable.', imagen: Perro22 },
    { id: 23, nombre: 'Nino', descripcion: 'Un perro con gran personalidad.', imagen: Perro23 },
    { id: 24, nombre: 'Finn', descripcion: 'Un perro rápido y ágil.', imagen: Perro24 },
    { id: 25, nombre: 'Tina', descripcion: 'Una perra tranquila y amorosa.', imagen: Perro25 },
    { id: 26, nombre: 'Rocky', descripcion: 'Un perro leal y protector.', imagen: Perro26 },
    { id: 27, nombre: 'Rosie', descripcion: 'Una perra cariñosa y simpática.', imagen: Perro27 },
    { id: 28, nombre: 'Jack', descripcion: 'Un perro inteligente y sociable.', imagen: Perro28 },
    { id: 29, nombre: 'Chester', descripcion: 'Un perro tranquilo y amigable.', imagen: Perro29 },
    { id: 30, nombre: 'Oscar', descripcion: 'Un perro fuerte y protector.', imagen: Perro30 },
    { id: 31, nombre: 'Toby', descripcion: 'Un perro lleno de energía y alegría.', imagen: Perro31 },
    { id: 33, nombre: 'Sandy', descripcion: 'Una perra tranquila y amorosa.', imagen: Perro33 },
    { id: 34, nombre: 'Oliver', descripcion: 'Un perro divertido y travieso.', imagen: Perro34 },
    { id: 35, nombre: 'Bella', descripcion: 'Una perra con mucha energía.', imagen: Perro35 },
    { id: 36, nombre: 'Luna', descripcion: 'Una perra fiel y protectora.', imagen: Perro36 },
    { id: 37, nombre: 'Sammy', descripcion: 'Un perro amigable y cariñoso.', imagen: Perro37 },
    { id: 38, nombre: 'Cleo', descripcion: 'Una perra muy juguetona.', imagen: Perro38 },
    { id: 39, nombre: 'Buddy', descripcion: 'Un perro leal y divertido.', imagen: Perro39 },
    { id: 40, nombre: 'Bella', descripcion: 'Una perra alegre y enérgica.', imagen: Perro40 },
    { id: 41, nombre: 'Bobby', descripcion: 'Un perro juguetón que ama los paseos.', imagen: SembraImage },
    { id: 42, nombre: 'Mimi', descripcion: 'Una gata muy cariñosa y tranquila.', imagen: SabanaImage },
    { id: 43, nombre: 'Rex', descripcion: 'Un perro guardián leal y valiente.', imagen: MascotasImage },
    { id: 44, nombre: 'Max', descripcion: 'Un conejo pequeño y adorable.', imagen: SalvajesImage },
];

const Mascotas = () => {
  const [seleccionada, setSeleccionada] = useState(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(true);
  const navigate = useNavigate(); // Usamos el hook navigate para redirigir

  // Función para manejar la selección de una mascota
  const seleccionarMascota = (mascota) => {
    setSeleccionada(mascota);
    setShowDetail(true);
  };

  // Función para adoptar una mascota
  const adoptarMascota = () => {
    alert(`¡Has adoptado a ${seleccionada.nombre}!`);
    setSeleccionada(null);
  };

  // Función para navegar al perfil
  const navigateToProfile = () => {
    navigate('/profile');  // Redirige a la ruta '/profile'
  };

  const Evento = () => {
    navigate('/evento');  // Redirige a la ruta '/profile'
  };

  // Crear un contenedor para la imagen
const imageContainer = document.createElement('div');
imageContainer.style.textAlign = 'center';
imageContainer.style.marginBottom = '20px';



  return ( 
    <div className="mascotas-container">
      {}
      <div
        className={`nav-bar ${isNavHovered ? 'nav-bar-hovered' : ''}`}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <div className="nav-items">
          {/* Modificar los onClick para redirigir correctamente */}
          <div className="nav-item" onClick={navigateToProfile}>
            <FontAwesomeIcon icon={faUser} />
            {isNavHovered && <span>Ver Perfil</span>}
          </div>
          <div className="nav-item" onClick={Evento}>
            <FontAwesomeIcon icon={faPlusCircle} />
            {isNavHovered && <span>Crear Evento</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/home')}>
            <FontAwesomeIcon icon={faHome} />
            {isNavHovered && <span>Estado</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/settings')}>
            <FontAwesomeIcon icon={faCog} />
            {isNavHovered && <span>Configuración</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/notifications')}>
            <FontAwesomeIcon icon={faBell} />
            {isNavHovered && <span>Notificaciones</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/mascotas')}>
            <FontAwesomeIcon icon={faPaw} />
            {isNavHovered && <span>Mis Mascotas</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/support')}>
            <FontAwesomeIcon icon={faHeadset} />
            {isNavHovered && <span>Soporte</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/favorites')}>
            <FontAwesomeIcon icon={faHeart} />
            {isNavHovered && <span>Favoritos</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/tasks')}>
            <FontAwesomeIcon icon={faClipboard} />
            {isNavHovered && <span>Tareas</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/statistics')}>
            <FontAwesomeIcon icon={faChartLine} />
            {isNavHovered && <span>Estadísticas</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/help')}>
            <FontAwesomeIcon icon={faQuestionCircle} />
            {isNavHovered && <span>Ayuda</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/logout')}>
            <FontAwesomeIcon icon={faDoorOpen} />
            {isNavHovered && <span>Cerrar Sesión</span>}
          </div>
        </div>
      </div>
      {/* Contenido principal */}
      <div className="mascotas-content">
        <div className="mascotas-grid">
          {mascotasData.map((mascota) => (
            <div
              key={mascota.id}
              className="mascota-item"
              onClick={() => seleccionarMascota(mascota)}
            >
              <img src={mascota.imagen} alt={mascota.nombre} />
              <div className="mascota-info">
                <h3>{mascota.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detalle de la mascota seleccionada */}
      {seleccionada && showDetail && (
        <div className="mascota-detalle">
          <button
            className="close-detail"
            onClick={() => setShowDetail(false)} // Ocultar detalle
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <img src={seleccionada.imagen} alt={seleccionada.nombre} />
          <div className="mascota-detalle-info">
            <h2>{seleccionada.nombre}</h2>
            <p>{seleccionada.descripcion}</p>
            <button className="adoptar-btn" onClick={adoptarMascota}>
              Adoptar Mascota
            </button>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Mascotas;
