<template>
    <div class="main" ref="run">
        <div class="main1" >
        <div class="main2" >
               <div class="mainbox">
            <div class="back" @click="back1">
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" alt="">
            </div>
            <span>Nike M2K Tekno </span>
            <div class="ico_list" @click.stop="ShowHidden = !ShowHidden">
                <ul class="menu" v-if="ShowHidden"  @click.stop="">
                    <li @click="go('/home/shouye/tuijian/quanbu')">首页</li>
                    <li @click="go('/home/gengduo')">我的</li>
                </ul>
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png">
            </div>
        </div>
     <div class="swiper-container">
        
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="http://shihuo.hupucdn.com/def/20200707/2f009a5c2bce6f8e141573141f8ad18f1594090017.jpg?imageView2/1/w/700/h/700/interlace/1" /></div>
            <!-- <div class="swiper-slide">Slide 2</div> -->
            <div class="swiper-slide"><img src="http://shihuo.hupucdn.com/trade/reposition/2018-11-12/90252da3279217218bb62e17205c6274.png?imageView2/1/w/700/h/700/interlace/1" /></div>
            <div class="swiper-slide"><img src="http://shihuo.hupucdn.com/def/20200409/27f9ab85ef878079049c1f9c61b6ff8c1586422640.jpg?imageView2/1/w/700/h/700/interlace/1" /></div>

        </div>
            <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
           
    </div>
    <div class="xq">
        <div class="xq1">
             <h2>Nike M2K Tekno </h2>
        <p>在2018复古潮流元素依旧大热的趋势下，“老爹鞋”绝对算得上是时尚潮流圈穿搭首款鞋履之一...</p>
        </div>
       
        <div class="t2">
            <a href="javascript:void(0);" class="more show_app_layer">
                详情
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/dt_5edb752.png">
            </a>
        </div>
    </div>
    <div class="kong"></div>
    <div class="koubei-pingce">
    <div class="kp-list"><img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/kb-icon_e6558f2.png">
    全网口碑
    <span>(4769)</span>
    </div>
    <a href="//m.shihuo.cn/sports/evaluation?id=99459" class="kp-list"><span><i></i><img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/pc-icon_54fdee1.png"></span>识货测评<span>(47)</span></a>
    </div>
    <div class="kong"></div>
    <div class="tag-chooes-area">
    <div class="tag-list" id="down_size">
        <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/s-icon-1_f16b4e3.png">
        <span class="font">
        <span class="s-1">筛选尺码</span><br>
        <span class="s-2">选择您的尺码</span>
        </span>
        </div>
        <div class="tag-list" id="down_dy">
        <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/s-icon-2_43466af.png">
        <span class="font">
        <span class="s-1">点击订阅</span><br>
        <span class="s-2">获取最低价</span>
        </span>
        </div> 
    </div>
    <a href="http://m.shihuo.cn/app/html/template/baozhang/page/index.html" class="how-zp">
        <img class="i1" src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/how-icon_844c490.png">
        识货如何做到正品保障？
        <p>
            查看详情
            <img class="i2" src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/jt_1aeb7dc.png">
        </p>
        </a>
        <div class="kb">
            <h2>全网口碑  (13372)</h2>
        </div>
        <div class="nav3">
            <ul>
                <router-link tag="li" class="red" to="">全部</router-link>
                <router-link tag="li" active-class="active" to="">识货</router-link>
                <router-link tag="li" active-class="active" to="">有图</router-link>
                <router-link tag="li" active-class="active" to="">鞋码</router-link>
                <router-link tag="li" active-class="active" class="cd" to="">舒适程度</router-link>
            </ul>
        </div>
        <div v-for="(item) in this.$store.state.itemList.xiangqing" :key="item.item_id">
<div class="head">
            <div class="img">
                <img src="http://sh1.hoopchina.com.cn/images/trade/avatar_default.png">
            </div>
            <div class="name-time">
                    <p>{{item.author_name}}</p>
                    <div class="time">{{item.date}}</div>
            </div>
            </div>
            <div class="p">
                <div class="p-1">
                    {{item.intro}}
                </div>
                <div class="tp">
                    <img :src="item.img_attr[0]" alt="">
                    <img :src="item.img_attr[1]" alt="">
                    <img :src="item.img_attr[2]" alt="">
                </div>
            </div>
        </div>
        </div>
        <adSlider></adSlider>
        </div>
        
            
    </div>
    
