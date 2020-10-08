// -- UNAUTHENTICATED SECTION -- 

export const goToLogin = (history) => {
    history.push('/login')
  }
  
export const goToSignUp = (history) => {
  history.push('/signup')
}

export const goToSignUpAddress = (history) => {
  history.push(`/signup/address`)
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


export const goBack = (history) => {
    history.goBack()
}
  

  
export const goToShoppingCart = (history) => {
  history.push(`/shoppingcart`)
}


// -- USER SECTION -- 

export const goToProfile = (history) => {
  history.push(`/profile`)
}

export const goToEditProfile = (history) => {
  history.push(`/profile/edit-profile`)
}

export const goToEditAddress = (history) => {
  history.push(`/profile/edit-address`)
}
