import HeroesList from './HeroesList/HeroesList'
import { getHeroes } from '../../services/Apis';
import { useEffect, useState } from 'react'


function HeroesListContainer(){

    const [ listHeroes, setListHeroes] = useState([]);

    useEffect(() => {
        getHeroes().then(res => {
            const heroe = res.data;
            // console.log(heroe)
            setListHeroes(heroe.results.slice(0,10));
        }).catch((error) => console.log('Surgio un error mientras se pedia a la api ' + error))
    }, []);

    return(
        <>  
            <div className="containerHeroes">
                <h1>HeroesListContainer</h1>
                <HeroesList heroes={listHeroes} />
            </div>
        </>
    );
}

export default HeroesListContainer ;




