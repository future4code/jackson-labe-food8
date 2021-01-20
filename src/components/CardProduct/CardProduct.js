import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Button, ButtonRemove, DivButton, Hug, DivName, DivDesc, DivPrice, DivQtde, ContainerQtd } from './Styles';
import handleMoney from '../../functions/handleMoney';



const useStyles = makeStyles ({
    root: {
      display: 'flex',
      rounded: '8',
      marginBottom: 10,
      width: 328,
      height: 112,
      paddingBottom: 0,
      borderRadius: 8,
      border: '1px solid gray',
      boxShadow: 'none',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: "80%",
      marginLeft: 10,
    },
    content: {
        flex: '1 0 auto',
        padding: 0,
        paddingBottom: -24,
    },
    cover: {
      width: 96,
      height: 112, 
      paddingBottom: 0,
    },
  });
  
  export default function CardProduct(props) {
    const classes = useStyles();


    const button = (id, details) =>{
      const button = document.getElementById(id)
      const infoButton = button.textContent;
      if(infoButton === "Adicionar"){
          button.innerText="Remover"
          props.clickButtonAdd(details)
      }
      else{
          button.innerText="Adicionar"
          props.clickButtonRm(id)
      }
    };
      
    return (
        <Hug>
        <Card className={classes.root} borderRadius={8}>
            <CardMedia
            className={classes.cover}
            image={props.img}
            title={props.name}
            />

          <div className={classes.details}>
            <CardContent className={classes.content}>
              <ContainerQtd>
                <DivName>
                  {props.name}
                </DivName>
                {props.page === 'cart'?<DivQtde >{props.qtde}</DivQtde>: '' }
                
              </ContainerQtd>
              <DivDesc>
                {props.description}
              </DivDesc>
              <DivPrice>
                {handleMoney(props.price)}
              </DivPrice>
              <DivButton>
                {props.page === 'cart'? 
                <ButtonRemove id={props.idKey}>Remover</ButtonRemove>:
                <Button id={props.idKey} onClick={()=>button(props.idKey, props.all)}>Adicionar</Button>
                }
                
              </DivButton>
            </CardContent>
        </div>
      </Card>
      </Hug>
    );
  }