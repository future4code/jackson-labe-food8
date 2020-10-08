import React from 'react'
import { AddressForm } from './AddressForm'
import { Container, Typography } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { primaryColor } from '../../constants/colors'
import { UpperContainer } from './styled'
import Logo  from '../../assets/logo-future-eats-invert.png'
import { TextContainer } from './styled'

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
                <img src={ Logo } />
            </UpperContainer>
              <TextContainer>
                <Typography>Meu Endereço</Typography>
              </TextContainer>
            <Container>
            <MuiThemeProvider theme={MainTheme}>

                <AddressForm />
            </MuiThemeProvider>
            </Container>
        </Container>

    )
}

export default AddressPage