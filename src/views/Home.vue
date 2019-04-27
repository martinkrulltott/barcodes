<template>
  <div>
    <div class="number-editor">
      <input type="text" placeholder="Barcode number" v-model="barcodeNumber" maxlength="19" />
    </div>
    <div class="barcode">
      <ul class="bars">
        <li v-for="value in barValues" class="bar-wrapper">
          <bar :value="value" :color="primaryColor.hex" />
        </li>
      </ul>
    </div>
    <div class="primary-color-editor" v-if="!displaySecondaryColorEditor">
      <button v-on:click="displayPrimaryColorEditor = !displayPrimaryColorEditor">
        <span v-if="!displayPrimaryColorEditor">Change primary color</span>
        <span v-else>Close</span>
      </button>
      <color-picker v-model="primaryColor" v-if="displayPrimaryColorEditor" />
    </div>
    <div class="secondary-color-editor" v-if="!displayPrimaryColorEditor">
      <button v-on:click="displaySecondaryColorEditor = !displaySecondaryColorEditor">
        <span v-if="!displaySecondaryColorEditor">Change secondary color</span>
        <span v-else>Close</span>
      </button>
      <color-picker v-model="secondaryColor" v-if="displaySecondaryColorEditor" />
    </div>
  </div>
</template>

<script>

// TODO:
// Calculate the checksum
// Automated tests for the checksum
// Responsive for small devices

import Bar from '@/components/Bar.vue';
import { Chrome } from 'vue-color';

let primaryColor = { hex: '#194a94' };
let secondaryColor = { hex: '#ffffff' };

export default {
  name: 'home',
  components: {
    'bar': Bar,
    'color-picker': Chrome
  },
  data: () => {
    return {
      barcodeNumber: null,
      primaryColor,
      secondaryColor,
      displayPrimaryColorEditor: false,
      displaySecondaryColorEditor: false,
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
