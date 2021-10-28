import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom"
import UserContext from "../../context/UserContext";
import './NavBar.css'

function NavBar(){
    const { leave } = useContext(UserContext)
    const { token } = useContext(UserContext)
    const history = useHistory();
    
    const leavePage = () =>{
        history.push("/");
        leave()
    }

    return(
        <>
            <ul className="nav  justify-content-center ">
                <li className="nav-item">
                    <Link to="/home" className="nav-link item"> 
                    <p>Home</p>
                    </Link>
                </li>
                <li className="nav-item">
                    {
                        token ?
                        <div className="nav-link item">
                            <button onClick={leavePage} >Cerrar Sesion</button>
                        </div>
                    :
                        <Link  to="/" className="nav-link item"> 
                            <p>Inicia Sesion</p>
                        </Link>
                    }
                </li>
            </ul>
        </>
    );
}

export default NavBar ;
