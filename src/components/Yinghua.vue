<template>
  <div id="jsi-cherry-container"></div>
</template>

<script setup >
import { onMounted } from "@vue/runtime-core";
// 樱花这里必须请求相对路径来解决，不然会在打包的时候出现问题
const path = "../assets/eluvletter/js/";
const URLPath = [
  {
    name: "jquery-1.11.2.min.js",
    type: "js",
  },
  {
    name: "sakura.js",
    type: "js",
  },
  {
    name: "modernizr.js",
    type: "js",
  },
  {
    name: "typed.js",
    type: "js",
  },
  {
    name: "letter.js",
    type: "js",
  },
];
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
  return `./eluvletter/js/${name}`
}
URLPath.forEach((el) => {
  el.path = getUrl(el.name);
});
// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
  // 立即执行函数
  (async function InitalJs() {
    for (let i = 0; i < URLPath.length; i++) {
      const el = URLPath[i];
      await loadExternalResource(el.path, el.type);
    }
  })();
}
</script>

<style lang='scss' scoped>
@import url(../assets/stylesheets/style.css);
</style>