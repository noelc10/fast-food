<template>
  <ion-list>
    <ion-radio-group
      v-if="props.addresses.length"
      v-model="selectedAddress"
      @ionChange="selectCartUserAddress($event.target.value)"
    >
      <ion-item-sliding
        v-for="address in props.addresses"
        :key="address.id"
      >
        <ion-item lines="none">
          <div
            class="my-2 flex flex-row cart-address-card"
          >
            <div class="ml-2 flex-col cart-address-card-content">
              <div class="cart-address-card-title">
                <ion-radio
                  :value="address.value"
                  class="font-bold"
                  justify="space-between"
                  color="warning"
                >
                  {{ address?.label }}
                </ion-radio>
              </div>
              <div class="cart-address-card-subtitle">
                <ion-text>{{ address?.value }}</ion-text>
              </div>
            </div>
          </div>
          <ion-icon slot="end" color="warning" size="large" class="m-0" :ios="ellipsisVertical" :md="ellipsisVertical"></ion-icon>
        </ion-item>

        <ion-item-options class="pr-4 cart-address-action-buttons-container">
          <ion-button class="mx-2 cart-address-action-button-warning">
            <ion-icon color="warning" size="large" :ios="pencilOutline" :md="pencilOutline"></ion-icon>
          </ion-button>
          <ion-button class="mx-2 cart-address-action-button-danger">
            <ion-icon color="danger" size="large" :ios="trashOutline" :md="trashOutline"></ion-icon>
          </ion-button>
        </ion-item-options>
      </ion-item-sliding>
    </ion-radio-group>
  </ion-list>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import {
  IonButton,
  IonRadio,
  IonRadioGroup,
  IonText,
  IonIcon,
  IonList,
  IonItem,
  IonItemSliding,
  IonItemOptions
} from '@ionic/vue'
import {
  ellipsisVertical,
  pencilOutline,
  trashOutline
} from 'ionicons/icons'

const props = defineProps({
  addresses: {
    type: Array,
    default: () => ([])
  }
})
const emit = defineEmits(['setCartUserAddress'])

const selectedAddress = ref(props?.addresses[0].value ?? '')
const selectCartUserAddress = (address) => {
  emit('setCartUserAddress', address)
}
</script>

<style lang="scss" scoped>
ion-item {
  --background-hover: none;
}

.cart-address-card {
  width: 100%;
  max-width: 100%;
  background-color: #E9ECEF;
  border-radius: 16px;
  padding: 16px;

  & > .cart-address-card-image {
    ion-img {
      width: 88px;
      height: 88px;
    }
  }

  & > .cart-address-card-content {
    width: 100%;

    & > .cart-address-card-title {
      ion-radio {
        width: 100%;

        &::part(container) {
          background-color: white;
          border-radius: 25px;
          border: none;
          padding: 0px;
        }
      }
    }

    & > .cart-address-card-subtitle {
      ion-text {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #6C757D;
      }
    }
  }
}

.cart-address-action-buttons-container {
  & ion-button {
    --box-shadow: none;
    width: 44px;

    &.cart-address-action-button-warning {
      --padding-start: 10px;
      --padding-end: 10px;
      --background: #FD7E1433 !important;
      --color: #FFC02E;
    }

    &.cart-address-action-button-danger {
      --padding-start: 10px;
      --padding-end: 10px;
      --background: #DC354533;
      --color: #DC3545;
    }
  }
}
</style>
