import React, { useState } from 'react'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { Container, Typography, TextField, Button } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { InputContainer } from './styled'

export const LoginForm = () => {

    const {form, handleInputChange, resetState} = useForm({
        email: '',
        password: ''
    })

    const onClickLogin = (event) => {
        event.preventDefault()
        const element = document.getElementById('login-form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if(isValid){
            login(form, history)
            resetState()
        }
    }

    const history = useHistory()

    return (
        <form id={'login-form'}>
            <InputContainer>
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
                    inputProps={{
                        'data-testid': 'email'
                    }}
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
                    inputProps={{
                        'data-testid': 'password'
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={onClickLogin}
                >
                Entrar
                </Button>           
            </InputContainer>

            </form>
    );
}
