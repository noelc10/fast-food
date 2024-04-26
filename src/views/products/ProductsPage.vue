<template>
  <ion-page>
    <ion-header :translucent="true" class="shadow-none">
      <ion-toolbar>
        <div class="flex flex-row items-center">
          <div class="grow-0">
            <ion-menu-toggle>
              <ion-button fill="clear">
                <ion-icon color="primary" size="large" :ios="'/src/assets/images/navbar/icons/navbar.svg'" :md="'/src/assets/images/navbar/icons/navbar.svg'" />
              </ion-button>
            </ion-menu-toggle>
          </div>
          <div class="grow px-4 py-5">
            <h2 class="my-0 black--text font-bold">Our Foods</h2>
          </div>
          <div class="px-4 flex grow-0 items-center">
            <ion-icon class="products-header-cart-icon" color="primary" src="/src/assets/images/cart.svg"></ion-icon>
          </div>
        </div>
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
            <search-bar-section />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <categories-section />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <products-section />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import SearchBarSection from '/src/components/products/SearchBarSection.vue';
import CategoriesSection from '/src/components/products/CategoriesSection.vue';
import ProductsSection from '/src/components/products/ProductsSection.vue';
</script>

<style lang="scss" scoped>
.avatar-sm {
  height: 37px;
  width: 37px;
}

ion-item ion-label {
  font-weight: 500;
}
</style>
