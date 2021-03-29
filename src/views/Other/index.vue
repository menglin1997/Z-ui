<!--
 * @文件内容描述: 其他
 * @编辑人: zml
 * @Date: 2021-03-16 16:22:47
 * @LastEditTime: 2021-03-21 21:19:51
 * @最后编写人: zml
-->
<template>
  <div class="other">
    <!-- banner -->
    <section class="banner">
      <img src="../../assets/img/1.jpg" alt="" />
    </section>

    <section class="contain">
      <div class="w zmlFlexDefalt">
        <!-- 侧边 -->
        <div class="side">
          <div class="title">中心首页</div>
          <div
            :class="index === selIndex ? 'li active' : 'li'"
            v-for="(item, index) in sideList"
            :key="index"
            @click="selIndex = index"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="form">
          <div class="title">新一轮5050申报</div>
          <div class="formLabel" v-if="selIndex === 0">
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="formLabelAlign"
            >
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-form-item label="姓名">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="性别">
                    <div class="sexBox zmlFlexWrap">
                      <div :class="sexSel===1 ? 'active' : 'F'" @click="sexSel=1">男</div>
                      <div :class="sexSel===2 ? 'active' : 'F'" @click="sexSel=2">女</div>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="民族">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="国籍">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="出生年月">
                    <el-date-picker
      v-model="value2"
      type="datetime"
      prefix-icon="prefix"
      placeholder="选择日期时间"
      align="right"
      :picker-options="pickerOptions">
    </el-date-picker>
    <img class="data" src="../../assets/img/data.png" alt="">
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="出生地">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="身份证号">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="护照">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="国内最高学历及毕业院校">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="在校时间">
                    <div class="sexBox zmlFlexWrap">
                       <div :class="school===1 ? 'active' : 'F'" @click="school=1">全职</div>
                      <div :class="school===2 ? 'active' : 'F'" @click="school=2">兼职</div>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="国内专业领域">
                   <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="国内毕业时间">
                    <el-date-picker
                      v-model="value2"
                      type="datetime"
                      prefix-icon="prefix"
                      placeholder="选择日期时间"
                      align="right"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                    <img class="data" src="../../assets/img/data.png" alt="" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="海外最高学历及毕业院校">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                    <el-col :span="12">
                  <el-form-item label="海外毕业时间">
                    <el-date-picker
                      v-model="value2"
                      type="datetime"
                      prefix-icon="prefix"
                      placeholder="选择日期时间"
                      align="right"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                    <img class="data" src="../../assets/img/data.png" alt="" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="海外专业领域">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item
                    label="入选各级人才计划情况（国家、省“千人计划”、杭州市“521”计划）："
                  >
                    <el-input class="area"
                      type="textarea"
                      placeholder="请输入内容"
                      v-model="textarea2"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="是否有创业经历：">
                     <div class="sexBox zmlFlexWrap">
                      <div :class="chuangye===1 ? 'active' : 'F'" @click="chuangye=1">是</div>
                      <div :class="chuangye===2 ? 'active' : 'F'" @click="chuangye=2">否</div>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="创办企业名称：">
                    <el-input v-model="formLabelAlign.name"></el-input>
                    <span class="tips">（无创业经历请填写“无”）</span>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="现居住地址：">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="手机号码">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Email">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="邮编">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <div class="save">
              <el-button type="primary" class="saveBtn">保存</el-button>
            </div>
          </div>
          <div v-else>
            暂无内容
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      selIndex:0, // 选中的某一个
      school:1, // 1 全职  2 兼职
      sexSel:1, // 男1  女2
      chuangye:1, // 是否创业  1 是 2否
      textarea2:'',
      pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value2: '',
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      sideList: [
        {
          name: "申报人信息 ",
        },
        {
          name: "团队成员 ",
        },
        {
          name: "企业信息 ",
        },
        {
          name: "投资简表 ",
        },
        {
          name: "产品研发 ",
        },
        {
          name: "产业化程度 ",
        },
        {
          name: "市场销售 ",
        },
        {
          name: "发展战略 ",
        },
        {
          name: "财务分析 ",
        },
        {
          name: "融资说明",
        },
        {
          name: " 附件材料",
        },
      ],
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.other {
  .banner {
    height: 140px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .contain {
    background: #f8f8f8;
    padding: 11px 0 124px 0;
    .side {
      width: 250px;
      background: #fff;
      font-size: 18px;
      font-family: PingFangSC;
      font-weight: 600;
      height: 743px;
      box-shadow: 0px 5px 3px 0px rgba(221, 221, 221, 0.35);
      text-align: center;
      .title {
        height: 70px;
        line-height: 70px;
        background: url(../../assets/img/other_btn.png);
        background-size: 100% 100%;
      }
      .active {
        color: #0a92d5;
      }
      .li {
        height: 52px;
        line-height: 52px;
        cursor: pointer;
      }
    }
    .form {
      margin-left: 30px;
      width: calc(100% - 280px);
      background: #fff;
      box-shadow: 0px 5px 3px 0px rgba(221, 221, 221, 0.35);
      .title {
        height: 68px;
        width: 230px;
        text-align: center;
        line-height: 68px;
        border-bottom: 3px solid #0991d5;
        font-size: 24px;
        color: #0991d5;
      }
      .formLabel {
        padding: 0 30px 108px;
      }
    }
  }
  .save {
    margin: auto;
    padding-top: 66px;
    font-size: 16px;
    text-align: center;
    .saveBtn {
      width: 260px;
      border-radius: 0;
      height: 50px;
    }
  }
  .prefix {
    left: 0px !important;
  }
  >>> .el-input__inner {
    padding-left: 0 !important;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
    position: relative;
   
  }
   .data {
      position: absolute;
      right: 13px;
      width: 22px;
      top: 50%;
      transform: translateY(-50%);
      height: 22px;
    }
    .sexBox {
      div {
        cursor: pointer;
        width: 64px;
        height: 34px;
        border-radius: 4px;
        text-align: center;
        line-height: 34px;
        margin-right: 4px;
        font-size: 14px;
        font-weight: 400;
      }
      .F {
        background-image: url(../../assets/img/jx.png);
        background-size: 100% 100%;
      }
      .active {
        background-image: url(../../assets/img/jx_sel.png);
        background-size: 100% 100%;
        color: #FFFFFF;
      }
    }
    .tips {
     position: absolute;
      right:-210px;
      font-size: 16px;
      color: #EE0000;
    }
}
</style>
