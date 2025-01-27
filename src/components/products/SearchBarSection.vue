<template>
  <search-bar
    v-model="search"
    :placeholder="'try our new Beef Bibimbowl'"
    :start-icon="'/src/assets/images/search.svg'"
    :end-icon="'/src/assets/images/knobs.svg'"
    @keydown="onClickOrKeydownSearch"
    @click="onClickOrKeydownSearch"
  />
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { debounce } from 'lodash'
import SearchBar from '@/components/home/SearchBarSection.vue'

const emit = defineEmits(['triggerSearch'])
const search = ref('')

const onClickOrKeydownSearch = debounce(async () => {
  emit('triggerSearch', search.value)
}, 500)
</script>
