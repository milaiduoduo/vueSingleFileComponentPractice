<template>
  <div class="wrap">
    <m-nav></m-nav>
    <div class="linkwrap">
      <transition name="left">
        <router-view></router-view>
        <router-view name="slider"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import mNav from './components/nav';
  export default{
    components: {mNav}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .wrap {
    height: 100%;
    .linkwrap{
      line-height: 1;
    }
  }

  .center {
    text-align: center;
  }

  .v-enter {
    opacity: 0;
  }

  .v-enter-to {
    opacity: 1;
  }

  .v-enter-active {
    transition: 1s;
  }

  .v-leave {
    opacity: 1;
  }

  .v-leave-to {
    opacity: 0;
  }

  .v-leave-active {
    transition: 1s;
  }

  .left-enter {
    transform: translateX(100%);
  }

  .left-enter-to {
    transform: translateX(0);
  }

  .left-enter-active {
    transition: 1s;
  }

  .left-leave {
    transform: translateX(0);
  }

  .left-leave-to {
    transform: translateX(-100%);
  }

  .left-leave-active {
    transition: 1s;
  }

  /*.right-enter{transform: translateX(0);}*/
  /*.right-enter-to{transform: translateX(100%);}*/
  /*.right-enter-active{transition:1s;}*/
</style>
