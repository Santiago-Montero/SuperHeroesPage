import React, { useState } from 'react'

const NotificacionContext = React.createContext()

export const NotificacionContextProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotificacion = ( severity, message ) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 2500)
    }

    return (
        <NotificacionContext.Provider 
            value={{
                notificacion: {
                    message,
                    severity
                },
                setNotificacion
            }}
        >
            {children}
        </NotificacionContext.Provider>
    )
}

export default NotificacionContext