<template>
  <div>
    <div class="mainBox indexpage">
      <div class="banner_block">
        <div class="userface">
          <img src="https://w1.hoopchina.com.cn/games/images/man_pic.png" alt />
        </div>
        <div class="login">
          请称我低调
          <span class="level level1"></span>
          <p class="jb">
            金币&nbsp;&nbsp;0
            <a class="out" href="//passport.shihuo.cn/m/2/logout?appid=10017">退出 &gt;</a>
          </p>
        </div>
      </div>
      <div class="menu_list">
        <div class="tit">
          <span>我的识货</span>
        </div>
        <ul>
          <li>
            <a href="http://m.shihuo.cn/user/my_wallet">
              <img
                src="http://shihuo.hupucdn.com/ad/201901/0916/37a85ef303fd2b2319905b7ebf9263ad.png"
                alt
              />
              <p>我的礼品</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="menu_list" style="display: none;">
        <div class="tit">
          <span>我的海淘</span>
        </div>
        <ul></ul>
      </div>
      <div class="menu_list">
        <div class="tit">
          <span>识货必备</span>
        </div>
        <ul></ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mainBox.indexpage {
  padding-bottom: 45px;
}

.page-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.96);
  -webkit-box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.51);
  box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.51);
  text-align: center;
}

.page-menu a {
  display: inline-block;
  font-size: 10px;
  width: 20%;
  float: left;
  height: 100%;
  position: relative;
  padding-top: 25px;
  font-size: 12px;
}

[data-dpr="2"] .page-menu a {
  font-size: 24px;
}

[data-dpr="3"] .page-menu a {
  font-size: 36px;
}

.page-menu a:before {
  width: 100%;
  height: 28px;
  content: "";
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center center;
  -webkit-background-size: contain;
  background-size: contain;
  display: block;
  position: absolute;
  top: 0;
}

.page-menu a.on {
  color: #ff4338;
}

.page-menu a.new:after {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff4338;
  position: absolute;
  right: 25%;
  top: 7%;
  content: "";
}

.page-menu a:nth-child(1).on:before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/index-on.png?201903111600);
}

.page-menu a:nth-child(1):before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/index.png?201903111600);
}

.page-menu a:nth-child(2).on:before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/youhui-on.png?201903111600);
}

.page-menu a:nth-child(2):before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/youhui.png?201903111600);
}

.page-menu a:nth-child(3).on:before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/find-on.png?201903111600);
}

.page-menu a:nth-child(3):before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/find.png?201903111600);
}

.page-menu a:nth-child(4).on:before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei-on.png?201903111600);
}

.page-menu a:nth-child(4):before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei.png?201903111600);
}

.page-menu a:nth-child(5).on:before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/more-on.png?201903111600);
}

.page-menu a:nth-child(5):before {
  background-image: url(//sh1.hoopchina.com.cn/images/trademobile/common/more.png?201903111600);
}

@media screen and (min-width: 640px) {
  .flexibile-model .mainBox.indexpage {
    padding-bottom: 1.26667rem;
  }

  .page-menu {
    height: 1.2rem;
    -webkit-box-shadow: 0 0 0.32rem 0.02667rem rgba(0, 0, 0, 0.51);
    box-shadow: 0 0 0.32rem 0.02667rem rgba(0, 0, 0, 0.51);
  }

  .page-menu a {
    font-size: 0.26667rem;
    padding-top: 0.66667rem;
  }

  .page-menu a:before {
    height: 0.74667rem;
  }

  .page-menu a.new:after {
    width: 0.2rem;
    height: 0.2rem;
  }
}

.mainBox {
  padding: 0;
  width: 100%;
}

.banner_block {
  width: 100%;
  height: 4rem;
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png)
    top no-repeat;
  background-size: 100% auto;
  font-family: Helvetica, sans-serif;
}

.banner_block .userface {
  width: 1.33333rem;
  height: 1.33333rem;
  margin-top: 1.86667rem;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 0.66667rem;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  float: left;
}

.banner_block .userface img {
  width: 100%;
  height: 100%;
}

.banner_block .login {
  padding-left: 0.66667rem;
  width: 75%;
  float: left;
  margin-top: 2rem;
  font-size: 14px;
  color: #fff;
}

[data-dpr="2"] .banner_block .login {
  font-size: 28px;
}

[data-dpr="3"] .banner_block .login {
  font-size: 42px;
}

.banner_block .login img {
  vertical-align: middle;
}

.banner_block .login .level {
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_1_c8e5252.png)
    no-repeat;
  background-size: 100%;
  display: inline-block;
  width: 0.66667rem;
  height: 0.46667rem;
  vertical-align: middle;
}

.banner_block .login .level.level2 {
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_2_234b699.png)
    no-repeat;
  background-size: 100%;
}

.banner_block .login .level.level3 {
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_3_d18cfdf.png)
    no-repeat;
  background-size: 100%;
}

.banner_block .login .level.level4 {
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_4_33fa1b4.png)
    no-repeat;
  background-size: 100%;
}

.banner_block .login .level.level5 {
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_5_af90ad1.png)
    no-repeat;
  background-size: 100%;
}

.banner_block .login .level.level6 {
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_6_92ecbf7.png)
    no-repeat;
  background-size: 100%;
}

.banner_block .login .level.level7 {
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_7_aeca8b7.png)
    no-repeat;
  background-size: 100%;
}

.banner_block .login a {
  color: #fff;
  font-size: 15px;
  margin-right: 0.26667rem;
}

[data-dpr="2"] .banner_block .login a {
  font-size: 30px;
}

[data-dpr="3"] .banner_block .login a {
  font-size: 45px;
}

.banner_block .login .out {
  float: right;
  font-size: 12px;
  color: #999;
}

[data-dpr="2"] .banner_block .login .out {
  font-size: 24px;
}

[data-dpr="3"] .banner_block .login .out {
  font-size: 36px;
}

.banner_block .jb {
  margin-top: 0.13333rem;
  font-size: 12px;
}

[data-dpr="2"] .banner_block .jb {
  font-size: 24px;
}

[data-dpr="3"] .banner_block .jb {
  font-size: 36px;
}

.menu_list {
  padding: 0.2rem;
  background: #fff;
  margin-bottom: 0.26667rem;
}

.menu_list .tit {
  font-size: 14px;
  color: #333;
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png)
    left center repeat-x;
  background-size: 0.06667rem;
}

[data-dpr="2"] .menu_list .tit {
  font-size: 28px;
}

[data-dpr="3"] .menu_list .tit {
  font-size: 42px;
}

.menu_list .tit span {
  background: #fff;
  padding: 0 10px;
}

.menu_list ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
}

.menu_list ul li {
  width: 25%;
  text-align: center;
  color: #333;
  font-size: 12px;
  margin: 0.26667rem 0;
  position: relative;
}

[data-dpr="2"] .menu_list ul li {
  font-size: 24px;
}

[data-dpr="3"] .menu_list ul li {
  font-size: 36px;
}

.menu_list ul li span {
  position: absolute;
  top: 0;
  left: 60%;
  background: #ff4338;
  border-radius: 50%;
  color: #fff;
  padding: 0rem 0.1rem;
  font-size: 12px;
}

[data-dpr="2"] .menu_list ul li span {
  font-size: 24px;
}

[data-dpr="3"] .menu_list ul li span {
  font-size: 36px;
}

.menu_list ul li a {
  display: block;
}

.menu_list ul li a img {
  width: 1.2rem;
}
</style>