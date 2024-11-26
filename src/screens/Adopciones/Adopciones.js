import React, { useState } from "react";
import "./Adopciones.css";
import {FaFileAlt, FaUser } from "react-icons/fa";

const Adopciones = ({ agregarMascota }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("dragging");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragging");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragging");

    const archivos = Array.from(e.dataTransfer.files).slice(0, 3);
    const nuevasImagenes = archivos.map((archivo) => URL.createObjectURL(archivo));
    setImagenes((prev) => [...prev, ...nuevasImagenes].slice(0, 3));
  };

  const handleFileClick = () => {
    document.getElementById("file-input").click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && descripcion && imagenes.length > 0) {
      const nuevaMascota = { nombre, descripcion, imagenes };
      agregarMascota(nuevaMascota);
      setNombre("");
      setDescripcion("");
      setImagenes([]);
      setMensaje("Gracias por dar en adopción. Por favor espera a que los administradores la acepten.");
      setTimeout(() => setMensaje(""), 3000);
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  return (
    <div className={`adopciones-container ${imagenes.length === 0 ? "no-images" : ""}`}>
      <form onSubmit={handleSubmit} className="adopciones-form">
        <h2>Dar en Adopción</h2>
        <div className="form-group">
          <label>
            <FaUser className="icon" /> Nombre:
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="form-group">
          <label>
            <FaFileAlt className="icon" /> Descripción:
          </label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Breve descripción de la mascota"
          />
        </div>
        <div
          className="drag-drop-area"
          onClick={handleFileClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          Arrastra aquí hasta 3 imágenes o haz clic para seleccionar
          <input
            id="file-input"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const archivos = Array.from(e.target.files).slice(0, 3);
              const nuevasImagenes = archivos.map((archivo) => URL.createObjectURL(archivo));
              setImagenes((prev) => [...prev, ...nuevasImagenes].slice(0, 3));
            }}
            hidden
          />
        </div>
        <button type="submit">Agregar Mascota</button>
      </form>
      <div className="image-preview">
        {imagenes.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} />
        ))}
      </div>
      {mensaje && <div className="mensaje-popup">{mensaje}</div>}
    </div>
  );
};

export default Adopciones;
