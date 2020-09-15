<template>
    <div>
        <div class="nav2">
            <ul>
                 <router-link tag="li" active-class="active" to="/home/shouye/tuijian/quanbu">全部</router-link>
                <router-link tag="li" active-class="active" to="/home/shouye/tuijian/dptj">单品推荐</router-link>
                <router-link tag="li" active-class="active" to="/home/shouye/tuijian/ycjx">原创精选</router-link>
                <router-link tag="li" active-class="active" to="/home/shouye/tuijian/yhsw">用户晒物</router-link>
            </ul>
        </div>
         <quanbu></quanbu>
    </div>
</template>
<script>
import quanbu from './quanbu/quanbu'
export default {
    components:{
        quanbu,
    }
}
</script>
<style lang="scss" scoped>
    .nav2{
        width: 100%;
        display: flex;
        margin-top: 15px;
        ul{
            width: 100%;
            display: flex;
            flex: 1;
            li{
                width: 80px;
                height: 26px;
               display: flex;
                flex: 1; 
                justify-content: center;
                align-items: center;
                margin-right: 15px;
                font-size: 12px;
                margin-left: 10px;
                background: #fff;
                
            }
            .active{
                color: white;
                background: #FF4338;
            }
        }
    }
</style>