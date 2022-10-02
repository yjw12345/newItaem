<template>
  <div class="footer">
    <div class="svgList">
      <img src="@/assets/网站footer/电脑.svg" alt="" />
      <img src="@/assets/网站footer/书柜.svg" alt="" />
      <img src="@/assets/网站footer/朱元润.svg" alt="" />
      <img src="@/assets/网站footer/lzl.svg" alt="" />
      <img src="@/assets/网站footer/tyz.svg" alt="" />
      <img src="@/assets/网站footer/1.svg" alt="" />
      <img src="@/assets/网站footer/2.svg" alt="" />
    </div>
    <div class="Portal">
      <div class="done">
        <p>传送门</p>
        <div class="item">
          <a v-for="(item, index) in done" :href="item.url" :key="index">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="Line"></div>
      <div class="Recruitment">
        <p>招新模块</p>
        <div class="item">
          <a v-for="(item, index) in Recruitment" :href="item.url" :key="index">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="Line"></div>
      <div class="developer">
        <p>本站开发人员</p>
        <div class="item">
          <a v-for="(item, index) in developer" :key="index">
            {{ item.name }} : {{ item.personName }}
          </a>
        </div>
      </div>
      <div class="Line"></div>
      <div class="qrcode">
        <div class="img" v-for="(item, index) in qrcode" :key="index">
          <!-- <img src="" alt=""> -->
          <img :src="item.src" alt="" srcset="" />
          <p>{{ item.name }}</p>
        </div>
        <img id="tree" src="@/assets/树.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="position">
      <div class="name">ITAEM实验室 | 程序研发</div>
      <div class="English">The Lab Of Computer programn develop</div>
      <div class="coordinate">
        钟海楼A4008 ITAEM 实验室
        <img src="@/assets/坐标-fill.svg" alt="" srcset="" />
      </div>
      <div class="copyright">© 2012 - 2022 ITAEM 实验室版权所有</div>
    </div>
  </div>
</template>

<script setup>
import gongzhonghao from "@/assets/二维码/公众号.jpg";
import { reactive } from "@vue/reactivity";
const done = reactive([
  { name: "在线编译器", url: "javascript:void(0);" },
  { name: "区块链开发", url: "javascript:void(0);" },
  { name: "学期竞赛安排", url: "javascript:void(0);" },
  { name: "日常安排", url: "javascript:void(0);" },
  { name: "ITAEM小灶课堂", url: "javascript:void(0);" },
  { name: "本地开发文档", url: "javascript:void(0);" },
]);
const Recruitment = reactive([
  { name: "Q&A", url: "javascript:void(0);" },
  { name: "方向介绍", url: "javascript:void(0);" },
  { name: "考核流程", url: "javascript:void(0);" },
  { name: "过去问", url: "javascript:void(0);" },
]);
const developer = reactive([
  { name: "方向介绍", personName: "吴远健，洪子琪，劳智乐" },
  { name: "UI界面", personName: "吴远健，洪子琪，劳智乐" },
  { name: "策划", personName: "吴远健" },
  { name: "策划", personName: "吴远健" },
]);
console.log(gongzhonghao);

const qrcode = reactive([{ name: "公众号二维码", src: gongzhonghao }]);
</script>

<style lang='scss' scoped>
.footer {
  .svgList {
    display: flex;
    align-items: baseline;
    img {
      flex: 1;
    }
    img:nth-of-type(1) {
      width: 299px;
      height: 116px;
    }
    img:nth-of-type(2) {
      width: 97px;
      height: 150px;
    }
    img:nth-of-type(3) {
      width: 159.41px;
      height: 114.54px;
    }
    img:nth-of-type(4) {
      width: 53px;
      height: 55px;
    }
    img:nth-of-type(5) {
      width: 202px;
      height: 121px;
    }
    img:nth-of-type(6) {
      width: 314px;
      height: 103px;
    }
    img:nth-of-type(7) {
      width: 113px;
      height: 89px;
    }
  }
  .Portal {
    position: relative;
    padding: 40px 0;
    background-color: #4a1e63;
    display: flex;
    justify-content: center;
    .done,
    .Recruitment,
    .developer {
      flex: 1;
      max-width: 250px;
      padding-left: 60px;
      p {
        font-family: SourceHanSansCN-Bold;
        font-size: 17px;
        font-weight: bold;
        line-height: 17px;
        letter-spacing: 0em;
        color: #ffffff;
      }
      div.item {
        display: flex;
        flex-direction: column;
        a {
          font-family: SourceHanSansCN-Regular;
          font-size: 12px;
          font-weight: normal;
          line-height: 17px;
          letter-spacing: 0em;
          color: #9e9e9e;
          margin: 10px 0;
        }
      }
    }
    .qrcode {
      flex: 1;
      max-width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        display: flex;
        flex-direction: column;
        img {
          width: 81px;
          height: 81px;
        }
        p {
          font-family: SourceHanSansCN-Regular;
          font-size: 10px;
          font-weight: normal;
          line-height: 17px;
          letter-spacing: 0em;
          color: #cac1c1;
        }
      }
    }
    .Line {
      width: 3px;
      height: 247px;
      background: #d8d8d8;
    }
    #tree {
      position: absolute;
      right: 0;
      top: 20px;
    }
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
      img {
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