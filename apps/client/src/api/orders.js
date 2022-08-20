import ApiInstance from './request';

const OrdersService = new ApiInstance('/carts');

OrdersService.fetchUserOrders = (userId) => (
  OrdersService.request('get', `/${userId}`)
)

export default OrdersService;
