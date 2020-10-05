import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLogin } from '../routes/Coordinator'

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