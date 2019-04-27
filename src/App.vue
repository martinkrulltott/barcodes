<template>
  <div id="app" class="container">
    <home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue'

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
  font-family: Arial, sans-serif;
  background: #f9f8ff;
  color: #4d4d4d;
}

.container {
  padding: 20px;
}
</style>
