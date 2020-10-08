import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { baseUrl } from '../../constants/urls';
import { useProtectedPage } from '../../hooks/useProtection';
import SimpleModal from './styled';

import { useValidations } from '../../hooks/useValidations'


const RestaurantPage = () => {

    useValidations()

    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);
    const token = localStorage.getItem("token");
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [visibilityCard, setVisibilityCard] = useState(false);
    const [allDetails, setAllDetails] = useState([]);
    const pathParams = useParams();

    const requestGetDetail = (id) =>{
        const headers = {
            headers: {
                auth: token
            }
        };
        axios
        .get(`${baseUrl}restaurants/${id}`, headers)
        .then((response) =>{
            setMenu(response.data.restaurant.products);
            setRestaurant(response.data.restaurant);
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const onlyUnique = (value, index, self) =>{
        return self.indexOf(value) === index;
    };

    const getCategories = () => {
      const filteredArray = categories.filter(onlyUnique)
      setFilteredCategories(filteredArray)
    };

    const clickButtonAdd = (item) =>{
        setVisibilityCard(!visibilityCard);
        let newArray = [...allDetails,item];
        setAllDetails([...newArray]);
    };
    

    const clickButtonCard = (qtd, reset) =>{
        const element = document.getElementById('quantity')
        const isValid = element.checkValidity()
        element.reportValidity()
        if(isValid){
            setVisibilityCard(!visibilityCard);
            let newArray = [...allDetails, qtd]
            localStorage.setItem("all", JSON.stringify(newArray));
            setAllDetails([...newArray]);
        }
        reset()
    };

    const clickButtonRm = (idItem) =>{
        let array = JSON.parse(localStorage.getItem("all"))|| [];
        array.splice(array.indexOf(idItem), 2);
        let arrayId = array.map((some) =>{
                return some.id
        })
        for(let i = 0; i <= arrayId.length; i++){
            if(idItem === arrayId){
                array.splice(i, 2)
            }
        }
        localStorage.setItem("all", JSON.stringify(array));
    };

    const button = (it, details) =>{
        const button = document.getElementById(it)
        const infoButton = button.textContent;
        if(infoButton === "Adicionar"){
            button.innerText="Remover"
            clickButtonAdd(details)
        }
        else{
            button.innerText="Adicionar"
            clickButtonRm(it)
        }
    };

    const clickCart = (all, selection) =>{
        
    };

    useEffect(()=>{
      getCategories()
    }, [categories]);

    useEffect(() =>{
        requestGetDetail(pathParams.id);
    }, []);

    useEffect(() =>{
        const mapMenu =
        menu.map((category) =>{   
            return category.category
        });
        setCategories([...mapMenu]);
    }, [menu]);


    return (
        <div>
            <img src={restaurant.photoUrl}/>
            <p>{restaurant.name}</p>
            <p>{restaurant.category}</p>
            <p>{[restaurant.deliveryTime - 10]} - {restaurant.deliveryTime} min</p>
            <p>Frete R${restaurant.shipping},00</p>
            <p>{restaurant.address}</p>
            {filteredCategories.map((item) =>{
                return (
                   <div>
                        <div>{item}</div>
                        <hr/>
                        <div>
                            {menu.map((info) =>{
                                if(info.category === item){
                                    return(
                                        <div>
                                            <div>
                                                <img src={info.photoUrl}/>
                                                <p>{info.name}</p>
                                                <p>{info.description}</p>
                                                <div>R${info.price}</div>
                                                <button id={info.id} onClick={()=>button(info.id,info)}>Adicionar</button>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                   </div>
               )

            })
            }
            <SimpleModal click={clickButtonCard} stateCard={visibilityCard}/>
        </div>
    )
}

export default RestaurantPage