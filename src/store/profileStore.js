import { defineStore } from 'pinia'
import { find } from 'lodash'

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    loyaltyProducts: [],
    loyaltyProduct: null
  }),

  actions: {
    getLoyaltyProducts () {
      this.loyaltyProducts = [
        {
          id: 1,
          img: '/src/assets/images/foods/food-1.png',
          title: 'Steak Fries Veggies',
          type: 'Meat',
          points: '20',
        }
      ]
    },

    getLoyaltyProduct (id) {
      this.loyaltyProduct = find(this.loyaltyProducts, { 'id': Number(id) });
    },

    clearLoyaltyProducts () {
      this.loyaltyProducts = [];
    },

    clearProduct () {
      this.loyaltyProduct = null;
    }
  }
});
