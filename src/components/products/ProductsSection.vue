<template>
  <div>
    <div v-if="!filteredProducts.length" class="flex flex-wrap justify-start most-popular-container">
      <ion-text>No food/s available.</ion-text>
    </div>
    <div v-if="filteredProducts.length" class="flex flex-wrap justify-start most-popular-container">
      <product-card
        v-for="(product, i) in filteredProducts"
        :key="i"
        :product="product"
        @click="productDetails(product.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { filter } from 'lodash'
import { useProductStore } from '@/store/productStore.js'
import ProductCard from '@/components/products/ProductCard.vue'

const router = useRouter()

const productStore = useProductStore()
const { products } = storeToRefs(productStore)
const filteredProducts = ref(products.value)

const props = defineProps({
  search: String,
  category: String
})
const filterProducts = () => {
  filteredProducts.value = filter(products.value, (product) => {
    if ((props.search !== '' && props.search !== null) && props.category !== '') {
      return product.title.toLowerCase().includes(props.search.toLowerCase()) && product.category.value === props.category
    }

    if (props.search !== '' && props.search !== null) {
      return product.title.toLowerCase().includes(props.search.toLowerCase())
    }

    if (props.category !== '') {
      return product.category.value === props.category
    }

    return product
  })
}
watch(
  () => [props.search, props.category],
  () => {
  filterProducts()
})

function productDetails (id) {
  router.push({
    name: 'product-details',
    params: {
      id
    }
  });
}
</script>
