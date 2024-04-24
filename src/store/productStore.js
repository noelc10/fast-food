import { defineStore } from 'pinia';
import { find } from 'lodash';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    product: null
  }),

  actions: {
    getProducts () {
      this.products = [
        {
          id: 1,
          img: '/src/assets/images/foods/food-1.png',
          title: 'Steak Fries Veggies',
          type: 'Meat',
          price: '175',
          rating: 4.5
        },
        {
          id: 2,
          img: '/src/assets/images/foods/food-2.png',
          title: 'Chicken Salad',
          type: 'Chicken',
          price: '172',
          rating: 4.5
        },
        {
          id: 3,
          img: '/src/assets/images/foods/food-3.png',
          title: 'Sorvetes Primavera ..',
          type: 'Dessert',
          price: '185',
          rating: 4.5
        },
        {
          id: 4,
          img: '/src/assets/images/foods/food-4.png',
          title: 'Fried Chicken',
          type: 'Chicken',
          price: '175',
          rating: 4.5
        },
        {
          id: 5,
          img: '/src/assets/images/foods/food-1.png',
          title: 'Steak Fries Veggies',
          type: 'Meat',
          price: '175',
          rating: 4.5
        },
        {
          id: 6,
          img: '/src/assets/images/foods/food-2.png',
          title: 'Chicken Salad',
          type: 'Chicken',
          price: '172',
          rating: 4.5
        },
        {
          id: 7,
          img: '/src/assets/images/foods/food-3.png',
          title: 'Sorvetes Primavera ..',
          type: 'Dessert',
          price: '185',
          rating: 4.5
        },
        {
          id: 8,
          img: '/src/assets/images/foods/food-4.png',
          title: 'Fried Chicken',
          type: 'Chicken',
          price: '175',
          rating: 4.5
        }
      ]

      return this.products
    },

    getProduct (id) {
      return find(this.products, { id: id });
    },

    clearProducts () {
      this.products = [];
    },

    clearProduct () {
      this.product = null;
    }
  }
});
