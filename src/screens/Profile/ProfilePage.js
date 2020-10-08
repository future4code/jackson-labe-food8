import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import { useHistory } from 'react-router-dom'
import {goToEditProfile, goToEditAddress} from '../../routes/Coordinator'

// hooks:
import { useProtectedPage } from '../../hooks/useProtection'
import useRequestData from '../../hooks/useRequestData'

import convertTimestampToDate from '../../functions/convertTime'

//images:
import editIcon from '../../assets/edit.svg'

// estilo:
import {PageContainer, ProfileInfoContainer, TextContainer, Info, EditImg, ListContainer, OrderContainer, GreenTitle, DetailText, BoldText } from './styled'
import {SectionTitle, AddressInfoContainer, GrayText, SimpleText} from '../../assets/Styled/styled-text'


const ProfilePage = () => {

    useProtectedPage()

    const history = useHistory()

    const dataUser = useRequestData({}, 'profile')
    const user = dataUser && dataUser.user

    const dataOrders = useRequestData({}, 'orders/history/')
    const orders = dataOrders && dataOrders.orders

    const arrangeEditProfile = () => {
        goToEditProfile(history)
        localStorage.setItem('name', user.name)
        localStorage.setItem('email', user.email)
        localStorage.setItem('cpf', user.cpf)
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
                    onClick = {() => goToEditAddress(history)}
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
                    <BoldText>SUBTOTAL R${order.totalPrice.toFixed(2).replace('.',',')}</BoldText>
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