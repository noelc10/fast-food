<template>
  <div class="flex flex-row overflow-y rewards-levels-container">
    <ion-button
      v-for="level in rewardsLevels"
      :key="level.value"
      :color="levelSelected === level.value ? 'primary' : 'secondary'"
      @click="setLevel(level.value)"
    >
      {{ level.text }}
    </ion-button>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue'
import {
  IonButton
} from '@ionic/vue'

const rewardsLevels = ref([
  {
    value: '',
    text: 'All'
  },
  {
    value: 'beginner',
    text: 'Beginner'
  },
  {
    value: 'intermediate',
    text: 'Intermediate'
  },
  {
    value: 'loyal',
    text: 'Loyal'
  },
]);
const levelSelected = ref('');

function setLevel (level) {
  levelSelected.value = level
}
</script>

<style lang="scss" scoped>
.rewards-levels-container {
  ion-button {
    --box-shadow: none;
    margin: 8px 4px;
    height: 43px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
