<template>
  <div>
    <div class="flex justify-between place-items-center most-popular-setion-header">
      <div class="flex-inherit">
        <h2 class="font-bold">Most Popular</h2>
      </div>
    </div>
    <div class="flex flex-wrap justify-start most-popular-container">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/store/productStore.js'
import ProductCard from '@/components/products/ProductCard.vue'

const productStore = useProductStore();
const { products } = storeToRefs(productStore);
</script>

<style lang="scss" scoped></style>
