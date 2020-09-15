<template>

    <div class="swiper-container" :style="{height:this.$store.state.swiper.height}">
        
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img :src="this.$store.state.swiper.img.a" /></div>
            <!-- <div class="swiper-slide">Slide 2</div> -->
            <div class="swiper-slide"><img :src="this.$store.state.swiper.img.b" /></div>
            <div class="swiper-slide"><img :src="this.$store.state.swiper.img.c" /></div>
            <div class="swiper-slide"><img :src="this.$store.state.swiper.img.d" /></div>
            <div class="swiper-slide"><img :src="this.$store.state.swiper.img.e" /></div>
        </div>
            <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
           
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{

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
}
}
</script>
<style lang="scss" scoped>
.swiper-wrapper{
    width: 100%;
    z-index: 1;
    height: 194px;
    img{
       width: 100%;
        height: 100%;
    }
}

</style>