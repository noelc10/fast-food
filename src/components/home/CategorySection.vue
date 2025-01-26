<template>
  <div>
    <div class="flex justify-between place-items-center category-section-header">
      <div class="flex-inherit">
        <h2 class="font-bold">Category</h2>
      </div>
    </div>
    <div class="flex overflow-y category-section-container">
      <div
        v-for="(category, i) in categories"
        :key="i"
        class="category-section-card flex-inherit basis-auto grow-0"
        :style="`background-image: url('${category.bgImg}'); background-size: cover; background-repeat: no-repeat; background-position: center;`"
      >
        <span>{{ category.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue'

const categories = ref([
  {
    title: 'Chicken',
    bgImg: '/src/assets/images/home/category-1.png'
  },
  {
    title: 'Seafoods',
    bgImg: '/src/assets/images/home/category-2.png'
  }
])
</script>

<style lang="scss" scoped>
.category-section-container {
  & > .category-section-card {
    width: 200px;
    height: 300px;
    border-radius: 16px;
    margin: 0 8px;
    flex-basis: auto !important;
    flex-grow: 0 !important;
  
    &:first-of-type {
      margin-left: 0px !important;
    }
  
    &:last-of-type {
      margin-right: 0px !important;
    }

    & > span {
      display: flex;
      padding: 32px 16px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      color: white;
      height: 100%;
      align-items: flex-end;
    }
  }
}
</style>
