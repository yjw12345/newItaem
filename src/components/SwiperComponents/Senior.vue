<template>
  <div class="Senior">
    <div class="title">
      招新方向队员的微信
    </div>
    <swiper class="swiper" :modules="modules" @slideChange="onSlideChange" :pagination="{ clickable: true }">
      <swiper-slide>
        <img src="@/assets/师兄师姐的二维码/安卓.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/师兄师姐的二维码/后台.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/师兄师姐的二维码/前端.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/师兄师姐的二维码/AI.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/师兄师姐的二维码/UI.jpg" alt="" srcset="" />
      </swiper-slide>
    </swiper>
    <p>{{showName}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperEvents } from "swiper/types";

export default defineComponent({
  name: "swiper-example-pagination",
  title: "Pagination",
  url: import.meta.url,
  data() {
    return {
      names:["安卓王曦悦师姐","后台唐奕泽师兄","前端洪子琪师姐","AI吴远健师兄","UI郭晋师兄"],
      showName:"安卓王曦悦师姐"
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  methods:{
    // 找不到对应的属性
    onSlideChange(event:any){
     this.showName=this.names[event.activeIndex]
    }
  }
});
</script>

<style lang="scss" scoped >
img {
  width: 100%;
  height: 100%;
}
.Senior {
  .title{
    font-weight: 700;
    font-size: 20px;
    padding: 10px 0;
    text-indent: 0.8em;
  }
}
.swiper-pagination-bullet{
  background-color: white!important;
}
p{
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}
</style>