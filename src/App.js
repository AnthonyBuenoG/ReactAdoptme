import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Mascotas from "./screens/mascotas/Mascotas";
import Profile from "./screens/profile/Profile";
import Evento from "./screens/Evento/Evento";
import Favoritos from "./screens/Favoritos/Favoritos";
import Adopciones from "./screens/Adopciones/Adopciones";

function App() {
  // Estado global para las mascotas
  const [mascotas, setMascotas] = useState([]);

  // Función para agregar nuevas mascotas
  const agregarMascota = (nuevaMascota) => {
    setMascotas([...mascotas, nuevaMascota]);
    guardarEnLocalStorage([...mascotas, nuevaMascota]);
  };

  // Guardar datos en localStorage
  const guardarEnLocalStorage = (mascotas) => {
    localStorage.setItem("mascotas", JSON.stringify(mascotas));
  };

  // Cargar datos desde localStorage al inicializar
  React.useEffect(() => {
    const mascotasGuardadas = JSON.parse(localStorage.getItem("mascotas")) || [];
    setMascotas(mascotasGuardadas);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/mascotas" element={<Mascotas mascotas={mascotas} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/evento" element={<Evento />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route
            path="/adopciones"
            element={<Adopciones agregarMascota={agregarMascota} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
