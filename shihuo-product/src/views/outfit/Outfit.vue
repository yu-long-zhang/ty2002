<template>

  <div class="out">
    <div class="fit" ref="gd">
      <div class="out1">
           <adSlider></adSlider>
    <div class="input">
        <div class="btn">
        <input type="text" class="input" name="keywords" value="" placeholder="安踏 KT篮球系列" id="searchVal">
        <input type="reset" class="sh_searchClear" title="重置搜索词" style="display: none;">
        </div>
         <div class="ico_list" @click.stop="ShowHidden = !ShowHidden">
                <ul class="menu" v-if="ShowHidden"  @click.stop="">
                    <li @click="go('/home/shouye/tuijian/quanbu')">首页</li>
                    <li @click="go('/home/gengduo')">我的</li>
                </ul>
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png">
    </div>
    </div>
    <div class="nav">
        <ul>
            <li>
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png" alt="" class="img2">
                <p>热销排行</p>
            </li>
            <li>
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png" alt="" class="img1">
                <p>好价精选</p>
            </li>
            <li>
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png" alt="" class="img1">
                <p>当季新款</p>
            </li>
        </ul>
    </div>
    <div class="list" v-for="item in list" :key="item.id">
        <img :src="item.img" alt="">
       <div class="tag">
           <div class="tag-list">
            <a href="http://m.shihuo.cn/sports/list?range=篮球鞋&amp;type=1">{{item.a}}</a>
            <a href="http://m.shihuo.cn/sports/list?range=紧身衣,篮球服,T恤,运动内衣,运动短裤,运动长裤,紧身裤&amp;show_type=grid&amp;type=1&amp;sort=new">{{item.a1}}</a>
            <a href="http://m.shihuo.cn/sports/list?range=运动护具,护膝,护踝,护腕,护肘,运动袜子&amp;show_type=grid&amp;type=1&amp;sort=new">{{item.a2}}</a>
            <a href="http://m.shihuo.cn/sports/list?range=篮球&amp;show_type=grid&amp;type=1&amp;sort=new">篮球<img :src="item.img1" class="tp"></a>
            </div>
            <div class="tag-list">
            <a href="http://m.shihuo.cn/sports/list?range=篮球鞋,紧身衣,篮球服,T恤,运动内衣,运动短裤,运动短裙,运动长裤,紧身裤,运动护具,护膝,护踝,护腕,护肘,运动袜子,篮球,背包&amp;brand=Nike/耐克&amp;type=1">{{item.a4}}</a>
            <a href="http://m.shihuo.cn/sports/list?range=篮球鞋,紧身衣,篮球服,T恤,运动内衣,运动短裤,运动短裙,运动长裤,紧身裤,运动护具,护膝,护踝,护腕,护肘,运动袜子,篮球,背包&amp;brand=adidas/阿迪达斯&amp;type=1">{{item.a5}}</a>
            <a href="http://m.shihuo.cn/sports/list?range=篮球鞋,紧身衣,篮球服,T恤,运动内衣,运动短裤,运动短裙,运动长裤,紧身裤,运动护具,护膝,护踝,护腕,护肘,运动袜子,篮球,背包&amp;brand=Jordan Brand/乔丹&amp;type=1">{{item.a6}}</a>
            <a href="http://m.shihuo.cn/sports/list?range=篮球鞋,紧身衣,篮球服,T恤,运动内衣,运动短裤,运动短裙,运动长裤,紧身裤,运动护具,护膝,护踝,护腕,护肘,运动袜子,篮球,背包&amp;type=1">{{item.a7}}<img src="item.img2"></a>
            </div>
       </div>
    </div>
    <div class=" tj">
        <h2>最新推荐</h2>
         <ul>
        <li v-for="(item,i) in this.$store.state.outlist.Outfit" :key="i">
          <div class="image">
            <!-- <img :src="item.data.img" alt /> -->
            <img :src="item.data.img" alt="">
          </div>
          <div class="run">
            <!-- <h2>{{item.data.title}}</h2> -->
            <h2>{{item.data.title}}</h2>
            <p>
              <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" alt />
              <!-- {{item.data.intro}} -->
              {{item.data.intro}}
              <img
                src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png"
                alt
              />
            </p>
            <div class="from">
              <div class="price">
                 {{item.data.merchant}} &nbsp;
                 <span>¥{{item.data.price}}</span> 
                 <div class="t2"><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png"> 50000000</div>
                <!-- {{item.data.merchant}}&nbsp; -->
                <!-- <span>￥{{item.data.price}}</span> -->
              </div>
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
import footerI from "../../components/footerI";
import { post } from "@/api/http";
import { get } from "@/api/http";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
    components:{
        footerI,
        adSlider
    },
    data(){
        return{
             ShowHidden: false,
             list:[],

        }
    },
    created(){
        this.getfff(),
        this.geteee()

        
    },
    methods:{
         HiddenClick () {
    this.ShowHidden = false
    },
    // 点击列表内，选中内容，并隐藏
    ConBtn (val) {
    alert('内容' + val)
    this.ShowHidden = false
        this.$nextTick(() => {
        this.initScroll();
        // this.bscroll.finishPullUp()
        // this.bscroll.refresh()
      })
    },

    async getfff() {
      let rs = await get("/list");
      this.list = rs.data;
    },
     async geteee() {
      let rs = await post("/zhuangbei/getHomeNews", {
        pageSize:1,
        
      });
      
      console.log(rs.data); 
      this.$store.commit('fitlist',rs.data.data)
      console.log(this.$store.state.outlist)
      this.$nextTick(() => {
        this.initScroll();
      });

    //    this.$store.commit("list1", rs.data.data);
       },
        
        initScroll() {
      if (this.bscroll) {
        // 如果进来已经创建过bs对象，就不重新创建了直接用下面方法刷新bs就可以
        this.bscroll.refresh();
        this.bscroll.finishPullUp();
        return;
      }
      this.bscroll = new BScroll(this.$refs.gd, {
        pullUpLoad: true,
        click: true,
      });
        }
    }
}
</script>
<style lang="scss" scoped>

