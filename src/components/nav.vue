<template>
  <ul>
    <router-link tag="li" to="/home" event="mouseover">home</router-link>
    <router-link active-class="navLink" tag="li" to="/project" event="mouseover">project</router-link>
    <router-link tag="li" to="/about" event="mouseover">about</router-link>
  </ul>
</template>
<script type='text/ecmascript-6'>

</script>
<style>
  ul{background: #ccc;}
  ul li {
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    list-style: none;
    cursor: pointer;
  }
  .navLink{color:#fff;background: blueviolet;}
</style>
