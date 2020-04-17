<template>
  <div id="main">
     <!-- 二级盒子路由 -->
     <router-view></router-view>
     <!-- 底部菜单 -->
      <van-tabbar v-model="active" route>

        <van-tabbar-item to="/main/home">
          <span>首页</span>
            <template #icon="props">
              <img :src="props.active ? icon.active : icon.inactive"/>
            </template>
        </van-tabbar-item>

        <van-tabbar-item to="/main/wechat">
          <span>微聊</span>
            <template #icon="props">
              <img :src="props.active ? icon.active1 : icon.inactive1"/> <!--error!  props.active  -->
            </template>
        </van-tabbar-item>
         <van-tabbar-item to="/main/history" >
          <span>历史</span>
            <template #icon="props">
              <img :src="props.active ? icon.active2 : icon.inactive2"/>
            </template>
        </van-tabbar-item>
         <van-tabbar-item to="/main/my" >
          <span>我的</span>
            <template #icon="props">
              <img :src="props.active ? icon.active3 : icon.inactive3"/>
            </template>
        </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {

  mounted(){
    console.log(this);
    
  },
  data() {
    return {

      active: 0,
      icon: {
         inactive: require('../assets/imgs/home.png'),active: require('../assets/imgs/home_s.png'),
         inactive1: require('../assets/imgs/wechat.png'),active1: require('../assets/imgs/wechat_s.png'),
         inactive2: require('../assets/imgs/history.png'),active2: require('../assets/imgs/history_s.png'),
         inactive3: require('../assets/imgs/my.png'),active3: require('../assets/imgs/my_s.png'),
      }
    }
  }
}
</script>
<style lang="less">
   #main{
     .van-tabbar{
       border-top: 1px solid #ccc;
       height: 70px;
       img{
         width: 30px; height: 30px;
       }
     }
   }
</style>
