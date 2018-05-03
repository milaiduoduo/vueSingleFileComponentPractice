<template>
  <ul>
    <router-link exact tag="li" to="/home">home</router-link>
    <router-link exact active-class="navLink" tag="li" to="/project">project</router-link>
    <router-link exact tag="li" to="/about">about</router-link>
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
