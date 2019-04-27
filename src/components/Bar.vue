<template>
  <div class="bar" :class="'bar-' + value" :style="{ background: color }">
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'Bar',
  props: ['value', 'color'],
};
</script>

<style lang="scss">
$heightMultipliers: (
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 1,
  5: 2,
  6: 3,
  7: 4,
  8: 1,
  9: 2,
);

$widthMultipliers: (
  0: 1,
  1: 1,
  2: 1,
  3: 1,
  4: 2,
  5: 2,
  6: 2,
  7: 2,
  8: 3,
  9: 3,
);

.bar {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 15px 10px;
}

@each $name, $value in $heightMultipliers {
  .bar-#{$name}) {
    height: 0px + ($value * 20);
  }
}

@each $name, $value in $widthMultipliers {
  .bar-#{$name}) {
    width: 0px + ($value * 20);
  }
}
</style>