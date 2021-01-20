import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Typography } from '@material-ui/core'
import { useUnprotectedPage } from '../../hooks/useProtection'
import { LoginForm } from './LoginForm'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { primaryColor } from '../../constants/colors'
import { UpperContainer } from './styled'
import { goToSignUp } from '../../routes/Coordinator'
import { AddressPageLink } from './styled'
import { LinkContainer } from './styled'
import { TextContainer } from './styled'
import { LogoContainer } from './styled'
import Logo  from '../../assets/logo-future-eats-invert.png'

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


  



const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <Container>
            <UpperContainer>
                <img src= { Logo } />            
            </UpperContainer>
            <TextContainer>
              <Typography>Entrar</Typography>
            </TextContainer>
        <MuiThemeProvider theme={MainTheme}>
           <LoginForm />
           <LinkContainer>
              <AddressPageLink
              href="#" onClick={() => goToSignUp(history)}       
              >
                Não possui cadastro? Clique aqui.
              </AddressPageLink>
           </LinkContainer>
        </MuiThemeProvider>
        </Container>
    )
}

export default LoginPage