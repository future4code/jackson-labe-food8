import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToFeed, goToLogin, goToSignUpAddress } from '../routes/Coordinator'

import axios from 'axios'
import { baseUrl } from '../constants/urls'


export const useProtectedPage = () => {
  const history = useHistory()

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToLogin(history)
    }
  }, [history])
}

export const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
      const token = localStorage.getItem('token')
      if (token){
        goToFeed(history)
      }
    }, [history])
}


export const useHasAddress = () => {

  const history = useHistory()

  useLayoutEffect (() => {
    axios
    .get(`${baseUrl}profile`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })

    .then ( (response) => {
        const user = response.data.user
        const hasAddress = user && user.hasAddress

      if (!hasAddress) {
          goToSignUpAddress(history)
      }

    }) 
    .catch( (error) => {
        console.log(error)
    })
  },[history] )

}