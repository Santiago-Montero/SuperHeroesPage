import './Heroe.css'
import { Link } from "react-router-dom"
import { useContext } from 'react';
import TeamContext from '../../../context/TeamContext';
import NotificacionContext from '../../../context/NotificacionContext';

function Heroe({heroe}) {
    const { setNotificacion } = useContext(NotificacionContext)
    const { addToTeam } = useContext(TeamContext)
    const { removeToTeam } = useContext(TeamContext)
    const { team } = useContext(TeamContext)
    const { quantityBad } = useContext(TeamContext)
    const { quantityGood } = useContext(TeamContext)
    let quantityGoodHeroe = quantityGood()
    let quantityBadHeroe = quantityBad()
    

    const validateToAdd = () =>{
        let quantityTeam = team.length + 1

        if(quantityTeam <= 6){

            if(heroe.biography.alignment === 'good'){

                if(quantityGoodHeroe <= 3){

                    addToTeam(heroe)
                    setNotificacion('success', `Se agrego ${heroe.name} a su equipo`)
                }else{

                    setNotificacion('error', `Ya hay tres miembros buenos en el equipo`)
                }
            }else{
                
                if(quantityBadHeroe <= 3){

                    addToTeam(heroe)
                    setNotificacion('success', `Se agrego ${heroe.name} a su equipo`)
                }else{

                    setNotificacion('error', `Ya hay tres miembros malos en el equipo`)
                }
            }
        }else{

            setNotificacion('error', `El equipo tiene 6 miembros, esta completo`)
        }
    }

    const remove = () =>  {

        removeToTeam(heroe)
        setNotificacion('error', `Se elimino de su equipo a ${heroe.name}`)
    }

    return(
        <div className="heroe"> 
            <div className="heroePowerStats">
                    <div className="heroePowerStatsText">
                        <p> Combat : {heroe.powerstats.combat} </p>
                        <p> Intelligence : {heroe.powerstats.intelligence} </p>
                        <p> Durability : {heroe.powerstats.durability} </p>
                        <p> Speed : {heroe.powerstats.speed} </p>
                        <p> Strength : {heroe.powerstats.strength} </p>
                        <p> Power : {heroe.powerstats.power} </p>
                    </div>
                    <div className="heroePowerStatsBtns">
                        <Link to={`/heroe/${heroe.id}`}  className="detallesBtn btn btn-light">
                            Detalles
                        </Link>
                        <div className="heroeBtn">
                            {
                                team.some(h => h.id === heroe.id) ?
                                <button className="btn btn-dark" onClick={remove}>x</button>
                                : 
                                <button className="btn btn-light" onClick={validateToAdd}>+</button>
                            }
                        </div>
                        
                    </div>
            </div>
            <div className="heroeLink">
                <img src={heroe.image.url} alt={heroe.name} className="heroeImg" />
                <div className="heroeName">
                    <p>{heroe.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Heroe;