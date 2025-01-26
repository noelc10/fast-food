<template>
  <ion-page>
    <app-header />

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="flex justify-between place-items-center">
              <div class="flex items-center">
                <img width="50px" class="mr-4" alt="Loyalty Badge" :src="'/src/assets/images/navbar/crown.svg'" />
                <ion-label class="font-bold">
                  Beginner Tier
                </ion-label>
              </div>
              <div class="flex items-center">
                <ion-label color="primary" class="m-0 justify-end items-center self-end ion-label-with-ion-icon font-bold">
                  View All
                  <ion-icon size="small" color="primary" class="ml-2" :ios="chevronForward" :md="chevronForward"></ion-icon>
                </ion-label>
              </div>
            </div>
            <p class="my-2 text">Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci letus et.</p>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <apexchart type="radialBar" height="250" :options="chartOptions" :series="series" />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div class="flex justify-between place-items-center">
              <div class="items-center">
                <h3 class="m-0 font-bold">
                  Rewards
                </h3>
              </div>
              <div class="items-center">
                <ion-label color="primary" class="m-0 justify-end items-center self-end ion-label-with-ion-icon font-bold">
                  How it works
                  <ion-icon size="small" color="primary" class="ml-2" :ios="chevronForward" :md="chevronForward"></ion-icon>
                </ion-label>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <profile-rewards-levels />
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div class="flex flex-wrap justify-start">
              <product-card
                v-for="(product, i) in loyaltyProducts"
                :key="i"
                :product="product"
                :type="'loyalty'"
              />
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/store/profileStore.js'
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
} from '@ionic/vue'
import {
  chevronForward
} from 'ionicons/icons'
import AppHeader from '@/components/header/AppHeader.vue'
import ProfileRewardsLevels from '@/components/profile/ProfileRewardsLevels.vue'
import ProductCard from '@/components/products/ProductCard.vue'

const profileStore = useProfileStore()
const { loyaltyProducts } = storeToRefs(profileStore)

const series = ref([0])
const chartOptions = ref(
  {
    chart: {
      height: 250,
      type: 'radialBar',
      fontFamily: 'Nunito, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: '60%',
          background: '#fff',
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 3,
            opacity: 0.3,
            color: '#d71921'
          }
        },
        track: {
          background: '#f0cacd',
          strokeWidth: '100%',
          margin: 0,
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.7
          }
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            offsetY: 10,
            color: '#000',
            fontSize: '24px',
            fontWeight: 700,
            formatter: (val) => {
              return `${ Math.round(160 * (parseInt(val) / 100)) } / 160`;
            }
          }
        }
      }
    },
    fill: {
      colors: ['#d71921'],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#d71921'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    }
  },
)
</script>
