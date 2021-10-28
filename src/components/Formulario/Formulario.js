import './Formulario.css'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import  axios  from 'axios';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import NotificacionContext from '../../context/NotificacionContext';

function Formulario() {
    const { singIn } = useContext(UserContext)
    const history = useHistory();
    const host ='http://challenge-react.alkemy.org';
    const { setNotificacion } = useContext(NotificacionContext)
    
	return (
		<> 
            <Formik
                initialValues={{
                    email:"",
                    password:"",
                }}

                validationSchema={Yup.object({
                    password: Yup.string()
                    .max(15, 'No puede tener mas de 15 caracteres')
                    .min(4, 'Tiene que tener por lo menos 4 caracteres')
                    .required('Requerido'),
                    email: Yup.string().email('Mail invalido').required('Requerido'),
                })}

                onSubmit={(valores, {resetForm})=>{
                    
                    axios.post(host, {email:valores.email, password:valores.password})
                    .then(data => {
                        const dataJSON = JSON.stringify(data, null ,2)
                        singIn(dataJSON)
                        localStorage.setItem('token', dataJSON)
                        console.log(dataJSON)
                        history.push("/home");
                        setNotificacion('succes', `Bienvenido`)
                    })
                    .catch(() => setNotificacion('error', `Usuario No Registrado`)) // alertar q no inicio
                    resetForm();
                }}
            >
                {( {errors} )  => (
                    <Form className="form" >
                        <div className="formInputs"> 
                            <label htmlFor="email">Mail</label>
                            <Field
                                className="input"
                                type="text" 
                                id="mail" 
                                name="email" 
                            />
                            <ErrorMessage name="email" component={() => (
                                <div className="error">{errors.email}</div>
                            )} />
                        </div>
                        <div className="formInputs"> 
                            <label htmlFor="password">Contraseña</label>
                            <Field 
                                className="input"
                                type="password" 
                                id="password" 
                                name="password" 
                            />
                            <ErrorMessage name="password" component={() => (
                                <div className="error">{errors.password}</div>
                            )} />
                        </div>
                        <div className="formButton">
                            <button type="submit">Enviar</button>
                        </div>
                        
                    </Form> 
                )}
            </Formik>
            
		</>
	);
}
export default Formulario;