<template>
  <div class="bodyBox">
    <ul class="good-nav" v-show="!flag">
      <li @click="getHitsList(999,1)" :class="{active:i===1}">精选</li>
      <li @click="getHitsList(2,2)" :class="{active:i===2}">鞋类</li>
      <li @click="getHitsList(3,3)" :class="{active:i===3}">服饰</li>
      <li @click="getHitsList(4,4)" :class="{active:i===4}">数码</li>
      <li @click="getHitsList(5,5)" :class="{active:i===5}">兴趣</li>
      <li class="nav-null"></li>
      <li class="pull-down"></li>
    </ul>
    <div class="main" ref="rollBox">
      <div class="roll">
        <adSlider></adSlider>
        <div class="seek">
          <div class="search">
            <span class="searchImg"></span><input type="search" class="input" placeholder="安踏 KT篮球系列" />
          </div>
          <div class="coupon">
            <div>
              已收集&nbsp;&nbsp;&nbsp;
              <span>0</span>&nbsp;&nbsp;&nbsp;张优惠券
            </div>
            <a href="http://m.shihuo.cn/app/html/shihuoMobile/souquan.html"></a>
          </div>
        </div>
        <div class="brand-box">
          <div class="brand">
            <div class="head">
              <b>品牌特卖</b>
              <div>
                <a href="http://www.shihuo.cn/youhui/brandSale">
                  更多品牌
                  <img
                    src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png"
                    alt
                  />
                </a>
              </div>
            </div>
            <ul class="sort">
              <li v-for="(item,i) in goodSort" :key="i">
                <img :src="item.img" alt />
                <div>{{item.name}}</div>
              </li>
            </ul>
            <ul class="goodBrand">
              <li v-for="(item,i) in goodBrand" :key="i">
                <a href="http://www.shihuo.cn/youhui/brandSale">
                  <img :src="item['good-img']" alt class="good-img" />
                  <img :src="item['brand-img']" alt class="brand-img" />
                  <div class="brand">{{item.name}}</div>
                  <div class="discount">{{item.discount}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="title-box">
          <div class="title">
            <img
              src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png"
              alt
            />
          </div>
          <ul class="good-nav" v-show="flag">
            <li @click="getHitsList(999,1)" :class="{active:i===1}">精选</li>
            <li @click="getHitsList(1,2)" :class="{active:i===2}">鞋类</li>
             <li @click="getHitsList(2,3)" :class="{active:i===3}">服饰</li>
            <li @click="getHitsList(3,4)" :class="{active:i===4}">数码</li>
            <li @click.stop="getHitsList(4,5)" :class="{active:i===5}">兴趣</li>
            <li class="nav-null"></li>
            <li class="pull-down"></li>
          </ul>
        </div>
        <div>
          <Hits></Hits>
        </div>
      </div>
    </div>

    <footerI></footerI>
  </div>
</template>
<script>
import adSlider from "../../components/adSlider";
import { get } from "@/api/http";
import footerI from "../../components/footerI";
import { Toast } from "vant";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import Hits from "./Hits";
BScroll.use(Pullup);

export default {
  data() {
    return {
      goodSort: [
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201711/0113/705803887a16991348788bc77ef96298.png",
          name: "运动",
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201711/0113/ed229a3887b997986de9d2fa99968f2c.png",
          name: "休闲",
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201711/0113/3be9bb6590b50ae4c2c823353ebd1bb9.png",
          name: "户外",
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201711/0113/26a9c61773702db21dbe4b9d9a5bed60.png",
          name: "数码",
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201711/0113/487a7ff8df880418d15d3db5e4608a0f.png",
          name: "更多",
        },
      ],
      goodBrand: [
        {
          "good-img":
            "http://shihuo.hupucdn.com/appHome/201801/0811/8b50d3b1734f11c83f911a361c96d1b9.jpg",
          "brand-img":
            "http://shihuo.hupucdn.com/goods/style/201708/1716/a8418a3ae650e7c5c76eea45f2a2bcc1.png",
          name: "日高",
          discount: "定金50抵450",
        },
        {
          "good-img":
            "http://shihuo.hupucdn.com/appHome/201801/0612/71cd68692b56ab4bd992716e2c010270.jpg",
          "brand-img":
            "http://shihuo.hupucdn.com/goods/style/201708/1716/4ef177124aa7ba5eb5d6ef5c135ae057.png",
          name: "匹克",
          discount: "不止5折",
        },
        {
          "good-img":
            "http://shihuo.hupucdn.com/appHome/201801/0612/ecbb92938c6c2e81bf6d4825f82b5fd9.jpg",
          "brand-img":
            "http://shihuo.hupucdn.com/newslogo/201710/1814/cd232408542a3bafc7eb464f74909171.jpg",
          name: "dickies",
          discount: "满11减10元",
        },
        {
          "good-img":
            "http://shihuo.hupucdn.com/appHome/201801/0811/8f97c03a7fd2604d27568b087b8b5b59.jpg",
          "brand-img":
            "http://shihuo.hupucdn.com/goods/style/201708/1716/6c79a6f7612a56c851451ca0f0929025.png",
          name: "铭瑄",
          discount: "虎扑专享满600减180",
        },
        {
          "good-img":
            "http://shihuo.hupucdn.com/appHome/201801/0811/985b1e7d8fc8eddc2a80c2b8b309ac2d.jpg",
          "brand-img":
            "http://shihuo.hupucdn.com/goods/style/201708/1716/bf41e50f5ace374682d8f9e104a9a953.png",
          name: "UA",
          discount: "虎扑专享满600减180",
        },
        {
          "good-img":
            "http://shihuo.hupucdn.com/appHome/201801/0612/6751d06bc35a2e370f97982491bde549.jpg",
          "brand-img":
            "http://shihuo.hupucdn.com/newslogo/201710/2312/e08733467eb951d4ff57debfbf97396e.jpg",
          name: "Sony索尼",
          discount: "满48减10",
        },
      ],

      i: 1,
      flag: true,
      r: 999,
      page: 1,
      //created中请求数据只执行一次的开关
      once: true,
    };
  },
  components: {
    adSlider,
    footerI,
    Hits,
  },
  created() {
    if (this.once) {
      this.getHitsList();
    }
    this.$store.state.discountsList.length;
  },
  methods: {
    async getHitsList(r, isshow) {
      this.once = false;
      this.r = r;
      this.page = 1;
      this.$store.commit("setDiscountListOne");
      if (!isshow) {
        this.i = 1;
      } else {
        this.i = isshow;
      }
        let rs = await get("/hits", {
          r: r,
          page: 1,
          page_size: 30,
        });
        this.$store.commit("setDiscountsList", rs.data.data);
      this.$nextTick(() => {
          this.initDiscountScroll();
        });
    },
    async getHitsListTwo() {
      this.page++;
      let rs = await get("/hits", {
        r: this.r,
        page: this.page,
        page_size: 30,
      });
      this.$store.commit("setDiscountsList", rs.data.data);
      this.$nextTick(() => {
        this.initDiscountScroll();
      });
    },
    initDiscountScroll() {
      if (this.bscroll) {
        // 如果进来已经创建过bs对象，就不重新创建了直接用下面方法刷新bs就可以
        this.bscroll.refresh();
        this.bscroll.finishPullUp();
        return;
      }
      this.bscroll = new BScroll(this.$refs.rollBox, {
        pullUpLoad: true,
        click: true,
      });
      this.bscroll.on("pullingUp", () => {
        this.getHitsListTwo();
      });

      this.bscroll.on("scroll", (position) => {
        // 可以获取滚动的高度
        // console.log(position.x, position.y);
        if (position.y < -660) {
          this.flag = false;
        } else {
          this.flag = true;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.bodyBox {
  background: #f0f3f5;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: hidden;
}

.seek {
  width: 100%;
  background-color: #f0f3f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .search {
    width: 345px;
    height: 32px;
    margin-top: 12px;
    margin-bottom: 2px;
    display: flex;
    // background-position: 10px 10px;
    .searchImg{
      display: block;
      flex: .1;
      background:#FFF url(//sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) no-repeat 10px;
      background-size: 14px;
    }
    .input {
      flex: 1;
      border: 0;
      border-radius: 4px;
      color: #666;
      box-sizing: border-box;
    }
  }
  .coupon {
    width: 345px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    span {
      font-size: 16px;
      color: #444;
    }
    a {
      display: block;
      width: 75px;
      height: 21px;
      background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/sqzn_2e60ac8.png)
        no-repeat;
      background-size: 75px;
    }
  }
}
.brand-box {
  z-index: 100;
  width: 100%;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  .brand {
    width: 92%;
    height: 92%;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      b {
        font-size: 14px;
        color: #333;
      }
      a {
        color: #999;
        font-size: 12px;
        img {
          width: 5.5px;
        }
      }
    }
    .sort {
      display: flex;
      margin-bottom: 20px;
      li {
        flex: 1;
        text-align: center;
        img {
          width: 48px;
          height: 48px;
        }
        div {
          font-size: 13px;
          color: #333;
        }
      }
    }
    .goodBrand {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 31.8%;
        height: 110px;
        justify-content: space-around;
        position: relative;
        margin-bottom: 8px;
      }

      .good-img {
        width: 100%;
        height: 100%;
      }
      .brand-img {
        width: 35px;
        height: 35px;
        position: absolute;
        left: calc(50% - 17px);
        top: 20px;
        z-index: 2;
        border-radius: 50%;
      }
      .brand {
        width: 100px;
        height: 15px;
        color: #fff;
        font-size: 13px;
        line-height: 15px;
        position: absolute;
        left: calc(50% - 50px);
        top: 60px;
        text-align: center;
      }
      .discount {
        width: 85px;
        height: 15px;
        background: #ff4338;
        border-radius: 5px;
        position: absolute;
        left: calc(50% - 42px);
        top: 80px;
        color: #fff;
        font-size: 6px;
        text-align: center;
        line-height: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
.title-box {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  .title {
    width: 345px;
    margin-top: 40px;
    margin-bottom: 20px;
    img {
      width: 100%;
      border-radius: 50px;
    }
  }
}
.good-nav {
  width: 345px;
  height: 44px;
  display: flex;
  margin: auto;
  margin-bottom: 10px;
  li {
    flex: 1;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 13px;
    color: #333333;
  }
  .pull-down {
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png)
      no-repeat;
    background-size: 100%;
  }
  .active {
    position: relative;
    color: #ff4338;
    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 1.5px;
      background: #ff4338;
      position: absolute;
      left: 50%;
      bottom: 2px;
      transform: translateX(-50%);
    }
  }
}
</style>