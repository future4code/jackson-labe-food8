import React from 'react'
import { SignUpForm } from './SignUpForm'
import { Container, Typography, Button, Card } from '@material-ui/core'
import { GoBackContainer } from './styled'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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


const SignUpPage = () => {
    return (
        <div>
            <Card>
                <ArrowBackIosIcon />
            </Card>
            <Container>
            <MuiThemeProvider theme={MainTheme}>
                <Typography>Cadastrar</Typography>
                <SignUpForm />
            </MuiThemeProvider>
        </Container>
        </div>

    )
}

export default SignUpPage