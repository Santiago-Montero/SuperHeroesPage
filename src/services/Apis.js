import axios from 'axios'

export const getHeroes = (name) => {
    return axios.get(`https://www.superheroapi.com/api.php/4731758326855713/search/${name}`)
}


export const getHeroesDetail = (id) => {
    return axios.get(`https://www.superheroapi.com/api.php/4731758326855713/${id}`)
}