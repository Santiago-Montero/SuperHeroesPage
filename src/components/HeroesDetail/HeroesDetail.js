import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHeroesDetail } from '../../services/Apis';
import HeroeDetail from "./HeroeDetail/HeroeDetail";

function HeroesDetail(){
    const { heroeId } = useParams()
    const [heroe, setHeroe] = useState(undefined)

    useEffect(() =>{
        getHeroesDetail(heroeId).then(res => {
            const heroeD = res.data;
            setHeroe(heroeD)
        }).catch((error)=> {
            console.log('Error encontrando al heroe ' + error)
        })
        return (() => {
            setHeroe(undefined)
        })
    },[heroeId])

    return(
        <>
        <div>
            {!heroe ? console.log('cargando') : <HeroeDetail key={heroe.id} heroe={heroe}/>}
        </div>
        
        </>
    );
}

export default HeroesDetail;