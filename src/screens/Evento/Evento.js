import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Evento.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCity, faGlobe, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Evento = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    zipCode: '',
    eventDate: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { eventDate } = formData;
    setMessage(`Evento creado, te esperamos el ${eventDate}, por favor espera tu notificación`);
    setTimeout(() => setMessage(''), 3000);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      country: '',
      zipCode: '',
      eventDate: ''
    });
  };

  const handleCancel = () => {
    navigate('/mascotas');
  };

  return (
    <div className="form-container">
      <h2>Registro de Evento de Cumpleaños</h2>
      <p>Registra el Evento ahora para que encuentres fechas dispoibles!!</p>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-field">
          <FontAwesomeIcon icon={faUser} />
          <label>
            Nombres
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-field">
          <FontAwesomeIcon icon={faUser} />
          <label>
            Apellidos 
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-field">
          <FontAwesomeIcon icon={faEnvelope} />
          <label>
            Gmail 
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-field">
          <FontAwesomeIcon icon={faPhone} />
          <label>
            Numero 
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-field">
          <FontAwesomeIcon icon={faCity} />
          <label>
            Ciudad
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-field">
          <FontAwesomeIcon icon={faGlobe} />
          <label>
            Pais
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-field">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <label>
            Zip Code
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-field">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <label>
            Dia del Evento
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="button-container">
          <button type="submit" className="submit-button">Enviar evento</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
          Cancelar evento
          </button>
        </div>
      </form>

      {message && <div className="confirmation-message">{message}</div>}
    </div>
  );
};

export default Evento;
