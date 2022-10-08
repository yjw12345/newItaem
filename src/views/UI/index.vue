<template>
  <div class="background">
    <img class="nagivationUI" src="@/assets/uiSvg/矩形7.svg" alt="" srcset="" />
    <img class="designIn" src="@/assets/uiSvg/资源243.svg" alt="" srcset="" />
    <img class="design" src="@/assets/uiSvg/资源243.svg" alt="" srcset="" />
    <div class="centerSvg">
      <!-- 可以更加优雅，用数组，但是没有必要 -->
      <img class="rainbow" src="@/assets/uiSvg/资源241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源241.svg" alt="" srcset="" />
      <img class="rainbow" src="@/assets/uiSvg/资源241.svg" alt="" srcset="" />
    </div>
    <div class="ui">
      <div class="container first">
        <div class="explain">
          <img id="frog2" src="@/assets/uiSvg/emoticon/frog2.gif" alt="" srcset="">
          <img id="cat" src="@/assets/uiSvg/emoticon/frog.gif" alt="" >
          <div class="title">什么是<span>UI</span>设计</div>
          <div class="p1">
            UI=User
            Interface，即：用户界面。UI设计，也叫用户界面设计，是指对软件人机交互、操作逻辑、界面美观的整体设计。
          </div>
          <div class="p2">
            大家每天用的各种应用软件上的图标、功能布局、美观程度都是由<span>UI</span>设计所决定的，比如B站上的视频布局、底下的功能栏的图标和摆放都是通过设计师们的美感所打造而成的，因此我觉得<span>UI</span>设计需要有一双发现美的眼睛和较为敏感的艺术感官。
          </div>
        </div>
        <div class="bili">
          <div class="item">
            <img src="@/assets/uiSvg/资源235.svg" alt="" srcset="" />
            <img
              class="phone"
              src="@/assets/uiSvg/phone/1.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="item">
            <img src="@/assets/uiSvg/资源235.svg" alt="" srcset="" />
            <img
              class="phone"
              src="@/assets/uiSvg/phone/2.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="item">
            <img src="@/assets/uiSvg/资源235.svg" alt="" srcset="" />
            <img
              class="phone"
              src="@/assets/uiSvg/phone/3.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
@font-face {
  font-family: 铁蒺藜体;
  src: url(@/assets/font-family/铁蒺藜体.TTF);
}
.background {
  background: rgb(212, 212, 212);
  position: relative;
  overflow: hidden;
  .centerSvg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    .rainbow {
      display: block;
      width: 100px;
    }
  }
  .designIn {
    position: absolute;
    width: 70px;
    left: 63px;
    top: 57px;
    z-index: 20;
  }
  .nagivationUI {
    position: absolute;
    left: 20px;
    top: 30px;
    width: 150px;
    fill: aqua;
    z-index: 15;
  }
  .design {
    position: absolute;
    left: 50%;
    top: 150px;
    transform: translateX(-50%);
    width: 150px;
    z-index: 11;
  }
  .ui {
    position: relative;
    width: 100%;
    height: 100vh;
    background: rgb(235, 235, 235);
    margin: 30px 0 0 20px;
    padding-top: 500px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    width: 1350px;
    margin: 0 auto;
  }
  .first {
    height: 500px;
    .explain {
      width: 500px;
      position: relative;
      background: url("@/assets/uiSvg/资源 232.svg") no-repeat;
      padding: 60px 30px 0 30px;
      font-family: 铁蒺藜体;
      span {
        color: green;
      }
      .title {
        font-size: 27px;
        color: white;
      }
      .p1 {
        margin-top: 20px;
        color: white;
      }
      .p2 {
        width: 356px;
        color: white;
        margin-top: 35px;
      }
      #frog1{
        position: absolute;

      }
      #cat{

      }
    }
    .bili {
      width: 580px;
      display: flex;
      align-items: center;
      .item {
        flex: 1;
        position: relative;
        &:nth-of-type(1) {
          transform: rotate(-15deg) translateX(60px) translateY(-20px);
        }
        &:nth-of-type(3) {
          transform: rotate(15deg) translateX(-60px) translateY(-20px);
        }
        .phone {
          position: absolute;
          left: 50%;
          top: 3%;
          transform: translateX(-50%);
          width: 150px;
          height: 255px;
          z-index: 4;
        }
      }
    }
  }
}
</style>