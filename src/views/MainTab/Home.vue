<template>
  <div id="home">
    <!-- 搜索框 -->
    <div class="search">
        <span @click="ToWhere('/city')">{{this.city?this.city:"定位中"}}▼</span>
        <van-search @click="ToWhere('/search')"
        v-model="value"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        />
        <img @click="ToWhere('/map')" class="site" src="../../assets/imgs/icon_3.png" alt="定位">
 
    </div>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(v, index) in lazyImages" :key="index">
            <img v-lazy="v" />
        </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid square>
        <van-grid-item v-for="value in gridList" :key="value.id" :icon="value.img" :text="value.text" />
    </van-grid>
    <!-- 猜你喜欢 -->
    <h2 class="guessTitle">猜你喜欢</h2>

    <div class="guessLike" v-for="v in houseList" :key="v.id">
        <img :src="v.pic" alt="">
        <div class="description">
            <p class="houseName"><span>{{v.name}}</span><span>{{v.price}}/平</span></p>
            <div>{{v.address}}</div>
            <!-- <div>4室2厅 199平</div> -->
        </div>
    </div>
  </div>
</template>

<script>
  import { getHouseList} from "../../apis/apis"
  export default {
      data(){
          return {
              value:"",
              lazyImages:[ //error!  require是js  只能在js代码运行
                    require('../../assets/imgs/carousel_1.jpg'),
                    require('../../assets/imgs/carousel_2.jpg'),
                    require('../../assets/imgs/carousel_3.jpg'),
              ],
              city:"",
              gridList:[ // 宫格
                  { id:0, img:require('../../assets/imgs/icon_1.png'),text:"新房" },
                  { id:1, img:require('../../assets/imgs/icon_2.png'),text:"旧房" },
                  { id:2, img:require('../../assets/imgs/icon_3.png'),text:"二手房" },
                  { id:3, img:require('../../assets/imgs/icon_4.png'),text:"二手货" },
                  { id:4, img:require('../../assets/imgs/icon_5.png'),text:"出租房" },
                  { id:5, img:require('../../assets/imgs/icon_6.png'),text:"天桥下" },
                  { id:6, img:require('../../assets/imgs/icon_7.png'),text:"桥洞" },
                  { id:7, img:require('../../assets/imgs/icon_1.png'),text:"过道" }
              ],
              houseList:[]
          }
      },
      methods:{
          ToWhere(url){
              this.$router.push(url);
          }
      },
      mounted(){
        //  console.log(this,window);  key值  箭头函数  AMap在window
        window.AMap.plugin('AMap.CitySearch', ()=> {
        var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result)=> {
            if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
                    this.city=result.city;
                //  console.log(this.city);
            }
            })
        })
        // 房子列表
        getHouseList()
         .then( (data)=>{ this.houseList=data.data.data})
         .catch( (err)=>{ throw err})
      },
        
      
  };
</script>

<style lang="less" scoped>
   #home{
        padding-bottom: 100px; //##被tab覆盖的解决办法##
        overflow: auto;
       .search{
           position:fixed;z-index:2; width: 100%;
           display:flex;justify-content:space-between; align-items: center;
           background: rgb(79, 192, 141); padding: 0px 5px;
           .van-search{width: 70%; }
           .site{
              width: 40px;
            }
        };
       .van-swipe{ 
           margin-top: 54px;
           img{ width: 100%; height: 200px;}
        }
        .guessTitle{ padding:10px 25px; color:#666; font-size: 20px;}
        .guessLike{
            
            width: 100%;
            padding:5px 25px;
            margin-bottom: 10px;
           
            display:flex;
            img{ width: 80px; margin-right: 10px;}
            .description{
                width:100%; display:flex; flex-direction: column; justify-content: space-around;
                .houseName{ width: 100%; display:flex; justify-content: space-between;}
                p>span{font-weight: bold; font-size: 16px;}
                p>span:nth-child(2){color:red;}
                div{ color:#666;font-size: 14px;}
            }
            
        }
       
   }
</style>