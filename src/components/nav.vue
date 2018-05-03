<template>
  <ul class="nav">
    <router-link exact tag="li" to="/home">
      <a>home</a>
    </router-link>
    <router-link exact active-class="navLink" tag="li" to="/project">
      <a>project</a>
    </router-link>
    <router-link exact tag="li" to="/about">
      <a>about</a>
      <ul class="nav-l2">
        <router-link :to="{name:'about'}" exact tag="li">profile</router-link>
        <router-link :to="{name:'experience'}" tag="li">experience</router-link>
        <router-link :to="{name:'target'}" tag="li">taget</router-link>
        <!--<router-link to="/about" exact tag="li">profile</router-link>-->
        <!--<router-link to="/about/experience" tag="li">experience</router-link>-->
        <!--<router-link to="/about/target" tag="li">taget</router-link>-->
      </ul>
    </router-link>
    <router-link to="/document" tag="li"><a>document</a></router-link>
  </ul>
</template>
<script type='text/ecmascript-6'>
  //  import about from './about';
  //  export default{
  //    components: {about}
  //  }
</script>
<style lang="scss" type="text/css">
  .nav {
    background: #ccc;

  >
  li {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    list-style: none;
    cursor: pointer;

  >
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
  }

  }
  }

  a:link, a:hover, a:active, a:focus {
    color: #fff;
  }

  .navLink {
    color: #fff;
    background: blueviolet;
  }

  .nav-l2 {
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    border-top: none;

  >
  li {
    color: #7a7a7a;

  &
  :hover,

  &
  .is-active {
    color: #fff;
    background: deepskyblue;
  }

  }
  }
</style>
