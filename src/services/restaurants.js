import axios from 'axios'
import { baseUrl } from '../constants/urls'

export const getAllRestaurants = (setFeedArray) => {
    axios.get(`${baseUrl}restaurants`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
    .then((response) => {
        setFeedArray(response.data.restaurants)
    })
    .catch((err) => {
        console.log(err)
    })

}