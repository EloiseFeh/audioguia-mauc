import axios from 'axios';

const apiUrl = "http://127.0.0.1:8000/api/"

export async function fetchGuides(){
    return axios.get(apiUrl+"guides/").then(resp => resp.data)
}

