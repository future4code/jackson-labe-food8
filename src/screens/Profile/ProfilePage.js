import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'

// hooks:
import { useProtectedPage } from '../../hooks/useProtection'
import useRequestData from '../../hooks/useRequestData'

//images:
import editIcon from '../../assets/edit.svg'

import {ProfilePageContainer, ProfileInfoContainer, AddressInfoContainer, TextContainer, InfoTitle, Info, EditImg} from './styled'


const ProfilePage = () => {

    useProtectedPage()

    const data = useRequestData({}, 'profile')
    const user = data && data.user

    const orders = useRequestData({}, 'orders/history/')

    return (
        <ProfilePageContainer>
            <Header title='Meu perfil'/>
            {user &&
            <ProfileInfoContainer>
                <TextContainer>
                    <Info>{user.name} </Info>
                    <Info>{user.email}</Info>
                    <Info>{user.cpf}</Info>
                </TextContainer>
                <EditImg src={editIcon}/>
            </ProfileInfoContainer>
            }

            {user &&
            <AddressInfoContainer>
                <TextContainer>
                    <InfoTitle>Endereço cadastrado</InfoTitle>
                    <Info>{user.address}</Info>
                </TextContainer>
                <EditImg src={editIcon}/>
            </AddressInfoContainer>
            }

            <div>Histórico de pedidos</div>

            {orders &&

            (orders.length > 0)?
            <div>{orders.map( (order) => {
               return (
                   <div>tem pedido</div>
               )
            })}
            </div>:
            <div>Você não realizou nenhum pedido</div>

            }
            
            <NavBar section={'profile'}/>
        </ProfilePageContainer>
    )
}

export default ProfilePage