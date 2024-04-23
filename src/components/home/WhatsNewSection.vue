<template>
  <div>
    <div class="flex justify-between place-items-center whats-new-section-header">
      <div class="flex-inherit">
        <h2 class="font-bold">What's New</h2>
      </div>
    </div>
    <div class="flex whats-new-section-container">
      <div class="whats-new-section flex-inherit basis-auto grow-0"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.whats-new-section-container {
  & > .whats-new-section {
    background-image: url("/src/assets/images/home/whats-new.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 343px;
    height: 200px;
    border-radius: 16px;
    margin: 0;
    flex-basis: auto !important;
    flex-grow: 0 !important;
  }
}
</style>