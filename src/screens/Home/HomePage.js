import React, { useEffect, useState } from 'react'
import { Container, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useProtectedPage } from '../../hooks/useProtection'
import { getAllRestaurants } from '../../services/restaurants';
import { SearchInput } from './styled';
import NavBar from '../../components/NavBar/NavBar'
import { goToSearch } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';

const HomePage = () => {
    const [feedArray, setFeedArray] = useState([])
    const history = useHistory()
    
    useProtectedPage()
    
    useEffect(() => {
        getAllRestaurants(setFeedArray)
    }, [])
    
    

    return (
        <div>
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
                    onClick={() => goToSearch(history)}
                />
            </SearchInput>
                <RestaurantsList array={feedArray}/>
            </Container>
            <NavBar section={'homepage'}/>
            </div>
    )
}

export default HomePage;