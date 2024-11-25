import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home"; // Asegúrate de que la ruta sea correcta
import Mascotas from "./screens/mascotas/Mascotas";
// import Profile from './screens/profile/Profile';
import Profile from './screens/profile/Profile';
import React from 'react';
import Header from './components/Header/Header';
import Mascotas from './screens/mascotas/Mascotas';

function App() {
    return (
        <div className="App">
            <Header />
            <Mascotas />
        </div>
    );
}

const App = () => {
  return (
    <Router>
    <Routes> 
      <Route path="/home" element={<Home />} /> {Home}
      <Route path="/mascotas" element={<Mascotas />} />{Mascotas}
      <Route path="/profile" element={<Profile />} />{Profile}
    </Routes>
  </Router>
  );
};

export default App;
