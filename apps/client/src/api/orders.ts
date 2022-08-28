import ApiInstance from './request';

const OrdersService: any = new ApiInstance('/orders/orders');

OrdersService.fetchUserOrders = (userId: string) => (
  OrdersService.request('get', `/${userId}`)
)

export default OrdersService;
