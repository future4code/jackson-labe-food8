import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginPage from '../screens/Login+SignUp/LoginPage'
import SignUpPage from '../screens/Login+SignUp/SignUpPage'
import HomePage from '../screens/Home/HomePage'
import RestaurantPage from '../screens/Restaurant/RestaurantPage'
import ShoppingCartPage from '../screens/ShoppingCart/ShoppingCartPage'
import ProfilePage from '../screens/Profile/ProfilePage'
import SearchPage from '../screens/SearchPage/SearchPage'

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
                <ProfilePage/> 
            </Route>
            <Route>
                <div>erro 404</div> 
            </Route>
        </Switch>
    )
}

export default Router