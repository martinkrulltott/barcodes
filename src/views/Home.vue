<template>
  <div>
    <div class="number-editor">
      <input type="text" placeholder="Barcode number" v-model="barcodeNumber" maxlength="19" />
    </div>
    <div class="barcode">
      <ul class="bars" v-if="barValues && barValues.length > 0">
        <li v-for="value in barValues" class="bar-wrapper">
          <bar :value="value" :color="primaryColor.hex" />
        </li>
        <li class="bar-wrapper">
          <bar :value="checkSumValue" :color="secondaryColor.hex" />
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
// Automated tests for the checksum
// Prettier UI :)
// Responsive for small devices

import Bar from '@/components/Bar.vue';
import { Chrome } from 'vue-color';

let primaryColor = { hex: '#194a94' };
let secondaryColor = { hex: '#C6D7F1' };

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
    checkSumValue() {
      return this.calculateCheckSumValue(this.barcodeNumber);
    }
  },
  methods: {
    calculateCheckSumValue (barcodeNumber) {
      let result = null;
      if (barcodeNumber) {
        const barcodeArray = Array.from(this.barcodeNumber.toString()).map(Number);
        const oddNumbers = barcodeArray.filter((element, index, array) => index % 2 === 0).reduce((a,b) => a + b, 0) * 3;
        const evenNumbers = barcodeArray.filter((element, index, array) => index % 2 != 0).reduce((a,b) => a + b, 0);
        const addedResult = oddNumbers + evenNumbers;
        const remainderAfterDivision = addedResult % 10;
        result = remainderAfterDivision == 0 ? 0 : 10 - remainderAfterDivision;
      }
      return result;
    }
  }
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
