import Heroe from '../Heroe/Heroe'
import './HeroeList.css'

function HeroesList({heroes}) {

    return(
        <>
        <div className="heroeList">
            {heroes.map(heroe => <Heroe key={heroe.id} heroe={heroe}/> )}
        </div>
        </>
    );
}

export default HeroesList ;