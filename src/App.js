import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home"; // Asegúrate de que la ruta sea correcta
import Mascotas from "./screens/mascotas/Mascotas";
import Profile from './screens/profile/Profile';

function App() {
    return (
        <div className="App">
             <Router>
    <Routes> 
      <Route path="/home" element={<Home />} /> {Home}
      <Route path="/mascotas" element={<Mascotas />} />{Mascotas}
      <Route path="/profile" element={<Profile />} />{Profile}
    </Routes>
  </Router>
        </div>
    );
}

export default App;
