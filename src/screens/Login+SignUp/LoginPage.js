import React from 'react'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { Container, Typography, Button } from '@material-ui/core'
import { useUnprotectedPage } from '../../hooks/useProtection'
import { LoginForm } from './LoginForm'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { primaryColor } from '../../constants/colors'
import { UpperContainer } from './styled'
import { goToSignUp } from '../../routes/Coordinator'

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
    useUnprotectedPage()
    const history = useHistory()

    return (
        <Container>
            <UpperContainer>
                <h1>Logo</h1>
            <Typography>Entrar</Typography>
            </UpperContainer>
        <MuiThemeProvider theme={MainTheme}>
           <LoginForm />
           <Container>
           <a
           href="#" onClick={() => goToSignUp(history)}        
           >
            Não tem cadastro? Clique aqui!
           </a>
           </Container>

        </MuiThemeProvider>
        </Container>
    )
}

export default LoginPage