</template>
<script>
import adSlider from '../../components/adSlider'
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
    props:["item"],
     components:{
        adSlider
    },
    
    data(){
        return{
            ShowHidden: false,
            set:[]
        }
    },
    created(){
        this.initScroll()
    },
    methods:{
        back1(){
            this.$router.go(-1)
        },
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
 
 initScroll() {
       if (this.bscroll) {
        // 如果进来已经创建过bs对象，就不重新创建了直接用下面方法刷新bs就可以
        this.bscroll.refresh();
        this.bscroll.finishPullUp();
        return;
      }
      this.bscroll = new BScroll(this.$refs.run, {
        pullUpLoad: true,
        click: true,
      });
      this.bscroll.on("pullingUp", () => {
        console.log("up...");
      });
      // },3000)
    },
    },
    mounted() {
var swiper = new Swiper('.swiper-container', {
pagination: '.swiper-pagination', //分页器
// nextButton: '.swiper-button-next', //前进按钮
// prevButton: '.swiper-button-prev', //后退按钮
loop: true, //循环
paginationClickable:true, //分页器点击
spaceBetween: 30, // swiper-slide 间的距离为30
autoplay: 1000, //时长
autoplayDisableOnInteraction: false, //点击不会取消自动
});
document.addEventListener('click', this.HiddenClick)
}
}
</script>
<style lang="scss" scoped>
    .main{
        width: 100%;
        height: 667px;
       display: flex;
       flex: 1;
        flex-direction: column;
        background: white;
        overflow: hidden;
        .main1{
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        .main2{
            height: 100%;
            overflow: auto;
        }
        .swiper-wrapper{
                    width: 100%;
                    height:335px;
                    z-index: 1;
                    
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

        .mainbox{
            width: 100%;
            display: flex;
            flex: 1;
            justify-content: space-between;
            align-items: center;
            background: #f7f7f7;

            .back{
                width: 39px;
                height: 39px;
                img{
                      width: 39px;
                        height: 39px;
                }
            }
            span{
                color: #333333;
                font-size: 19px;
                font-weight: 900;
                
            }
            .ico_list{
                width: 39px;
                height: 39px;
                 .menu{
                        width: 100px;
                        z-index: 2;
                        background:#fff;
                        position: absolute;
                        top: 50px;
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
                    width: 39px;
                    height: 39px;
                }
            }
        }
        .xq{
            width: 100%;
            display: flex;
            flex: 1;
            .xq1{
               h2{
                font-size: 16px;
                color: #333333;
                font-weight: 500;
                margin-left: 10px;
            }
            p{  width: 285px;
                font-size: 13px;
                color: #666666;
                margin-left: 10px;
                line-height: 20px;
            } 
            }
            
            .t2{
                width:100%;
                margin-left: 40px;
                margin-top: 25px;
                a{
                    font-size: 12px;
                color: #278ccf;
                img{
                    width: 5px;
                    height: 8px;
                }
                }
                
            }
        }
        .kong{
            height: 10px;
            background: #f7f7f7;
        }
        .koubei-pingce{
            width: 100%;
            display: flex;
            flex: 1;
            .kp-list{
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                font-size: 15px;
                margin-top: 15px;
                margin-bottom: 15px;
                
                img{
                    width: 16px;
                    height: 16px;
                    padding-right: 4px;
                }
                span{
                    padding-left: 4px;

                }
            }
            a{  
                 display: flex;
                flex: 1;
                justify-content: center;
                 font-size: 15px;
                color: #444444;
                img{
                    margin-top: 5px;
                }
            }
        }
        .tag-chooes-area{
            display: flex;
            flex: 1;
            overflow: hidden;
            .tag-list{
                width: 100%;
                display: flex;
                flex: 1;
                 justify-content: center;
                align-items: center;
                margin-top: 20px;
                img{
                    width: 28px;
                    height: 27px;
                    margin-right: 10px;
                }
                .s-1{
                    color: black;
                }
                span{
                    font-size: 13px;
                    color: #a18c8c;
                }
            }
        }
        .how-zp{
            display: flex;
            flex: 1;
            font-size: 15px;
            color: #444444;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 15px;
            justify-content: space-around;
            background: #f7f7f7;
            overflow: hidden;
            line-height: 30px;
            .i1{
                width: 21px;
                height: 21px;
                margin-left: 20px;
            }
            p{
                width: 100%;
                display: flex;
                flex: 1;
                margin-top: 15px;
                margin-bottom: 15px;
                justify-content: center;
                margin-left: 50px;
                overflow: hidden;
                .i2{
                    width: 8px;
                    height: 13px;
                    margin-top: 8px;
                    margin-left: 4px;
                }
            }
        }
        .kb{
            width: 100%;
            h2{
                font-size: 19px;
                color: #444444;
                padding-left: 10px;
                line-height: 19px;
            }
        }
        .nav3{
            width: 100%;
            ul{
                display: flex;
                // flex: 1;
                margin-top: 20px;
                li{
                    width:39px;
                    height: 25px;
                    display: flex;
                    margin-left: 10px;
                    background: #f5f5f5;
                    font-size: 12px;
                    justify-content: center;
                    align-items: center;
                    
                }
                .red{
                    background: #ff4338;
                    color: white;
                }
                .cd{
                    width: 63px;
                    height: 25px;
                }
            }
        }
        .head{
            width: 100%;
            display: flex;
            margin-top: 30px;
            .img{
                width: 34px;
                height: 34px;
                margin-left: 15px;

                img{
                    width: 34px;
                     height: 34px;
                }
            }
            .name-time{
                width: 100%;
                margin-left: 15px;
                p{
                    width: 100%;
                    font-size: 19px;
                    color: #444444;
                }
                .time{
                    width: 100%;
                    font-size: 18px;
                    color: #999999;
                }
            }
        }
        .p{
           .p-1{
               font-size: 19px;
               color: #444444;
           } 
           img{
               width: 112px;
               height: 150px;
               margin-left: 10px;
           }
        }
    }
</style>