import React, { useState } from 'react'
import { useParams } from 'react-router'

import NavBar from '../../components/NavBar/NavBar'


const ShoppingCartPage = (props) => {
    const pathParams = useParams();
    const [orderList, setOrderList] = useState()


    const requestPostOrder = () =>{
        const body = {
            products: pathParams.state
        }
    }


    return (
        <div>
            <div>
                <p>Endereço de entrega</p>

            </div>
            {!pathParams && <h5>Carrinho vazio</h5>}
            <NavBar section={'shoppingCart'}/>
        </div>
    )
}

export default ShoppingCartPage