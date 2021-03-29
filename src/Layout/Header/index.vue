<!--
 * @文件内容描述: 
 * @编辑人: zml
 * @Date: 2021-03-16 16:15:57
 * @LastEditTime: 2021-03-18 09:53:31
 * @最后编写人: zml
-->
<template>
  <div class="w">
    <div class="page_top zmlRowBetween">
      <div class="lang">
        <span>简体</span>
        <span>|</span>
        <span>English</span>
      </div>
      <div>
        <el-button class="header_btn" type="primary" @click="goLogin"
          >登录</el-button
        >
        <el-button class="header_btn" type="primary" @click="goRegister"
          >注册</el-button
        >
      </div>
    </div>
    <div class="zmlFlexWrap header">
      <img class="logo" src="../../assets/img/logo.png" alt="" />
      <ul class="list">
        <li
          @click="toPath(item.path)"
          v-for="(item, index) in headerList"
          :key="index"
          :class="$store.state.path === item.path ? 'active' : ''"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      path: '',
      headerList: [{
        name: '首页',
        path: '/home'
      }, {
        name: '政策服务',
        path: '/policyService'
      },
      // {
      //     name:'园区服务',
      //     path:'/home'
      // },
      {
        name: '机构服务',
        path: '/AgencyService'
      }, {
        name: '其他咨询',
        path: '/Other'
      },
      ]
    }
  },

  methods: {
    toPath (url) {
      if (this.$store.state.path && this.$store.state.path !== url) {
        this.$router.push(url)
      }
    },
    goLogin () {
      this.$router.push('/login')
    },
    goRegister () {
      this.$router.push('/register')
    },
  }
}
</script>
<style lang="scss" scoped>
.page_top {
  height: 50px;
  .lang {
    font-size: 12px;
    font-weight: 400;
    color: #555555;
  }
}
.list {
  display: flex;
  height: 100%;
  align-items: center;
  line-height: 100px;
  margin-left: 57px;
  li {
    padding: 0 10px;
    height: 100%;
    min-width: 95px;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 4px solid transparent;
    font-weight: bold;
    font-size: 20px;
    font-weight: bold;
  }
  li:hover {
    background: #f3f3f3;
    border-bottom: 4px solid #06acee;
  }
  .active {
    background: #f3f3f3;
    border-bottom: 4px solid #06acee;
  }
}
.logo {
  width: 401px;
  height: 67px;
}
</style>