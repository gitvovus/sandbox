<template>
  <view-button>
    <svg viewBox="-24 -26 48 48">
      <g filter="url(#view-button-lighting)">
        <path class="movable-i0" />
        <path class="movable-i1" />
        <path class="movable-i2" />
        <path class="movable-i3" />
      </g>
    </svg>
  </view-button>
</template>

<style lang="scss">
$t: var(--slow);

.movable-i0 {
  d: path("M 20,-20 c 4,0 4,0 4,4 v 14 c 0,4 0,4 -4,4 h -40 c -4,0 -4,0 -4,-4 v -14 c 0,-4 0,-4, 4,-4 z");
}
.movable-i1 {
  d: path("M -14,5 c 4,0 4,0 4,4 v 5 c 0,4 0,4 -4,4 h -6 c -4,0 -4,0 -4,-4 v -5 c 0,-4 0,-4, 4,-4 z");
}
.movable-i2 {
  d: path("M 3,5 c 4,0 4,0 4,4 v 5 c 0,4 0,4 -4,4 h -6 c -4,0 -4,0 -4,-4 v -5 c 0,-4 0,-4, 4,-4 z");
}
.movable-i3 {
  d: path("M 20,5 c 4,0 4,0 4,4 v 5 c 0,4 0,4 -4,4 h -6 c -4,0 -4,0 -4,-4 v -5 c 0,-4 0,-4, 4,-4 z");
}

.movable-i0,
.movable-i1,
.movable-i2,
.movable-i3 {
  fill: #507890;
  stroke: black;
  stroke-width: 1px;
  transition: d $t;
}

.view-button {
  &:hover,
  &:active {
    & .movable-i0 {
      d: path("M 3,5 c 4,0 4,0 4,4 v 5 c 0,4 0,4 -4,4 h -6 c -4,0 -4,0 -4,-4 v -5 c 0,-4 0,-4, 4,-4 z");
    }
    & .movable-i2 {
      d: path("M 20,-20 c 4,0 4,0 4,4 v 14 c 0,4 0,4 -4,4 h -40 c -4,0 -4,0 -4,-4 v -14 c 0,-4 0,-4, 4,-4 z");
    }
  }
}
</style>
