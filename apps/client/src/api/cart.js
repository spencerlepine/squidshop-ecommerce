import ApiInstance from './request';

const CartService = new ApiInstance('/carts');

CartService.addProductToCart = (product, userId) => (
  CartService.request('post', `/add/${userId}`, product)
)

CartService.removeProductFromCart = (cartItemId, userId) => (
  CartService.request('delete', `/remove/${userId}/${cartItemId}`)
)

CartService.fetchUserCart = (userId) => (
  CartService.request('get', `/${userId}`)
)

CartService.checkoutUserCart = (userId) => (
  CartService.request('post', `/checkout/${userId}`)
)

export default CartService;