<template>
  <div>

    <div class="Home">
        <div>
          <router-link to="enter">开场动画</router-link>
          <router-link to="TimeLine">招新时间线</router-link>
          <router-link to="BackEnd">后台</router-link>
          <router-link to="Frontend">前端</router-link>
          <router-link to="Android">安卓</router-link>
          <router-link to="AI">AI</router-link>
          <router-link to="Footer">页脚</router-link>
        </div>
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

<style lang='scss' scoped>
h1 {
  font-size: 50px;
}
.Home {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a{
    display: block;
    width: 200px;
    height: 50px;
    font-size: 40px;
    // color: red
  }
  img {
    margin: 0 20px;
    width: 200px;
    height: 450px;
  }
}
</style>    