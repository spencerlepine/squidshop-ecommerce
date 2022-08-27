import { render, screen } from '@testing-library/react';
import PageView from 'components/Product/PageView'

const mockProduct = {
  "id": "102984",
  "title": "Teton Pullover Hoodie-L-Red",
  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "image": "http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg",
  "category": "tees",
  "price": 98.23,
  "rating_rate": 0,
  "rating_count": 0
}

test('should render without without throwing an error', () => {
  render(<PageView data={mockProduct} />);
  expect(true).toBeTruthy();
});