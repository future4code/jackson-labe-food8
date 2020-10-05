import React from 'react'
import { useHistory } from "react-router-dom"
import {goToFeed, goToShoppingCart, goToProfile } from '../../routes/Coordinator'
import {NavBarContainer, NavBarButton} from './styled'

// Imagens:
import homePageIcon from '../../assets/homepage.svg'
import shoppingCartIcon from '../../assets/shopping-cart.svg'
import avatarIcon from '../../assets/avatar.svg'
import homePageIconSelected from '../../assets/homepage-selected.svg'
import shoppingCartIconSelected from '../../assets/shopping-cart-selected.svg'
import avatarIconSelected from '../../assets/avatar-selected.svg'


const NavBar = (props) => {

    const history = useHistory()

    return (
        <NavBarContainer>
            <NavBarButton onClick={() => goToFeed(history)}> 
                {props.section === 'homepage'?
                <img src= {homePageIconSelected}/>:
                <img src={homePageIcon}/>
                }

            </NavBarButton>

            <NavBarButton onClick={() => goToShoppingCart(history)}> 
                {props.section === 'shoppingCart'?
                <img src= {shoppingCartIconSelected}/>:
                <img src={shoppingCartIcon}/>
                }
            </NavBarButton> 

            <NavBarButton onClick={() => goToProfile(history)}> 
                {props.section === 'profile'?
                <img src= {avatarIconSelected}/>:
                <img src={avatarIcon}/>
                }
            </NavBarButton> 

        </NavBarContainer>
    )
}

export default NavBar