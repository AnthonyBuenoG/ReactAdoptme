import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        name: "Home",
        href: "/home",
    },
     {
        name: "Profile",
        href: "/profile",
    },
    {
        name: "Evento",
        href: "/evento",
    },
    {
        name:"Favoritos",
        href:"/favoritos"
    },
    {
        name:"Adopciones",
        href:"/adopciones"
    },   
    {
        name:"Maltrato",
        href:"/maltrato"
    }  
];

const NavBar = () => {
    return(
        <div> 
            {links.map(x => (
                <Link to={x.href}>{x.name}</Link>
            ))}
        </div>
    )
};

export default NavBar;
