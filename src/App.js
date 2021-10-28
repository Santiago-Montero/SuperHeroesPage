import Home from './views/Home'
import NavBar from './components/NavBar/NavBar';
import HeroesListContainer from './components/HeroesListContainer/HeroesListContainer'
import HeroesDetail from './components/HeroesDetail/HeroesDetail'
import LogIn from './views/LogIn';
import Notificacion from './components/Notificacion/Notificacion'
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom"
import { TeamContextProvider } from './context/TeamContext';
import { NotificacionContextProvider } from './context/NotificacionContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="app">
      <TeamContextProvider>
        <NotificacionContextProvider>
          <BrowserRouter>
            <NavBar />
            <Notificacion />
            <Switch> 
              <Route exact path="/" component={LogIn}/> 
              <PrivateRoute exact path="/home" component={Home}/>
              <Route exact path="/heroes" component={HeroesListContainer}/> 
              <Route exact path="/heroe/:heroeId" component={HeroesDetail}/> 
            </Switch>
          </BrowserRouter>
        </NotificacionContextProvider>
      </TeamContextProvider>
    </div>
  );
}

export default App;
