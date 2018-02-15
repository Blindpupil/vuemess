<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="panel-heading">Home Page!</h1>
          <div class="panel-body">
            <p>Example home component</p>
            <p>Check out the comics: <router-link to="/comics">Comics</router-link></p>
          </div>
        </div>
      </div>
      <router-view></router-view> <!-- Route content will show here -->
    </div>
</template>

<script>
  import Routes from './routes.js';
  export default {
    components: { Routes }
  }
</script>

<style lang="scss" scoped>

  body {
    margin-top: 30px;
  }

</style>
