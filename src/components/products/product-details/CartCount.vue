<template>
  <div class="flex flex-row items-center cart-count-container">
    <ion-button color="secondary" size="small" :disabled="props.disabled" @click="decrementCount">
      <ion-icon color="primary" :ios="removeOutline" :md="removeOutline"></ion-icon>
    </ion-button>
    <div class="grow text-center cart-count">
      {{ props.value }}
    </div>
    <ion-button color="secondary" size="small" :disabled="props.disabled" @click="incrementCount">
      <ion-icon color="primary" :ios="addOutline" :md="addOutline"></ion-icon>
    </ion-button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import {
  IonButton,
  IonIcon
} from '@ionic/vue'
import {
  addOutline,
  removeOutline
} from 'ionicons/icons'

const emit = defineEmits(['input']);
const props = defineProps({
  value: {
    type: [Number, String],
    default: 1
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

function incrementCount () {
  let count = props.value + 1;
  emit('input', count);
}

function decrementCount () {
  let count = props.value - 1;
  
  if (count >= 1) {
    emit('input', count);
  }
}

</script>

<style lang="scss" scoped>
.cart-count-container {
  & > ion-button {
    --padding-top: 6.6px;
    --padding-bottom: 6.6px;
    --padding-start: 6.6px;
    --padding-end: 6.6px;
    --border-radius: 12px;
    --box-shadow: none;
  }

  & > .cart-count {
    width: 3em;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
  }
}
</style>
