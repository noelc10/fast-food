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
          <vue3-star-rating
            v-model="rating"
            starColor="#FFC02E"
            inactiveColor="#A8AAAB"
            :starSize="12"
            :disableClick="true"
          ></vue3-star-rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    default: () => { return null }
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

<style lang="scss"></style>