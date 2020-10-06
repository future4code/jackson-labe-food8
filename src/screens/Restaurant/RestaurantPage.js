import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { baseUrl } from '../../constants/urls';
import { useProtectedPage } from '../../hooks/useProtection';
import { goToLogin } from '../../routes/Coordinator';

const RestaurantPage = () => {
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);
    const [orederItems, setOrderItems] = useState([]);
    const token = localStorage.getItem("token");
    const pathParams = useParams()

    const requestGetDetail = (id) =>{
        const headers = {
            headers: {
                auth: token
            }
        };
        axios
        .get(`${baseUrl}restaurants/${id}`, headers)
        .then((response) =>{
            setMenu(response.data.restaurant.products)
        })
        .catch((error) =>{
            alert(error.message)
        })
    }

    const mapMenu =
        menu.map((category) =>{
            return category.category
        });

    useProtectedPage()

    useEffect(() =>{
        requestGetDetail(pathParams.id)
    }, [requestGetDetail])

    return (
        <div>
            {restaurant.logoUrl}
            {restaurant.name}
            {restaurant.category}
            {restaurant.deliveryTime}
            {restaurant.shipping}
            {restaurant.address}
            {menu.filter((it) =>{
                return it.category === mapMenu
            })
            .map((info) =>{
                return(
                    <div>
                        {info.category}
                        <hr/>
                        {info.photoUrl}
                        {info.name}
                        {info.description}
                        {info.price} 
                        <button>Adicionar</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default RestaurantPage