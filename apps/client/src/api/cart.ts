import ApiInstance from './request';

const CartService: any = new ApiInstance('/carts');

CartService.addProductToCart = (product: any, userId: string) => (
  CartService.request('post', `/add/${userId}`, product)
)

CartService.removeProductFromCart = (cartItemId: string, userId: string) => (
  CartService.request('delete', `/remove/${userId}/${cartItemId}`)
)

CartService.fetchUserCart = (userId: string) => (
  CartService.request('get', `/${userId}`)
)

CartService.checkoutUserCart = (userId: string) => (
  CartService.request('post', `/checkout/${userId}`)
)

CartService.demoCart = [];
CartService.removeDemoProductFromCart = (cartItemId: string) => (
  CartService.demoCart = CartService.demoCart.filter((p: any) => p.id !== cartItemId)
)

CartService.addDemoProductToCart = (item: any) => (
  CartService.demoCart.push(item)
)

export default CartService;