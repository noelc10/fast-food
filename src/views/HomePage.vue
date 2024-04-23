<template>
  <ion-page>
    <ion-header :translucent="true" class="shadow-none">
      <ion-toolbar>
        <ion-grid color="light">
          <ion-row class="ion-justify-content-between">
            <ion-col size="3" class="hide-lg ion-align-self-center">
              <ion-menu-toggle>
                <ion-button fill="clear" class="menu-btn">
                  <ion-icon color="primary" size="large" :ios="'/src/assets/images/navbar/icons/navbar.svg'" :md="'/src/assets/images/navbar/icons/navbar.svg'" />
                </ion-button>
              </ion-menu-toggle>
            </ion-col>
            <ion-col class="ion-align-self-center">
              <ion-list class="px-0 acc-points-sec">
                <ion-item lines="none" :detail="false" class="hydrated">
                  <img class="mr-4" alt="Loyalty Badge" :src="'/src/assets/images/navbar/crown.svg'" />
                  <ion-label class="ion-label-with-ion-icon">
                    0 Points
                    <ion-icon aria-hidden="true" size="small" color="primary" class="ml-2" :ios="chevronForward" :md="chevronForward"></ion-icon>
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-col>
            <ion-col size="3" class="ion-align-self-center">
              <ion-avatar class="avatar-sm ion-float-right">
                <img src="/src/assets/images/navbar/avatar.svg" alt="Avatar" />
              </ion-avatar>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

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
            <search-bar-section />
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

      <ion-fab class="fab-btn" slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button @click="order">
          Order Now!
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  useIonRouter
} from '@ionic/vue';
import {
  chevronForward
} from 'ionicons/icons';
import SearchBarSection from '/src/components/home/SearchBarSection.vue';
import SpecialOffersSection from '/src/components/home/SpecialOffersSection.vue';
import CategorySection from '/src/components/home/CategorySection.vue';
import WhatsNewSection from '/src/components/home/WhatsNewSection.vue';
import MostPopularSection from '/src/components/home/MostPopularSection.vue';

const ionRouter = useIonRouter()

function order () {
  ionRouter.push('/order')
}
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

ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0);

  & > ion-fab-button {
    --background: #d71921;
    --background-activated: #b41119;
    --background-hover: #d9353d;
    --border-radius: 16px;
    --color: white;
    font-weight: 700;
    width: 161px;
  }
}
</style>
