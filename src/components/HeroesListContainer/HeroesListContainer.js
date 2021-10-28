import HeroesList from './HeroesList/HeroesList'
import { getHeroes } from '../../services/Apis';
import { useEffect, useState } from 'react'
import './HeroesListContainer.css'

function HeroesListContainer(){

    const [ listHeroes, setListHeroes] = useState([]);
    const [ name, setName] = useState('');

    const handleName = (e) =>{
        setName(e.target.value)
    }
    
    useEffect(() => {
        getHeroes(name).then(res => {
            const heroe = res.data;
            setListHeroes(heroe.results);
        }).catch((error) => console.log('Surgio un error mientras se pedia a la api ' + error))
    }, [name]);

    return(
        <div className="containerHeroes">
            <div className="containerHeroesInput">
                <label>Busque a sus Heroes </label>
                <input type="text"  id="nombreHeore" onChange={handleName} value={name} placeholder="Busca un heroe" name="heroe" />
            </div>
            <div className="heroesListContainer">
                {listHeroes && <HeroesList heroes={listHeroes} />}
            </div>
        </div>
    );
}

export default HeroesListContainer ;




