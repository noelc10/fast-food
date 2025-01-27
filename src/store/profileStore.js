import { defineStore } from 'pinia'
import { find } from 'lodash'

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    loyaltyProducts: [],
    loyaltyProduct: null,
    user: null,
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
    
    getUser () {
      this.user = {
        id: 1,
        first_name: 'Chou',
        last_name: 'Tzuyu',
        phone: '+63 912 345 6789',
        email: 'chou.tzu-yu@email.com',
        avatar: '/src/assets/images/navbar/avatar.svg',
        loyalty_points: 0,
        address: [
          {
            id: 1,
            value: 'No. 21 St. Agustin Streen, Brgy. De Jose Delgado City 2234 Philippines',
            label: 'My Home Address'
          },
          {
            id: 2,
            value: '3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines',
            label: 'Work/Office'
          }
        ]
      }
    },

    getLoyaltyProduct (id) {
      this.loyaltyProduct = find(this.loyaltyProducts, { 'id': Number(id) })
    },

    clearLoyaltyProducts () {
      this.loyaltyProducts = []
    },

    clearProduct () {
      this.loyaltyProduct = null
    },

    clearUser () {
      this.user = null
    }
  }
});
