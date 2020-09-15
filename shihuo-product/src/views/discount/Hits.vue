<template>
    <div class="hitsBox">
      <ul class="hits">
        <li v-for="(item,i) in this.$store.state.discountsList" :key="i" @click="goDetail(item.id)">
          <div class="img">
            <img :src="item.img" alt />
          </div>
          <div class="right">
            <h2>{{item.title}}</h2>
            <p>{{item.subtitle}}</p>
            <div class="from">
              <p>{{item.business}}</p>
              <p>{{item.date}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  methods:{
    goDetail(id){
      location.href = `http://m.shihuo.cn/youhui/${id}.html`
    }
  }
};
</script>
<style lang="scss" scoped>

.hitsBox {
  display: flex;
  justify-content: center;
    background: #FFF;
  .hits {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 15px;
      .img {
        width: 108px;
        height: 108px;
        margin-right: 10px;
        img {
          width: 100%;
        }
      }
      .right {
        width: 238px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          font-size: 15px;
          color: #333;
          word-break: break-all;
          font-weight: 400;
        }
        > p {
          font-size: 15px;
          color: #ff4338;
        }
        .from {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
}
</style>
