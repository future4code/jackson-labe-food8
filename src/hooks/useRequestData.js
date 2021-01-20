import axios from 'axios'
import { useEffect, useState } from 'react'
import {baseUrl} from '../constants/urls'

const useRequestData = (initialData, endpoint) => {

    const [data, setData] = useState(initialData)

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        
        if (token) {
            axios.get(`${baseUrl}${endpoint}`, {
                headers: {
                    auth: token
                }
            })
    
            .then( (response) => {
                setData(response.data)
            })
            .catch( (error) => {
                console.log(error)
                alert('Ocorreu um erro no carregamento das informações. Tente novamente')
            })
        }


    }, [endpoint])


    return (data)
}

export default useRequestData