<template>
  <div>
    <h1 class="page-title">Barcode editor</h1>
    <div class="section">
      <h2 class="section-title">Barcode number</h2>
      <input type="text" placeholder="Enter number..." :value="barcodeNumber" @keyup="changeBarcodeNumber($event)" maxlength="19" class="barcode-number"/>
    </div>
    <div class="section" v-if="barValues && barValues.length > 0">
      <h2 class="section-title">Barcode</h2>
      <div class="bars">
        <bar v-for="(value, index) in barValues" :key="index" class="bar-wrapper" :value="value" :backgroundColor="primaryColor.hex" :borderColor="primaryColor.hex" :textColor="secondaryColor.hex" />
        <bar :value="checkSumValue" :backgroundColor="secondaryColor.hex" :borderColor="primaryColor.hex" :textColor="primaryColor.hex" />
      </div>
    </div>
    <div class="section" v-if="barValues && barValues.length > 0">
      <h2 class="section-title">Settings</h2>
      <div class="primary-color-editor" v-if="!displaySecondaryColorEditor">
        <button v-on:click="displayPrimaryColorEditor = !displayPrimaryColorEditor" class="button">
          <span v-if="!displayPrimaryColorEditor">Change primary color</span>
          <span v-else>Close</span>
        </button>
        <color-picker v-model="primaryColor" v-if="displayPrimaryColorEditor" />
      </div>
      <div class="secondary-color-editor" v-if="!displayPrimaryColorEditor">
        <button v-on:click="displaySecondaryColorEditor = !displaySecondaryColorEditor" class="button">
          <span v-if="!displaySecondaryColorEditor">Change secondary color</span>
          <span v-else>Close</span>
        </button>
        <color-picker v-model="secondaryColor" v-if="displaySecondaryColorEditor" />
      </div>
    </div>
  </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import { Compact } from 'vue-color'

let primaryColor = { hex: '#194a94' }
let secondaryColor = { hex: '#fff' }

export default {
  name: 'home',
  components: {
    'bar': Bar,
    'color-picker': Compact
  },
  data: () => {
    return {
      barcodeNumber: null,
      primaryColor,
      secondaryColor,
      displayPrimaryColorEditor: false,
      displaySecondaryColorEditor: false
    }
  },
  computed: {
    barValues () {
      return this.barcodeNumber ? Array.from(this.barcodeNumber.toString()).map(Number) : []
    },
    checkSumValue () {
      return this.calculateCheckSumValue(this.barcodeNumber)
    }
  },
  methods: {
    calculateCheckSumValue (barcodeNumber) {
      let result = null
      if (barcodeNumber) {
        const barcodeArray = Array.from(this.barcodeNumber.toString()).map(Number)
        const oddNumbers = barcodeArray.filter((element, index, array) => index % 2 === 0).reduce((a, b) => a + b, 0) * 3
        const evenNumbers = barcodeArray.filter((element, index, array) => index % 2 !== 0).reduce((a, b) => a + b, 0)
        const addedResult = oddNumbers + evenNumbers
        const remainderAfterDivision = addedResult % 10
        result = remainderAfterDivision === 0 ? 0 : 10 - remainderAfterDivision
      }
      return result
    },
    // NOTE: If I would have used type="number" and v-model="barcodeNumber", this wouldn't be necessary.
    // But since I wanted to restrict the input to numerics only while still maintaining max length 19
    // I chose to implement a custom solution (however it doesn't work perfectly with e.g. the ` and ^ characters)
    changeBarcodeNumber (event) {
      if (isNaN(event.target.value) || event.key === '.') {
        event.preventDefault()
        event.target.value = event.target.value.slice(0, event.target.value.length - 1)
      } else {
        this.barcodeNumber = event.target.value
      }
    }
  }
}
</script>

<style lang="scss">
$border-color: #4d4d4d;

.section {
  margin: 30px 0;
}

.page-title {
  font-size: 30px;
  margin: 10px 0;
}

.section-title {
  margin: 0 0 5px;
  font-size: 15px;
}

.barcode-number {
  border: 1px solid $border-color;
  padding: 5px;
}

.bars {
  display: flex;
  align-items: center;
  border: 1px solid;
  padding: 10px;
}

.button {
  background: #fff;
  border: 1px solid $border-color;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>
