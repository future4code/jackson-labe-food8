import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { baseUrl } from '../../constants/urls';
import { useProtectedPage } from '../../hooks/useProtection';
import SimpleModal from './styled';


const RestaurantPage = () => {
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState({});
    const token = localStorage.getItem("token");
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [visibilityCard, setVisibilityCard] = useState(false);
    const [nameButton, setNameButton] = useState(true);
    const [orderEnd, setOrderEnd] = useState([]);
    const [allDetails, setAllDetails] = useState([]);
    const pathParams = useParams();


    const buttonName = nameButton ? "Adicionar" : "Remover";


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

    const clickButtonadd = (item) =>{
        setVisibilityCard(!visibilityCard);
        setNameButton(!nameButton);
        setAllDetails(item);
    };

    const clickButtonCard = (qtd) =>{
        setVisibilityCard(!visibilityCard);
        setOrder({...allDetails.id, ...qtd});
        let arrayId = [...orderEnd, order]
        setOrderEnd(arrayId)
    };

    const clickButtonRm = (item) =>{
        setNameButton(!nameButton);
        orderEnd.splice(orderEnd.indexOf(item.id), 1)
    };

    const clickCart = (all, selection) =>{
        
    }

    const fnButton = nameButton ? clickButtonadd : clickButtonRm

    useEffect(()=>{
      getCategories()
    }, [categories]);

    useProtectedPage()

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
                                            <img src={info.photoUrl}/>
                                            <p>{info.name}</p>
                                            <p>{info.description}</p>
                                            <div>{info.price} </div>
                                            <button onClick={()=>{fnButton(info)}}>{buttonName}</button>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                   </div>
               )

            })
            }
            <SimpleModal click={clickButtonCard} state={visibilityCard}/>
        </div>
    )
}

export default RestaurantPage