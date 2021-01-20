import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Hr, P } from '../../components/CardProduct/Styles';
import CardProduct from '../../components/CardProduct/CardProduct';
import CardRestaurant from '../../components/CardProduct/CardRestaurant'
import { baseUrl } from '../../constants/urls';
import SimpleModal from './styled';
import useForm from '../../hooks/useForm';
import { useValidations } from '../../hooks/useValidations'
import NavBar from '../../components/NavBar/NavBar'

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
    const { resetState } = useForm()


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
        localStorage.setItem("restaurantId", restaurant.id)
    };
  
    const clickButtonRm = (itemId) =>{
      let array = JSON.parse(localStorage.getItem("all"))|| [];
      
      for(let i = 0; i <= array.length; i++){
          if(array[i] && array[i].id && itemId === array[i].id){
              array.splice(i, 2)
          }
      }
      localStorage.setItem("all", JSON.stringify(array));
    };

    const clickButtonCard = (qtd) =>{
        const element = document.getElementById('quantity')
        const isValid = element.checkValidity()
        element.reportValidity()
        if(isValid){
            setVisibilityCard(!visibilityCard);
            let newArray = [...allDetails, qtd]
            localStorage.setItem("all", JSON.stringify(newArray));
            setAllDetails([...newArray]);
            return <CardProduct qtde={qtd}/>
        }
        resetState()
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
            <CardRestaurant 
                imgObject={restaurant.logoUrl} 
                restName={restaurant.name} 
                restCategory={restaurant.category} 
                restDeliveryTime={restaurant.deliveryTime} 
                restShipping={restaurant.shipping}
                restAdress={restaurant.address}
            />
            {filteredCategories.map((item) =>{
                return (
                   <div>
                        <P>{item}</P>
                        <Hr/>
                        <div>
                            {menu.map((info, index) =>{
                                if(info.category === item){
                                    return( 
                                        <CardProduct 
                                            img={info.photoUrl}
                                            price={info.price} 
                                            description={info.description} 
                                            idKey={info.id} 
                                            name={info.name}
                                            all={info}
                                            clickButtonAdd={clickButtonAdd}
                                            clickButtonRm={clickButtonRm}
                                        />
                                    )
                                }
                            })}
                        </div>
                   </div>
               )

            })
            }
            <SimpleModal click={clickButtonCard} stateCard={visibilityCard}/>
            <NavBar/>
        </div>
    )
}

export default RestaurantPage

