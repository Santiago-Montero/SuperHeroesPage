import axios from 'axios'

export const getHeroes = () => {
    return axios.get(`https://www.superheroapi.com/api.php/4731758326855713/search/a`)
}


export const getHeroesDetail = (id) => {
    return axios.get(`https://www.superheroapi.com/api.php/4731758326855713/${id}`)
}