<template>
  <div class="footer">
    <ul class="nav">
      <li @click="goHome()">
        <span class="iconfont">&#xe615;</span>首页
      </li>
      <li @click="goDiscount()">
        <span class="iconfont">&#xe773;</span>优惠
      </li>
      <li @click="goDiscover()">
        <span class="iconfont">&#xe6d5;</span>发现
      </li>
      <li @click="goOutfit()">
        <span class="iconfont">&#xe608;</span>装备
      </li>
      <li @click="goMore()">
        <span class="iconfont">&#xe638;</span>更多
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isshow : 1
    }
  },
  methods: {
    goDiscount() {
      location.href = "/discount.html";
    },
    goHome(){
      location.href = '/home.html'
    },
    goDiscover(){
      location.href = '/discover.html'
    },
    goMore(){
      location.href = '/more.html'
    },
    goOutfit(){
      location.href = '/outfit.html'
    }
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background: #fff;
  z-index: 100;
}
.footer .nav .active{
  color:#FF4338;
}
.nav {
  display: flex;
  padding-top: 5px;
  box-shadow: 0 0 24px 3px rgba(0,0,0,.51);
  li {
    flex: 1;
    list-style: none;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: #666;
  }
  span {
    font-size: 22px;
  }
}
</style>