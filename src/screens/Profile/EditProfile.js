import React from 'react';
import { useHistory } from 'react-router-dom'

// Hooks:
import { useProtectedPage } from '../../hooks/useProtection'
import useForm from '../../hooks/useForm'

// Services:
import { updateProfile } from '../../services/user'

// Style:
import {PageContainer} from './styled'
import {Form, InputContainer, Label, Input, Button} from '../../assets/Styled/styled-forms'



const EditProfile = () => {
    const history = useHistory()
    useProtectedPage()    

    const {form, handleInputChange} = useForm({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'), 
        cpf: localStorage.getItem('cpf')
    })

    const submitForm = (event) => {
        event.preventDefault()
        updateProfile(form, history)
    }


    return ( 
        <PageContainer>
            <Form onSubmit={submitForm}>

            <InputContainer>
                <Label for={'name'}>Nome*</Label>
                <Input
                id={'name'}
                value={form.name}
                onChange={handleInputChange}
                name={'name'}
                placeholder={'Nome e sobrenome'}
                required
                />
            </InputContainer>

            <InputContainer>
                <Label for={'email'}>E-mail*</Label>
                <Input
                id={'email'}
                value={form.email}
                onChange={handleInputChange}
                name={'email'}
                type={'email'}
                placeholder={'email@email.com'}
                required
                />
            </InputContainer>

            <InputContainer>
                <Label for={'cpf'}>CPF*</Label>
                <Input
                id={'cpf'}
                value={form.cpf}
                onChange={handleInputChange}
                name={'cpf'}
                placeholder={'000.000.000-00'}
                required
                />
            </InputContainer>

            <Button>Salvar</Button>
            </Form>
        </PageContainer>
     );
}
 
export default EditProfile;