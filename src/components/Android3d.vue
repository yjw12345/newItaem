<template>
  <div class="container">
    <canvas width="100%" height="100%" class="illo"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";

const path = "../assets/安卓/";
// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;

    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = url;
    } else if (type === "js") {
      tag = document.createElement("script");
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}
function getUrl(name) {
  return `./androidJS/${name}`;
}
onMounted(() => {
  if (screen.width >= 768) {
    // 立即执行函数
    (async function InitalJs() {
      await loadExternalResource(getUrl("zdog.dist.js"), "js");
      await loadExternalResource(getUrl("index.js"), "js");
    })();
  }
});
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #313;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  text-align: center;
  cursor: move;
  height: 100vh;
}

canvas {
  display: block;
  margin: 0px auto 20px;
}

a {
  color: #936;
}

a:hover {
  color: #d65;
}
</style>