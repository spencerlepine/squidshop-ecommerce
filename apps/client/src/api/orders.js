import ApiInstance from './request';

const OrdersService = new ApiInstance('/orders/orders');

OrdersService.fetchUserOrders = (userId) => (
  OrdersService.request('get', `/${userId}`)
)

export default OrdersService;
