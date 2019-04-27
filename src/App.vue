<template>
  <div id="app">
    <home />
  </div>
</template>

<script>

// TODO:
// Display hardcoded barcodes
// Manually be able to enter barcode values and add new digits (max 19)
// Display and edit primary and secondary colors
// Calculate the checksum
// Automated tests for the checksum
// Responsive for small devices

import Home from '@/views/Home.vue';

export default {
  name: 'app',
  components: {
    'home': Home
  }
}
</script>

<style lang="scss">
</style>
