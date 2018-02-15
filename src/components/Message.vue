<template>
  <div class="container">
    <div class="box is-info">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .box { background: lightgray; padding: 10px; border: 1px solid black; margin-bottom: 1rem; }
</style>
