import React from 'react'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { InputContainer } from './styled'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

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
                    InputLabelProps={{
                        shrink: true,
                      }}
                    placeholder="email@email.com"
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
                    InputLabelProps={{
                        shrink: true,
                      }}
                    placeholder="Mínimo 6 caracteres"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    inputProps={{
                        'data-testid': 'password'
                    }}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <VisibilityOffIcon
                            edge="end"
                            />
                          </InputAdornment>
                        ),
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
