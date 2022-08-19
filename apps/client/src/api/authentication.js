import ApiInstance from './request';

const AuthService = new ApiInstance('/users');

AuthService.authenticateUser = () => (
  AuthService.request('get', '/authenticate')
)

AuthService.signInWithEmailAndPassword = (formData) => (
  AuthService.request('post', '/login', formData)
)

AuthService.createUserWithEmailAndPassword = (formData) => (
  AuthService.request('post', '/register', formData)
)

AuthService.logoutUser = () => (
  AuthService.request('delete', '/logout')
)

AuthService.fetchAccountDetails = (userId) => (
  AuthService.request('get', `/profile/${userId}`)
)

export default AuthService;