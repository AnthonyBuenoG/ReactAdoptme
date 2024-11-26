import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlusCircle, faBell, faPaw, faDoorOpen, faTimes, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Mascotas.css';
import Perro01 from '../../image/perro1.jpg';
import Perro02 from '../../image/perro2.jpg';
import Perro03 from '../../image/perro3.jpg';
import Perro04 from '../../image/perro4.jpg';
import Perro05 from '../../image/perro5.jpg';
import Perro06 from '../../image/perro6.jpg';
import Perro07 from '../../image/perro7.jpg';
import Perro08 from '../../image/perro8.jpg';
import Pm11 from '../../image/pm.jpg';
import Perro09 from '../../image/perro9.jpg';
import Perro10 from '../../image/burro.jpg';
import Perro12 from '../../image/perro12.jpg';
import Perro13 from '../../image/perro13.jpg';
import Perro14 from '../../image/perro14.jpg';
import Perro15 from '../../image/perro15.jpg';
import Perro16 from '../../image/mapache.jpg';
import Perro17 from '../../image/guacamaya.jpg';
import Perro18 from '../../image/perro18.jpg';
import Perro19 from '../../image/perro19.jpg';
import Perro20 from '../../image/cabra.jpg';
import Perro21 from '../../image/avestruz.jpg';
import Perro22 from '../../image/ggg.jpg';
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

import Perro37 from '../../image/perro37.jpg';
import Perro38 from '../../image/perro38.jpg';
import Perro39 from '../../image/perro39.jpg';
import Perro40 from '../../image/perro40.jpg';



const mascotasData = [
    { id: 1, nombre: 'Bobby', descripcion: 'Un perro juguetón que ama los paseos.', imagen: Perro01 },
    { id: 2, nombre: 'Mimi', descripcion: 'Una linda husky muy cariñosa, no le gusta estar rodeada de mas perros y ama la tranquilidad, si eres alguien solitario te encantara Mimi.', imagen: Perro02 },
    { id: 3, nombre: 'Rex', descripcion: 'Aguila pecho rojo rescatada de vendedores en mercado negro, es muy amigable te gustaria darle hogar?.', imagen: Perro03 },
    { id: 4, nombre: 'Max', descripcion: 'Max es un labrador muy imperactivo necesita familia capaz de seguir su ritmo.', imagen: Perro04 },
    { id: 5, nombre: 'Rocky, Rambo, Roro', descripcion: 'Un grupo de 3 hermanos que fueron entregados a las afueras de la instalacion aun cuando eran unos bebes. Son inseparables, asi que los tres vienen en paquete.', imagen: Perro05 },
    { id: 6, nombre: 'Bella', descripcion: 'Bella fue una famosa elefante participe de un circo, garcias a denuncias fue capaz de jubilarse y estar en tranquilidad .', imagen: Perro06 },
    { id: 7, nombre: 'Charlie', descripcion: 'Charlie fue encontrado cerca de un arroyo muy herido por cazadores furtivos hace 3 años, ahora es un amante del salmon e bayas salvajes.', imagen: Perro07 },
    { id: 8, nombre: 'Daisy', descripcion: 'Margarita sufre de de asma en ambientes secos asi que necesita un buen cuidado, pero eso no es excepcion para darle la mejor vida.', imagen: Perro08 },
    { id: 9, nombre: 'Luna', descripcion: 'Lunita es nuestra bebe, rescatada de mas cazadores que la separaron de su mama, asi que decimos convertirnos en su mama.', imagen: Perro09 },
    { id: 10, nombre: 'Juan', descripcion: 'Juan es gracioso, en ocasiones se ensucia con facilidad y llega atener un mal olor, nada que un buen baño lo arregle.', imagen: Perro10 },
    { id: 11, nombre: 'Pablo', descripcion: 'Nuestro gran pirata conquistador de los 7 mares, cuidado si lo vez te puede maldecir con un conguro imposible de quitarse. Ya te encariñaste?.', imagen: Pm11 },
    { id: 12, nombre: 'Oscar', descripcion: 'Un perro curioso y juguetón.', imagen: Perro12 },
    { id: 13, nombre: 'Coco', descripcion: 'Coco es algo imperactivo con las personas de confianza,pero en ocasiones tiende a ser algo rebelde.', imagen: Perro13 },
    { id: 14, nombre: 'Toby', descripcion: 'Nuestro gran panda rojo, raro de su especie. No cualquiera puede con su temperamento.', imagen: Perro14 },
    { id: 15, nombre: 'Zoe', descripcion: 'Nuestra ardillita le encantan las nueces son su favoritas en temporada de otoño, tal vez piense que invernara?.', imagen: Perro15 },
    { id: 16, nombre: 'Penny', descripcion: 'Ella es Penny, a penny le gusta lavar el algodon de azucar. Creo que no es una buena idea.', imagen: Perro16 },
    { id: 17, nombre: 'Rexy', descripcion: 'Cuidado con hablar secretos enfrente de Rexy, aprende rapido.', imagen: Perro17 },
    { id: 18, nombre: 'Nala', descripcion: 'Una gatita tranquila y cariñosa.', imagen: Perro18 },
    { id: 19, nombre: 'Maya, Clara, Sofi', descripcion: 'Nuestras tres trillizas, tranquilos si las podemos diferenciar, eso creemos.', imagen: Perro19 },
    { id: 20, nombre: 'Milo', descripcion: 'Milo es todo un caso, es demasiado escuridizo creo que tiene muchas ideas.', imagen: Perro20 },
    { id: 21, nombre: 'Lily', descripcion: 'Nuestra gran ave, lamentablemente sus plumas fueron arrancadas pero nada que amor y cuidados puedan mejorar su estado.', imagen: Perro21 },
    { id: 22, nombre: 'Macaron', descripcion: 'Nuestro dulcesito de azucar su edad no es impedimento para generar ternura a los usuarios.', imagen: Perro22 },
    
    { id: 26, nombre: 'Rocky', descripcion: 'Un perro leal y protector.', imagen: Perro26 },
    { id: 27, nombre: 'Rosie', descripcion: 'Una perra cariñosa y simpática.', imagen: Perro27 },
    { id: 28, nombre: 'Jack', descripcion: 'Un perro inteligente y sociable.', imagen: Perro28 },
    { id: 29, nombre: 'Chester', descripcion: 'Un perro tranquilo y amigable.', imagen: Perro29 },
    { id: 30, nombre: 'Oscar', descripcion: 'Un perro fuerte y protector.', imagen: Perro30 },
    { id: 31, nombre: 'Toby', descripcion: 'Un perro lleno de energía y alegría.', imagen: Perro31 },
    { id: 33, nombre: 'Sandy', descripcion: 'Una perra tranquila y amorosa.', imagen: Perro33 },
    { id: 34, nombre: 'Oliver', descripcion: 'Un perro divertido y travieso.', imagen: Perro34 },
    { id: 35, nombre: 'Bella', descripcion: 'Una perra con mucha energía.', imagen: Perro35 },
    
    { id: 37, nombre: 'Sammy', descripcion: 'Un perro amigable y cariñoso.', imagen: Perro37 },
    { id: 38, nombre: 'Cleo', descripcion: 'Una perra muy juguetona.', imagen: Perro38 },
    { id: 39, nombre: 'Buddy', descripcion: 'Un perro leal y divertido.', imagen: Perro39 },
    { id: 40, nombre: 'Bella', descripcion: 'Una perra alegre y enérgica.', imagen: Perro40 },
];

