<template>
  <div>
    <div class="flex justify-between place-items-center most-popular-setion-header">
      <div class="flex-inherit">
        <h2 class="font-bold">Most Popular</h2>
      </div>
    </div>
    <div class="flex flex-wrap justify-between most-popular-container">
      <div
        v-for="(food, i) in foods"
        :key="i"
        class="flex flex-col food-card"
      >
        <div class="food-card-img">
          <img :alt="food.title" :src="food.img" />
        </div>
        <div class="food-card-container">
          <div class="truncate ion-text-capitalize food-card-title">
            {{ food.title }}
          </div>
          <div class="truncate ion-text-capitalize food-card-subtitle">
            {{ food.type }}
          </div>
          <div class="mt-4 flex justify-between items-center food-card-details">
            <div class="food-card-details-price">P {{ food.price }}</div>
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
import { ref } from 'vue';
import {
  IonIcon
} from '@ionic/vue';

const foods = ref([
  {
    img: '/src/assets/images/foods/food-1.png',
    title: 'Steak Fries Veggies',
    type: 'Meat',
    price: '175',
    rating: 4.5
  },
  {
    img: '/src/assets/images/foods/food-2.png',
    title: 'Chicken Salad',
    type: 'Chicken',
    price: '172',
    rating: 4.5
  },
  {
    img: '/src/assets/images/foods/food-3.png',
    title: 'Sorvetes Primavera ..',
    type: 'Dessert',
    price: '185',
    rating: 4.5
  },
  {
    img: '/src/assets/images/foods/food-4.png',
    title: 'Fried Chicken',
    type: 'Chicken',
    price: '175',
    rating: 4.5
  },
])
</script>

<style lang="scss" scoped>
.most-popular-container {
  & > .food-card {
    width: 168px;
    background-color: #E9ECEF;
    border-radius: 16px;
    padding: 16px;
    margin: 4px 0;

    & > .food-card-img {
      height: 136px;
      width: 136px;
      align-content: center;
    }

    & > .food-card-container {
      & > .food-card-title {
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
      }

      & > .food-card-subtitle {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
      }
      
      & > .food-card-details {
        & > .food-card-details-price {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: #D71921;
        }
      }
    }
  }
}
</style>