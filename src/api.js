import axios from 'axios';

const apiUrl = "https://mauc-api.herokuapp.com/api/"

export async function fetchGuides(){
    return axios.get(apiUrl+"guides/").then(resp => resp.data)
}

