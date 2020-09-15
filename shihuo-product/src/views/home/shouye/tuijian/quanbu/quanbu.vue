<template>
  <div>
    <div class="list">
      <ul>
        <li
          v-for="item in this.$store.state.homeList.tuijian"
          :key="item.data.item_id"
          @click="getddd(item.data.href)"
        >
          <div class="image">
            <img :src="item.data.img" alt />
          </div>
          <div class="run">
            <h2>{{item.data.title}}</h2>
            <p>
              <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" alt />
              {{item.data.intro}}
              <img
                src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png"
                alt
              />
            </p>
            <div class="from">
              <div class="price">
                {{item.data.merchant}}&nbsp;
                <span>￥{{item.data.price}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { get } from "@/api/http";
export default {
  created() {
    
  },
  methods: {
    async getddd(id, tag_id) {
      
      let index = id.indexOf('.',35);
      let href = id.slice(35,index);
      this.$store.commit("listNull");
      let rs = await get("/sports", {
        id: href,
        tag_id: 0,
        page: 1,
        page_size: 5,
        sort: 'hot'
      });
      this.$store.commit("List", rs.data.data.comments);
      console.log(this.$store.state.itemList.xiangqing);
      this.$router.push("/xiangqing");
       this.$nextTick(() => {
        this.initScroll();
        // this.bscroll.finishPullUp()
        // this.bscroll.refresh()
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  display: flex;
  flex: 1;

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
      margin-top: 30px;
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
        }
        span {
          color: red;
          font-size: 14px;
        }
      }
    }
  }
}
</style>