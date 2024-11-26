import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Mascotas from "./screens/mascotas/Mascotas";
import Profile from "./screens/profile/Profile";
import Evento from "./screens/Evento/Evento";
import Favoritos from "./screens/Favoritos/Favoritos";
import Adopciones from "./screens/Adopciones/Adopciones";
import Maltrato from "./screens/Maltrato/Maltrato";

function App() {
  const [mascotas, setMascotas] = useState([]);

  const agregarMascota = (nuevaMascota) => {
    setMascotas([...mascotas, nuevaMascota]);
    guardarEnLocalStorage([...mascotas, nuevaMascota]);
  };

  const guardarEnLocalStorage = (mascotas) => {
    localStorage.setItem("mascotas", JSON.stringify(mascotas));
  };

  React.useEffect(() => {
    const mascotasGuardadas = JSON.parse(localStorage.getItem("mascotas")) || [];
    setMascotas(mascotasGuardadas);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mascotas" element={<Mascotas mascotas={mascotas} />} />
          <Route path="/maltrato" element={<Maltrato />} />
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
