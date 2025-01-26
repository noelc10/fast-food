<template>
  <div>
    <div class="flex justify-between place-items-center special-offer-header">
      <div class="flex-inherit">
        <h2 class="font-bold">Special Offers!</h2>
      </div>
      <div class="flex-inherit">
        <ion-list class="px-0">
          <ion-item lines="none" :detail="false" class="hydrated">
            <ion-label color="primary" class="mb-2 justify-end items-center self-end ion-label-with-ion-icon font-bold">
              View All
              <ion-icon size="small" color="primary" class="ml-2" :ios="chevronForward" :md="chevronForward"></ion-icon>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </div>
    <div class="flex overflow-y special-offer-container">
      <div
        v-for="(coupon, i) in couponCards"
        :key="i"
        class="special-offer-card flex-inherit basis-auto grow-0"
        :style="`background-image: url('${coupon.bgImg}'); background-size: cover; background-repeat: no-repeat; background-position: center;`"
      ></div>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue'
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/vue'
import {
  chevronForward
} from 'ionicons/icons'

const couponCards = ref([
  {
    bgImg: '/src/assets/images/home/special-offer-1.png'
  },
  {
    bgImg: '/src/assets/images/home/special-offer-2.png'
  }
])
</script>

<style lang="scss" scoped>
.special-offer-container {
  & > .special-offer-card {
    mask-image: radial-gradient(
      circle at 12px 50%,
      transparent 12px,
      #D71921 12px
    );
    mask-position: -12px center;
    width: 314px;
    height: 138px;
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
  }
}
</style>
