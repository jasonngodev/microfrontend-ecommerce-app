import 'cart/CartShow';

import { mount as cartMount } from 'cart/CartShow';
import { mount as productsMount } from 'products/ProductsIndex';

console.log('Container');

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
