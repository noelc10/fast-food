<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="navbar-list">
            <ion-grid>
              <ion-row class="ion-justify-content-between">
                <ion-col size="4" class="ion-align-self-center">
                  <ion-avatar>
                    <img src="/src/assets/images/navbar/avatar.svg" alt="Avatar" />
                  </ion-avatar>
                </ion-col>
                <ion-col size="8" class="ion-align-self-center">
                  <ion-list class="px-0 acc-points-sec">
                    <ion-item lines="none" :detail="false" class="hydrated">
                      <ion-icon aria-hidden="true" slot="start" class="mr-4" :ios="'/src/assets/images/navbar/crown.svg'" :md="'/src/assets/images/navbar/crown.svg'"></ion-icon>
                      <ion-label class="ion-label-with-ion-icon">
                        0 Points
                        <ion-icon aria-hidden="true" size="small" color="primary" class="ml-2" :ios="chevronForward" :md="chevronForward"></ion-icon>
                      </ion-label>
                    </ion-item>
                  </ion-list>
                </ion-col>
              </ion-row>
            </ion-grid>
            <ion-list-header class="mb-1">Chou Tzuyu</ion-list-header>
            <ion-note>+63 912 345 6789</ion-note>

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in navbarPages" :key="i">
              <ion-item v-if="p.title === 'Home' || p.title === 'Order Now'" @click="redirect(p.url)" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: $route.name === p.name }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                <ion-badge v-if="p.badge" slot="end">{{ p.badge.count }}</ion-badge>
              </ion-item>
              <ion-item v-else @click="redirect(p.url)" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                <ion-badge v-if="p.badge" slot="end" :color="p.badge.color">{{ p.badge.count }}</ion-badge>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
          <hr class="separator" />
          <ion-list id="navbar-2-list">
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in navbar2Pages" :key="i">
              <ion-item @click="redirect(p.url)" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                <ion-badge v-if="p.badge" slot="end" :color="p.badge.color">{{ p.badge.count }}</ion-badge>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
          <div class="logout-btn-container">
            <ion-button buttonType="button" color="primary" size="default" class="shadow-none logout-btn" @click="logout">Logout</ion-button>
          </div>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup>
// import { useRouter } from 'vue-router';
import {
  IonApp,
  IonAvatar,
  IonButton,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
  IonBadge,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  useIonRouter
} from '@ionic/vue';
import {
  chevronForward
} from 'ionicons/icons';
// import { ref } from 'vue';

// const router = useRouter();
const ionRouter = useIonRouter();
// const selectedIndex = ref(0);
const navbarPages = [
  {
    title: 'Home',
    url: '/home',
    name: 'home',
    iosIcon: '/src/assets/images/navbar/icons/home.svg',
    mdIcon: '/src/assets/images/navbar/icons/home.svg',
  },
  {
    title: 'Order Now',
    url: '/order',
    name: 'order',
    iosIcon: '/src/assets/images/navbar/icons/order-now.svg',
    mdIcon: '/src/assets/images/navbar/icons/order-now.svg',
  },
  {
    title: 'Notifications',
    url: '/notifications',
    name: 'notifications',
    iosIcon: '/src/assets/images/navbar/icons/notifications.svg',
    mdIcon: '/src/assets/images/navbar/icons/notifications.svg',
    badge: {
      count: 4
    }
  },
  {
    title: 'Store Locator',
    url: '/store-locator',
    name: 'store-locator',
    iosIcon: '/src/assets/images/navbar/icons/store-locator.svg',
    mdIcon: '/src/assets/images/navbar/icons/store-locator.svg',
  },
  {
    title: `FAQ's`,
    url: '/faqs',
    name: 'faqs',
    iosIcon: '/src/assets/images/navbar/icons/faqs.svg',
    mdIcon: '/src/assets/images/navbar/icons/faqs.svg',
  }
];
const navbar2Pages = [
  {
    title: 'My Orders',
    url: '/my-orders',
    name: 'my-orders',
    iosIcon: '/src/assets/images/navbar/icons/my-orders.svg',
    mdIcon: '/src/assets/images/navbar/icons/my-orders.svg',
    badge: {
      count: 2
    }
  },
  {
    title: 'My Account',
    url: '/my-account',
    name: 'my-account',
    iosIcon: '/src/assets/images/navbar/icons/my-account.svg',
    mdIcon: '/src/assets/images/navbar/icons/my-account.svg',
  },
  {
    title: 'My Favorites',
    url: '/my-favorites',
    name: 'my-favorites',
    iosIcon: '/src/assets/images/navbar/icons/my-favorites.svg',
    mdIcon: '/src/assets/images/navbar/icons/my-favorites.svg',
  },
  {
    title: 'Order Tracker',
    url: '/order-tracker',
    name: 'order-tracker',
    iosIcon: '/src/assets/images/navbar/icons/order-tracker.svg',
    mdIcon: '/src/assets/images/navbar/icons/order-tracker.svg',
  },
  {
    title: 'Order History',
    url: '/order-history',
    name: 'order-history',
    iosIcon: '/src/assets/images/navbar/icons/order-history.svg',
    mdIcon: '/src/assets/images/navbar/icons/order-history.svg',
  }
];
// const path = window.location.pathname.split('folder/')[1];
// if (path !== undefined) {
//   selectedIndex.value = navbarPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
// }

function redirect (url) {
  ionRouter.push(url)
}

function logout () {
  window.location = '/login'
}
</script>

<style lang="scss" scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#navbar-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-list#navbar-2-list ion-list-header {
  font-size: 16px;
  margin-bottom: 18px;
  color: #757575;
  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #DEE2E6;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#navbar-2-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;
  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary) !important;
}

ion-badge {
  --background: #EDBE4C;
  --padding-end: 7px;
  --padding-start: 7px;
  border-radius: 25px;
}

ion-list.acc-points-sec {
  & > ion-item {
    width: max-content;

    & > ion-label {
      width: auto;
    }
  }
}

ion-button.logout-btn {
  --padding-top: 16px;
  --padding-bottom: 16px;
  width: 165px;
}

.logout-btn-container {
  position: fixed;
  bottom: 25px;
}
</style>
