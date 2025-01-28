<template>
  <ion-page>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="flex flex-col items-center justify-between text-center cart-order-receive-container">
              <div class="flex flex-col">
                <ion-img
                  alt="'Order Received'"
                  :src="'/src/assets/images/success.svg'"
                ></ion-img>
                <h2 class="font-bold">Order Received!</h2>
                <ion-text color="medium">Your order <b><ion-label color="danger">No. 19049585</ion-label></b> has successfully take and now being processed. Kindly wait for our notification regarding your order.</ion-text>
              </div>
              <div class="flex flex-col w-full my-5">
                <ion-button buttonType="button" color="primary" expand="block" size="large">Track Order</ion-button>
                <ion-button buttonType="button" color="primary" fill="clear" expand="block" size="large" @click="redirectToHome">Back To Home</ion-button>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import {
  IonButton,
  IonImg,
  IonText,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonPage
} from '@ionic/vue'
import { useCartStore } from '@/store/cartStore'

const router = useRouter()
const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
const redirectToHome = async () => {
  await cartStore.clearCart()
  router.push('/home')
}

onMounted(() => {
  if (!cart.value.length) {
    router.push('/home')
  }
})
</script>

<style lang="scss" scoped>
.cart-order-receive-container {
  height: 100vh;
  padding: 24px 4px;
  font-size: 14px;
  line-height: 21px;

  .w-full {
    width: 100%;
  }

  ion-img {
    height: 161px;
    width: auto;
    margin: 24px 16px;
  }

  ion-button {
    --padding-top: 16px;
    --padding-end: 16px;
    --padding-bottom: 16px;
    --padding-start: 16px;
    --box-shadow: none;
  }
}
</style>
