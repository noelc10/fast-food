<template>
  <ion-list class="p-0">
    <ion-item-sliding>
      <ion-item lines="none">
        <div
          class="mb-1 flex flex-row cart-user-contact-card"
        >
          <div class="ml-2 flex-col cart-user-contact-card-content">
            <div class="cart-user-contact-card-title">
              {{ userFullName }}
            </div>
            <div class="cart-user-contact-card-subtitle">
              <ion-text>{{ user?.phone }}</ion-text>
              <br />
              <ion-text>{{ user?.email }}</ion-text>
            </div>
          </div>
        </div>
        <ion-icon slot="end" color="warning" size="large" class="m-0" :ios="ellipsisVertical" :md="ellipsisVertical"></ion-icon>
      </ion-item>

      <ion-item-options class="pr-4 cart-user-contact-action-buttons-container">
        <ion-button class="mx-2 cart-user-contact-action-button-warning">
          <ion-icon color="warning" size="large" :ios="pencilOutline" :md="pencilOutline"></ion-icon>
        </ion-button>
        <ion-button class="mx-2 cart-user-contact-action-button-danger">
          <ion-icon color="danger" size="large" :ios="trashOutline" :md="trashOutline"></ion-icon>
        </ion-button>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import {
  IonButton,
  IonText,
  IonIcon,
  IonList,
  IonItem,
  IonItemSliding,
  IonItemOptions
} from '@ionic/vue'
import {
  ellipsisVertical,
  pencilOutline,
  trashOutline
} from 'ionicons/icons'

const props = defineProps({
  user: {
    type: Object,
    default: null
  }
})
const userFullName = computed(() => props?.user.first_name + ' ' + props?.user.last_name)
</script>

<style lang="scss" scoped>
ion-item {
  --background-hover: none;
}

.cart-user-contact-card {
  width: 100%;
  max-width: 100%;
  background-color: #E9ECEF;
  border-radius: 16px;
  padding: 16px;

  & > .cart-user-contact-card-image {
    ion-img {
      width: 88px;
      height: 88px;
    }
  }

  & > .cart-user-contact-card-content {
    width: 100%;

    & > .cart-user-contact-card-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 21px;
      color: #000;
      margin: .5rem 0;
    }

    & > .cart-user-contact-card-subtitle {
      ion-text {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #6C757D;
      }
    }
  }
}

.cart-user-contact-action-buttons-container {
  & ion-button {
    --box-shadow: none;
    width: 44px;

    &.cart-user-contact-action-button-warning {
      --padding-start: 10px;
      --padding-end: 10px;
      --background: #FD7E1433 !important;
      --color: #FFC02E;
    }

    &.cart-user-contact-action-button-danger {
      --padding-start: 10px;
      --padding-end: 10px;
      --background: #DC354533;
      --color: #DC3545;
    }
  }
}
</style>
