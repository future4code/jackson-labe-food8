import React from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'
import { addAddress } from '../../services/user';
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'

const useStyles = makeStyles((theme) => ({

  button: {
    textTransform: 'none',
  },
}));


export const AddressForm = () => {

    const classes = useStyles()

    const {form, handleInputChange, resetState} = useForm({
      neighbourhood: "",
      number: "", 
      city: "",
      apartment: "",
      state: "",
      street: "",
    })

    const history = useHistory()

    const submitForm = (event) => {

      event.preventDefault()
      const element = document.getElementById('address-form')
      const isValid = element.checkValidity()
      element.reportValidity()

      if(isValid){
        addAddress(form, history, 'signup')
      }

  }

    return (
        <form id={'address-form'} onSubmit={submitForm}>
            <TextField 
            value={form.street}
            name={'street'}
            onChange={handleInputChange}
            label={'Logradouro'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
            InputLabelProps={{
                shrink: true,
              }}
            placeholder="Rua/Av."
            />
            <TextField 
            value={form.number}
            name={'number'}
            onChange={handleInputChange}
            label={'Número'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
            InputLabelProps={{
                shrink: true,
              }}
            placeholder="Número"
            />
            <TextField 
            value={form.apartment}
            name={'apartment'}
            onChange={handleInputChange}
            label={'Complemento'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            InputLabelProps={{
                shrink: true,
              }}
            placeholder="Apto./Bloco"
            />
            <TextField 
            value={form.neighbourhood}
            name={'neighbourhood'}
            onChange={handleInputChange}
            label={'Bairro'}
            type={'text'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
            InputLabelProps={{
                shrink: true,
              }}
            placeholder="Bairro"
            />
            <TextField 
            value={form.city}
            name={'city'}
            onChange={handleInputChange}
            label={'Cidade'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
              InputLabelProps={{
                shrink: true,
              }}
            placeholder="Cidade"
            />
            <TextField 
            value={form.state}
            name={'state'}
            onChange={handleInputChange}
            label={'Estado'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
              InputLabelProps={{
                shrink: true,
              }}
            placeholder="Estado"
            />
            <Button className={classes.button}
             type="submit"
             variant="contained"
             color="primary"
             fullWidth
             >
             Salvar
             </Button> 

        </form>
    )

}