import React,{ useState } from "react";

const TeamContext = React.createContext();


export const TeamContextProvider = ({ children }) =>{
    const [team, setTeam] = useState([])

    const addToTeam = (heroe) => { 

        setTeam([...team, heroe])
    }
    const quantityGood = () => {

        return (team.filter(heroe => heroe.biography.alignment === 'good')).length + 1
    }
    const quantityBad = () => {

        return (team.filter(heroe => heroe.biography.alignment === 'bad')).length + 1
    }
    const removeToTeam = (heroe) =>{
        
        const newTeam = team.filter(t => t.id !== heroe.id)
        setTeam(newTeam)
    }   
    return(
        <TeamContext.Provider 
        value={{
            team,
            addToTeam,
            quantityBad,
            quantityGood,
            removeToTeam
        }}>
            {children}
        </TeamContext.Provider>
    );
}

export default TeamContext

