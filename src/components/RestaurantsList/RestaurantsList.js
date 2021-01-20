import React from 'react';
import styled from 'styled-components'
import RestaurantCard from '../../screens/Home/RestaurantCard';

const FeedContainer = styled.section`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    margin-bottom: 10vh;
`

const RestaurantsList = (props) => {
    const { array } = props
    
    return ( 
        <FeedContainer>
            {array.map((restau) => {
                return <RestaurantCard key={restau.id} id={restau.id} img={restau.logoUrl} name={restau.name} deliveryTime={restau.deliveryTime} shipping={restau.shipping}/>
            })}
        </FeedContainer>
     );
}
 
export default RestaurantsList;