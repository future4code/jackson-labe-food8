import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Button, InputAdornment, IconButton, makeStyles } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useForm from '../../hooks/useForm'

import { signUp } from '../../services/user';
import { validate, TextDanger } from './validate';
import { goToSignUpAddress } from '../../routes/Coordinator'

const useStyles = makeStyles((theme) => ({

  button: {
    textTransform: 'none',
  },
}));


export const SignUpForm = props => {
    
    const classes = useStyles()

    const {form, handleInputChange, resetState} = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirm: ''
    })
    const [errors, setErrors] = useState({})
    const [toggleVisibility, setToggleVisibility] = useState({
      showPassword: false,
      showConfirm: false
    })

    const history = useHistory()

    const onClickSignup = (event) => {
        event.preventDefault()
        if(validate(form,setErrors)){
            signUp(form, history)
            resetState()
            goToSignUpAddress(history)
        }
        
    }

    const handleClick = (input) => {
      if(input === 'showPassword'){
        setToggleVisibility({ showPassword: !toggleVisibility.showPassword})
      }
      if(input === 'showConfirm'){
        setToggleVisibility({ showConfirm: !toggleVisibility.showConfirm})
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
            type={toggleVisibility.showPassword ? 'text' : 'password'}
            variant={'outlined'}
            fullWidth
            id="password"
            required
            margin={'normal'}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleClick('showPassword')}>
                      {toggleVisibility.showPassword ? <Visibility edge="end"/> : <VisibilityOff edge="end"/>}
                    </IconButton>
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
            type={toggleVisibility.showConfirm ? 'text' : 'password'}
            variant={'outlined'}
            fullWidth
            id="confirmpassword"
            required
            margin={'normal'}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleClick('showConfirm')}>
                      {toggleVisibility.showConfirm ? <Visibility edge="end"/> : <VisibilityOff edge="end"/>}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
            placeholder="Confirme senha anterior"
            />
            <TextDanger>{errors.confirm}</TextDanger>
            <Button className={classes.button}
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