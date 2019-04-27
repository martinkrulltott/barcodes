<template>
  <div>
    <ul class="bars">
      <li v-for="value in barValues" class="bar-wrapper">
        <bar :value="value" />
      </li>
    </ul>
  </div>
</template>

<script>

// TODO:
// Manually be able to enter barcode values and add new digits (max 19)
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
      barValues: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    }
  }
};
</script>

<style lang="scss">
.bars {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.bar-wrapper {
  display: inline-block;
  padding: 1px;
}

button {
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
</style>
