<template>
  <div class="universeFather">
    <div id="universe"></div>
  </div>
</template>

<script setup >
// 这一块是直接抄的，所有会不是很优雅
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

var layerCount = 5;
var starCount = 400;
var maxTime = 30;
const univrse = ref(null);
// var universe = document.getElementById("universe");
var w = window;
var d = document;
var e = d.documentElement;
// 获取高度和宽度
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = w.innerHeight || e.clientHeight || g.clientHeight;
onMounted(() => {
  console.log(universe);
  for (var i = 0; i < starCount; ++i) {
    var ypos = Math.round(Math.random() * height);
    var star = document.createElement("div");
    var speed = 1000 * (Math.random() * maxTime + 1);
    star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
    star.style.backgroundColor = "white";

    universe.appendChild(star);
    star.animate(
      [
        {
          transform: "translate3d(" + width + "px, " + ypos + "px, 0)",
        },
        {
          transform:
            "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)",
        },
      ],
      {
        delay: Math.random() * -speed,
        duration: speed,
        iterations: 1000,
      }
    );
  }
});
</script>

<style lang='scss' >
.universeFather {
  position: absolute;
  z-index: -1 ;
  background: #ffa17f;
  background: -webkit-linear-gradient(to right, #00223e, #ffa17f);
  background: linear-gradient(to right, #00223e, #ffa17f);
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.star0 {
  height: 1px;
  width: 1px;
  opacity: 1;
  position: absolute;
}

.star1 {
  height: 2px;
  width: 2px;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
}

.star2 {
  height: 3px;
  width: 3px;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
}

.star3 {
  height: 4px;
  width: 4px;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
}
</style>