const Mascotas = () => {
  const [seleccionada, setSeleccionada] = useState(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(true);
  const navigate = useNavigate(); 

  const seleccionarMascota = (mascota) => {
    setSeleccionada(mascota);
    setShowDetail(true);
  };

  // Función para adoptar una mascota
  const adoptarMascota = () => {
    alert(`¡Has adoptado a ${seleccionada.nombre}!`);
    setSeleccionada(null);
  };

  const navigateToProfile = () => {
    navigate('/profile');  
  };

  const Evento = () => {
    navigate('/evento');
  };

  const Homee = () => {
    navigate('/home');  
  };
  
  const Adopciones = () => {
    navigate('/adopciones'); 
  };
  const Maltrato = () => {
    navigate('/maltrato');  
  };

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
          {}
          <div className="nav-item" onClick={navigateToProfile}>
            <FontAwesomeIcon icon={faUser} />
            {isNavHovered && <span>Ver Perfil</span>}
          </div>
          <div className="nav-item" onClick={Evento}>
            <FontAwesomeIcon icon={faPlusCircle} />
            {isNavHovered && <span>Crear Evento</span>}
          </div>
          <div className="nav-item" onClick={Adopciones}>
            <FontAwesomeIcon icon={faPaw} />
            {isNavHovered && <span>Dar en Adopcion</span>}
          </div>
          <div className="nav-item" onClick={Maltrato}>
            <FontAwesomeIcon icon={faShieldAlt} />
            {isNavHovered && <span>Maltrato Animal</span>}
          </div>
          <div className="nav-item" onClick={() => navigate('/notifications')}>
            <FontAwesomeIcon icon={faBell} />
            {isNavHovered && <span>Notificaciones</span>}
          </div>
          <div className="nav-item" onClick={Homee}>
            <FontAwesomeIcon icon={faDoorOpen} />
            {isNavHovered && <span>Cerrar Sesión</span>}
          </div>
        </div>
      </div>
      {}
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

      {}
      {seleccionada && showDetail && (
        <div className="mascota-detalle">
          <button
            className="close-detail"
            onClick={() => setShowDetail(false)} 
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
