<template>
  <ion-page>
    <app-header />

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.name }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="flex flex-row">
              <div class="mr-4">
                <ion-icon class="home-greetings-img" size="large" :ios="'/src/assets/images/logo.svg'" :md="'/src/assets/images/logo.svg'" />
              </div>
              <div>
                <p class="my-0 mb-1">Anneoyong, Chou!</p>
                <h2 class="my-0 font-bold">What do you want<br>to eat?</h2>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <search-bar-section
              :placeholder="'try our new Steak Fries Veggies'"
              :start-icon="'/src/assets/images/search.svg'"
            />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <special-offers-section />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <category-section />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <whats-new-section />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <most-popular-section />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <br />
    <br />
    <br />
    <ion-fab class="fab-btn" slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button @click="() => router.replace('/products')">
        Order Now!
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {
  // IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  // IonLabel,
  // IonMenuToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton
} from '@ionic/vue'
// import {
//   chevronForward
// } from 'ionicons/icons'
import AppHeader from '@/components/header/AppHeader.vue'
import SearchBarSection from '@/components/home/SearchBarSection.vue'
import SpecialOffersSection from '@/components/home/SpecialOffersSection.vue'
import CategorySection from '@/components/home/CategorySection.vue'
import WhatsNewSection from '@/components/home/WhatsNewSection.vue'
import MostPopularSection from '@/components/home/MostPopularSection.vue'

const router = useRouter()
</script>

<style lang="scss" scoped>
.avatar-sm {
  height: 37px;
  width: 37px;
}

ion-item ion-label {
  font-weight: 500;
}

.home-greetings-img {
  width: 67px;
  height: 72px;
}

ion-button.menu-btn {
  & > #shadow-root {
    & > button.button-native {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }
}
</style>
