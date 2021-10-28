import './HeroeDetail.css'

function HeroeDetail({heroe}) {

    return(
        <> 
        <div className="heroeDetail container"> 
            <div className="heroeDetailImg">
                <img src={heroe.image.url} alt={heroe.name}/>
            </div>
            <div className="heroeDetailDescription">
                <p>Nombre : {heroe.name}</p>
                <p>Alias : {heroe.biography.aliases.join()}</p>
                <p>Ojos : {heroe.appearance["eye-color"]}</p>
                <p>Pelo : {heroe.appearance["hair-color"]}</p>
                <p>Altura : {heroe.appearance.height[1]}</p>
                <p>Peso: {heroe.appearance.weight[1]}</p>
                <p>Lugar de Trabajo : {heroe.work.base}</p>
            </div>
        </div>
        </>
    );
}

export default HeroeDetail;