<template>
  <ion-page>
    <app-header />

    <ion-content :fullscreen="true">
      <div class="flex flex-col">
        <cart-user-contact-card :user="user" />
        <cart-user-address-cards :addresses="user?.address" />
        
        <div class="grow px-4 py-5">
          <h2 class="my-0 black--text font-bold">Orders</h2>
        </div>
        <cart-user-order-card
          v-for="(cartItem, i) in cart"
          :key="i"
          :cartItem="cartItem"
          @onIncrementCount="incrementCartItemCount"
          @onDecrementCount="decrementCartItemCount"
          @onRemoveItem="removeCartItem"
        />
        <ion-text v-if="!cart.length" class="p-4">
          Your cart is empty.
        </ion-text>

        <div class="grow px-4 py-5">
          <h2 class="my-0 black--text font-bold">Payment Options</h2>
        </div>
        <cart-user-payment-cards
          :user="user"
          :payments="paymentMethods"
          @setSelectedPaymentMethod="selectedPaymentMethod = $event"
        />

        <div class="grow">
          <ion-item lines="none">
            <ion-label class="my-0">Subtotal</ion-label>
            <ion-label slot="end" class="my-0">P {{ subTotal }}</ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label class="my-0">Delivery Charge</ion-label>
            <ion-label slot="end" class="my-0">P {{ deliveryCharge }}</ion-label>
          </ion-item>
        </div>

        <div class="grow px-4">
          <ion-input
            :disabled="true"
            label-placement="stacked"
            label="Change for"
            aria-label="Change for"
            placeholder="e.g 1,000"
            class="change-field"
          ></ion-input>
        </div>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col size="5" class="flex flex-col align-center justify-center order-total-container">
              <ion-text>Grand Total</ion-text>
              <ion-text class="font-bold">P {{ grandTotal }}</ion-text>
            </ion-col>
            <ion-col size="7">
              <ion-button
                :disabled="!canProceedOrder"
                @click="proceedOrder"
                expand="block"
                color="primary"
                class="order-btn"
              >
                Place Order
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import {
  IonPage,
  IonContent,
  IonFooter,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
  IonLabel,
  IonItem,
  IonInput
} from '@ionic/vue'
import AppHeader from '@/components/header/AppHeader.vue'
import CartUserContactCard from '@/components/cart/CartUserContactCard.vue'
import CartUserAddressCards from '@/components/cart/CartUserAddressCards.vue'
import CartUserOrderCard from '@/components/cart/CartUserOrderCard.vue'
import CartUserPaymentCards from '@/components/cart/CartUserPaymentCards.vue'
import { useProfileStore } from '@/store/profileStore.js'
import { useCartStore } from '@/store/cartStore.js'

const profileStore = useProfileStore()
const { user } = storeToRefs(profileStore)

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)

const selectedPaymentMethod = ref(null)
const paymentMethods = computed(() => {
  return [
    {
      id: 1,
      title: 'Loyalty Points',
      description: 'Pay using your earned loyalty points',
      img: null
    },
    {
      id: 2,
      title: 'Paypal',
      description: 'A new tab will open to access your account',
      img: '/src/assets/images/cart/payments/paypal.png'
    },
    {
      id: 3,
      title: 'Paynamics',
      description: 'Choose paynamics services available from you',
      img: '/src/assets/images/cart/payments/paynamics.png'
    }
  ]
})
const subTotal = computed(() => {
  let total = 0
  
  if (cart.value.length) {
    cart.value.forEach(item => {
      let itemAddOnsTotal = 0
      
      if (item?.addons.length) {
        item.addons.forEach(addon => {
          itemAddOnsTotal += addon.count * addon.price
        })
      }

      total += (Number(item.price) * item.count) + itemAddOnsTotal
    })
  }

  return Number(Number(total).toFixed(2))
})
const deliveryCharge = computed(() => {
  return subTotal.value > 0 ? 59 : 0
})
const grandTotal = computed(() => {
  return Number(Number(subTotal.value + deliveryCharge.value).toFixed(2))
})
const canProceedOrder = computed(() => {
  return cart.value.length && selectedPaymentMethod.value
})

async function incrementCartItemCount (item) {
  await cartStore.increaseCartItemCount(item)
}

async function decrementCartItemCount (item) {
  await cartStore.decreaseCartItemCount(item)
}

async function removeCartItem (item) {
  await cartStore.removeItemToCart(item)
}

const router = useRouter()
function proceedOrder () {
  router.push('/cart/success')
}

onMounted(() => {
  if (!cart.value.length) {
    router.push('/home')
  }
})
</script>

<style lang="scss" scoped>
ion-item {
  --background-hover: none;

  ion-label {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
  }
}

ion-button.order-btn {
  --padding-top: 16px;
  --padding-bottom: 16px;
  --box-shadow: none;
}

.order-total-container {
  color: #000;
}

ion-input.change-field {
  --background: #F8F9FA;
  --border-color: #E2E4E8;
  --border-radius: 16px;
  --border-width: 1px;
  --placeholder-color: #DEE2E6;
  --placeholder-opacity: 0.8;
  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;

  &.input-disabled {
    --placeholder-color: #808080;

    & > .label-text-wrapper {
      color: #596167 !important;
    }
  }
}
</style>
