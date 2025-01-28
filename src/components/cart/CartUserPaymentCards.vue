<template>
  <ion-radio-group
    v-if="props.payments.length"
    v-model="selectedPaymentMethod"
    @ionChange="selectCartUserPaymentMethod($event.target.value)"
    class="px-4"
  >
    <div
      v-for="(payment, i) in props.payments"
      :key="payment.id"
      class="my-2 flex flex-row cart-user-payment-card"
    >
      <div class="ml-2 flex-col cart-user-payment-card-content">
        <ion-radio
          :value="i"
          class="font-bold"
          justify="space-between"
          color="warning"
        >
          <div class="cart-user-payment-card-title">
            <ion-label v-if="payment?.img">
              <ion-img
                :alt="payment?.title"
                :src="payment?.img"
              />
            </ion-label>
            <ion-label v-if="!payment?.img">
              <span v-if="payment?.title === 'Loyalty Points'">
                {{ payment?.title }}
                <ion-text color="danger">({{ props.user?.loyalty_points ?? 0 }} points)</ion-text>
              </span>
              <span v-if="payment?.title !== 'Loyalty Points'">{{ payment?.title }}</span>
            </ion-label>
          </div>
          <div class="cart-user-payment-card-subtitle">
            <ion-text>{{ payment?.description }}</ion-text>
          </div>
        </ion-radio>
      </div>
    </div>
  </ion-radio-group>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import {
  IonRadio,
  IonRadioGroup,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonImg
} from '@ionic/vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: null
  },
  payments: {
    type: Array,
    default: () => ([])
  },
})
const emit = defineEmits(['setSelectedPaymentMethod'])

const selectedPaymentMethod = ref(null)
const selectCartUserPaymentMethod = (i) => {
  emit('setSelectedPaymentMethod', props.payments[i])
}
</script>

<style lang="scss" scoped>
ion-item {
  --background-hover: none;
}

.cart-user-payment-card {
  width: 100%;
  max-width: 100%;
  background-color: #E9ECEF;
  border-radius: 16px;
  padding: 16px;

  & > .cart-user-payment-card-image {
    img {
      width: 88px;
      height: 88px;
    }
  }

  & > .cart-user-payment-card-content {
    width: 100%;

    ion-radio {
      width: 100%;

      &::part(container) {
        background-color: white;
        border-radius: 25px;
        border: none;
        padding: 0px;
      }

      .cart-user-payment-card-title {
        & > img,
        ion-img {
          width: 80px;
          height: auto;
          margin-bottom: 8px;
        }
      }

      .cart-user-payment-card-subtitle {
        ion-text {
          font-weight: 400;
          font-size: 14px;
          line-height: 21px;
          color: #6C757D;
        }
      }
    }
  }
}

.cart-user-payment-action-buttons-container {
  & ion-button {
    --box-shadow: none;
    width: 44px;

    &.cart-user-payment-action-button-warning {
      --padding-start: 10px;
      --padding-end: 10px;
      --background: #FD7E1433 !important;
      --color: #FFC02E;
    }

    &.cart-user-payment-action-button-danger {
      --padding-start: 10px;
      --padding-end: 10px;
      --background: #DC354533;
      --color: #DC3545;
    }
  }
}
</style>
