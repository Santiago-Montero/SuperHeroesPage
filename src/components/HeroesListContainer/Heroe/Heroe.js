import './Heroe.css'

import { Link } from "react-router-dom"

function Heroe({heroe}) {

    return(
        <> 
        <Link to={`/heroe/${heroe.id}`}>
            <div className="heroe"> 
                <img src={heroe.image.url} alt={heroe.name} className="heroeImg" />
                <p>{heroe.name}</p>
            </div>
        </Link>
        </>
    );
}

export default Heroe;