<template>
  <BarLeft />
  <div class="pageBox">
    <router-view />
  </div>
</template>
<script setup lang="ts">
  import BarLeft from '../components/BarLeft.vue'
</script>
<style scoped lang="scss">

</style>