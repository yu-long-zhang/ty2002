<template>
  <div class="wraper" style="height:100%;overflow:hidden;">
    <div class="home" id="scroll" style="height:100%;overflow:hidden;">
      <div>
        <adSlider></adSlider>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footerI></footerI>
  </div>
</template>
<script>
import adSlider from "../../components/adSlider";
import shouye from "../home/shouye/shouye";
import footerI from "../../components/footerI";

export default {
  components: {
    adSlider,
    footerI,
  },
  methods: {
    goDiscount() {
      location.href = "/discount.html";
    },
  },
};
</script>
<style lang="scss" scoped>
.wraper {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.home {
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  .content {
    flex: 1;
  }
}
.footer {
  ul {
    display: flex;
    padding-top: 5px;
    li {
      flex: 1;
      list-style: none;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      color: #444444;
    }
    span {
      font-size: 24px;
    }
  }
}
</style>