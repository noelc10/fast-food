<template>
  <div class="flex flex-row overflow-y categories-container">
    <ion-button
      v-for="category in categories"
      :key="category.value"
      :color="categorySelected === category.value ? 'primary' : 'secondary'"
      @click="setCategory(category.value)"
    >
      {{ category.text }}
    </ion-button>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';
import {
  IonButton
} from '@ionic/vue';

const categories = ref([
  {
    value: '',
    text: 'All'
  },
  {
    value: 'breakfast',
    text: 'Breakfast'
  },
  {
    value: 'chicken',
    text: 'Chicken'
  },
  {
    value: 'seafood',
    text: 'Seafood'
  },
  {
    value: 'others',
    text: 'Others'
  },
]);
const categorySelected = ref('');

function setCategory (category) {
  categorySelected.value = category
}
</script>

<style lang="scss" scoped>
.categories-container {
  ion-button {
    --box-shadow: none;
    margin: 8px 4px;
    height: 43px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>