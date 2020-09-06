import Category from '../models/category';
import Product from '../models/product';

export const CATEGORIES = [
  new Category('c1', 'عقود', '#DDA722'),
  new Category('c2', 'أساور', '#DDA722'),
  new Category('c3', 'أطقم كاملة', '#DDA722'),
  new Category('c4', 'أنصاف أطقم', '#DDA722'),
  new Category('c5', 'خواتم', '#DDA722'),
  new Category('c6', 'أطفال', '#DDA722'),
  new Category('c7', 'أقل من 500', '#DDA722'),
]

export const PRODUCTS = [
  new Product('p52', ['c1'], 3, 'عقد 52', 'عقد عيار 18 بتصميم مميز وأنيق', 'https://cdn.salla.sa/gil8UBqh7LmBMihtTjo141GmGzzLnMU8J9aYemak.jpeg', 1, 420),
  new Product('p66', ['c1'], 1, 'عقد 66', 'عقد عيار 18 بتصميم مميز وأنيق', 'https://cdn.salla.sa/N6LyQaQM0Xxuti2PBvi2XisLlyZHcE5d64vO3coQ.jpeg', 1, 439),
  new Product('p56', ['c1'], 6, 'عقد 56', 'عقد عيار 18 بتصميم مميز وأنيق', 'https://cdn.salla.sa/RvvKkNFgtdm612iYNgyQQfbKyT82GdMZnhlggoJb.jpeg', 1, 420),
  new Product('p250', ['c1'], 2, 'عقد 250', 'عقد عيار 18 بتصميم مميز وأنيق', 'https://cdn.salla.sa/J6JFldTiqUEIRINGYqWwy252oPXxwccO2s9l3JbH.jpeg', 1, 585),
  new Product('p64', ['c1'], 1, 'عقد 64', 'عقد عيار 18 بتصميم مميز وأنيق', 'https://cdn.salla.sa/plp3xRVNJt7zH3j4k59vrin4Ei1qkdCY7M0lUwAZ.jpeg', 1, 399)
]