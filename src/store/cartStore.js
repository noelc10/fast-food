import { defineStore } from 'pinia'
import { findIndex, each } from 'lodash'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: []
  }),

  actions: {
    getCart () {
      return this.cart
    },

    addItemToCart (item) {
      // Temporarily disabled to have unique cart items and its details
      // const index = findIndex(this.cart, { id: item.id });
      // if (index >= 0) {
      //   this.cart[index].count += item.count
      //   if (item.addons.length) {
      //     each(item.addons, (addon, i) => {
      //       let exist = findIndex(this.cart[index].addons, { id: addon.id });

      //       if (exist >= 0) {
      //         this.cart[index].addons[exist].count += addon.count
      //       } else {
      //         this.cart[index].addons[i] = addon
      //       }
      //     })
      //   }
      // END

      //   return
      // }

      // !item.count
      //   ? item.count = 1
      //   : null
      this.cart.push(item)
    },

    removeItemToCart (item) {
      const index = findIndex(this.cart, { id: item.id })
      if (index) {
        this.cart.splice(index, 1)
      }
    },

    increaseCartItemCount (item) {
      const index = findIndex(this.cart, { id: item.id })
      if (index) {
        this.cart[index].count = this.cart[index].count++
      }
    },

    decreaseCartItemCount (item) {
      const index = findIndex(this.cart, { id: item.id })
      if (index) {
        if (item.count && item.count <= 0) {
          this.removeItemToCart(item)
        }

        this.cart[index].count = this.cart[index].count--
      }
    },

    clearCart () {
      this.cart = []
    }
  }
});
