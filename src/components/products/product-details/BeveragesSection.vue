<template>
  <div class="beverages-container">
    <h2 class="font-bold">Beverages</h2>
    <ion-select
      label="Choose Beverages"
      label-placement="floating"
      fill="solid"
      interface="popover"
      :value="props.beverage.value"
      :toggle-icon="chevronDownOutline"
      @ionChange="emit('inputBeverage', $event.target.value)"
    >
      <ion-select-option
        v-for="item in props.beverageItems"
        :key="item.value"
        :value="item.value"
      >
        {{ item.text }}
      </ion-select-option>
    </ion-select>
    <div v-if="props.beverageSizes" class="flex flex-row overflow-y beverage-sizes-container">
      <ion-button
        v-for="size in props.beverageSizes"
        :key="size.value"
        :value="size"
        :fill="size.value === props.beverageSize.value ? 'solid' : 'outline'"
        :color="size.value === props.beverageSize.value ? 'tertiary' : 'secondary'"
        @click="emit('inputBeverageSize', size)"
      >
        {{ size.text }}
      </ion-button>
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits
} from 'vue';
import {
  IonSelect,
  IonSelectOption,
  IonButton
} from '@ionic/vue';
import {
  chevronDownOutline
} from 'ionicons/icons';

const emit = defineEmits(['inputBeverage', 'inputBeverageSize']);
const props = defineProps({
  beverage: {
    type: Object,
    default: null
  },
  beverageSize: {
    type: Object,
    default: null
  },
  beverageItems: {
    type: Array,
    default: () => { return [] }
  },
  beverageSizes: {
    type: Array,
    default: () => { return [] }
  }
})
</script>

<style lang="scss" scoped>
.beverage-sizes-container {
  max-width: 375px;

  & > ion-button {
    --padding-top: 16px;
    --padding-bottom: 16px;
    --border-radius: 14px;
    --box-shadow: none;
    --border-width: 1px;
    margin: 0 2px;
    width: 100%;

    &:first-child {
      margin-left: 0px !important;
    }

    &:last-child {
      margin-right: 0px !important;
    }

    &.button-outline::part(native) {
      color: #000000;
    }
  }
}
</style>