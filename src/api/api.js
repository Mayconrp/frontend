import axios from "axios";

export const api = axios.create({
    baseURL: 'https://infinite-atoll-37268.herokuapp.com/'
})

export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}