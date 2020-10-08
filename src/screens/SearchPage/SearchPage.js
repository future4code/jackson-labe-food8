import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useProtectedPage } from '../../hooks/useProtection';
import { getAllRestaurants } from '../../services/restaurants';
import Header from '../../components/Header/Header';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import { theme } from '../../constants/theme'
import { SearchInput, DefaultText } from './styled'


const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [feedArray, setFeedArray] = useState([])
    const [restaurantArray, setRestaurantArray] = useState([])

    useProtectedPage()

    useEffect(() => {
        getAllRestaurants(setFeedArray)
    }, [])

    useEffect(() => {
        const restaurantArray = feedArray.filter((rest) => {
            return rest.name.toLowerCase().match(searchValue.toLowerCase())
        })
        setRestaurantArray(restaurantArray)
    }, [searchValue])

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const doSearchMsg = <DefaultText>Busque por nome de restaurante</DefaultText>
    const notFoundMsg = <DefaultText>Não encontramos :(</DefaultText>

    const searchRender = searchValue === '' ? doSearchMsg : (searchValue !== '' && restaurantArray.length > 0 ? <RestaurantsList array={restaurantArray}/> : notFoundMsg) 

    return ( 
        <ThemeProvider theme={theme}>
            <Header back title={"Busca"}/>
            <SearchInput variant="outlined" color="primary">
                <OutlinedInput id="component-outlined" 
                    startAdornment={
                        <InputAdornment position='start'>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        </InputAdornment>
                    }
                    onChange={onChangeSearch}
                    value={searchValue}
                    placeholder={"Restaurante"}
                    autoFocus
                    inputProps={{
                        'data-testid': 'search'
                    }}
                    />
            </SearchInput>
            {searchRender}
        </ThemeProvider>
     );
}
 
export default SearchPage;