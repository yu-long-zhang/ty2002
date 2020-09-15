<template>
  <div class="app">
    <a
      href="https://android.myapp.com/myapp/detail.htm?apkName=com.hupu.shihuo&ADTAG=mobile"
      class="swiper"
    >
      <transition-group name="swi-slide">
        <div v-for="(item,i) in swiper" :key="i" class="swiper-box" v-show="i === index">
          <div class="swi-img">
            <img :src="item.img" alt />
          </div>
          <div class="swi-good">
            <p class="swi-p1">{{item.p}}</p>
            <p class="swi-p2">
              {{item.price}}
              <span class="swi-dis">{{item.dis}}</span>
              <span class="swi-master">{{item.master}}</span>
            </p>
          </div>
        </div>
      </transition-group>
    </a>
    <div class="open">
      <a href>打开</a>
    </div>
  </div>
</template>

<script>
import { get } from "@/api/http";
export default {
  data() {
    return {
      swiper: [],
      index: 0,
      timer: null,
    };
  },
  created() {
    this.getSwiper();
    // this.getFamilyBase_info();
    clearInterval(this.timer);
    this.timer = null;
    this.isShow();
  },
  computeds: {
    isIndex() {
      if (this.index >= 3) {
        this.index = 0;
      }
    },
  },
  methods: {
    async getSwiper() {
      let rs = await get("/swiper");
      this.swiper.push(...rs.data);
    },
    isShow() {
      this.timer = setInterval(() => {
        this.index++;
        if (this.index >= 2) {
          this.index = 0;
        }
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 45px;
  background: #000;
  position: relative;
  .swiper {
    display: block;
    width: 375px;
    height: 45px;
    overflow: hidden;
    .swiper-box {
      width: 100%;
      height: 100%;
      display: flex;
      .swi-img {
        width: 37px;
        height: 45px;
        margin-top: 4px;
        margin-left: 10px;
        img {
          width: 100%;
          border-radius: 3px;
        }
      }
      .swi-good {
        width: 328px;
        color: #fff;
        font-size: 12px;
        margin: 6px 80px 0 10px;
        height: 37px;
        .swi-p1 {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: hidden;
          width: 100%;
        }
        .swi-p2 {
          color: #ff4338;
          .swi-dis {
            display: inline-block;
            width: 35px;
            height: 15px;
            background: #ff4338;
            color: #fff;
            line-height: 15px;
            text-align: center;
            border-radius: 4px;
          }
        }
      }
    }
  }
  .open {
    width: 50px;
    height: 32px;
    background: #ff4338;
    border-radius: 3px;
    position: absolute;
    right: 16px;
    top: 7px;
    z-index: 100;
    text-align: center;
    a {
      color: #fff;
      font-size: 12px;
      line-height: 32px;
    }
  }
}
.swi-slide-enter {
  transform: translateX(100%);
}
.swi-slide-enter-active {
  transition: all 0.3s linear;
}
.swi-slide-enter-to {
  transform: 0;
}
</style>