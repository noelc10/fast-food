<template>
  <ion-header :translucent="true" class="shadow-none">
    <ion-toolbar>
      <div class="flex flex-row items-center">
        <div :class="{ 'pl-3': route.name === 'product-details' }" class="grow-0">
          <ion-button
            v-if="route.name === 'product-details'"
            class="back-btn"
            color="secondary"
            @click="back"
          >
            <ion-icon :ios="chevronBack" :md="chevronBack" />
          </ion-button>
          <ion-menu-toggle v-if="route.name === 'home' || route.name === 'products' || route.name === 'profile'">
            <ion-button fill="clear">
              <ion-icon color="primary" size="large" :ios="'/src/assets/images/navbar/icons/navbar.svg'" :md="'/src/assets/images/navbar/icons/navbar.svg'" />
            </ion-button>
          </ion-menu-toggle>
        </div>


        <div v-if="route.name === 'profile'" class="grow px-4 py-5">
          <h2 class="my-0 black--text font-bold">Loyalty Points</h2>
        </div>
        <div v-if="route.name === 'products'" class="grow px-4 py-5">
          <h2 class="my-0 black--text font-bold">Our Foods</h2>
        </div>
        <div v-if="route.name === 'product-details'" class="grow px-4 py-5">
          <h2 class="my-0 black--text font-bold">{{ props.product?.type }}</h2>
        </div>
        <div v-if="route.name === 'home'" class="flex items-center grow px-4 py-5">
          <img class="mr-4" alt="Loyalty Badge" :src="'/src/assets/images/navbar/crown.svg'" />
          <ion-label class="font-bold">
            0 Points
            <ion-icon size="small" color="primary" class="ml-2 self-center" :ios="chevronForward" :md="chevronForward"></ion-icon>
          </ion-label>
        </div>

        <div v-if="route.name === 'products' || route.name === 'product-details'" class="px-4 flex grow-0 items-center">
          <ion-icon class="products-header-cart-icon" color="primary" src="/src/assets/images/cart.svg"></ion-icon>
        </div>
        <div v-if="route.name === 'home'" class="px-4 flex grow-0 items-center">
          <ion-icon class="home-header-avatar" size="large" src="/src/assets/images/navbar/avatar.svg"></ion-icon>
        </div>
      </div>
    </ion-toolbar>
  </ion-header>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  IonButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonToolbar
} from '@ionic/vue'
import {
  chevronBack,
  chevronForward
} from 'ionicons/icons'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  product: {
    type: Object,
    default: () => ({})
  }
})

function back () {
  router.go(-1)
}
</script>
