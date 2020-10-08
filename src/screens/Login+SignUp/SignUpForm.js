import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Typography, TextField, Button, InputAdornment, IconButton } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user';
import { goToSignUpAddress, goToSignUp } from '../../routes/Coordinator'


export const SignUpForm = props => {

    const {form, handleInputChange, resetState} = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirm: ''
    })

    const history = useHistory()

    const onClickSignup = (event) => {
        event.preventDefault()
        const element = document.getElementById('signup-form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if(isValid){
            signUp(form, history)
        }
        
    }
 
    return (
        <form id={'signup-form'}>
            <TextField 
            value={form.name}
            name={'name'}
            onChange={handleInputChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            id="name"
            required
            autoFocus
            margin={'normal'}
            placeholder="Nome"
            InputLabelProps={{
                shrink: true,
              }}
            placeholder="Nome e sobrenome"
            />
            <TextField 
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            label={'E-Mail'}
            type={'email'}
            variant={'outlined'}
            fullWidth
            id="email"
            required
            margin={'normal'}
            InputLabelProps={{
                shrink: true,
              }}
            placeholder="email@email.com"
            />
            <TextField 
            value={form.cpf}
            name={'cpf'}
            onChange={handleInputChange}
            label={'Cpf'}
            type={'number'}
            variant={'outlined'}
            fullWidth
            id="cpf"
            required
            margin={'normal'}
            InputLabelProps={{
                shrink: true,
              }}
            placeholder="000.000.000-00"
            />
            <TextField 
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            label={'Senha'}
            type={'password'}
            variant={'outlined'}
            fullWidth
            id="password"
            required
            margin={'normal'}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOffIcon
                    edge="end"
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            placeholder="Mínimo 6 caracteres"
            />
            <TextField 
            value={form.confirm}
            name={'confirm'}
            onChange={handleInputChange}
            label={'Confirmar'}
            type={'password'}
            variant={'outlined'}
            fullWidth
            id="confirmpassword"
            required
            margin={'normal'}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOffIcon
                    edge="end"
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            placeholder="Confirme senha anterior"
            />
            <Button
             type="submit"
             variant="contained"
             color="primary"
             fullWidth
             onClick={onClickSignup}
             >
             Criar
             </Button> 

        </form>
    )

}