<template>
  <view-button>
    <svg viewBox="-10 -10 20 20">
      <g filter="url(#view-button-lighting)">
        <path class="svg-filters-stone" />
        <image href="@/assets/pics/cross.svg" x="-10" y="-10" width="20" height="20" />
      </g>
    </svg>
  </view-button>
</template>

<style lang="scss">
$t: var(--fast);
$normal: rgb(120 0 0);
$hover: rgb(140 0 0);

.svg-filters-stone {
  d: path("M 0,-10 C 9,-10 10,-9 10,0 C 10,9 9,10 0,10 C -9,10 -10,9 -10,0 C -10,-9 -9,-10 0,-10 z");
  fill: $normal;
  transition: d $t, fill $t;
}

.view-button {
  &:active,
  &:hover,
  &:focus {
    & .svg-filters-stone {
      fill: $hover;
    }
  }

  &:hover {
    & .svg-filters-stone {
      d: path("M 0,-10 C 9,-10 10,-9 10,0 C 10,6 6,10 0,10 C -6,10 -10,6 -10,0 C -10,-9 -9,-10 0,-10 z");
    }
  }

  &:active {
    & .svg-filters-stone {
      d: path("M 0,-10 C 6,-10 10,-6 10,0 C 10,9 9,10 0,10 C -9,10 -10,9 -10,0 C -10,-6 -6,-10 0,-10 z");
    }
  }
}
</style>
