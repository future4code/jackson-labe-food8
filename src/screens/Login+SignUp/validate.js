import styled from 'styled-components'

export const validate = (form, setErrors) => {
 let input = form
 let errors = {}
 let isValid = true

    if(!form.name){
        isValid = false
        errors["name"] = "Por favor, digite seu nome"
    }
    
    if(!form.email){
        isValid = false
        errors["email"] = "Por favor, digite seu e-mail"    
    }

    if(typeof form.email !== 'undefined'){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Por favor, digite seu e-mail";
        }
    }

    if(!form.cpf){
        isValid = false
        errors["cpf"] = "Por favor, digite seu CPF"    
    }

    if(!form.password){
        isValid = false
        errors["password"] = "Por favor, digite uma senha"
    }

    if(!form.confirm){
        isValid = false
        errors["confirm"] = "Por favor, confirme sua senha"
    }

    if(typeof form.password !== 'undefined' && typeof form.confirm !== 'undefined'){
        if(form.password !== form.confirm){
            isValid = false
            errors["confirm"] = "Deve ser a mesma que a anterior"
        }
    }

    setErrors(errors)

    return isValid

}

export const TextDanger = styled.p`
    height: 18px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #e02020;
`