<template>
  <ion-page>
    <app-header :product="product" />

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.name }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="flex flex-col product-details-container">
              <div class="product-details-img">
                <ion-img
                  :src="product?.img"
                  :alt="product?.title"
                ></ion-img>
                <ion-button color="light" class="product-details-fave-btn">
                  <ion-icon color="primary" :ios="'/src/assets/images/favorite.svg'" :md="'/src/assets/images/favorite.svg'"></ion-icon>
                </ion-button>
              </div>
              <div class="product-details-title">
                <h5 class="font-bold">{{ product?.title }}</h5>
              </div>
              <div class="product-details-rating">
                <vue3-star-rating
                  v-model="rating"
                  starColor="#FFC02E"
                  inactiveColor="#A8AAAB"
                  class="my-4"
                  :starSize="14"
                  :disableClick="true"
                ></vue3-star-rating>
              </div>
              <div class="product-details-description">
                <ion-text>
                  {{ product?.description }}
                </ion-text>
              </div>
              <div class="mt-4 flex justify-between items-center product-details-price-container">
                <div class="product-details-price">P {{ product?.price }}</div>
                <div class="product-details-count-container">
                  <cart-count
                    :value="productCount"
                    @input="updateCount"
                  />
                </div>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <beverages-section
              :beverage="beverage"
              :beverage-size="beverageSize"
              :beverage-items="beverages"
              :beverage-sizes="beverageSizes"
              @inputBeverage="inputBeverage"
              @inputBeverageSize="inputBeverageSize"
            />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <add-ons-section
              :addon-items="addonItems"
              :addons-data="addons"
              @toggleAddonsItem="toggleAddonsItem"
              @updateAddonDataCount="updateAddonDataCount"
            />
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-modal id="added-to-card-modal" ref="modal" trigger="addedCartDialog">
        <div class="flex flex-col items-center added-to-card-modal-container">
          <ion-img
            alt="'Added to Cart'"
            :src="'/src/assets/images/success.svg'"
          ></ion-img>
          <h2 class="font-bold">Successfully Added!</h2>
          <ion-text color="medium">What do you want to do now?</ion-text>
          <br />
          <br />
          <ion-button buttonType="button" color="primary" expand="block" size="large">Proceed to Checkout</ion-button>
          <ion-button buttonType="button" color="primary" fill="clear" expand="block" size="large" @click="redirectToProducts">Add More</ion-button>
        </div>
      </ion-modal>
    </ion-content>
    <br />
    <br />
    <br />
    <ion-fab id="addedCartDialog" class="fab-btn" slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button @click="addToCart">
        Add to Bag!
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { find, findIndex } from 'lodash'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonContent,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonImg,
  IonText,
  IonFab,
  IonFabButton,
  IonModal
} from '@ionic/vue'
// import {
//   chevronBack
// } from 'ionicons/icons'
import { useProductStore } from '@/store/productStore.js'
import { useCartStore } from '@/store/cartStore.js'
import AppHeader from '@/components/header/AppHeader.vue'
import CartCount from '@/components/products/product-details/CartCount.vue'
import BeveragesSection from '@/components/products/product-details/BeveragesSection.vue'
import AddOnsSection from '@/components/products/product-details/AddOnsSection.vue'

const modal = ref();
const close = () => modal.value.$el.dismiss();

const route = useRoute();
const router = useRouter();

const productStore = useProductStore();
const { product } = storeToRefs(productStore);
const rating = ref(0);
const productCount = ref(1);
const beverage = ref({
  value: 'coke',
  text: 'Coke'
});
const beverageSize = ref({
  value: 'regular',
  text: 'Regular'
});
const addons = ref([]);
const addonItems = ref([
  {
    id: 1,
    title: 'Tomato Sauce',
    type: 'Sauce',
    image: '/src/assets/images/add-ons/tomato-sauce.svg',
    price: 49
  },
  {
    id: 2,
    title: 'White Rice',
    type: 'Rice',
    image: '/src/assets/images/add-ons/white-rice.svg',
    price: 25
  },
]);
const beverages = computed(() => {
  return [
    {
      value: 'coke',
      text: 'Coke'
    },
    {
      value: 'sprite',
      text: 'Sprite'
    },
    {
      value: 'royal',
      text: 'Royal'
    },
  ]
});
const beverageSizes = computed(() => {
  return [
    {
      value: 'regular',
      text: 'Regular'
    },
    {
      value: 'large',
      text: 'Large'
    },
    {
      value: 'xlarge',
      text: 'X-Large'
    },
  ]
});

watch(product, (newVal) => {
    rating.value = newVal?.rating || 0;
  },
  {
    immediate: true
  }
)

function init () {
  productStore.getProduct(route.params.id);
}

function updateCount (count) {
  productCount.value = count
}

function inputBeverage (value) {
  const bevVal = find(beverages.value, { value: value });
  beverage.value = bevVal
}

function inputBeverageSize (value) {
  beverageSize.value = value
}

function updateAddonDataCount ({ count, addon }) {
  const index = findIndex(addons.value, { 'id': addon.id })
  
  if (index >= 0) {
    addons.value[index].count = count
  }
}

function toggleAddonsItem (data) {
  const existIndex = findIndex(addons.value, { 'id': data.id })
  
  if (existIndex >= 0) {
    addons.value.splice(existIndex, 1)

    return
  }

  addons.value.push(data)
}


const cartStore = useCartStore();

function addToCart () {
  let item = {
    ...product.value,
    count: productCount.value,
    beverage: beverage.value,
    'beverage-size': beverageSize.value,
    addons: addons.value
  }

  cartStore.addItemToCart(item)
}

function redirectToProducts () {
  close()

  router.back('-1')
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  productStore.clearProduct();
})
</script>

<style lang="scss" scoped>
ion-page {
  padding-bottom: 4em;
}

ion-button.back-btn {
  --padding-start: 10px;
  --padding-end: 10px;
}

:deep(.product-details-container) {
  & > .product-details-img {
    background-color: #E9ECEF;
    width: 100%;
    border-radius: 16px;

    & > ion-img {
      margin: 32px auto;
      height: 12em;
      width: auto;
    }

    & > ion-button.product-details-fave-btn {
      --padding-start: 13px;
      --padding-end: 13px;
      --padding-bottom: 13px;
      --padding-top: 13px;
      position: absolute;
      top: 235px;
      right: 15px;
    }
  }

  & > .product-details-description {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #6C757D;
  }

  & > .product-details-price-container {
    & > .product-details-price {
      font-size: 25px;
      font-weight: 700;
      line-height: 30px;
      color: #D71921;
    }
  }
}

ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0);

  & > ion-fab-button {
    --background: #d71921;
    --background-activated: #b41119;
    --background-hover: #d9353d;
    --border-radius: 16px;
    --color: white;
    font-weight: 700;
    width: 355px;
  }
}

ion-modal#added-to-card-modal {
  --width: fit-content;
  --min-width: 327px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);

  & .added-to-card-modal-container {
    padding: 24px 40px;
    
    & > ion-button {
      --box-shadow: none;
      height: 45px;
      width: 100%;
    }
  }
}
</style>
