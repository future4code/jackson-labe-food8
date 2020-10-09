import {useProtectedPage, useHasAddress} from '../hooks/useProtection'


export const useValidations = () => {

    useProtectedPage()
    useHasAddress()

}

export default useValidations

