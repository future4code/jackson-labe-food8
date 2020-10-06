import React from 'react';
import { Box, Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';
import { RestaurantName, RestaurantCardInfo } from './styled'
import { useHistory } from 'react-router-dom';
import {goToRestaurant} from '../../routes/Coordinator'

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
      display: 'flex',
      flexWrap: 'wrap',
  },
  deliveryTime: {
    width: '148px'
   },
   freight: {
     width: '140px',
     textAlign: 'right',    
  }
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
                <RestaurantName color="primary">
                    {name}
                </RestaurantName>
                <RestaurantCardInfo component="div" variant="body2">
                    <Box className={classes.deliveryTime}>
                        {deliveryTime} - {deliveryTime - 10} min
                    </Box>
                    <Box className={classes.freight}>
                        Frete R${shipping},00
                    </Box>
                </RestaurantCardInfo>
            </CardContent>
        </Card>
     );
}
 
export default RestaurantCard;