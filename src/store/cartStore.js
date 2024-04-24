import { defineStore } from 'pinia';
import { findIndex } from 'lodash'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: []
  }),

  actions: {
    getCart () {
      return this.cart
    },

    addItemToCart (item) {
      const index = findIndex(this.cart, { id: item.id });
      if (index) {
        this.cart[index].count = this.cart[index].count++

        return
      }

      item.count = 1
      this.cart.push(item);
    },

    removeItemToCart (item) {
      const index = findIndex(this.cart, { id: item.id });
      if (index) {
        this.cart.splice(index, 1);
      }
    },

    increaseCartItemCount (item) {
      const index = findIndex(this.cart, { id: item.id });
      if (index) {
        this.cart[index].count = this.cart[index].count++;
      }
    },

    decreaseCartItemCount (item) {
      const index = findIndex(this.cart, { id: item.id });
      if (index) {
        if (item.count && item.count <= 0) {
          this.removeItemToCart(item);
        }

        this.cart[index].count = this.cart[index].count--;
      }
    },

    clearCart () {
      this.cart = [];
    }
  }
});
