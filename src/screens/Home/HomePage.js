import React, { useEffect, useState } from 'react'
import { Container, IconButton, InputAdornment, makeStyles, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useProtectedPage } from '../../hooks/useProtection'
import { getAllRestaurants } from '../../services/restaurants';
import { FeedContainer } from './styled';
import RestaurantCard from './RestaurantCard';

import NavBar from '../../components/NavBar/NavBar'

const HomePage = () => {
    const [feedArray, setFeedArray] = useState([])

    useProtectedPage()

    useEffect(() => {
        getAllRestaurants(setFeedArray)
    })

    return (
        <Container>
            <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                label="Restaurante"
                fullWidth
                startAdornment={
                    <InputAdornment position='start'>
                      <IconButton>
                        <SearchIcon/>
                      </IconButton>
                    </InputAdornment>
                }
                // onChange={}
                // value={}
            />
            <FeedContainer>
                {feedArray.map((restau) => {
                    return <RestaurantCard img={restau.logoUrl} name={restau.name} deliveryTime={restau.deliveryTime} shipping={restau.shipping}/>
                })}
            </FeedContainer>
            <div>
              <NavBar section={'homepage'}/>
            </div>
        </Container>
    )
}

export default HomePage;