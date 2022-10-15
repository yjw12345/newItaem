<template>
  <div class="Activity">
    <swiper class="swiper" :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide>
        <img src="@/assets/活动照/1.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/活动照/2.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/活动照/3.jpg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/活动照/4.jpg" alt="" srcset="" />
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
  height: 500px;
}
.Activity {
  width: 100%;
}

</style>