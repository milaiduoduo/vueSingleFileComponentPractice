<template>
  <div>
    <m-nav></m-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import mNav from './components/nav';
  export default{
    components: {mNav}
  }
</script>

<style>
</style>
