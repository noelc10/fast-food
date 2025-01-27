<template>
  <ion-page>
    <app-header />

    <ion-content :fullscreen="true">
      <div class="flex flex-col">
        <cart-user-contact-card :user="user" />
        <cart-user-address-card :addresses="user.address" />
        
        <div class="grow px-4 py-5">
          <h2 class="my-0 black--text font-bold">Orders</h2>
        </div>
        <!-- Cart Order Cards Component -->

        <div class="grow px-4 py-5">
          <h2 class="my-0 black--text font-bold">Payment Options</h2>
        </div>
        <!-- Payment Option Cards Component -->
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col size="5" class="flex flex-col align-center justify-center order-total-container">
              <ion-text>Grand Total</ion-text>
              <ion-text class="font-bold">P 0.00</ion-text>
            </ion-col>
            <ion-col size="7">
              <ion-button expand="block" color="primary" class="order-btn">Place Order</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup>
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
  IonButton
} from '@ionic/vue'
import AppHeader from '@/components/header/AppHeader.vue'
import CartUserAddressCard from '@/components/cart/CartUserAddressCard.vue'
import CartUserContactCard from '@/components/cart/CartUserContactCard.vue'
import { useProfileStore } from '@/store/profileStore.js'

const profileStore = useProfileStore()
const { user } = storeToRefs(profileStore)
</script>

<style lang="scss" scoped>
ion-button.order-btn {
  --padding-top: 16px;
  --padding-bottom: 16px;
  --box-shadow: none;
}

.order-total-container {
  color: #000;
}
</style>
