import React, { useContext } from 'react'
import NotificacionContext from '../../context/NotificacionContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Notificacion.css'

const Notificacion = () => {
    const { notificacion }  = useContext(NotificacionContext)

    if(notificacion.message === '') {
        return null
    }

    return (
            <div className="notificacion">
            {
                notificacion.severity === "error" ? 
                    <div className="alert alert-dark alerta" role="alert">
                        <b>{notificacion.message}</b>
                    </div>
                    :
                    <div className="alert alert-light alerta" role="alert">
                        <b>{notificacion.message}</b>
                    </div>
            }
            </div>
    )
}

export default Notificacion