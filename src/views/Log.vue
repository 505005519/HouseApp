<template>
      <div id="log">
        <!-- 账号 -->
        <img src="../assets/imgs/logo.png" alt="">
        <van-form @submit="onSubmit">
          <div class="inputBox">
            <li class="iconfont icon-user"></li>
            <van-field
              v-model="username"
              name="phone"
              label=""
              placeholder="手机号"
              :rules="[{ required: true, message: '请输入手机号' }]"
            />
          </div>
          <!-- 密码 -->
          <div class="inputBox">
            <li class="iconfont icon-pwd"></li>
            <van-field
              v-model="password"
              type="password"
              name="password"
              label=""
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </div>
          
          <!-- 提交按钮 -->
          <div style="margin: 16px;">
            <van-button  square block type="info" native-type="submit">
              提交
            </van-button>
          </div>
          <div class="regAndForget">
            <router-link to="/reg">手机快速注册</router-link>
            <router-link to="#">忘记密码</router-link>
          </div>
      </van-form>
      
  </div>
</template>

<script>
// 接口文件apis
import {getLoginApi} from "../apis/apis";//error! 获取apis里面的接口  可直接使用（没挂载的）
import { Notify } from 'vant';
export default {
    data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    // 提交表单
    onSubmit(values) {
      console.log('submit', values);
      let params={ 
        phoneNum:values.phone,
        password:values.password 
      };
      getLoginApi(params) //传入的参数（es6解构或直接传入，post方式在utils里面进行qs转换）
      .then( (data)=>{
        // 如何传数据: token保存到本地  跳转页面 
          // console.log("login获取的数据",data);
          if(data.data.token){
            console.log(this.$router);
            sessionStorage.setItem("token",data.data.token);
            Notify({ type: 'primary', duration:1000, message: '登录成功！' });
            this.$router.push("/");  //error!  this.$router.push("");
          }
      })
      .catch( (err)=>{ throw err })
    },
    
  },
}
</script>

<style lang="less">
    #log{
       height: 100%; text-align: center;
       img{ width: 100px; height: 100px; margin: 30px;}
       .van-form{
       
         .inputBox{
           
           display:flex; justify-content: space-between; align-items: center; padding:5px 20px ;
           li{ font-size: 20px;}
         } 
         .regAndForget{
           display:flex; justify-content: space-between; padding:0px 20px;
         }

       }
    }
</style>
