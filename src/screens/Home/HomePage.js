import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import { useProtectedPage } from '../../hooks/useProtection'
import { getAllRestaurants } from '../../services/restaurants';
import { goToSearch } from '../../routes/Coordinator';
import Header from '../../components/Header/Header';
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList';
import CategorySlider from './CategorySlider'
import NavBar from '../../components/NavBar/NavBar'
import { theme } from '../../constants/theme'
import { SearchInput } from './styled';

const HomePage = () => {
    const [feedArray, setFeedArray] = useState([])
    const [filteredArray, setFilteredArray] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('')
    const history = useHistory()
    
    useProtectedPage()
    
    useEffect(() => {
        getAllRestaurants(setFeedArray)
    }, [])
    
    useEffect(() => {
        filterByCategory()
    }, [feedArray, currentCategory])

    const handleClick = (category) => {
        if(currentCategory === '' || currentCategory !== category){
            setIsFiltered(true)
            setCurrentCategory(category)
            filterByCategory()
        } else if (currentCategory === category){
            setIsFiltered(false)
            setCurrentCategory('')
        }
    }

    const filterByCategory = () => {
        const categoryFilteredArray = feedArray.filter((restau) => {
            return restau.category === currentCategory
        })
        setFilteredArray(categoryFilteredArray)
    }

    const feedRender = isFiltered ? <RestaurantsList array={filteredArray}/> : <RestaurantsList array={feedArray}/>
    
    return (
        <ThemeProvider theme={theme}>
            <Header title={"FutureEats"}/>
            <SearchInput variant="outlined">
                <OutlinedInput id="component-outlined" 
                    startAdornment={
                        <InputAdornment position='start'>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        </InputAdornment>
                    }
                    onClick={() => goToSearch(history)}
                    placeholder={"Restaurante"}
                    />
            </SearchInput>
            <CategorySlider array={feedArray} getCategory={handleClick}/>
            {feedRender}
            <NavBar section={'homepage'}/>
        </ThemeProvider>
    )
}

export default HomePage;