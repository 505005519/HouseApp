<template>
    <div>
        <h1 class="title">历史记录(进入页面无数据，点击生成虚拟store数据)</h1>
       <div class="guessLike" v-for="(v,i) in historyList" :key="i">
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
    export default {
        
        computed:{
            historyList(){
                // console.log("触发成功",this.$store.state.historyList);
                return this.$store.state.historyList.map( (v)=>{
                     return v;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
   .title{ background: cornflowerblue; padding: 10px 25px; width: 90%; margin:0 auto;}
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
</style>