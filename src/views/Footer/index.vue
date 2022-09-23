<template>
  <div class="footer">
    <div class="svgList"></div>
    <div class="Portal">
        <div class="done">

        </div>
        <div class="Recruitment"></div>
        <div class="developer"></div>
        <div class="qrcode"></div>
    </div>
    <div class="position">
      <div class="name">ITAEM实验室 | 程序研发</div>
      <div class="English">The Lab Of Computer programn develop</div>
      <div class="coordinate">钟海楼A4008 ITAEM 实验室
        <img src="@/assets/坐标-fill.svg" alt="" srcset="">
      </div>
      <div class="copyright">© 2012 - 2022 ITAEM 实验室版权所有</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "@vue/reactivity";

const done=reactive([
    {name:"在线编译器",url:"javascript:void(0);"},
    {name:"区块链开发",url:"javascript:void(0);"},
    {name:"学期竞赛安排",url:"javascript:void(0);"},
    {name:"日常安排",url:"javascript:void(0);"},
    {name:"ITAEM小灶课堂",url:"javascript:void(0);"},
    {name:"本地开发文档",url:"javascript:void(0);"},
])
const Recruitment=reactive([
    {name:"Q&A",url:"javascript:void(0);"},
    {name:"方向介绍",url:"javascript:void(0);"},
    {name:"考核流程",url:"javascript:void(0);"},
    {name:"过去问",url:"javascript:void(0);"},
])
const developer=reactive([
    {name:"方向介绍",personName:"吴远健，洪子琪，劳智乐"},
    {name:"UI界面",personName:"吴远健，洪子琪，劳智乐"},
    {name:"策划",personName:"吴远健"},
    {name:"策划",personName:"吴远健"},
])
const qrcode= reactive([
])
</script>

<style lang='scss' scoped>
.footer {
    .Portal{
        background-color: #4a1e63;
    }
  .position {
    background-color: #000000;
    padding: 20px 40px;
    div {
      padding: 7px 0;
    }
    .name {
      font-family: SourceHanSansCN-Bold;
      font-size: 22px;
      font-weight: bold;
      line-height: 17px;
      letter-spacing: 0em;
      color: #ffffff;
    }
    .English {
      font-family: SourceHanSansCN-Bold;
      font-size: 20px;
      font-weight: bold;
      line-height: 17px;
      letter-spacing: 0em;
      color: #9e9e9e;
    }
    .coordinate {
      font-family: SourceHanSansCN-Regular;
      font-size: 12px;
      font-weight: normal;
      line-height: 17px;
      letter-spacing: 0em;
      color: #d4d4d4;
      position: relative;
      margin-left: 15px;
      img{
        position: absolute;
        left: -20px;
        width: 16px;
        height: 16px;

      }
    }
    .copyright {
      font-family: SourceHanSansCN-Regular;
      font-size: 12px;
      font-weight: normal;
      line-height: 17px;
      letter-spacing: 0em;
      color: #bcbbbb;
    }
  }
}
</style>