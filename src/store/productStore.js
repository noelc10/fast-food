import { defineStore } from 'pinia'
import { find } from 'lodash'

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
          category: {
            value: 'meat',
            text: 'Meat'
          },
          price: '175',
          rating: 4.5,
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
        },
        {
          id: 2,
          img: '/src/assets/images/foods/food-2.png',
          title: 'Chicken Salad',
          category: {
            value: 'chicken',
            text: 'Chicken'
          },
          price: '172',
          rating: 4.5,
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
        },
        {
          id: 3,
          img: '/src/assets/images/foods/food-3.png',
          title: 'Sorvetes Primavera ..',
          category: {
            value: 'dessert',
            text: 'Dessert'
          },
          price: '185',
          rating: 4.5,
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
        },
        {
          id: 4,
          img: '/src/assets/images/foods/food-4.png',
          title: 'Fried Chicken',
          category: {
            value: 'chicken',
            text: 'Chicken'
          },
          price: '175',
          rating: 4.5,
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
        },
        {
          id: 5,
          img: '/src/assets/images/foods/food-1.png',
          title: 'Steak Fries Veggies',
          category: {
            value: 'meat',
            text: 'Meat'
          },
          price: '175',
          rating: 4.5,
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
        },
        {
          id: 6,
          img: '/src/assets/images/foods/food-2.png',
          title: 'Chicken Salad',
          category: {
            value: 'chicken',
            text: 'Chicken'
          },
          price: '172',
          rating: 4.5,
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
        },
        {
          id: 7,
          img: '/src/assets/images/foods/food-3.png',
          title: 'Sorvetes Primavera ..',
          category: {
            value: 'dessert',
            text: 'Dessert'
          },
          price: '185',
          rating: 4.5,
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
        },
        {
          id: 8,
          img: '/src/assets/images/foods/food-4.png',
          title: 'Fried Chicken',
          category: {
            value: 'chicken',
            text: 'Chicken'
          },
          price: '175',
          rating: 4.5,
          description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
        }
      ]
    },

    getProduct (id) {
      this.product = find(this.products, { 'id': Number(id) })
    },

    clearProducts () {
      this.products = []
    },

    clearProduct () {
      this.product = null
    }
  }
});
