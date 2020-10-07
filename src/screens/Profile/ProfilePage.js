import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import { useHistory } from 'react-router-dom'
import {goToEditProfile, goToEditAddress} from '../../routes/Coordinator'

// hooks:
import { useProtectedPage } from '../../hooks/useProtection'
import useRequestData from '../../hooks/useRequestData'

//images:
import editIcon from '../../assets/edit.svg'

// estilo:
import {PageContainer, ProfileInfoContainer, TextContainer, Info, EditImg} from './styled'

import {SectionTitle, AddressInfoContainer, GrayText, SimpleText} from '../../assets/Styled/styled-text'


const ProfilePage = () => {

    useProtectedPage()

    const history = useHistory()

    const data = useRequestData({}, 'profile')
    const user = data && data.user

    const orders = useRequestData({}, 'orders/history/')

    const editProfile = () => {
        goToEditProfile(history)
        localStorage.setItem('name', user.name)
        localStorage.setItem('email', user.email)
        localStorage.setItem('cpf', user.cpf)
    }

    const editAddress = () => {
        goToEditAddress(history)
    }

    if (!user) {
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
                    onClick = {() => editProfile()}
                    />
            </ProfileInfoContainer>

            <AddressInfoContainer>
                 <TextContainer>
                    <GrayText>Endereço cadastrado</GrayText>
                    <Info>{user.address}</Info>
                </TextContainer>
                    <EditImg 
                    src={editIcon}
                    onClick = {() => editAddress()}
                    />
            </AddressInfoContainer>

            <SectionTitle>
            Histórico de pedidos
            </SectionTitle>

            {orders &&

            (orders.length > 0)?
            <div>{orders.map( (order) => {
               return (
                   <div>tem pedido</div>
               )
            })}
            </div>:
            <SimpleText>Você não realizou nenhum pedido</SimpleText>

            }
            
            <NavBar section={'profile'}/>
            
        </PageContainer>
    )
}

export default ProfilePage