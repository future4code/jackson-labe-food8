import React, { useState } from 'react'
import { useParams } from 'react-router'

// hooks:
import useRequestData from '../../hooks/useRequestData'
import { useValidations } from '../../hooks/useValidations'

import NavBar from '../../components/NavBar/NavBar'
import CardProduct from '../../components/CardProduct/CardProduct'

import {AddressInfoContainer, TextContainer, GrayText, Info, SectionTitle} from '../../assets/Styled/styled-text';
import { Button } from '../../assets/Styled/styled-forms'
import useForm from '../../hooks/useForm'


const ShoppingCartPage = (props) => {

    useValidations()

    const dataUser = useRequestData({}, 'profile')
    const user = dataUser && dataUser.user

    const pathParams = useParams();
    const [orderList, setOrderList] = useState();
    const { form, handleInputChange, resetState } = useForm({cash: "", creditcard: ""})

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
            
            {/* {info.name && <div>{info.name}</div> }
                        {typeof info === "string" && <div>{info}</div>} */}
            <>
            {array && array.map( (info) => {
                if (info.name) {
                return (
                    <CardProduct
                    img={info.photoUrl} 
                    price={info.price} 
                    description={info.description} 
                    idKey={info.id} 
                    name={info.name}
                    all={info}
                    qtde={typeof info === "string" && info}
                    >
                    </CardProduct>
                )
                }
            })}
            </>
            <SectionTitle>Forma de pagamento</SectionTitle>
            <form>
                <input 
                 onChange={handleInputChange}
                 type="radio"
                 name="radioButton"
                 value={form.cash}
                 id="cash"
                 required
                />
                <label for="cash">Dinheiro</label><br/>
                <input 
                 onChange={handleInputChange} 
                 type="radio" 
                 name="radioButton"
                 id="creditCard"
                 value={form.creditcard} 
                 required
                />
                <label form="creditCard">Cartão de crédito</label>
            </form>
            <Button>Confirmar</Button>
            <NavBar section={'shoppingCart'}/>
        </div>
    )
}

export default ShoppingCartPage