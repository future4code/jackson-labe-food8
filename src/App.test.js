import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import userEvent from '@testing-library/user-event';
import LoginPage from './screens/Login+SignUp/LoginPage';
import HomePage from './screens/Home/HomePage';
import RestaurantPage from './screens/Restaurant/RestaurantPage';

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
  });
});

test("requisição post restaurantPage", async () =>{
  axios.get = jest.fn().mockResolvedValue({products: [
    {
      "id": "3vcYYSOEf8dKeTPd7vHe",
      "price": 3,
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
      "description": "Pastel autêntico, feito na hora!",
      "name": "Pastel",
      "category": "Pastel"
  },
  {
      "id": "5omTFSOBYiTqeiDwhiBx",
      "name": "Bibsfiha queijo",
      "category": "Salgado",
      "description": "Esfiha deliciosa, receita secreta do Habibs.",
      "price": 1,
      "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg"
  }
  ]})
  render(<RestaurantPage/>)

  await expect(axios.get).toHaveBeenCalled()
  await expect(axios.get).toHaveLength(2)
})
