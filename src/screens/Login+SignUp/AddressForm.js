import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { addAddress } from '../../services/user';
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'



export const AddressForm = () => {

    const {form, handleInputChange, resetState} = useForm({
        logradouro: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''

    })
    const history = useHistory()

    const submitForm = (event) => {
      event.preventDefault()
      addAddress(form, history)
  }

    return (
        <form id={'address-form'} onSubmit={submitForm}>
            <TextField 
            value={form.logradouro}
            name={'logradouro'}
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
            value={form.complemento}
            name={'complemento'}
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
            value={form.bairro}
            name={'bairro'}
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
            value={form.cidade}
            name={'cidade'}
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
            value={form.estado}
            name={'estado'}
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
            <Button
             type="submit"
             variant="contained"
             color="primary"
             fullWidth
             onClick={() => goToSignUp(history)}
             >
             Salvar
             </Button> 

        </form>
    )

}