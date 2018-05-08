<template>
  <div class="wrap">
    <m-nav></m-nav>
    <div class="linkwrap">
      <transition :name="nav_direction">
        <router-view></router-view>
        <router-view name="slider"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import mNav from './components/nav';
  export default{
    components: {mNav},
    data(){
      return {
        nav_direction: 'right'
      }
    },
    watch: {
      $route(to, from){
        let toIndex = to.meta.index;
        let fromIndex = from.meta.index;
        console.log(toIndex, '--', fromIndex);
        if (toIndex - fromIndex > 0) {
//          说明是从左往右
          this.nav_direction = 'right';
        } else {
          this.nav_direction = 'left';
        }
        console.log(this.nav_direction)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
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

  .right-enter {
    transform: translateX(-100%);
  }

  .right-enter-to {
    transform: translateX(0);
  }

  .right-enter-active {
    transition: 1s;
  }

  .right-leave {
    transform: translateX(0);
  }

  .right-leave-to {
    transform: translateX(100%);
  }

  .right-leave-active {
    transition: 1s;
  }
</style>
