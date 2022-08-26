import { render, screen } from '@testing-library/react';
import CartView from './index';

const mockCart = [
  {
    "cartItemId": "1023984",
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
    "cartItemId": "102984",
    "productId": "2310105834087",
    "title": "Teton Pullover Hoodie-L-Red",
    "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "image": "http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg",
    "category": "tees",
    "price": 98.23,
    "rating_rate": 0,
    "rating_count": 0
  },
];

describe('CartView', () => {
  test('should render without without throwing an error', () => {
    render(<CartView />);
    expect(true).toBeTruthy();
  });

  test('should render cart total', () => {
    render(<CartView data={mockCart} />);

    const mockOrderTotal = `${(mockCart.reduce((sum, p) => sum += p.price, 0)).toFixed(2)}`
    const totalElement = screen.getByText(new RegExp(mockOrderTotal));
    expect(totalElement).toBeInTheDocument();
  })

  test('should render cart checkout button', () => {
    render(<CartView data={mockCart} />);

    const checkoutBtn = screen.getByRole('button', {
      name: /Checkout/i
    });
    expect(checkoutBtn).toBeInTheDocument();
  });

  test('should render product cart with image, title, and price', async () => {
    render(<CartView data={mockCart} />);
    mockCart.forEach((p, i) => {
      expect(screen.getByText(new RegExp(`${mockCart[i].title}`, 'i'))).toBeInTheDocument()
      expect(screen.getByText(new RegExp(`${mockCart[i].price}`, 'i'))).toBeInTheDocument()
      expect(screen.getByAltText(mockCart[i].title)).toHaveAttribute('src', mockCart[i].image)
    })
  });
});


