import React, { useState } from 'react'

import NavBar from '../../components/NavBar/NavBar'


const ShoppingCartPage = (props) => {
    const [order, setOrder] = useState({})



    return (
        <div>
            <div>
                <p>Endereço de entrega</p>

            </div>
            <NavBar section={'shoppingCart'}/>
        </div>
    )
}

export default ShoppingCartPage