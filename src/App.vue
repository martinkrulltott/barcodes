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

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
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

.container {
  padding: 20px;
}
</style>
