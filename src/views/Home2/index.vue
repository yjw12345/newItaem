<template>
  <div class="qrCode">
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

<style lang="scss" >
img {
  width: 100%;
  height: 100%;
}
.qrCode {
  width: 250px;
  height: 500px;
}
.swiper-pagination-bullet{
  background-color: white!important;
}
</style>