import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Hr, P, DivButton, Button } from '../../components/CardProduct/Styles';
import CardProduct from '../../components/CardProduct/CardProduct';
import CardRestaurant from '../../components/CardProduct/CardRestaurant'
import { baseUrl } from '../../constants/urls';
import { useProtectedPage } from '../../hooks/useProtection';
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

    const clickButtonRm = (item) =>{
        let array = JSON.parse(localStorage.getItem("all"))|| [];
        console.log("Item:", item)
        
        for(let i = 0; i <= array.length; i++){
            if(array[i] && array[i].id && item === array[i].id){
                array.splice(i, 2)
                console.log("bateu aqui")
            }
        }
        console.log("array:", array)
        localStorage.setItem("all", JSON.stringify(array));
    };

    // const button = (it, details) =>{
    //     const button = document.getElementById(it)
    //     const infoButton = button.textContent;
    //     if(infoButton === "Adicionar"){
    //         button.innerText="Remover";
    //         clickButtonAdd(details)
    //     }
    //     else{
    //         button.innerText="Adicionar"
    //         clickButtonRm(it)
    //     }
    // };

    const clickCart = () =>{
        
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
                            {menu.map((info) =>{
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
                                    // (
                                    //     <div>
                                    //         <div>
                                    //             <img src={info.photoUrl}/>
                                    //             <p>{info.name}</p>
                                    //             <p>{info.description}</p>
                                    //             <div>R${info.price}</div>
                                    //             <button id={info.id} onClick={()=>button(info.id,info)}>Adicionar</button>
                                    //         </div>
                                    //     </div>
                                    // )
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

