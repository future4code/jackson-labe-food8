import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed, goToProfile, goToLogin, goToSignUpAddress, goToSignUp } from '../routes/Coordinator'

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

export const signUp = (body, history) => {
    axios.post(`${baseUrl}signup`, body)
    .then((response) => {
        localStorage.setItem('token' , response.data.token)
        goToSignUpAddress(history)
    })
    .catch((err) => {
        if(err.message.includes('409')){
            alert('Usuário já existente!')
        } else {
            alert('Erro ao registrar-se, tente novamente!')
        }
        goToSignUp(history)
    })
}

export const addAddress = (body, history, page) => {
    axios.put(`${baseUrl}address`, body, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((response) => {
        if (page === 'signup') {
            localStorage.setItem('token' , response.data.token)
            alert('Endereço adicionado com sucesso!')
            goToFeed(history)
        } else if (page === 'edit'){
            goToProfile(history)
        }  
      }
    ).catch((error) => {
        console.log(error)
        alert('Não foi possível adicionar o seu endereço, tente novamente')
      }
    )
  }

  export const updateProfile = (body, history) => {

    axios
    .put(`${baseUrl}profile`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })

    .then((response) => {
        goToProfile(history)
    })
    .catch( (error) => {
        alert('Falha no login, tente novamente!')
    })
}
