import React, { useState } from 'react'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { TextField, Button, InputAdornment, IconButton, makeStyles } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { InputContainer } from './styled'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({

    button: {
      textTransform: 'none',
    },
  }));

export const LoginForm = () => {
    
    const classes = useStyles()

    const {form, handleInputChange, resetState} = useForm({
        email: '',
        password: ''
    })
    const [toggleVisibility, setToggleVisibility] = useState({
        showPassword: false
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

    const handleClick = () => {
          setToggleVisibility({ showPassword: !toggleVisibility.showPassword})
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
                    type={toggleVisibility.showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    inputProps={{
                        'data-testid': 'password'
                    }}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => handleClick()}>
                                {toggleVisibility.showPassword ? <Visibility edge="end"/> : <VisibilityOff edge="end"/>}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                <Button className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={onClickLogin}
                    textAllCaps="false" 
                >
                Entrar
                </Button>           
            </InputContainer>
        </form>
    );
}
