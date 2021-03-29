<!--
 * @文件内容描述: 登录
 * @编辑人: zml
 * @Date: 2021-03-16 16:22:47
 * @LastEditTime: 2021-03-16 17:31:26
 * @最后编写人: zml
-->
<template>
  <div class="login">
    <header class="header w">
      <img class="logo" src="../../assets/img/logo.png" alt="" />
    </header>
    <!-- 登录的内容 -->
    <main class="main loginBox">
      <img class="login1" src="../../assets/img/login1.png" />
      <div class="loginDialog zmlColumnBetween">
        <div class="zmlRowBetween login_content">
          <div class="login_gg" :class="isgg == 1 ? 'geren' : ''" @click="GGlogin(1)">
            个人登录
          </div>
          <div class="login_gg" :class="isgg == 2 ? 'gongshi' : ''" @click="GGlogin(2)">
            公司登录
          </div>
        </div>
        <span class="mode">密码登录</span>
        <input type="text" placeholder="用户们/手机号码/身份证"/>
        <div>
          <input type="password" placeholder="密码"/>
          <div class="password_mod zmlRowBetween">
            <span class="pointer">其他方式登录</span>
            <span class="pointer">忘记密码？</span>
          </div>
        </div>
        <div class="button">登录</div>
        <div class="register">
          <span>还没有登录？</span>
          <span class="goRegister" @click="goRegister">去注册</span>
        </div>
      </div>
    </main>
    <f />
  </div>
</template>

<script>
import f from '@/components/Footer/index'
export default {
  name: "Home",
  components: { f },
  data () {
    return {
      isgg: 1,
    }
  },
  methods: {
    GGlogin (key) {
      debugger
      this.isgg = key
    },
    goRegister(){
      this.$router.push('/register')
    },
  }
};
</script>
<style lang="scss" scoped>
.login {
  .loginBox {
    position: relative;
    background: skyblue;
    .loginDialog {
      position: absolute;
      top: 10%;
      right: 20%;
      background: #fff;
      width: 300px;
      height: 280px;
      box-shadow: -3px 2px 4px 0px rgba(221, 221, 221, 0.35);
      border-radius: 4px;
      padding: 30px 20px;
    }
  }
}
input {
  width: 230px;
  border: 0px;
  outline: none;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
/* input[type="text"] {
  -webkit-appearance: none;
  } */
input::-webkit-input-placeholder {
  color: #999999;
  // text-align: right;
  font-size: 16px;
}
//头
.logo {
  margin-top: 30px;
  width: 401px;
  height: 67px;
}
.login1 {
  width: 300px;
  position: absolute;
  top: 20%;
  left: 30%;
}
//内容
.login_content {
  width: 200px;
}
.login_gg {
  width: 90px;
  font-size: 20px;
  line-height: 26px;
	font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  cursor: pointer;
}
.geren{
  color: #1492ff;
  border-bottom: 2px solid #1492ff;
}
.gongshi{
  color: #1492ff;
  border-bottom: 2px solid #1492ff;
}
.mode{
	font-size: 16px;
	font-weight: normal;
	line-height: 26px;
	color: #333333;
}
.password_mod {
  width: 230px;
	font-size: 14px;
	line-height: 26px;
	color: #333333;
	font-weight: bold;
}
.button{
  width: 230px;
	height: 40px;
  line-height: 40px;
	background-color: #1492ff;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
}
.register{
	font-size: 14px;
	font-weight: bold;
	line-height: 26px;
	color: #333333;
}
.goRegister{
  color: #5cbbfa;
  cursor: pointer;
}
</style>