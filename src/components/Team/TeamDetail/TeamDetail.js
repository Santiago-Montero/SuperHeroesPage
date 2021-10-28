import './TeamDetail.css'

function TeamDetail({team}){

    let regex = /(\d+)/g;

    const strongest = (array) =>{
        let first = array[0]
        let position = 0
        for ( let i = 0 ; i < array.length ; i ++){
            if(first < array[i]){
                first = array[i]
                position = i
            }
        }
        return position
    }
    const strongestStat = () =>{
        let arrayStatsNum = [0,0,0,0,0,0]
        let arrayStatsName = ['Combat','Intelligence','Durability','Speed','Strength','Power']
        team.forEach(heroe => {
                arrayStatsNum[0]  += Number(heroe.powerstats.combat)
                arrayStatsNum[1]  += Number(heroe.powerstats.intelligence)
                arrayStatsNum[2]  += Number(heroe.powerstats.durability)
                arrayStatsNum[3]  += Number(heroe.powerstats.speed)
                arrayStatsNum[4]  += Number(heroe.powerstats.strength)
                arrayStatsNum[5]  += Number(heroe.powerstats.power)
        })
        
        return arrayStatsName[strongest(arrayStatsNum)]
    }

    const getStats = (appearanceHeroe) => {
        let total = 0
        let quantity = team.length
        
        team.forEach(heroe => {
            if(appearanceHeroe === 'weight'){
                total += Number(heroe.appearance.weight[1].match(regex))
            }else if (appearanceHeroe === 'height'){
                total += Number(heroe.appearance.height[1].match(regex))
            }
        });

        return Math.trunc(total / quantity)
    }

    return(
        <>  
                <div className="teamDetail">
                    <div className="teamDetailTitle">
                        <h3>Estadisticas</h3>
                    </div>
                    <div className="teamDetailStats">
                        <p>Mejor Powerstats : <b>{strongestStat()} </b> </p>
                        <p>Peso promedio del equipo : {getStats('weight')} kg </p>
                        <p>Altura promedio del equipo : {getStats('height')} cm </p>
                    </div>
                </div>
        </>
    );
}

export default TeamDetail ;