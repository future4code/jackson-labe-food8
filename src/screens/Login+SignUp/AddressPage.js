import React, { useState } from 'react'
import { AddressForm } from './AddressForm'
import { Container, Typography, TextField, Button, Card } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { primaryColor } from '../../constants/colors'
import { UpperContainer } from './styled'

const MainTheme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor
      },
      secondary: {
        main: "#474749"
      }
    }
  });

const AddressPage = () => {
    return (
        <Container>
            <UpperContainer>
                <h1>Logo</h1>
            <Typography>Meu Endereço</Typography>
            </UpperContainer>
            <Container>
            <MuiThemeProvider theme={MainTheme}>

                <AddressForm />
            </MuiThemeProvider>
            </Container>
        </Container>

    )
}

export default AddressPage