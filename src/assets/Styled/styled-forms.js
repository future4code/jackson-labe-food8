import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 24px;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const Label = styled.label`
    position: absolute;
    top:-6px;
    padding-left: 4px;
    width: 78px;
    margin-left: 16px;
    
    background-color: white;

    font-family: Roboto, sans-serif;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`

export const Input = styled.input`
    height: 56px;
    margin-bottom: 16px;
    padding-left: 16px;

    border-radius: 4px;
    border: solid 1px #b8b8b8;

    font-size: 16px;
    letter-spacing: -0.39px;
    color: #000000;
`

export const Button = styled.button`
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 2px;
    background-color: #5cb646;

    font-family: Roboto, sans-serif;
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }
`