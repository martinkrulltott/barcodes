<template>
  <div>
    <ul>
      <li v-for="value in barValues">
        <bar :value="value" />
      </li>
    </ul>
  </div>
</template>

<script>

import Bar from '@/components/Bar.vue';

export default {
  name: 'home',
  components: {
    'bar': Bar,
  },
  data: () => {
    return {
      barValues: [ 1, 2, 3, 4, 5, 6 ],
    }
  }
};
</script>
