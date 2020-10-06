import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'

// hooks:
import { useProtectedPage } from '../../hooks/useProtection'
import useRequestData from '../../hooks/useRequestData'


const ProfilePageContainer = styled.div`
    padding-top: 44px;
    font-family: 'Roboto', sans-serif;
`

const ProfileInfoContainer = styled.div`
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #000000;
`


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
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.cpf}</div>
            </ProfileInfoContainer>
            }

            {user &&
            <div>
                <p>Endereço cadastrado</p>
                <p>{user.address}</p>
            </div>
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