import React from "react";
import { Link } from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
    return(
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/" className="nav-link "> 
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  to="/heroes" className="nav-link"> 
                        SuperHeroes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  to="/logIn" className="nav-link"> 
                        Inicia Sesion
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default NavBar ;
