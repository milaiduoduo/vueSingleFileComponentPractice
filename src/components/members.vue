<template>
  <div class="wrap clear">
    <h1>成员页面</h1>
    <ul class="slider">
      <!--<router-link tag="li" v-for="(item,index) in userlist" :key="index" :to="'/members/' +item.type+ '/'+item.id+'?info=follow'">-->
        <!--<a>{{index + 1}}.{{item.name}}</a>-->
      <!--</router-link>-->
      <router-link tag="li" v-for="(item,index) in userlist" :key="index" :to="{path:'/members/' +item.type+ '/'+item.id,query:{info:'follow'}}">
        <a>{{index + 1}}.{{item.name}}</a>
      </router-link>
    </ul>
    <div class="content" v-if="memberInfo.name">
      <h3 class="head">详细资料</h3>
      <p>姓名：{{memberInfo.name}}</p>
      <p>性别：{{memberInfo.sex}}</p>
      <p>工作时长：{{memberInfo.workingYear}}</p>
      <hr>
      <!--<router-link class="footer" to="?info=follow" exact>我的关注</router-link>-->
      <!--<router-link class="footer" to="?info=share" exact>我的分享</router-link>-->
      <router-link class="footer" :to="{path:'',query:{info:'follow'}}" exact>我的关注</router-link>
      <router-link class="footer" :to="{path:'',query:{info:'share'}}" exact>我的分享</router-link>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  let userlist = [{
    id: 1,
    name: 'leon',
    type: 'AI',
    sex: '男',
    workingYear: 8
  }, {
    id: 2,
    name: 'alice',
    type: 'webView',
    sex: '女',
    workingYear: 3
  }, {
    id: 3,
    name: 'sccot',
    type: 'teacher',
    sex: '男',
    workingYear: 8
  }
  ];
  let memberInfo = {};
  export default{
    data(){
      return {
        userlist,
        memberInfo
      }
    },
    watch: {
      $route(){
        this.getMemberDetail();
      }
    },
    created(){
      this.getMemberDetail();
    },
    methods: {
      getMemberDetail(){
        let id = this.$route.params.userId;
        if (id > 0) {
          let idList = this.userlist.filter((item) => {
            return item.id === parseInt(id);
          });
          this.memberInfo = idList.length > 0 ? idList[0] : {};
        } else {
          this.memberInfo = {}
        }
      }
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss" scoped>
  .wrap{height:100%;}
  .slider {
    width: 20%;
    float: left;
    font-size: 25px;
    text-align: left;
    padding-left: 10px;
  }

  .content {
    width: 78%;
    float: right;
    text-align: left;
    .head {
      margin-top: -1px;
    }
    .is-active{color:#fff;background:deepskyblue;}
    .footer{padding:3px 3px;}
  }
</style>
