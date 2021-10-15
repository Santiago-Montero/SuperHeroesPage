import Home from './views/Home'
import NavBar from './components/NavBar/NavBar';
import HeroesListContainer from './components/HeroesListContainer/HeroesListContainer'
import HeroesDetail from './components/HeroesDetail/HeroesDetail'
import LogIn from './components/LogIn/LogIn';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch> 
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/heroes"> 
            <HeroesListContainer />
          </Route>
          <Route path="/heroe/:heroeId"> 
            <HeroesDetail />
          </Route>
          <Route path="/logIn"> 
            <LogIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
