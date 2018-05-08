<template>
  <div>
    <m-nav></m-nav>
    <transition mode="out-in">
      <router-view class="center"></router-view>
      <router-view name="slider"></router-view>
    </transition>
  </div>
</template>

<script>
  import mNav from './components/nav';
  export default{
    components: {mNav}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .center {
    text-align: center;
  }
  .v-enter{opacity: 0;}
  .v-enter-to{opacity: 1;}
  .v-enter-active{transition:1s;}
  .v-leave{opacity: 1;}
  .v-leave-to{opacity: 0;}
  .v-leave-active{transition:1s;}
</style>
