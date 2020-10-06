import React, { useEffect, useState } from 'react';
import { Container, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useProtectedPage } from '../../hooks/useProtection';
import { getAllRestaurants } from '../../services/restaurants';
import { SearchInput } from './styled'
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';

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
                />
            </SearchInput>
            <Container>
                {searchValue === '' ? <p>Busque por nome de restaurante</p> : (searchValue !== '' && restaurantArray.length > 0 ? <RestaurantsList array={restaurantArray}/> : <p>Não encontramos :(</p>) }
            </Container>            
        </Container>
     );
}
 
export default SearchPage;