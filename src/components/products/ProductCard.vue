<template>
  <div v-if="props.product" :class="{ 'flex-col': props.type === 'product', 'flex-row loyalty': props.type === 'loyalty' }" class="flex food-card">
    <div :class="{ 'food-card-img': props.type === 'product', 'mr-2 loyalty-food-card-img': props.type === 'loyalty' }">
      <img :alt="props.product.title" :src="props.product.img" />
    </div>
    <div class="food-card-container">
      <div class="truncate ion-text-capitalize food-card-title">
        {{ props.product.title }}
      </div>
      <div class="truncate ion-text-capitalize food-card-subtitle">
        {{ props.product.category.text }}
      </div>
      <div v-if="props.type === 'product'" class="mt-4 flex justify-between items-center food-card-details">
        <div class="food-card-details-price">P {{ props.product.price }}</div>
        <div class="food-card-details-rating">
          <vue3-star-rating
            v-model="rating"
            starColor="#FFC02E"
            inactiveColor="#A8AAAB"
            :starSize="12"
            :disableClick="true"
          ></vue3-star-rating>
        </div>
      </div>
      <div v-if="props.type === 'loyalty'" class="mt-4 flex justify-between items-center food-card-details">
        <div class="flex items-center food-card-details-price">
          <img width="24px" class="mr-2" alt="Loyalty Badge" :src="'/src/assets/images/navbar/crown.svg'" />
          {{ props.product?.points }} points
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    default: () => { return null }
  },
  type: {
    type: String,
    default: 'product'
  }
})
const rating = ref(0);

watch(
  () => props.product,
  (newVal) => {
    rating.value = newVal?.rating || 0;
  },
  {
    immediate: true
  }
)
</script>
