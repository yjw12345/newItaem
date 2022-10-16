<template>
  <div class="qrCode">
    <div class="title">
      各方向招新群
    </div>
    <div class="wrapper">
    <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide>
        <img src="@/assets/招新群二维码二/安卓.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/招新群二维码二/后台.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/招新群二维码二/前端.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/招新群二维码二/招新总群.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/招新群二维码二/AI.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/招新群二维码二/UI.jpg" alt="" srcset="" />
      </swiper-slide>
    </swiper></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default defineComponent({
  name: "swiper-example-pagination",
  title: "Pagination",
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
});
</script>

<style lang="scss">
img {
  width: 100%;
  height: 100%;
}
.qrCode {
  width: 250px;
  height: 350px;
  .title{
    font-weight: 700;
    font-size: 20px;
    padding: 10px 0;
  }
  .wrapper{
    height: 300px;
    overflow: hidden;
      .swiper{
    transform: translateY(-100px);
  }
  }

}
.swiper-pagination-bullet{
  background-color: white!important;
}
</style>