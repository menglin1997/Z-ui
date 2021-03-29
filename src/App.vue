<!--
 * @文件内容描述: 
 * @编辑人: zml
 * @Date: 2021-03-16 16:22:47
 * @LastEditTime: 2021-03-18 09:52:48
 * @最后编写人: zml
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  components:{}
}
</script>
<style lang="scss">
.carousel .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #000;
  
}
.carousel .is-active .el-carousel__button {
    background: yellow;
  }
.header_btn {
  font-size: 12px;
    border-radius: 0 !important;
    padding: 7px 28px !important;
  }
</style>