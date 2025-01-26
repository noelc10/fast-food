<template>
  <div>
    <div class="flex flex-wrap justify-start most-popular-container">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :product="product"
        @click="productDetails(product.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/store/productStore.js'
import ProductCard from '@/components/products/ProductCard.vue'

const router = useRouter();
const productStore = useProductStore();
const { products } = storeToRefs(productStore);

function productDetails (id) {
  router.push({
    name: 'product-details',
    params: {
      id
    }
  });
}
</script>

<style lang="scss" scoped></style>
