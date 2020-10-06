import React from 'react'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { Container, Typography, Button } from '@material-ui/core'
import { useUnprotectedPage } from '../../hooks/useProtection'
import { LoginForm } from './LoginForm'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { primaryColor } from '../../constants/colors'

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


const LoginPage = () => {
    //useUnprotectedPage()

    return (
        <Container>
        <MuiThemeProvider theme={MainTheme}>
           <Typography>entrar</Typography>
           <LoginForm />
           <Button>
            Não tem cadastro? Clique aqui!
           </Button>
        </MuiThemeProvider>
        </Container>
    )
}

export default LoginPage