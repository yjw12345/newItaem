<template>
  <div class="Senior">
    <div class="title">
      师兄师姐微信
    </div>
    <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }">
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
</style>