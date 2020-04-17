<template>
    <div id="my">
        <div class="head">
            <div class="info">
                 <div>
                     <img src="../../assets/imgs/carousel_1.jpg" alt="">
                 </div>
                 <div>
                    <span><router-link to="/log">登陆</router-link></span> /
                    <span><router-link to="/reg">注册</router-link></span>
                    <p>可以直接与经纪人联系</p>
                 </div>
                 <div><van-icon name="setting-o" size="2rem" /></div>
            </div>
             <div class="headGrid">
                <div>
                     <p>0</p>
                     <div><van-icon name="balance-o" size="2rem" />钱包</div>
                </div>
                <div class="line"></div>
                 <div>
                     <p>0</p>
                     <div><van-icon name="hot-o" size="2rem"/>优惠</div>
                </div>
                <div  class="line"></div>
                 <div>
                     <p>0</p>
                     <div><van-icon name="points" size="2rem"/>积分</div>
                </div>
            </div>
        </div>
        <div class="myBody">

             <div v-for="v in selectList" :key="v.text"  :class="v.class">
                 <div v-if="!v.class"><van-icon  :name="v.icon" size="2rem" />{{v.text}}</div>
                 <span v-if="!v.class">&gt;</span>
             </div>

        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                selectList:[
                    { icon:"points",text:"我的积分" },/*  <van-icon name="points" /> */
                    { icon:"orders-o",text:"我的订阅" }, 
                    { icon:"friends",text:"微信联系人" }, 
                    { class:"blank"},
                    { icon:"records",text:"房贷计算器" }, 
                    { icon:"star",text:"我的房子" },
                    { class:"blank"},
                    { icon:"clock",text:"看房记录" }, 
                    { icon:"chat",text:"我的回答" }, 
                    { class:"blank"},
                    { icon:"setting",text:"设置" },
                    { text:"意见反馈" }, 
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
   #my{background: gainsboro; height: 100%; 
       .head{
            
           padding:10px 20px; background: steelblue; margin-bottom: 5px;
           .info{ color:#fff;  margin-bottom: 5px;
                display:flex; justify-content: space-between;
                span{ font-weight: bold; font-size:20px; display:inline-block; margin-bottom: 10px;}   
                img{ width: 80px; height: 80px; }
            }
           .headGrid{ display:flex;justify-content: space-around; color:#fff; 
              div{ padding:5px; text-align: center;
                 div{  display:flex; align-items: center; justify-content: center;}
              }
              .line{ border: 1px solid #fff; padding:0;}
           }
           
        }
     .myBody{ 
         div{ background: #fff; margin-bottom: 1px; padding:2px 10px; font-size: 18px;
            display:flex; justify-content: space-between; align-items: center;
            .van-icon{ margin-right: 10px;}
         }
         .blank{ background: gainsboro; height: 10px;}
     }
   }
</style>