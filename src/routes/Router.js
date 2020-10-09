import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginPage from '../screens/Login+SignUp/LoginPage'
import SignUpPage from '../screens/Login+SignUp/SignUpPage'
import HomePage from '../screens/Home/HomePage'
import RestaurantPage from '../screens/Restaurant/RestaurantPage'
import ShoppingCartPage from '../screens/ShoppingCart/ShoppingCartPage'
import ProfilePage from '../screens/Profile/ProfilePage'

import AddressPage from '../screens/Login+SignUp/AddressPage'

import SearchPage from '../screens/SearchPage/SearchPage'
import EditProfile from '../screens/Profile/EditProfile'
import EditAddress from '../screens/Profile/EditAddress'


import Header from '../components/Header/Header'
const Router = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <HomePage/> 
            </Route>
            <Route exact path='/busca'>
                <SearchPage/> 
            </Route>
            <Route exact path='/login'>
                <LoginPage/> 
            </Route>
            <Route exact path='/signup'>
                <Header back={true}/>
                <SignUpPage/> 
            </Route>
            <Route exact path='/signup/address'>
                <Header back={true}/>
                <AddressPage/> 
            </Route>
            <Route exact path='/restaurants/:id'>
                <Header title="Restaurante" back={true}/>
                <RestaurantPage/> 
            </Route>
            <Route exact path='/shoppingcart/:state?'>
                <Header title="Meu carrinho" back={true}/>
                <ShoppingCartPage/> 
            </Route>
            <Route exact path='/profile'>
                <Header title="Meu perfil"/>
                <ProfilePage/> 
            </Route>
            <Route exact path='/profile/edit-profile'>
                <Header title="Editar" back={true}/>
                <EditProfile/> 
            </Route>
            <Route exact path='/profile/edit-address'>
                <Header title="Endereço" back={true}/>
                <EditAddress/> 
            </Route>
            <Route>
                <div>erro 404</div> 
            </Route>
        </Switch>
    )
}

export default Router