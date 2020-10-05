import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import userEvent from '@testing-library/user-event';
import LoginPage from './screens/Login+SignUp/LoginPage';

axios.get = jest.fn().mockResolvedValue()

describe('Teste da página de login', () => {
  test('Requisição de login', async () => {
    axios.post = jest.fn().mockResolvedValue()

    render(<LoginPage/>)

    const elementoinput = screen.getByTestId('email')
    const emailInput = elementoinput.children[0]
    expect(emailInput).toBeInTheDocument()
    
    const elementopassword = screen.getByTestId('password')
    const passwordInput = elementopassword.children[0]
    expect(passwordInput).toBeInTheDocument()

    const button = screen.getByText('Entrar')
    expect(button).toBeInTheDocument()

    await userEvent.type(emailInput, 'email@email.com')
    userEvent.type(passwordInput, '123')
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login',  {
      email: 'email@email.com',
      password: '123'
    })
  })
})
