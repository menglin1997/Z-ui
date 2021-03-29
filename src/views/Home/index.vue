<!--
 * @文件内容描述: 首页
 * @编辑人: zml
 * @Date: 2021-03-16 16:22:47
 * @LastEditTime: 2021-03-18 09:48:40
 * @最后编写人: zml
-->
<template>
  <div class="home">
    <main class="homeMain">
      <section class="banner">
        <img src="../../assets/img/1.jpg" alt="" />
      </section>

      <!-- 为你推荐 -->
      <section class="recommend">
        <div class="row-bg w zmlFlexWrap">
          <div class="title">为你推荐</div>
          <ul class="row-bg2 zmlFlexWrap">
            <li v-for="(item, index) in recommendList" :key="index">
              <div>{{ item.value }}</div>
            </li>
          </ul>
        </div>
      </section>

      <!-- 轮播 -->
      <section class="carousel w zmlFlexWrap">
        <div class="swiper">
          <el-carousel height="260px" arrow="never">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="zmlColumnBetween imgBox">
          <img src="../../assets/img/1.jpg" alt="" />
          <img src="../../assets/img/1.jpg" alt="" />
          <img src="../../assets/img/1.jpg" alt="" />
          <img src="../../assets/img/1.jpg" alt="" />
        </div>
      </section>

      <!-- 服务 -->
      <section class="service common">
        <div class="w">
          <div class="zmlRowBetween">
            <div class="serviceTitle">
              <span class="active title">个人服务</span>
              <span class="sper">|</span>
              <span>公司服务</span>
            </div>
            <div class="more">
              <el-link :underline="false"> 查看更多> </el-link>
            </div>
          </div>
          <ul class="zmlRowBetween">
            <li
              class="zmlFlexDefalt li"
              v-for="(item, index) in personageList"
              :key="index"
            >
              <div class="service_img">
                <img src="../../assets/img/1.jpg" alt="" />
              </div>
              <div class="zmlColumnAround">
                <div class="name">{{ item.name }}</div>
                <div class="list" v-for="(k, i) in item.list" :key="i">
                  {{ k }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <!-- 特色创新 -->
      <section class="innovate">
        <div class="w common">
          <div class="zmlRowBetween">
            <span class="active title">特色创新</span>
            <div class="more">
              <el-link :underline="false"> 查看更多> </el-link>
            </div>
          </div>
          <div class="zmlRowBetween">
            <div
              class="innovateList"
              v-for="(item, index) in innovateList"
              :key="index"
            >
              <!-- <el-image src="../../assets/img/1.jpg"></el-image> -->
              <img src="../../assets/img/1.jpg" alt="" />
              <div class="desc">
                <div class="top">
                  {{ item.title }}
                </div>
                <div class="value">
                  {{ item.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 主题集成服务 -->
      <section class="service jcService common">
        <div class="w">
          <div class="zmlRowBetween">
            <div>
              <span class="title">主题集成服务</span>
            </div>
            <div class="more">
              <el-link :underline="false"> 查看更多> </el-link>
            </div>
          </div>
          <ul class="zmlRowBetween">
            <li
              class="zmlFlexDefalt personageList"
              v-for="(item, index) in personageList"
              :key="index"
            >
              <div class="zmlColumn">
                <div class="name">{{ item.name }}</div>
                <div class="list">
                 **********************************************
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- 办事网点 -->
      <section class="work common">
        <div class="w">
          <div class="zmlRowBetween">
            <div>
              <span class="title">办事网点</span>
            </div>
            <div class="more">
              <el-link :underline="false"> 查看更多> </el-link>
            </div>
          </div>
          <div class="workBox zmlFlexDefalt">
            <div class="map box">
              <img src="../../assets/img/map.png" alt="" />
            </div>
            <div class="address box">
              <div class="zmlRowBetween workAddr">
                <div>
                  <span class="title">办事网点</span>
                </div>
                <div class="more">
                  <el-link :underline="false"> 查看更多> </el-link>
                </div>
              </div>
              <div class="zmlFlexDefalt bottom">
                <img src="../../assets/img/ewm.png" class="addLogo" alt="">
                <ul>
                  <li>杭州高新区（滨江）党委人才办地址:</li>
                  <li>杭州市滨江区江南大道100号</li>
                  <li>联系电话: 86-0571-87703201,86-0571-87702159</li>
                  <li>邮箱:hhtzrc@163.com </li>
                  <li>qq群:134987830</li>
                </ul>
                <div class="ewm zmlFlexWrap">
                  <img src="../../assets/img/ewm.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 政策咨询 -->
      <section class="service service_zx common">
        <div class="w">
          <div class="zmlRowBetween">
            <div>
              <span class="title">政策咨询</span>
            </div>
            <div class="more">
              <el-link :underline="false"> 查看更多> </el-link>
            </div>
          </div>
          <ul class="zmlRowBetween">
            <li
              class="zmlFlexDefalt li"
              v-for="(item, index) in zxList"
              :key="index"
            >
              <div class="zmlColumn item">
                <div class="name">{{ item.name }}</div>
                <div class="data">{{ item.data }}</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      recommendList: [
        {
          value: "XXXXXXXXXXXX",
        },
        {
          value: "XXXXXX",
        },
        {
          value: "XXXXXXX",
        },
        {
          value: "XXXXXX",
        },
        {
          value: "XXX",
        },
        {
          value: "XXX",
        },
      ],
      personageList: [
        {
          name: "XXXXX",
          data:'2020.01.12',
          list: ["XXXXX", "XXXXXXXXXXXXX", "XXXXXXXXXXXXXXXXXXXX"],
        },
        {
          name: "XXXXX",
          data:'2020.01.12',
          list: ["XXXXX", "XXXXXXXXXXXXX", "XXXXXXXXXXXXXXXXXXXX"],
        },
        {
          data:'2020.01.12',
          name: "XXXXX",
          list: ["XXXXX", "XXXXXXXXXXXXXXXXXXXX"],
        },
        {
          data:'2020.01.12',
          name: "XXXXX",
          list: ["XXXXX", "XXXXXXXXXXXXX", "XXXXXXXXXXXXXXXXXXXX"],
        },
        {
          data:'2020.01.12',
          name: "XXXXX",
          list: ["XXXXX", "XXXXXXXXXXXXX", "XXXXXXXXXXXXXXXXXXXX"],
        },
        {
          data:'2020.01.12',
          name: "XXXXX",
          list: ["XXXXX", "XXXXXXXXXXXXX", "XXXXXXXXXXXXXXXXXXXX"],
        },
      ],
      innovateList: [
        {
          title: "XXXXXX",
          img: "../../assets/img/1.jpg",
          value: "XXXXXXXX",
        },
        {
          title: "XXXXXX",
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-a3a350493a1ad6d46a1800ee2aad3fcf_1200x500.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618545863&t=4a1897c8da7f5e414cf96282ea7aa6d8",
          value: "XXXXXXXX",
        },
        {
          title: "XXXXXX",
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-a3a350493a1ad6d46a1800ee2aad3fcf_1200x500.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618545863&t=4a1897c8da7f5e414cf96282ea7aa6d8",
          value: "XXXXXXXX",
        },
        {
          title: "XXXXXX",
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-a3a350493a1ad6d46a1800ee2aad3fcf_1200x500.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618545863&t=4a1897c8da7f5e414cf96282ea7aa6d8",
          value: "XXXXXXXX",
        },
      ],
      zxList:[ {
          name: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          data:'2020.01.12',
        },
        {
          name: "XXXXXXXXXXXXXXXXXXXX",
          data:'2020.01.12',
        },
        {
          data:'2020.01.12',
          name: "XXXXX",
        },]
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  .title {
    // font-weight: bold;
    // // font-size: 18px;
    // margin-right: 10px;
    font-size: 28px;
    font-weight: 600;
    color: #000000;
  }
  .recommend {
    width: 100%;
    background: #F1F2F3;
    height:103px;
    .row-bg {
      height:100%;
    }
    .row-bg2 {
      margin-left: 64px;
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #111111;
      li {
        padding-right: 33px;
      }
    }
  }
  .banner {
    height: 404px;
    img {
      width: 100%;
      height: 404px;
    }
  }
  // 轮播
  .carousel {
     height: 380px;
    .swiper {
      width: 396px;
      height: 260px;
      margin-right: 24px;
    }
    .imgBox {
      // width: 800px;
      width:800px;
      // height: 150px;
      height: 260px;
      img {
        width: 380px;
        height: 118px;
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  // 服务
  .service {
    background: #F1F2F3;
    // padding: 57px 0 51px 0;
    padding-bottom: 51px;
    .active {
      color: #000;
    }
    .serviceTitle {
      color: #666;
      font-size: 28px;
    }
    .sper {
      padding:0 22px;
    }
    li {
      width: 30%;
      padding: 21px;
      margin-top: 30px;
      box-sizing: border-box;
      height: 222px;
      
      .service_img img {
        width: 43px;
        height: 47px;
        margin-right: 11px;
      }
      .name {
        font-size: 30px;
      }
      .list {
        font-size: 18px;
        color: #666;
      }
    }
    .li {
      background: #FFFFFF;
      box-shadow: 0px 4px 4px 0px rgba(204, 204, 204, 0.35);
    }
  }
  // 集成服务
  .jcService {
    background: #fff;
    padding-bottom: 0;
    .personageList {
      background: url(../../assets/img/2.png) no-repeat;
      background-size: 100% 100%;
      .list {
        word-break: break-all;
        color: #666666;
        line-height: 26px;
      }
      .name{
        font-size: 26px;
      }
    }
  }
  // 特色创新
  .innovate {
    // padding-top: 55px;
    .innovateList {
      width: 24%;
      background: #ccc;
      height: 150px;
      margin-top: 30px;
      position: relative;
      img {
        // width: inherit;
        height: inherit;
        width: 100%;
      }
      .desc {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        color: #fff;
        transform: translate(-50%, -50%);
        .top {
          font-size: 30px;
          font-weight: 600;
        }
        .value {
          margin-top: 20px;
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
        }
      }
    }
  }
  // 办事网点
  .work {
    padding-bottom: 77px;
    .workBox {
      margin-top: 35px;
      .box {
        width: 50%;
        height: 328px;
      }
      .map img {
        width: 100%;
        height: 100%;
      }
      .address {
        padding: 0px 0 10px 43px;
        box-sizing: border-box;
        .workAddr {
          border-bottom: 1px solid #666;
          height: 60px;
        }
        .bottom {
          position: relative;
          height: 272px;
          padding-left: 32px;
          font-size: 16px;
          font-weight: 400;
          color: #555555;
          line-height: 28px;
          .addLogo {
            position: absolute;
            left: 0px;
            top: 34px;
            width: 21px;
            height: 26px;
          }
        }
        ul {
          width: 60%;
          padding-top: 32px;
          li {
            font-size: 12px;
          }
        }
        .ewm {
          width: 40%;
          height: calc(330px - 60px);
          justify-content: center;
          align-items: center;
          img {
            width: 166px;
            height: 166px;
          }
        }
      }
    }
  }
  .common {
    padding-top: 57px;
  }
  .service_zx {
    li {
      height: 234px;
      font-size: 22px;
      font-weight: 400;
      color: #333333;
        padding: 56px 28px 34px 25px;
      .item {
        width: 100%;
        position: relative;
        word-break: break-all;
        .data {
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
