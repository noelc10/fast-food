<template>
  <div>
    <ion-input type="search" size="large" placeholder="try our new Steak Fries Veggies">
      <ion-icon slot="start" aria-hidden="true" color="primary" size="large" :ios="'/src/assets/images/search.svg'" :md="'/src/assets/images/search.svg'"></ion-icon>
    </ion-input>
  </div>
</template>

<script setup>
import {
  IonInput,
  IonIcon
} from '@ionic/vue';
</script>

<style lang="scss" scoped>
ion-input {
  height: 60px;
}
</style>