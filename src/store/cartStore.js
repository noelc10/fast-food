import { defineStore } from 'pinia'
import { findIndex, isEqual, isEqualWith } from 'lodash'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: []
  }),

  actions: {
    getCart () {
      return this.cart
    },

    addItemToCart (item) {
      if (this.cart.length) {
        const exist = findIndex(this.cart, (cartItem) => isEqualWith(cartItem, item, (val1, val2, key) => { 
          if (key === 'count') {
            return true
          }
        }))

        if (exist >= 0) {
          this.cart[exist].count += item.count
          return
        }
      }

      this.cart.push(item)
    },

    removeItemToCart (item) {
      const exist = findIndex(this.cart, (cartItem) => {
        return isEqual(cartItem, item)
      })
      
      if (exist >= 0) {
        this.cart.splice(exist, 1)
      }
    },

    increaseCartItemCount (item) {
      const index = findIndex(this.cart, { id: item.id })
      if (index >= 0) {
        this.cart[index].count++
      }
    },

    decreaseCartItemCount (item) {
      const index = findIndex(this.cart, { id: item.id })
      if (index >= 0) {
        if (item.count && item.count > 1) {
          this.cart[index].count--
        }
      }
    },

    clearCart () {
      this.cart = []
    }
  }
});
