<template>
    <div>
        地图：目前会召唤地图，但是还不能自定义位置
        <div id="container"></div>
    </div>
</template>

<script>
    export default {
        mounted(){
        //  画地图
          var map = new window.AMap.Map('container',{
                mapStyle: 'amap://styles/darkblue', //设置地图的显示样式
          });
          map.setFeatures(['road','point']); //乱设置的
          console.log(map);

        },
        data(){
            return{}
        },
        
    }
</script>

<style lang="less" scoped>
   #container {width:100%; height: 300px; border: 1px solid #000; }  
</style>