import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import axios from 'axios'
import {baseUrl} from '../../constants/urls'

// hooks:
import useRequestData from '../../hooks/useRequestData'
import { useValidations } from '../../hooks/useValidations'

import NavBar from '../../components/NavBar/NavBar'
import CardProduct from '../../components/CardProduct/CardProduct'

import {AddressInfoContainer, TextContainer, GrayText, Info, SectionTitle} from '../../assets/Styled/styled-text';
import { Button } from '../../assets/Styled/styled-forms'
import useForm from '../../hooks/useForm'
import handleMoney from '../../functions/handleMoney'

import {placeOrder} from '../../services/orders'
import { PageContainer } from '../Profile/styled';

const ShoppingCartPage = (props) => {

    useValidations()

    const dataUser = useRequestData({}, 'profile')
    const user = dataUser && dataUser.user

    const pathParams = useParams();
    const [orderList, setOrderList] = useState();
    // const { form, handleInputChange, resetState } = useForm({cash: "", creditcard: ""})
    const [selectedOption, setSelectedOption] = useState()

    const restaurantId = localStorage.getItem('restaurantId')
    const restaurantData = useRequestData({}, `restaurants/${restaurantId}`)
    const restaurant = restaurantData && restaurantData.restaurant


    const requestPostOrder = () => {
        const body = {
            products: pathParams.state
        }
    }

    let array = JSON.parse(localStorage.getItem("all")) || []

    const calcTotal = () => {
        const newArray = array.map((info, index) => {
            if(info.name) {
                return (info.price*array[index+1])
            }
        }).filter((info) => {
            return info !== undefined
        }).reduce((total, num) => { return total + num})

        return handleMoney(newArray)
    }

    const submitOrder = (event) => {
        event.preventDefault()

        const selectedProducts = array.map((info, index) => {
            if(info.name) {
                return {
                    "id": info.id,
                    "quantity": array[index+1]
                }
            }}).filter( info => { return info !== undefined })


        const selectedMethod = selectedOption

        const body = {
            products: selectedProducts,
            paymentMethod: selectedMethod
        }

        console.log("Body:", body)

        placeOrder(restaurantId, body)
    }

    const handleOnChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return (
        <PageContainer>
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


            {array && array.map( (info, index) => {
            
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
                    qtde={array[index+1]}
                    >
                    </CardProduct>
                )
                }
            })}

            {restaurant && 
                <div>
            Frete R${restaurant.shipping},00
                </div>}

                <div>SUBTOTAL: {calcTotal()}</div>

            <SectionTitle>Forma de pagamento</SectionTitle>

            <form onSubmit={submitOrder}>
                <input 
                 type="radio"
                 name="radioButton"
                 value={"cash"}
                 id="cash"
                 required
                 onChange={handleOnChange}
                />
                <label for="cash">Dinheiro</label><br/>
                <input 
                 type="radio" 
                 name="radioButton"
                 id="creditCard"
                 value={"creditcard"} 
                 required
                 onChange={handleOnChange}
                />
                <label form="creditCard">Cartão de crédito</label>
                <Button>Confirmar</Button>
            </form>


            <NavBar section={'shoppingCart'}/>
        </PageContainer>
    )
}

export default ShoppingCartPage