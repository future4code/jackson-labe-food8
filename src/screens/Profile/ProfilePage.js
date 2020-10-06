import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import { useHistory } from 'react-router-dom'
import {goToEditProfile} from '../../routes/Coordinator'


// hooks:
import { useProtectedPage } from '../../hooks/useProtection'
import useRequestData from '../../hooks/useRequestData'

//images:
import editIcon from '../../assets/edit.svg'

// estilo:
import {ProfilePageContainer, ProfileInfoContainer, AddressInfoContainer, TextContainer, InfoTitle, Info, EditImg} from './styled'


const ProfilePage = () => {

    useProtectedPage()

    const history = useHistory()

    const data = useRequestData({}, 'profile')
    const user = data && data.user

    const orders = useRequestData({}, 'orders/history/')

    return (
        <ProfilePageContainer>
            {user &&
            <ProfileInfoContainer>
                <TextContainer>
                    <Info>{user.name} </Info>
                    <Info>{user.email}</Info>
                    <Info>{user.cpf}</Info>
                </TextContainer>
                <EditImg 
                    src={editIcon}
                    onClick ={() => goToEditProfile(history)}
                />
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