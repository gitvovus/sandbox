<template>
  <div class="hotkey">
    <slot />
  </div>
</template>

<style lang="scss">
.hotkey {
  display: inline flow-root;
  font-size: smaller;
  padding: 0.5em 0.5em 0.25em;
  background-color: rgb(0 0 0 / 0.25);
  border: 1px solid rgb(255 255 255 / 0.25);
  border-radius: 0.5em;
}
</style>
