import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import axios from 'axios'
import {baseUrl} from '../../constants/urls'

// hooks:
import useRequestData from '../../hooks/useRequestData'
import { useValidations } from '../../hooks/useValidations'

import NavBar from '../../components/NavBar/NavBar'
import CardProduct from '../../components/CardProduct/CardProduct'

import {AddressInfoContainer, TextContainer, GrayText, Info} from '../../assets/Styled/styled-text'


const ShoppingCartPage = (props) => {

    useValidations()

    const dataUser = useRequestData({}, 'profile')
    const user = dataUser && dataUser.user

    const pathParams = useParams();
    const [orderList, setOrderList] = useState()

    // const [restaurantId, setRestaurantId] = useState()
    // const [restaurant, setRestaurant] = useState()

    // useEffect (() => {
    //     setRestaurantId(localStorage.getItem('restaurantId'))

    //     axios
    //     .get(`${baseUrl}restaurants/${restaurantId}`, {
    //         headers: {
    //             auth: localStorage.getItem('token')
    //         }
    //     })
    //     .then((response) =>{
    //         setRestaurant(response.data);
    //     })
    //     .catch((error) =>{
    //         alert(error.message)
    //     })
    // }, [])

    const restaurantId = localStorage.getItem('restaurantId')
    const restaurantData = useRequestData({}, `restaurants/${restaurantId}`)
    const restaurant = restaurantData && restaurantData.restaurant


    const requestPostOrder = () => {
        const body = {
            products: pathParams.state
        }
    }

    let array = JSON.parse(localStorage.getItem("all")) || []

    return (
        <div>
            <AddressInfoContainer>
                <TextContainer>
                <GrayText>Endereço de entrega</GrayText>
                {user && <Info>{user.address}</Info>}
                </TextContainer>
            </AddressInfoContainer>


            {!pathParams && <h5>Carrinho vazio</h5>}
            
            {restaurant && 
            <div>
            <div>{restaurant.name}</div>
            <div>{restaurant.address}</div>
            <div>{restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min</div>
            </div>}

            {array && array.map( (info) => {
                if (info.name) {
                return (
                    <CardProduct
                    page={'cart'}
                    img={info.photoUrl} 
                    price={info.price} 
                    description={info.description} 
                    idKey={info.id} 
                    name={info.name}
                    all={info}
                    qtde={(typeof info === "string")? info : "" }
                    >
                    </CardProduct>
                )
                }
            })}

            {restaurant && 
            <div>
           Frete R${restaurant.shipping},00
            </div>}

            <NavBar section={'shoppingCart'}/>
        </div>
    )
}

export default ShoppingCartPage