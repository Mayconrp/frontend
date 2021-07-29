import axios from "axios";

export const api = axios.create({
    baseURL: 'https://frozen-escarpment-47429.herokuapp.com'
})

export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}