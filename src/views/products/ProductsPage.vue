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
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue'
import AppHeader from '@/components/header/AppHeader.vue'
import SearchBarSection from '@/components/products/SearchBarSection.vue'
import CategoriesSection from '@/components/products/CategoriesSection.vue'
import ProductsSection from '@/components/products/ProductsSection.vue'
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
