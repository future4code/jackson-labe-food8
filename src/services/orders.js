import axios from 'axios'
import { baseUrl } from '../constants/urls'


export const getActiveOrder = (setNewState) => {

    axios.get(`${baseUrl}active-order`, {
        headers: {
            auth:localStorage.getItem('token')
        }
    })

    .then( (response) => {
        setNewState(response.data.order)
        console.log("Pedido", response.data.order)
    })
    .catch( (error) => {
        console.log(error)
    })

}