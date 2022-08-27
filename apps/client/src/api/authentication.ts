import ApiInstance from './request';

const AuthService: any = new ApiInstance('/users');

type SignInData = {
  password: string;
  email: string;
}

type RegistrationData = SignInData & {
  firstName: string;
  lastName: string;
}

AuthService.authenticateUser = () => (
  AuthService.request('get', '/authenticate')
)

AuthService.signInWithEmailAndPassword = (formData: any) => (
  AuthService.request('post', '/login', formData)
)

AuthService.createUserWithEmailAndPassword = (formData: RegistrationData) => (
  AuthService.request('post', '/register', formData)
)

AuthService.logoutUser = () => (
  AuthService.request('delete', '/logout')
)

AuthService.fetchAccountDetails = (userId: string) => (
  AuthService.request('get', `/profile/${userId}`)
)

export default AuthService;