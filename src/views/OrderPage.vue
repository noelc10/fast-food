<template>
  <ion-page>
    <ion-header :translucent="true" class="shadow-none">
      <ion-grid>
        <ion-row class="ion-justify-content-between">
          <ion-col size="3" class="hide-lg ion-align-self-center">
            <ion-menu-toggle>
              <ion-button fill="clear">
                <ion-icon color="primary" size="large" :ios="'/src/assets/images/navbar/icons/navbar.svg'" :md="'/src/assets/images/navbar/icons/navbar.svg'" />
              </ion-button>
            </ion-menu-toggle>
          </ion-col>
          <ion-col class="ion-align-self-center">
            <ion-list class="px-0 acc-points-sec">
              <ion-item lines="none" :detail="false" class="hydrated">
                <img class="mr-4" alt="Loyalty Badge" :src="'/src/assets/images/navbar/crown.svg'" />
                <ion-label class="ion-label-with-ion-icon">
                  0 Points
                  <ion-icon aria-hidden="true" size="small" color="primary" class="ml-2" :ios="chevronForward" :md="chevronForward"></ion-icon>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-col>
          <ion-col size="3" class="ion-align-self-center">
            <ion-avatar class="avatar-sm ion-float-right">
              <img src="/src/assets/images/navbar/avatar.svg" alt="Avatar" />
            </ion-avatar>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.name }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">{{ $route.name }}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {
  chevronForward
} from 'ionicons/icons';
</script>

<style lang="scss" scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.avatar-sm {
  height: 37px;
  width: 37px;
}

ion-item ion-label {
  font-weight: 500;
}
</style>
