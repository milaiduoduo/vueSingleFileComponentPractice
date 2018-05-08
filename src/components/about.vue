<template>
  <div>
    <div>i am about</div>
    <p style="color:red;">这是路由钩子函数操作的地方---{{test}}</p>
    <router-view></router-view>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {
        test: '改变前'
      }
    },
    beforeCreate(){
      console.log('在路由钩子触发后，才触发beforeCreated')
    },
    beforeRouteEnter(to, from, next){
      console.log('【3.1 组件内的路由钩子函数beforeRouterEnter】');
      next((vm) => {
        vm.test = '改变了！！！！';
      });
    },
    beforeRouteUpdate(to, from, next){
      console.log('【3.2 组件内二级导航改变触发：beforeRouteUpdate】');
      next();
    },
    beforeRouteLeave(to, from, next){
      console.log('【3.3 组件内的路由钩子函数beforeRouteLeave】');
      next();
    }
  }
</script>
<style lang="scss" type="text/css">

</style>
