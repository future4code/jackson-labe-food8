import React, { useEffect, useState } from 'react';
import { Container, IconButton, InputAdornment, InputLabel, MuiThemeProvider, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import { SearchInput } from './styled'
import Header from '../../components/Header/Header';
import { useProtectedPage } from '../../hooks/useProtection';
import { getAllRestaurants } from '../../services/restaurants';
import { ThemeProvider } from '@material-ui/core/styles'
import {theme} from '../../constants/theme'


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
            {searchValue === '' ? <p>Busque por nome de restaurante</p> : (searchValue !== '' && restaurantArray.length > 0 ? <RestaurantsList array={restaurantArray}/> : <p>Não encontramos :(</p>) }
        </ThemeProvider>
     );
}
 
export default SearchPage;