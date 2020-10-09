import React, { useState } from 'react'
import { useParams } from 'react-router'


// hooks:
import useRequestData from '../../hooks/useRequestData'
import { useValidations } from '../../hooks/useValidations'

import NavBar from '../../components/NavBar/NavBar'

import {AddressInfoContainer, TextContainer, GrayText, Info} from '../../assets/Styled/styled-text'


const ShoppingCartPage = (props) => {

    useValidations()

    const dataUser = useRequestData({}, 'profile')
    const user = dataUser && dataUser.user

    const pathParams = useParams();
    const [orderList, setOrderList] = useState()




    const requestPostOrder = () =>{
        const body = {
            products: pathParams.state
        }
    }


    return (
        <div>
            <AddressInfoContainer>
                <TextContainer>
                <GrayText>Endereço de entrega</GrayText>
                {user && <Info>{user.address}</Info>}
                </TextContainer>
            </AddressInfoContainer>
            {!pathParams && <h5>Carrinho vazio</h5>}
            <NavBar section={'shoppingCart'}/>
        </div>
    )
}

export default ShoppingCartPage