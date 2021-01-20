import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { DivRestName, DivCategory, Container, DivDeli, DivShipping, DivAdress } from './Styles'

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 328,
      padding: 0,
      borderRadius: 8,
      borderBottom: 'none',
      boxShadow: 'none',
      marginTop: 17,
    },
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  
  export default function CardRestaurant(props) {
      const { imgObject, restName, restCategory, restDeliveryTime, restShipping, restAdress } = props
    const classes = useStyles();

    return(
        <div className={classes.main}>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    height="120"
                    width="328"
                    image={imgObject}
                />
                <CardContent className={classes.root}>
                    <DivRestName>{restName}</DivRestName>
                    <DivCategory>{restCategory}</DivCategory>
                    <Container>
                        <DivDeli>{restDeliveryTime - 10} - {restDeliveryTime} min</DivDeli>
                        <DivShipping>Frete R${restShipping},00</DivShipping>
                    </Container>
                    <DivAdress>{restAdress}</DivAdress>
                </CardContent>
            </Card>
        </div>

    )

  }