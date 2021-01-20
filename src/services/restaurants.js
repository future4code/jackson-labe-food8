import axios from 'axios'
import { baseUrl } from '../constants/urls'

export const getAllRestaurants = (setNewState) => {
    axios.get(`${baseUrl}restaurants`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
    .then((response) => {
        setNewState(response.data.restaurants)
    })
    .catch((err) => {
        console.log(err)
    })

}