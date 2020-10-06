import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginPage from '../screens/Login+SignUp/LoginPage'
import SignUpPage from '../screens/Login+SignUp/SignUpPage'
import HomePage from '../screens/Home/HomePage'
import RestaurantPage from '../screens/Restaurant/RestaurantPage'
import ShoppingCartPage from '../screens/ShoppingCart/ShoppingCartPage'
import ProfilePage from '../screens/Profile/ProfilePage'
import SearchPage from '../screens/SearchPage/SearchPage'
import EditProfile from '../screens/Profile/EditProfile'

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
                <SignUpPage/> 
            </Route>
            <Route exact path='/restaurants/:id'>
                <RestaurantPage/> 
            </Route>
            <Route exact path='/shoppingcart'>
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
            <Route>
                <div>erro 404</div> 
            </Route>
        </Switch>
    )
}

export default Router