import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../routes/Coordinator'
import { goToLogin } from '../routes/Coordinator'


export const login = (body, history) => {
    axios.post(`${baseUrl}login`, body)
    .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToFeed(history)
    })
    .catch((err) => {
        console.log(err)
        alert('Falha no login, tente novamente!')
    })
}

export const signup = (body, history) => {
    axios.post(`${baseUrl}signup`, body)
    .then((response) => {
        localStorage.setItem('token' , response.data.token)
        goToLogin(history)
    })
    .catch((err) => {
        console.log(err)
        alert('Erro ao registrar-se, tente novamente!')
    })
}

export const address = (body, history) => {
    axios.put(`${baseUrl}/address`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
        localStorage.setItem('token' , response.data.token)
        alert('Endereço adicionado com sucesso!')
        goToFeed(history)
      }
    ).catch((error) => {
        console.log(error)
        alert('Não foi possível adicionar o seu endereço, tente novamente')
  
      }
    )
  }