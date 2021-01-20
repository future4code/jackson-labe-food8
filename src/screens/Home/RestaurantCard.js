import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';
import { goToRestaurant } from '../../routes/Coordinator'
import { GrayText, GreenTitle } from '../../assets/Styled/styled-text'
import { RestaurantCardInfo, TitleWrapper } from './styled'


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '8px',
    marginLeft: '16px',
    marginRight: '16px',
    width: '328px',
    height: '188px',
  },
  media: {
    height: '120px',
  },
  rectangle: {
      padding: 0,
      height: '68px',
      display: 'flex',
      flexWrap: 'wrap',
      boxSizing: 'border-box'
  },
}));

const RestaurantCard = (props) => {
    const { id, img, name, deliveryTime, shipping } = props
    const classes = useStyles()
    const history = useHistory()

    const onClickCard = () => {
      goToRestaurant(history, id)
    }

    return ( 
        <Card className={classes.root} onClick={onClickCard}>
            <CardMedia className={classes.media} image={img} alt="Logo do Restaurante"/>
            <CardContent className={classes.rectangle}>
                <TitleWrapper>
                  <GreenTitle>
                      {name}
                  </GreenTitle>
                </TitleWrapper>
                <RestaurantCardInfo>
                    <GrayText>
                        {deliveryTime} - {deliveryTime + 10} min
                    </GrayText>
                    <GrayText>
                        Frete R${shipping},00
                    </GrayText>
                </RestaurantCardInfo>
            </CardContent>
        </Card>
     );
}
 
export default RestaurantCard;