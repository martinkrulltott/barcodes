<template>
  <div class="bar" :class="'bar-' + value" :style="{ 'background': backgroundColor, 'border-color': borderColor, 'color': borderColor }">
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'Bar',
  props: ['value', 'backgroundColor', 'borderColor'],
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
  color: #fff;
  font-size: 0.1rem;
  border-width: 1px;
  border-style: solid;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    font-size: 0.6rem;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    font-size: 1rem;
  }
}

@each $name, $value in $heightMultipliers {
  .bar-#{$name} {
    height: 0em + ($value * 3) - 0.5em;
  }
}

@each $name, $value in $widthMultipliers {
  .bar-#{$name} {
    width: 0em + ($value * 0.7);
  }
}
</style>