<template>
  <ion-item-sliding class="mb-4">
    <ion-item lines="none">
      <div
        class="my-0 flex flex-col cart-user-order-card"
      >
        <div class="flex flex-row">
          <div class="p-4 flex-row addons-image">
            <ion-img
              :alt="props.cartItem?.title"
              :src="props.cartItem?.img"
            ></ion-img>
          </div>
          <div class="ml-1 flex-col cart-user-order-card-content">
            <div class="cart-user-order-card-title">
              {{ props.cartItem?.title }}
            </div>
            <div class="flex-col cart-user-order-card-subtitle">
              <ion-text
                v-for="(addon, i) in props.cartItem?.addons"
                :key="i"
                class="flex"
              >
                {{ addon?.count }}x {{ addon?.title }}
              </ion-text>
              <ion-text class="flex">
                1x {{ props.cartItem?.beverage?.text }} {{ props.cartItem?.beverage_size?.text }}
              </ion-text>
            </div>
          </div>
        </div>
        <hr class="mx-0 separator" />
        <div class="flex flex-row items-center justify-between cart-user-order-details">
          <div class="cart-user-order-details-price">P {{ cartItemTotal }}</div>
          <cart-count
            :value="props.cartItem?.count"
            @incrementCount="incrementCount(props.cartItem)"
            @decrementCount="decrementCount(props.cartItem)"
          />
        </div>
      </div>
      <ion-icon slot="end" color="warning" size="large" class="m-0" :ios="ellipsisVertical" :md="ellipsisVertical"></ion-icon>
    </ion-item>

    <ion-item-options class="pr-4 cart-user-order-action-buttons-container">
      <ion-button class="mx-2 cart-user-order-action-button-warning">
        <ion-icon color="warning" size="large" :ios="pencilOutline" :md="pencilOutline"></ion-icon>
      </ion-button>
      <ion-button @click="removeItem(item)" class="mx-2 cart-user-order-action-button-danger">
        <ion-icon color="danger" size="large" :ios="trashOutline" :md="trashOutline"></ion-icon>
      </ion-button>
    </ion-item-options>
  </ion-item-sliding>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import {
  IonButton,
  IonText,
  IonIcon,
  IonItem,
  IonItemSliding,
  IonItemOptions,
  IonImg
} from '@ionic/vue'
import {
  ellipsisVertical,
  pencilOutline,
  trashOutline
} from 'ionicons/icons'
import CartCount from '@/components/products/product-details/CartCount.vue'

const props = defineProps({
  cartItem: {
    type: Object,
    default: null
  }
})
const emit = defineEmits(['onIncrementCount', 'onDecrementCount'])
const cartItemTotal = computed(() => {
  let addOnTotal = 0

  if (props.cartItem?.addons.length) {
    props.cartItem?.addons.forEach(addon => {
      addOnTotal += addon.price * addon.count
    })
  }

  return (Number(props.cartItem?.price) * props.cartItem?.count) + addOnTotal
})

function incrementCount (item) {
  emit('onIncrementCount', item)
}

function decrementCount (item) {
  emit('onDecrementCount', item)
}

function removeItem (item) {
  emit('onRemoveItem', item)
}
</script>

<style lang="scss" scoped>
ion-item {
  --background-hover: none;
}

.cart-user-order-card {
  width: 100%;
  max-width: 100%;
  background-color: #E9ECEF;
  border-radius: 16px;
  padding: 16px;

  & .cart-user-order-card-image {
    ion-img {
      width: 88px;
      height: 88px;
    }
  }

  & .cart-user-order-card-content {
    width: 100%;

    & > .cart-user-order-card-title {
      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
      color: #000;
      margin: .5rem 0;
    }

    & > .cart-user-order-card-subtitle {
      ion-text {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #000;
      }
    }
  }
}

.cart-user-order-action-buttons-container {
  & ion-button {
    --box-shadow: none;
    width: 44px;

    &.cart-user-order-action-button-warning {
      --padding-start: 10px;
      --padding-end: 10px;
      --background: #FD7E1433 !important;
      --color: #FFC02E;
    }

    &.cart-user-order-action-button-danger {
      --padding-start: 10px;
      --padding-end: 10px;
      --background: #DC354533;
      --color: #DC3545;
    }
  }
}
</style>
