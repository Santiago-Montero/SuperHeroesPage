
function HeroeDetail({heroe}) {

    return(
        <> 
        <div className="heroe"> 
            {console.log(heroe)}
            <img src={heroe.image.url} alt={heroe.name} className="heroeImg" />
            <p>Nombre : {heroe.name}</p>
            <p>Alias : {heroe.biography.aliases.map(a => a + "/ " )}</p>
            <p>Ojos : {heroe.appearance["eye-color"]}</p>
            <p>Pelo : {heroe.appearance["hair-color"]}</p>
            <p>Altura : {heroe.appearance.height[1]}</p>
            <p>Peso: {heroe.appearance.weight[1]}</p>
            <p>Lugar de Trabajo : {heroe.work.base}</p>
        </div>
        </>
    );
}

export default HeroeDetail;