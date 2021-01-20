import React from 'react';
import { fireEvent, getByAltText, render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import userEvent from '@testing-library/user-event';
import LoginPage from './screens/Login+SignUp/LoginPage';
import HomePage from './screens/Home/HomePage';
import RestaurantPage from './screens/Restaurant/RestaurantPage';

import SignUpPage from './screens/Login+SignUp/SignUpPage';
import SearchPage from './screens/SearchPage/SearchPage';
import AddressPage from './screens/Login+SignUp/AddressPage';


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
  test('Requisição get da feedPage', async () => {
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

    render(<HomePage/>)

    const name = screen.getByText('nome do restaurante')
    expect(name).toBeInTheDocument()
    const deliveryTime = screen.getByText(60)
    expect(deliveryTime).toBeInTheDocument()
    const shipping = screen.getByText('Frete R$6,00')
    expect(shipping).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants')
  });
  test('Requisição get da searchPage', async () => {
    axios.get = jest.fn().mockResolvedValue({
      restaurants: [{
        id: 1,
        description: 'descrição',
        shipping: 6,
        name: 'habibs',
        address: 'rua do restaurante',
        logoUrl: 'url',
        category: 'categoria',
        deliveryTime: 60
      },
      {
        id: 1,
        description: 'descrição',
        shipping: 6,
        name: 'sotero',
        address: 'rua do restaurante',
        logoUrl: 'url',
        category: 'categoria',
        deliveryTime: 60
      }]
    })

    render(<SearchPage/>)

    const searchInput = screen.getByTestId('search')
    expect(searchInput).toBeInTheDocument()
    expect(screen.getByText('Busque por nome de restaurante')).toBeInTheDocument()

    await userEvent.type(searchInput, 'sotero')

    expect(axios.get).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants')
    expect(axios.get).toHaveLength(1)
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

describe('Teste da página de signup', () => {
  test('cadastro do usuário', async () => {
    axios.post = jest.fn().mockResolvedValue()

    render(<SignUpPage/>)

    const nameInput = screen.getByPlaceholderText('Nome e sobrenome')
    expect(nameInput).toBeInTheDocument()

    const emailInput = screen.getByPlaceholderText('email@email.com')
    expect(emailInput).toBeInTheDocument()

    const cpfInput = screen.getByPlaceholderText('000.000.000-00')
    expect(cpfInput).toBeInTheDocument()

    const passwordInput = screen.getByPlaceholderText('Mínimo 6 caracteres')
    expect(passwordInput).toBeInTheDocument()

    const confirmInput = screen.getByPlaceholderText('Confirme senha anterior')
    expect(confirmInput).toBeInTheDocument()

    const button = screen.getByText('Criar')
    expect(button).toBeInTheDocument()

    await userEvent.type(nameInput, 'teste')
    userEvent.type(emailInput, 'email@email.com')
    userEvent.type(cpfInput, '000.000.000-00')
    userEvent.type(passwordInput, '123456')
    userEvent.type(confirmInput, '123456')
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup',  {
      name: 'teste',
      email: 'email@email.com',
      cpf: '000.000.000-00',
      password: '123456',
      confirm: '123456'
    })
  })

  describe('Teste da página de cadastro do endereço', () => {
    test('cadastro do usuário', async () => {
      axios.post = jest.fn().mockResolvedValue()
  
      render(<AddressPage/>)
  
      const ruaInput = screen.getByPlaceholderText('Rua/Av.')
      expect(streetInput).toBeInTheDocument()
  
      const aptoInput = screen.getByPlaceholderText('Apto./Bloco')
      expect(aptoInput).toBeInTheDocument()
  
      const bairroInput = screen.getByPlaceholderText('Bairro')
      expect(bairroInput).toBeInTheDocument()
  
      const cidadeInput = screen.getByPlaceholderText('Cidade')
      expect(cidadeInput).toBeInTheDocument()
  
      const estadoInput = screen.getByPlaceholderText('Estado')
      expect(estadoInput).toBeInTheDocument()
  
      const button = screen.getByText('Criar')
      expect(button).toBeInTheDocument()
  
      await userEvent.type(ruaInput, 'teste')
      userEvent.type(aptoInput, 'teste')
      userEvent.type(bairroInput, 'teste')
      userEvent.type(cidadeInput, 'teste')
      userEvent.type(buttonInput, 'teste')
      userEvent.click(button)
  
      expect(axios.put).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address',  {
        logradouro: 'teste',
        complemento: 'teste',
        bairro: 'teste',
        cidade: 'teste',
        estado: 'teste'
      })
    })
})