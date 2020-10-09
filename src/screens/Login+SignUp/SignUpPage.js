import React from 'react'
import { SignUpForm } from './SignUpForm'
import { Container, Typography } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { primaryColor } from '../../constants/colors'
import { UpperContainer } from './styled'
import { useUnprotectedPage } from '../../hooks/useProtection'
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
    },
  });




const SignUpPage = () => {
  useUnprotectedPage()
    return (
        <Container>
            <UpperContainer>
              <img src= { Logo } />            
            </UpperContainer>
            <TextContainer>
              <Typography>Cadastrar</Typography>
            </TextContainer>
            <Container>
            <MuiThemeProvider theme={MainTheme}>
                <SignUpForm />
            </MuiThemeProvider>
        </Container>
        </Container>

    )
}

export default SignUpPage