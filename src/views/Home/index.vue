<template>
  <div>
    <h2>页面没有完工，路径转化为frontend和android可以看到其他的未完工页面</h2>
    <h1>这个是招新群的二维码，欢迎加入</h1>
    <div class="Home">
      <img src="@/assets/招新群二维码二/安卓.jpg" alt="" srcset="" />
      <img src="@/assets/招新群二维码二/后台.jpg" alt="" srcset="" />
      <img src="@/assets/招新群二维码二/前端.jpg" alt="" srcset="" />
      <img src="@/assets/招新群二维码二/招新总群.jpg" alt="" srcset="" />
      <img src="@/assets/招新群二维码二/UI.jpg" alt="" srcset="" />
      <img src="@/assets/招新群二维码二/AI.jpg" alt="" srcset="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";

// 这个报错不用理会,这是因为ts的毛病,或者说ts即使会报错也会进行编译的,他更多的是在语法的时候就进行预报,报错了,提醒你而已,并不会为难你
onMounted(() => {
  document.onselectstart = new Function("event.returnValue=false");
  document.getElementsByTagName("img")[0].onmousedown = function (e) {
    e.preventDefault();
  };
});
</script>

<style lang='scss'>
h1 {
  font-size: 50px;
}
.Home {
  margin: 0 auto;
  display: flex;
  img {
    margin: 0 20px;
    width: 200px;
    height: 450px;
  }
}
</style>    