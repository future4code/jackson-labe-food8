import React from 'react';
import { Box, Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '8px',
      marginLeft: '16px',
      marginRight: '16px',
      width: '328px',
      height: '188px',
    },
    media: {
      height: '90px',
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


const CardRestaurant = (props) =>{
    const { img, restaurantName, category, deliveryTime, shipping, address } = props;
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={img} alt={"Logo do Restaurante"}/>
            
        </Card>
    )
}
