<template>
  <div class="background">
    <div class="centerSvg">
      <!-- 可以更加优雅，用数组，但是没有必要 -->
      <img class="rainbow" src="@/assets/uiSvg/资源 241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源 241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源 241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源 241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源 241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源 241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源 241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源 241.svg" alt="" srcset="" />
    </div>
    <div class="ui">
      <div class="container first">
        <div class="explain">
          <div class="title">什么是<span>UI</span>设计</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.background {
  background: rgb(212, 212, 212);
  position: relative;
  overflow: hidden;
  .centerSvg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .rainbow {
      display: block;
      width: 100px;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
  }
  .first {
    height: 500px;
    .explain {
      width: 500px;
      background: url("@/assets/uiSvg/资源 232.svg") no-repeat;
      padding: 60px 30px 0 30px;
      .title {
        font-size: 27px;
        color: white;
      }
    }
  }
  .ui {
    width: 100%;
    height: 100vh;
    background: rgb(235, 235, 235);
    margin: 30px 0 0 20px;
    padding-top: 500px;
  }
}
</style>