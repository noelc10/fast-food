<template>
  <div>
    <div class="flex flex-wrap justify-start most-popular-container">
      <div
        v-for="(product, i) in products"
        :key="i"
        class="flex flex-col food-card"
      >
        <div class="food-card-img">
          <img :alt="product.title" :src="product.img" />
        </div>
        <div class="food-card-container">
          <div class="truncate ion-text-capitalize food-card-title">
            {{ product.title }}
          </div>
          <div class="truncate ion-text-capitalize food-card-subtitle">
            {{ product.type }}
          </div>
          <div class="mt-4 flex justify-between items-center food-card-details">
            <div class="food-card-details-price">P {{ product.price }}</div>
            <div class="food-card-details-rating">
              <img alt="Rating" :src="'/src/assets/images/foods/rating.svg'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/store/productStore.js'

const productStore = useProductStore();
const { products } = storeToRefs(productStore);
</script>

<style lang="scss" scoped></style>