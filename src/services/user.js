import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed, goToProfile } from '../routes/Coordinator'

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
