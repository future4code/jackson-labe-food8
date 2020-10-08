import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Button, InputAdornment } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useForm from '../../hooks/useForm'

import { signup } from '../../services/user';
import { goToAddress } from '../../routes/Coordinator'
import { validate, TextDanger } from './validate';
import { goToSignUpAddress, goToSignUp } from '../../routes/Coordinator'



export const SignUpForm = props => {

    const {form, handleInputChange, resetState} = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirm: ''
    })
    const [errors, setErrors] = useState({})

    const history = useHistory()

    const onClickSignup = (event) => {
        event.preventDefault()
        if(validate(form,setErrors)){
            signup(form, history)
            resetState()
            goToAddress(history)
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
            InputLabelProps={{
                shrink: true,
              }}
            placeholder="Nome e sobrenome"
            />
            <TextDanger>{errors.name}</TextDanger>
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
            <TextDanger>{errors.email}</TextDanger>
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
            <TextDanger>{errors.cpf}</TextDanger>
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
            <TextDanger>{errors.password}</TextDanger>
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
            <TextDanger>{errors.confirm}</TextDanger>
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