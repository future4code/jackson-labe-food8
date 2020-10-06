import React from 'react';
import { useHistory } from 'react-router-dom'

// Hooks:
import { useProtectedPage } from '../../hooks/useProtection'
import useForm from '../../hooks/useForm'

// Style:
import {PageContainer} from './styled'
import {Form, InputContainer, Label, Input, Button} from '../../assets/Styled/styled-forms'

const EditAddress = () => {

        useProtectedPage()    
        const history = useHistory()
    
        const {form, handleInputChange} = useForm({
            neighbourhood: "",
            number: "", 
            city: "",
            apartment: "",
            state: "",
            street: "",
        })
    
        const submitForm = (event) => {
            event.preventDefault()
        }

    return ( 
        <PageContainer>
            <Form onSubmit={submitForm}>

            <InputContainer>
                <Label for={'street'}>Logradouro*</Label>
                <Input
                id={'street'}
                value={form.street}
                onChange={handleInputChange}
                name={'street'}
                placeholder={'Rua / Av.'}
                required
                />
            </InputContainer>
            <InputContainer>
                <Label for={'number'}>Número*</Label>
                <Input
                id={'number'}
                value={form.number}
                onChange={handleInputChange}
                name={'number'}
                placeholder={'Número'}
                required
                />
            </InputContainer>
            <InputContainer>
                <Label for={'apartment'}>Complemento*</Label>
                <Input
                id={'apartment'}
                value={form.apartment}
                onChange={handleInputChange}
                name={'apartment'}
                placeholder={'Apto. / Bloco'}
                required
                />
            </InputContainer>
            <InputContainer>
                <Label for={'neighbourhood'}>Bairro*</Label>
                <Input
                id={'neighbourhood'}
                value={form.neighbourhood}
                onChange={handleInputChange}
                name={'neighbourhood'}
                placeholder={'Bairro'}
                required
                />
            </InputContainer>
            <InputContainer>
                <Label for={'city'}>Cidade*</Label>
                <Input
                id={'city'}
                value={form.city}
                onChange={handleInputChange}
                name={'city'}
                placeholder={'Cidade'}
                required
                />
            </InputContainer>
            <InputContainer>
                <Label for={'state'}>Estado*</Label>
                <Input
                id={'state'}
                value={form.state}
                onChange={handleInputChange}
                name={'state'}
                placeholder={'Estado'}
                required
                />
            </InputContainer>


            <Button>Salvar</Button>
            </Form>
        </PageContainer>
     );
}
 
export default EditAddress;