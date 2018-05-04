<template>
  <div>
    <m-nav></m-nav>
    <router-view class="center"></router-view>
    <router-view name="slider"></router-view>
  </div>
</template>

<script>
  import mNav from './components/nav';
  export default{
    components: {mNav}
  }
</script>

<style>
  .center{text-align: center;}
</style>
