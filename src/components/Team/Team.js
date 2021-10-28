import { useContext } from "react";
import TeamContext from "../../context/TeamContext";
import HeroesList from "../HeroesListContainer/HeroesList/HeroesList";
import TeamDetail from "./TeamDetail/TeamDetail";
import './Team.css'


function Team(){
    const { team } = useContext(TeamContext)

    return(
        <>  
            {
                team.length === 0 ?
                <div className="team">
                    <h1>Equipo </h1>
                    <div className="teamStatistics">
                        Su Equipo esta vacio
                    </div>
                </div>
                :
                <div className="team">
                    <h1>Equipo </h1>
                    <div className="teamStatistics">
                        <TeamDetail team={team} />
                    </div>
                    <div className="teamList">
                        <HeroesList heroes={team} /> 
                    </div>
                </div>
            }
            
        </>
    );
}

export default Team ;

