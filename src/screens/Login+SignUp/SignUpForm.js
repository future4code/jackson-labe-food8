import React, { useState } from 'react'
import { Container, Typography, TextField, Button, InputM } from '@material-ui/core'


// const useStyles = makeStyles((theme) => ({
//     root: {
//       marginTop: '8px',
//       marginLeft: '16px',
//       marginRight: '16px',
//       maxWidth: '328px',
//       maxHeight: '188px',
//     },
//     media: {
//       height: '120px',
//     },
//     rectangle: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     deliveryTime: {
//       width: '148px'
//      },
//      freight: {
//        width: '140px',
//        textAlign: 'right',    
//     }
//   }));

export const SignUpForm = () => {

    return (
        <form>
            <TextField 
            //value={}
            name={'name'}
            //onChange={}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
            />
            <TextField 
            //value={}
            name={'E-Mail'}
            //onChange={}
            label={'E-Mail'}
            type={'email'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
            />
            <TextField 
            //value={}
            name={'cpf'}
            //onChange={}
            label={'Cpf'}
            type={'password'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
            />
            <TextField 
            //value={}
            name={'password'}
            //onChange={}
            label={'Password'}
            type={'password'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
            />
            <TextField 
            //value={}
            name={'cofirmpassword'}
            //onChange={}
            label={'ConfrimPassword'}
            type={'password'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
            />
            <Button
             type="submit"
             variant="contained"
             color="primary"
             fullWidth
             //onClick={}
             >
             Criar
             </Button> 

        </form>
    )

}