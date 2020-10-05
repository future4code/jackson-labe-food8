import React from 'react'
import { Container, Typography, TextField, Button } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { useUnprotectedPage } from '../../hooks/useProtection'

const LoginPage = () => {
    useUnprotectedPage()
    
    const {form, handleInputChange, resetState} = useForm({
        email: '',
        password: ''
    })
    const history = useHistory()


    const onClickLogin = (event) => {
        event.preventDefault()
        const element = document.getElementById('login-form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if(isValid){
            login(form, history)
        }
    }

    return (
        <Container>
           <Typography>entrar</Typography>
           <form id={'login-form'}>
                <TextField
                    value={form.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    data-testid="email"
                />
                <TextField
                    value={form.password}
                    onChange={handleInputChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    data-testid="password"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onClickLogin}
                >
                Entrar
                </Button>
            </form>
        </Container>
    )
}

export default LoginPage