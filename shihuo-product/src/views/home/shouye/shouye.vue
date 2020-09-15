<template>
  <div class="one">
    <headerSilder></headerSilder>
    <div class="btn">
      <span class="iconfont ss">&#xe650;</span>
      <input type="text" class="input" name="keywords" value placeholder="搜索商品，品牌" id="searchVal" />
      <span class="iconfont">&#xe618;</span>
    </div>
    <div class="nav">
      <ul>
        <router-link tag="li" v-for="item in datalist" :key="item.id" to="/home/shouye">
          <div class="lq">
            <h2>{{item.h2}}</h2>
            <p>{{item.p}}</p>
          </div>
          <img :src="item.img" alt />
        </router-link>
      </ul>
      <div class="yh">
        <ul>
          <router-link tag="li" v-for="item in youhuilist" :key="item.id" to="/home/shouye">
            <div>
              <h3>{{item.h3}}</h3>
              <p>{{item.p}}</p>
            </div>
            <img :src="item.img" alt />
          </router-link>
        </ul>
      </div>
    </div>
    <div class="rm">
      <h3>热门活动</h3>
      <ul>
        <router-link to="/home/shouye" v-for="item in dist" :key="item.id" tag="li">
          <img class="image" :src="item.img" alt />
          <p>{{item.p}}</p>
          <b>{{item.h3}}</b>
        </router-link>
      </ul>
    </div>
    <div class="nav1">
      <ul class="good-nav">
                  <router-link tag="li" active-class="active" to="/home/shouye/tuijian">推荐</router-link>
                  <router-link tag="li" active-class="active" to="/home/shouye/lanqiu">篮球</router-link>
                  <router-link tag="li" active-class="active" to="/home/shouye/paobu">跑步</router-link>
                  <router-link tag="li" active-class="active" to="/home/shouye/jianshen">健身</router-link>
                  <router-link tag="li" active-class="active" to="/home/shouye/chaoliu">潮流</router-link>
      </ul>
    </div>

    <tuijian></tuijian>
  </div>
</template>
<script>
import tuijian from './tuijian/tuijian'
import headerSilder from "../../../components/headerSilder";
import { get } from "@/api/http";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
  components: {
    headerSilder,
    tuijian,
  },
  data() {
    return {
      datalist: [],
      youhuilist: [],
      dist: [],
    };
  },
  created() {
    this.getlist(), this.getaaa(), this.getbbb(), this.getccc();
  },
  methods: {
    async getlist() {
      let rs = await get("/datalist");
      this.datalist = rs.data;
      this.$nextTick(() => {
        this.initScroll();
        // this.bscroll.finishPullUp()
        // this.bscroll.refresh()
      });
    },
    async getaaa() {
      let rs = await get("/itemlist");
      this.youhuilist = rs.data;
      this.$nextTick(() => {
        this.initScroll();
        // this.bscroll.finishPullUp()
        // this.bscroll.refresh()
      });
    },
    async getbbb() {
      let rs = await get("/dist");
      this.dist = rs.data;
      this.$nextTick(() => {
        this.initScroll();
        // this.bscroll.finishPullUp()
        // this.bscroll.refresh()
      });
    },
    async getccc() {
      let rs = await get("/homefis/getNews", {
        pageSize: 20,
        param_str: "",
        type: "",
      });
      // console.log(rs.data)
      this.$store.commit("setHomeList", rs.data.data);

      this.$nextTick(() => {
        this.initScroll();
        // this.bscroll.finishPullUp()
        this.bscroll.refresh();
      });
    },
    initScroll() {
       if (this.bscroll) {
        // 如果进来已经创建过bs对象，就不重新创建了直接用下面方法刷新bs就可以
        this.bscroll.refresh();
        this.bscroll.finishPullUp();
        return;
      }
      this.bscroll = new BScroll(document.getElementById("scroll"), {
        pullUpLoad: true,
        click: true,
      });
      this.bscroll.on("pullingUp", () => {
        console.log("up...");
      });
      // },3000)
    },
  },
};
</script>
<style lang="scss" scoped>
.one {
  overflow: hidden;
  .ss {
    z-index: 11;
    position: absolute;
    left: 18px;
    top: 57px;
    font-size: 16px;
    // margin-right:15px;
    overflow: hidden;
    color: #666;
  }
  .input {
    width: 80%;
    height: 32px;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    z-index: 10;
    padding-left: 25px;
    float: left;
    position: absolute;
    left: 5px;
    top: 50px;
    margin-left: 5px;
  }

  span {
    position: absolute;
    right: 10px;
    top: 55px;
    font-size: 24px;
    float: right;
    z-index: 10;
    color: white;
  }

  .nav {
    width: 100%;
    display: flex;
    flex: 1;
    overflow: hidden;
    flex-direction: column;
    margin-top: 10px;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      overflow: hidden;
      li {
        width: 50%;
        display: flex;
        background: white;
        .lq {
          width: 50%;
          display: flex;
          margin-top: 15px;
          margin-left: 15px;
          flex-direction: column;
          h2 {
            font-size: 15px;
            color: #333;
          }
          p {
            width: 192px;
            font-size: 12px;
            line-height: 25px;
            color: #666;
            // flex-direction: column;
          }
        }

        img {
          margin-left: 20px;
          margin-top: 10px;
          margin-right: 20px;
          width: 53px;
          height: 53px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .yh {
    width: 100%;
    display: flex;
    ul {
      width: 100%;
      display: flex;
      flex: 1;
      margin-left: 5px;
      li {
        width: 31%;
        flex: 1;
        margin-right: 5px;
        margin-top: 5px;
        flex-direction: column;
        h3 {
          margin-top: 10px;
          font-weight: 400;
          text-align: center;
          font-size: 14px;
          color: #333;
        }
        p {
          text-align: center;
          font-size: 12px;
          line-height: 30px;
          color: #666666;
        }
        img {
          width: 60px;
          height: 60px;
          margin: auto;
          margin-bottom: 20px;
        }
      }
    }
  }
  .rm {
    width: 100%;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-top: 5px;
    h3 {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 10px;
      font-size: 14px;
      color: black;
      margin-left: 15px;
    }
    ul {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      li {
        width: 31%;
        margin-right: 5px;
        margin-top: 5px;
        flex-direction: column;
        img {
          width: 112px;
          height: 67px;
          margin-left: 10px;
        }

        p {
          font-size: 12px;
          margin-left: 10px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-weight: 600;
        }
        b {
          font-size: 10px;
          font-weight: 300;
          margin-left: 20px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
  .nav1 {
    width: 100%;
    display: flex;
    margin-top: 10px;
    ul {
      width: 100%;
      display: flex;
      flex: 1;
      margin-top: 10px;
      margin-left: 20px;
      li {
        display: flex;
        flex: 1;
        font-size: 14px;
        padding-left: 10px;
        font-weight: 500;
        margin-top: 20px;
      }
     .active {
    position: relative;
    color: #ff4338;
    &::before {
      content: "";
      display: block;
      width: 20px;
      height: 1.5px;
      background: #ff4338;
      position: absolute;
      left: 35%;
      bottom: -7px;
      transform: translateX(-50%);
    }
  }
    }
  }
}
</style>