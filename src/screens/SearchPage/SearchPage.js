import React, { useEffect, useState } from 'react';
import { Container, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import { SearchInput } from './styled'
import Header from '../../components/Header/Header';
import { useProtectedPage } from '../../hooks/useProtection';
import { getAllRestaurants } from '../../services/restaurants';


const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [feedArray, setFeedArray] = useState([])
    const [restaurantArray, setRestaurantArray] = useState([])

    useProtectedPage()

    useEffect(() => {
        getAllRestaurants(setFeedArray)
    }, [])

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value) 
        getFilteredArray()
    }

    const getFilteredArray = () => {
        const restaurantArray = feedArray.filter((rest) => {
            return rest.name.toLowerCase().match(searchValue.toLowerCase())
        })
        setRestaurantArray(restaurantArray)
    }

    return ( 
        <Container>
            <Header back title={"Busca"}/>
            <SearchInput variant="outlined">
                <InputLabel htmlFor="component-outlined" disableAnimation>Restaurante</InputLabel>
                <OutlinedInput id="component-outlined" startAdornment={
                        <InputAdornment position='start'>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        </InputAdornment>
                    }
                    onChange={onChangeSearch}
                    label="Restaurante"
                    value={searchValue}
                    autoFocus
                />
            </SearchInput>
            <Container>
                {searchValue === '' ? <p>Busque por nome de restaurante</p> : (searchValue !== '' && restaurantArray.length > 0 ? <RestaurantsList array={restaurantArray}/> : <p>Não encontramos :(</p>) }
            </Container>            
        </Container>
     );
}
 
export default SearchPage;