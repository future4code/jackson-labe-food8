import React from 'react'
import { useProtectedPage } from '../../hooks/useProtection'

const HomePage = () => {
    useProtectedPage()

    return (
        <div>
            Feed Page
        </div>
    )
}

export default HomePage