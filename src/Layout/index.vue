<!--
 * @文件内容描述: 公共部分
 * @编辑人: zml
 * @Date: 2021-03-16 16:14:46
 * @LastEditTime: 2021-03-16 17:14:44
 * @最后编写人: zml
-->
<template>
    <div class="layout">
        <!-- 头部 -->
        <h />
        <!-- 内容 -->
        <router-view></router-view>
        <!-- 页脚 -->
        <f />
    </div>
</template>
<script>
import h from './Header/index'
import f from '@/components/Footer/index'
export default {
    data() {
        return {
            
        }
    },
    components:{
        h,f
    }
}
</script>
<style lang="scss" scoped>
.layout {
    min-height: 100vh;
}
</style>