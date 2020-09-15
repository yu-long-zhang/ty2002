<template>
  <div class="main-box">
    <div class="main"  ref="mainScroll">
      <div class="mainBox">
        <adSlider></adSlider>
        <headerSilder></headerSilder>
        <div class="shihuoNav">
          <ul class>
            <li>
              <a href="#">
                <img
                  src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png"
                  alt
                />
              </a>
              众测
            </li>
            <li>
              <a href="#">
                <img
                  src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png"
                  alt
                />
              </a>
              栏目
            </li>
            <li>
              <a href="#">
                <img
                  src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png"
                  alt
                />
              </a>
              最新
            </li>
            <li>
              <a href="#">
                <img
                  src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png"
                  alt
                />
              </a>
              最热
            </li>
          </ul>
        </div>
        <div class="topic">
          <p>热门话题</p>
        </div>
        <div class="hotTopicImg" ref="hotTopic">
          <div>
            <a href="#">
              <img
                src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
                alt
              />
              <span></span>
            </a>
            <a href="#">
              <img
                src="http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg"
                alt
              />
              <span></span>
            </a>
            <a href="#">
              <img
                src="http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png"
                alt
              />
              <span></span>
            </a>
          </div>
        </div>
        <div class="nominateNav" ref="nominateNavScroll">
          <ul>
            <li
              v-for="(item,i) in nominateNav"
              :key="i"
              :class="{active:i === isshow}"
              @click="getTodyList(item.parme,i)"
            >{{item.p}}</li>
          </ul>
        </div>
        <div class="tody-box">
          <ul class="tody">
            <li class="todyList" v-for="(item,i) in todayList" :key="i">
              <div class="todyListTop">
                <a href="javascript:void(0);">
                  <img :src="item.data.avatar" alt />
                </a>
                <div>
                  <p class="todyTit">{{item.data.author_name}}</p>
                  <p class="todyTime">{{item.data.date}}2020-04-21</p>
                </div>
              </div>
              <div class="todyListBottom">
                <div class="tlp">{{item.data.title}}</div>
                <img :src="item.data.img" alt />
                <div class="imgTit">
                  <span class="heart">{{item.data.praise}}</span>
                  <span class="say">{{item.data.reply_count}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footerI></footerI>
  </div>
</template>
<script>
import adSlider from "../../components/adSlider";
import headerSilder from "../../components/headerSilder";
import { get } from "@/api/http";
import footerI from "../../components/footerI";
import { Toast } from "vant";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {
  data() {
    return {
      nominateNav: [
        {
          parme: 283,
          p: "今日推荐",
        },
        {
          parme: 347,
          p: "篮球",
        },
        {
          parme: 281,
          p: "视频",
        },
        {
          parme: 270,
          p: "最新资讯",
        },
        {
          parme: 318,
          p: "潮流风向",
        },
        {
          parme: 273,
          p: "3c新奇特",
        },
        {
          parme: 285,
          p: "潮鞋志",
        },
        {
          parme: 136,
          p: "球鞋90秒",
        },
      ],
      isshow: 0,
      parme: 238,
      todayList: [],
      param_str: "",
      len: 1,
    };
  },
  components: {
    adSlider,
    footerI,
    headerSilder,
  },
  created() {
    
    this.$nextTick(() => {
      this.initScroll();
      this.nominateNavScroll();
      // console.log(this.todayList.length - 1);
    });
    this.getTodyList(238, 0);
    // this.getTodyListTwo()
  },
  methods: {
    // 横向滚动条
    initScroll() {
      // 确保dom生成完毕
      if (this.bs) {
        // 如果进来已经创建过bs对象，就不重新创建了直接用下面方法刷新bs就可以
        this.bs.refresh();
        return;
      }
      this.bs = new BScroll(this.$refs.hotTopic, {
        scrollX: true,
        probeType: 3, // listening scroll hook
      });
      //   滚动条到最右侧
      this.bs.on("scrollEnd", () => {
        Toast("跳转页面还没有写");
      });
    },
    // 第二个横向滚动
    nominateNavScroll() {
      // 确保dom生成完毕
      if (this.bsTwo) {
        // 如果进来已经创建过bs对象，就不重新创建了直接用下面方法刷新bs就可以
        this.bsTwo.refresh();
        return;
      }
      this.bsTwo = new BScroll(this.$refs.nominateNavScroll, {
        scrollX: true,
        probeType: 3, // listening scroll hook
      });
      //   滚动条到最右侧
      // this.bs.on("scrollEnd", () => {
      //   Toast("跳转页面还没有写");
      // });
    },
    // 第一次请求数据
    async getTodyList(parme, isshow) {
      this.len = this.todayList.length;
      this.todayList.splice(0, this.len);
      this.parme = parme;
      if (!isshow) {
        this.isshow = 0;
      } else {
        this.isshow = isshow;
      }
      let rs = await get("/todyList", {
        tag_id: this.parme,
        param_str:''
      });
      this.todayList.push(...rs.data.data);
      // this.$store.commit("setDiscountsList", rs.data.data);
      this.$nextTick(() => {
        this.initMainScroll();
      });
    },
    // 纵向滚动
    initMainScroll() {
      if (this.bscroll) {
        // 如果进来已经创建过bs对象，就不重新创建了直接用下面方法刷新bs就可以
        this.bscroll.refresh();
        this.bscroll.finishPullUp();
        return;
      }
      this.bscroll = new BScroll(this.$refs.mainScroll, {
        pullUpLoad: true,
        click: true,
      });
      this.bscroll.on("pullingUp", () => {
        this.getTodyListTwo();
        // console.log(444)
      });

      // this.bscroll.on("scroll", (position) => {
      //   // 可以获取滚动的高度
      //   // console.log(position.x, position.y);
      //   if (position.y < -660) {
      //     this.flag = false;
      //   } else {
      //     this.flag = true;
      //   }
      // });
    },
    // 分页请求数据
    async getTodyListTwo() {
      let len = this.todayList.length - 1;
      let url ="/todyList?tag_id="+this.parme+"&param_str="+this.todayList[len].data.param_str;
      let rs = await get( encodeURI(url));
      // let rs = await get("/todyList", {
      //   tag_id: this.parme,
      //   // param_str: encodeURI(this.todayList[len].data.param_str)
      //   param_str: this.todayList[len].data.param_str.replace(' ','%%20')
      // });
      this.todayList.push(...rs.data.data);
      this.$nextTick(() => {
        this.initMainScroll();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.main-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: hidden;
    .shihuoNav {
      width: 100%;
      background: #fff;
      margin-bottom: 12px;
      ul {
        width: 100%;
        height: 80px;
        display: flex;
        li {
          flex: 1;
          display: flex;
          font-size: 12px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          a {
            width: 35px;
            height: 35px;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .topic {
      width: calc(100% - 20px);
      height: 14px;
      padding: 10px;
      background: #fff;
      p {
        font-size: 14px;
        line-height: 16px;
      }
    }
    .hotTopicImg {
      width: 100%;
      overflow: hidden;
      div {
        display: flex;
        width: 393px;
        a {
          position: relative;
          display: block;
          width: 131px;
          height: 62px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
          img {
            width: 100%;
          }
          span {
            display: block;
            width: 100%;
            height: 100%;
            background: gray;
            opacity: 0.4;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
    .nominateNav {
      width: 100%;
      height: 40px;
      overflow: hidden;
      border-bottom: 0.5px solid rgba(194, 186, 186, 0.603);
      ul {
        width: 584px;
        display: flex;
        flex-shrink: 0;
        // overflow: hidden;
        li {
          flex-shrink: 0;
          width: 70px;
          height: 100%;
          text-align: center;
          line-height: 40px;
          font-size: 13px;
        }
        .active {
          color: #ff4338;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 35px;
            height: 1.8px;
            background: #ff4338;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
          }
        }
      }
    }
    .tody-box {
      width: 100%;
      display: flex;
      justify-content: center;
      .tody {
        width: 345px;
        .todyList {
          padding-top: 10px;
          padding-left: 45px;
          position: relative;
          a {
            display: block;
            width: 34px;
            height: 34px;
            position: absolute;
            left: 0px;
            top: 10px;
            img {
              width: 100%;
            }
          }
          .todyListTop {
            .todyTit {
              font-size: 18px;
              color: #444444;
              line-height: 28px;
            }
            .todyTime {
              line-height: 24px;
              font-size: 17px;
              color: #999999;
            }
          }
          .todyListBottom {
            .tlp {
              font-size: 20px;
              color: #444444;
              line-height: 34px;
            }
            img {
              width: 300px;
              height: 140px;
            }
            .imgTit {
              width: 160px;
              margin-top: 18px;
              margin-bottom: 14px;
              font-size: 16px;
              color: #888888;
              display: flex;
              justify-content: space-around;
              span {
                display: inline-block;
                width: 40px;
                text-align: end;
              }
              .heart {
                background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png)
                  2px 2px no-repeat;
                background-size: 15px;
              }
              .say {
                background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png)
                  2px 2px no-repeat;
                background-size: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>