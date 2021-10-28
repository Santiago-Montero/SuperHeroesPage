import { Route, Redirect } from 'react-router-dom'



function PrivateRoute({component:Comp, ...rest}){
    let auth = localStorage.getItem('token');
    return(
        <>
        <Route {...rest}>
            {
                auth? 
                <Comp /> 
                :
                <Redirect to="/"/>
            }
        </Route>
        </>
    );
}



export default PrivateRoute;