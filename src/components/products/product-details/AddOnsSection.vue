<template>
  <div class="addons-container">
    <h2 class="font-bold">Add-Ons</h2>
    <div v-if="props.addonItems.length" class="flex flex-col addons-choices-container">
      <div
        v-for="addonItem in props.addonItems"
        :key="addonItem"
        class="my-2 flex flex-row addons"
      >
        <div class="flex-row addons-image">
          <ion-img
            :alt="addonItem?.title"
            :src="addonItem?.image"
          ></ion-img>
        </div>
        <div class="ml-2 flex-col addons-content">
          <div class="addons-title">
            <ion-checkbox
              class="font-bold"
              justify="space-between"
              @ionChange="toggleAddonListToCart(addonItem)"
            >
              {{ addonItem?.title }}
            </ion-checkbox>
          </div>
          <div class="addons-subtitle">
            <ion-text>{{ addonItem?.type }}</ion-text>
          </div>
          <div class="flex flex-row items-center justify-between addons-details">
            <div class="addons-details-price">P {{ addonItem?.price }}</div>
            <cart-count
              :value="addonItem.count"
              :disabled="addOnNotExistOnAddonCartData(addonItem)"
              @input="updateAddonListToCartItemCount($event, addonItem)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  ref,
  watch
} from 'vue';
import {
  IonImg,
  IonText,
  IonCheckbox
} from '@ionic/vue';
import CartCount from '@/components/products/product-details/CartCount.vue';

const emit = defineEmits(['toggleAddonsItem', 'updateAddonDataCount']);
const props = defineProps({
  addonItems: {
    type: Array,
    default: () => { return [] }
  },
  addonsData: {
    type: Array,
    default: () => { return [] }
  }
});
const addonsListToCart = ref([]);

watch(
  () => props.addonsData,
  (newVal) => {
    addonsListToCart.value = newVal
  },
  {
    immediate: true
  }
)

function toggleAddonListToCart (addon) {
  addon.count = 1
  emit('toggleAddonsItem', addon)
}

function addOnNotExistOnAddonCartData (addon) {
  return !addonsListToCart.value.includes(addon)
}

function updateAddonListToCartItemCount (count, addon) {
  emit('updateAddonDataCount', { count, addon })
}
</script>

<style lang="scss" scoped>
.addons {
  width: 100%;
  max-width: 375px;
  background-color: #E9ECEF;
  border-radius: 16px;
  padding: 16px;

  & > .addons-image {
    ion-img {
      width: 88px;
      height: 88px;
    }
  }

  & > .addons-content {
    width: 100%;

    & > .addons-title {
      ion-checkbox {
        --size: 18px;
        --checkmark-width: 6px;
        --checkmark-color: #FFC02E;
        --checkbox-background-checked: white;
        width: 100%;

        &::part(container) {
          border-radius: 6px;
          border: none;
          padding: 4px;
        }
      }
    }

    & > .addons-subtitle {
      ion-text {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>