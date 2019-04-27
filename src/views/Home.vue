<template>
  <div>
    <div class="editor">
      <input type="text" placeholder="Barcode number" v-model="barcodeNumber" maxlength="19" />
    </div>
    <div class="barcode">
      <ul class="bars">
        <li v-for="value in barValues" class="bar-wrapper">
          <bar :value="value" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

// TODO:
// Display and edit primary and secondary colors
// Calculate the checksum
// Automated tests for the checksum
// Responsive for small devices

import Bar from '@/components/Bar.vue';

export default {
  name: 'home',
  components: {
    'bar': Bar,
  },
  data: () => {
    return {
      barcodeNumber: null,
    }
  },
  computed: {
    barValues() {
      return this.barcodeNumber ? Array.from(this.barcodeNumber.toString()).map(Number) : [];
    },
  },
};
</script>

<style lang="scss">
.bars {
  display: flex;
  align-items: center;
}

.bar-wrapper {
  display: inline-block;
  padding: 1px;
}
</style>
