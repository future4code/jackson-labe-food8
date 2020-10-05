import React from 'react'
import { useProtectedPage } from '../../hooks/useProtection'

import NavBar from '../../components/NavBar/NavBar'

const HomePage = () => {
    useProtectedPage()

    return (
        <div>
            <NavBar section={'homepage'}/>
        </div>
    )
}

export default HomePage