import * as React from 'react';
import * as PropTypes from 'prop-types';
import OrdersService from 'api//orders';

interface ContextInt {
  loading?: boolean;
  orderItems?: Array<any>,
  loadUserOrders?: (userId: string) => any,
  useDemoOrders?: () => any,
  addDemoOrder?: (newOrder: any) => any
}

export const OrdersContext = React.createContext<ContextInt>({});

const demoOrders = [
  {
    id: "21093857",
    orderAddress: "60 Wall Street, New York City, 10005",
    orderTotal: 183.09,
    purchaseDate: "2/17/22",
    cartItems: [
      {
        "id": "1023984",
        "productId": "2310105834087",
        "title": "Zaz Kangeroo Hoodie",
        "description": "This is a variable product called a Chaz Kangeroo Hoodie",
        "image": "http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg",
        "category": "hoodies",
        "price": 84.86,
        "rating_rate": 0,
        "rating_count": 0
      },
      {
        "id": "102984",
        "productId": "2310105834087",
        "title": "Teton Pullover Hoodie-L-Red",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "image": "http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg",
        "category": "tees",
        "price": 98.23,
        "rating_rate": 0,
        "rating_count": 0
      },
    ]
  }
];

interface Props {
  children: any;
}

export const OrdersProvider: React.FC<Props> = ({ children }) => {
  const [orderItems, setOrderItems] = React.useState<Array<any>>([]);
  const [loading, setLoading] = React.useState(false);

  const useDemoOrders = () => {
    setOrderItems([]) // setOrderItems(demoOrders)
    setLoading(false)
  }

  function loadUserOrders(userId: string) {
    setLoading(true);
    OrdersService.fetchUserOrders(userId)
      .then((result: any) => {
        setOrderItems(result.orders)
      })
      .catch(() => setOrderItems([]))
      .then(() => setLoading(false))
  }

  const addDemoOrder = (newOrder: any) => {
    setOrderItems((prevOrders) => [...prevOrders, newOrder])
  }

  const value = {
    loading,
    orderItems,
    loadUserOrders,
    useDemoOrders,
    addDemoOrder
  };

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

const useOrders = () => React.useContext(OrdersContext);

export default useOrders;

OrdersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};