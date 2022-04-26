import axios from "axios";

export const api = axios.create({
    baseURL: 'https://infinite-atoll-37268.herokuapp.com/api/'
    //baseURL: 'http://localhost:8080/api/'
})

export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}