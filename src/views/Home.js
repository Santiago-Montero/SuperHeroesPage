import HeroesListContainer from "../components/HeroesListContainer/HeroesListContainer";
import Team from "../components/Team/Team";
import './Views.css'

function Home(){

    return(
        <div className="page">        
            <div className="home">
                <div className="homeTeam">
                    <Team />
                </div>
                <div className="homeHeroesListContainer">
                    <HeroesListContainer />
                </div>
            </div>
        </div>
    );
}

export default Home ;