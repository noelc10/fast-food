<template>
  <ion-input type="search" size="large" :value="value" :placeholder="props.placeholder" @input="emit('input', $event.target.value)">
    <ion-icon v-if="startIcon" slot="start" aria-hidden="true" color="primary" size="large" :ios="startIcon" :md="startIcon"></ion-icon>
    <ion-icon v-if="endIcon" slot="end" aria-hidden="true" color="primary" size="large" :ios="endIcon" :md="endIcon"></ion-icon>
  </ion-input>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import {
  IonInput,
  IonIcon
} from '@ionic/vue';

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  startIcon: {
    type: String,
    default: null
  },
  endIcon: {
    type: String,
    default: null
  }
})
const emit = defineEmits(['input']);
</script>

<style lang="scss" scoped>
ion-input {
  height: 60px;
}
</style>