<template>
  <div id="app" class="container">
    <home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'app',
  components: {
    'home': Home
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

.container {
  padding: 20px;
}
</style>
