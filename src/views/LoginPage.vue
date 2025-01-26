<template>
  <ion-page>
    <ion-header :translucent="true" class="ion-padding shadow-none">
      <ion-toolbar>
        <ion-img
          :src="'/resources/icon.png'"
          alt="App Logo"
          class="app-logo"
        ></ion-img>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-text color="dark">
        <h1 class="m-0 font-bold">Bonjour!</h1>
      </ion-text>
      <ion-text color="primary">
        <p class="text">Welcome to all new FastFood mobile app. Kindly login your account. Thank you!</p>
      </ion-text>
      <form @submit.prevent="login()" class="ion-margin-vertical">
        <ion-input type="email" color="dark" label="Email Address" label-placement="stacked" placeholder="Enter your Email Address"></ion-input>
        <ion-input type="password" color="dark" label="Password" label-placement="stacked" placeholder="Enter your password">
          <ion-text slot="end" color="primary">
            <a href="javascript:void(0)" class="link font-bold">Forgot?</a>
          </ion-text>
        </ion-input>
        <br />
        <br />
        <ion-button buttonType="button" color="primary" expand="block" size="large" @click="login">Login</ion-button>
        <ion-button buttonType="button" color="primary" fill="clear" expand="block" size="large" @click="login">Login as Guest</ion-button>
      </form>
      <div class="ion-text-center shadow-none footer">
        <ion-toolbar>
          <p>Don't have an account yet? <a href="javascript:void(0)" class="link font-bold">Create</a></p>
        </ion-toolbar>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonText,
  IonButton,
  IonImg,
  IonInput,
  IonPage
} from '@ionic/vue'

const router = useRouter()

function login () {
  router.replace('/home')
}
</script>

<style lang="scss" scoped>
ion-button {
  height: 60px;
}

.app-logo {
  height: 110px;
  width: 103px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
