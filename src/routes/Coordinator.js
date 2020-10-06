export const goToLogin = (history) => {
    history.push('/login')
  }
  
export const goToSignUp = (history) => {
  history.push('/signup')
}

export const goToFeed = (history) => {
  history.push('/')
}
export const goToSearch = (history) => {
  history.push('/busca')
}

export const goToRestaurant = (history, id) => {
  history.push(`/restaurants/${id}`)
}

export const goToShoppingCart = (history) => {
  history.push(`/shoppingcart`)
}

export const goToProfile = (history) => {
  history.push(`/profile`)
}

export const goBack = (history) => {
  history.goBack()
}

export const goToEditProfile = (history) => {
  history.push(`/profile/edit-profile`)
}
  
