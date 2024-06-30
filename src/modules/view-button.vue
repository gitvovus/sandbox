<template>
  <ui-button class="view-button">
    <div class="view-button-content">
      <slot />
    </div>
  </ui-button>
</template>

<style lang="scss">
$t: var(--fast);

.view-button-content {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0.2em;
  height: 1.5em;
  border-radius: var(--radius-large);
  transition: left $t, right $t, height $t;
  filter: drop-shadow(0 0 5px rgb(0 0 0 / 0.5));
}

.view-button {
  position: relative;
  width: 1.5em;
  height: 0.5em;
  margin: 0 0.125em 0.1875em;
  border-radius: 50%;
    background-color: rgb(0 0 0 / 0.25);
    box-shadow: 0 0 0.125em 0 rgb(255 255 255 / 0.4) inset;
  transition: height $t, background-color $t, box-shadow $t;

  &:active,
  &:hover,
  &:focus {
    background-color: rgb(0 0 0 / 0.5);
    box-shadow: 0 0 0.125em 0 rgb(255 255 255 / 0.5) inset;
  }

  &[checked] {
    background-color: rgb(0 100 0 / 0.5);
  }

  &:active,
  &:hover {
    height: 0.6em;
    z-index: 1;
    & .view-button-content {
      left: -0.25em;
      right: -0.25em;
    }
  }

  &:focus:not(:active):not(:hover) {
    & .view-button-content {
      left: -0.125em;
      right: -0.125em;
      height: 1.75em;
    }
  }

  &:hover {
    & .view-button-content {
      height: 2.125em;
    }
  }

  &:active {
    & .view-button-content {
      left: -0.125em;
      right: -0.125em;
      height: 1.75em;
    }
  }
}
</style>
