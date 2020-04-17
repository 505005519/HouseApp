<template>
    <div id="hiostory">
        <div class="head"><span class="back" @click="backToHome">&lt;返回</span><span class="headTitle">城市</span></div>
        <div class="words" >
        <div @click="scrollTo(v.title)" v-for="v in cities" :key="v.title">{{v.title}}</div>
        </div>
        <dl id="wrapper">
            <div>
                <dt>热门城市</dt>
                <dd @click="chooseCity(v)" v-for="v in hotcity" :key="v">{{v}}</dd>
                <!-- 正常城市 -->
                <div v-for="v1 in cities" :key="v1.titles">
                    <dt :id="v1.title">{{v1.title}}</dt>
                    <dd @click="chooseCity(v2)" v-for="v2 in v1.lists" :key="v2">
                        <div>{{v2}}</div> 
                    </dd>
                </div>
            </div>
        </dl>
    </div>
</template>

<script>
    import {hotcity,cities} from "../city/city.json"; //注意引入方式
    import BScroll from "better-scroll"; //better-scroll插件
    export default {
        mounted(){
            // 初始化滚动
            const wrapper = document.querySelector('#wrapper');
            this.leftScroll=new BScroll(wrapper,{ click:true });
            // 测试json文件
            console.log(hotcity,cities);
            this.hotcity=hotcity;
            this.cities=cities;
        },
         data(){
             return{
                 city:"",
                 hotcity:"",
                 cities:""
             }
         },
         methods:{
            // better-scroll
            scrollTo(title){
              console.log(title);
              this.leftScroll.scrollToElement(`#${title}`,500);
            },
            // 返回按钮 
            backToHome(){ this.$router.push("/main/home"); },
            // 选择城市   
            chooseCity(city){
               console.log(city);
               this.$store.commit("getCurrentCity",city);
               this.$router.push("/main/home");
           }
         }
           
    }
</script>

<style lang="less">
    #hiostory{
           .head{ padding: 10px 10px ; background: cornflowerblue; 
                  font-size: 20px; font-weight: bold;
                  display:flex;
                  span{  flex:1}
                //   .back{ align-self: flex-end;}
                  .headTitle{margin-left: -20px;}
                  };
           .words{position:fixed; right:0px; top:40px; bottom:0px;
                  width: 40px; text-align: center;
                  div{ padding:6px; border-bottom: 1px solid #999; overflow: auto;}
                  }
           #wrapper{
               overflow:auto;
               position:fixed; left:0px;bottom:0px; top:40px; right:40px;
               dt{  height: 40px;  line-height: 40px;font-weight: bold; background: #999; padding-left: 5px ;}
               dd{  height: 30px;  line-height: 30px; padding-left: 5px ;}
           }
    }
</style>