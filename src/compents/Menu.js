import React from 'react'
import { NavLink } from 'react-router-dom';
export const Menu = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            
    <div className="navbar-collapse">
        <div className="navbar-nav">
            {/*
            En react siempre utilizar NavLink
            para que solo se cargue una parte de la pagina
            */}
            <NavLink 
                className="nav-item nav-link" 
                to="/home"
            >
                Home
            </NavLink>

            <NavLink 
                
                className="nav-item nav-link" 
                to="/listar"
            >
                Listar
            </NavLink>
            <NavLink 
                className="nav-item nav-link" 
                to="/agregar"
            >
                Agregar
            </NavLink>
            <NavLink 
                
                className="nav-item nav-link" 
                
                to="/acercade"
            >
                SobreNosotros
            </NavLink>
        </div>
    </div>

   
    </nav>
  )
}
