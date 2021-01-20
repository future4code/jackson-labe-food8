import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import { useHistory } from 'react-router-dom'
import {goToEditProfile, goToEditAddress} from '../../routes/Coordinator'

// hooks:
import useRequestData from '../../hooks/useRequestData'
import useValidations from '../../hooks/useValidations'

//functions:
import convertTimestampToDate from '../../functions/convertTime'
import handleMoney from '../../functions/handleMoney'

//images:
import editIcon from '../../assets/edit.svg'

// estilo:
import {PageContainer, ProfileInfoContainer, TextContainer, Info, EditImg, ListContainer, OrderContainer, GreenTitle, DetailText, BoldText } from './styled'
import {SectionTitle, AddressInfoContainer, GrayText, SimpleText} from '../../assets/Styled/styled-text'


const ProfilePage = () => {

    useValidations()

    const history = useHistory()

    const dataUser = useRequestData({}, 'profile')
    const user = dataUser && dataUser.user

    const dataOrders = useRequestData({}, 'orders/history/')
    const orders = dataOrders && dataOrders.orders

    const dataAddress = useRequestData({}, 'profile/address/')
    const address = dataAddress && dataAddress.address

    const arrangeEditProfile = () => {
        goToEditProfile(history)
        localStorage.setItem('name', user.name)
        localStorage.setItem('email', user.email)
        localStorage.setItem('cpf', user.cpf)
    }

    const arrangeEditAddress = () => {
        goToEditAddress(history)
        localStorage.setItem('street', address.street)
        localStorage.setItem('number', address.number)
        localStorage.setItem('apartment', address.apartment)
        localStorage.setItem('neighbourhood', address.neighbourhood)
        localStorage.setItem('city', address.city)
        localStorage.setItem('state', address.state)
    }

    if (!user || !orders) {
        return (
            <div></div>
        )
    }
        
    return (
        <PageContainer>

            <ProfileInfoContainer>
                <TextContainer>
                    <Info>{user.name} </Info>
                    <Info>{user.email}</Info>
                    <Info>{user.cpf}</Info>
                </TextContainer>
                    <EditImg 
                    src={editIcon}
                    onClick = {() => arrangeEditProfile()}
                    />
            </ProfileInfoContainer>

            <AddressInfoContainer>
                 <TextContainer>
                    <GrayText>Endereço cadastrado</GrayText>
                    <Info>{user.address}</Info>
                </TextContainer>
                    <EditImg 
                    src={editIcon}
                    onClick = {() => arrangeEditAddress()}
                    />
            </AddressInfoContainer>

            <SectionTitle>
            Histórico de pedidos
            </SectionTitle>

            {orders &&

            (orders.length > 0)?
            <ListContainer>{orders.map( (order) => {
               return (
                <OrderContainer>
                <TextContainer>
                    <GreenTitle>{order.restaurantName}</GreenTitle>
                    <DetailText>{convertTimestampToDate(order.createdAt)}</DetailText>
                    <BoldText>SUBTOTAL {handleMoney(order.totalPrice)}</BoldText>
                </TextContainer>
                </OrderContainer>
               )
            })}
            </ListContainer>:
            <SimpleText>Você não realizou nenhum pedido</SimpleText>

            }
            
            <NavBar section={'profile'}/>
            
        </PageContainer>
    )
}

export default ProfilePage