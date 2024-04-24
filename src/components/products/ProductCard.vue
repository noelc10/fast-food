<template>
  <div v-if="props.product" class="flex flex-col food-card">
    <div class="food-card-img">
      <img :alt="props.product.title" :src="props.product.img" />
    </div>
    <div class="food-card-container">
      <div class="truncate ion-text-capitalize food-card-title">
        {{ props.product.title }}
      </div>
      <div class="truncate ion-text-capitalize food-card-subtitle">
        {{ props.product.type }}
      </div>
      <div class="mt-4 flex justify-between items-center food-card-details">
        <div class="food-card-details-price">P {{ props.product.price }}</div>
        <div class="food-card-details-rating">
          <img alt="Rating" :src="'/src/assets/images/foods/rating.svg'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    default: () => { return null }
  }
})
</script>

<style lang="scss" scoped></style>