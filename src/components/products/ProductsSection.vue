<template>
  <div>
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
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/store/productStore.js';
import ProductCard from '@/components/products/ProductCard.vue';

const productStore = useProductStore();
const { products } = storeToRefs(productStore);
</script>

<style lang="scss" scoped></style>