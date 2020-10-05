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

    const emailInput = screen.getByTestId('email')
    expect(emailInput).toBeInTheDocument()

    const passwordInput = screen.getByTestId('password')
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

describe('Teste da home', () => {
  test('Requisição do feed', async () => {
    axios.get = jest.fn().mockResolvedValue({
      restaurants: [{
        id: 1,
        description: 'descrição',
        shipping: 6,
        name: 'nome do restaurante',
        address: 'rua do restaurante',
        logoUrl: 'url',
        category: 'categoria',
        deliveryTime: 60
      }]
    })

    render(<App/>)

    const name = screen.getByText('nome do restaurante')
    expect(name).toBeInTheDocument()
    const deliveryTime = screen.getByText(60)
    expect(deliveryTime).toBeInTheDocument()
    const shipping = screen.getByText('Frete R$6,00')
    expect(shipping).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants')
  })
})