.out{
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    // overflow: hidden;
    .fit{
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow: hidden;
    }
    .input{
        display: flex;
        flex: 1;
        background: white;
        .btn{
            width: 100%;
            display: flex;
            flex: 1;
            input{
                width: 100%;
                height: 28px;
                color: #666;
                background: #EAEAEA url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/search_0b8e800.png) 5px center no-repeat;
                border: none;
                border-radius: 5px;
                font-size: 12px;
                margin-left: 10px;
                margin-top: 5px;
                padding-left: 25px;
                background-size: 15px; 

            }
            .sh_searchClear{
                background: #EAEAEA url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/search_0b8e800.png) 5px center no-repeat;
                   background-size: 5px; 
            }
        }
          .ico_list{
                width: 39px;
                height: 39px;
                 .menu{
                        width: 100px;
                        z-index: 2;
                        background:#fff;
                        position: absolute;
                        top: 80px;
                        left:280px;
                        box-shadow: 0 3px 9px 0  rgba(0,0,0,.1);
                        li{
                            list-style: none;
                            color: black;
                            display: flex;
                            flex: 1;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            margin-top: 5px;
                        }
                    }
                img{
                    width: 37px;
                    height: 37px;
                }
            }
    }
    .nav{
        width: 100%;
        display: flex;
        flex: 1;
        ul{
            width: 100%;
            display: flex;
            flex: 1;
            li{
                width: 100%;
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 15px;
             margin-bottom: 15px;

                .img2{
                    width: 43px;
                    height: 22px;
                    margin-left: 20px;
                    margin-bottom: 10px;
                }
                .img1{
                 width:22px;
                  height:22px;
                    margin-bottom: 10px;

                }
                p{
                    font-size: 14px;
                    color: #333333;
                }
            }
        }
    }
    .list{
        width: 100%;
        img{
            width: 375px;
            height: 200px;
        }
        .tag{
            background: white;
            .tag-list{
                width: 100%;
                display: flex;
                flex: 1;
                img{
                    width: 8px;
                    height: 8px;
                    margin-left: 5px;
                }
                a{
                   width: 100%;
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center; 
                font-size: 14px;
                color: #444444;
                padding-top: 15px;
                padding-bottom: 15px;
                border-top: 1px solid #f7f7f7;
                border-left: 1px solid #f7f7f7;
                }
            }
        }
       
    }
    .tj{
        overflow: hidden;
        h2{
            width: 100%;
            font-size: 16px;
            color: #444444;
            font-weight: 500;
            margin-left: 10px;
            // margin-top: 20px;
        }
         ul {
    width: 100%;
    display: flex;
    flex: 1;
    overflow: hidden;
    flex-direction: column;

    li {
      width: 100%;
      display: flex;
      overflow: hidden;
      margin-top: 10px;
      margin-left: 15px;
      border-top: 1px solid rgb(233, 224, 224);
      flex: 1;

      .image {
        width: 102px;
        height: 102px;
        img {
          width: 102px;
          height: 102px;
          margin-top: 15px;
        }
      }
      .run {
        width: 100%;
        display: flex;
        flex: 1;
        margin-left: 15px;
        flex-direction: column;
        h2 {
          font-size: 14px;
          font-weight: 400;
          margin-right: 15px;
          margin-top: 15px;
        }
        p {
          width: 200px;
          font-size: 13px;
          margin-top: 18px;
          margin-bottom: 15px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-top: 25px;
          img {
            width: 9px;
            height: 9px;
          }
        }
      }
      .from {
        width: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        .price {
          width: 100%;
          display: flex;
          flex: 1;
          color: #999999;
          font-size: 14px;
          margin-top: 15px;
          overflow: hidden;
          .t2{
              margin-left: 30px;
              margin-top: 5px;
              img{
                  width: 13px;
                  height: 10px;
                  margin-left: 10px;
                  
              }
          }
        }
        span {
          color: red;
          font-size: 14px;
          margin-top: 3px;
          margin-left: 5px;
        }
        
      }
    }
        }
    }
}

</style>