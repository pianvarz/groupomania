import Api from './Api'

export default {
  signup (credentials) {
    return Api().post('signup', credentials)
  }
}

// AuthService.signup({
//     email: 'nando@mail.com',
//     password: 'Olivares24.07'
// })
