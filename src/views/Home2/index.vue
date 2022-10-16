<template>
  <div>
    <!-- <Group></Group> -->
    <!-- <Senior /> -->
    <!-- <Activity />   -->
    <div class="nav">

      <div class="direction">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="">
          <div class="logo-title">
            ITAEM
          </div>
        </div>
        <div class="item">前端</div>
        <div class="item">后端</div>
        <div class="item">安卓</div>
        <div class="item">UI</div>
        <div class="item">AI</div>
        <div class="item">招新时间线</div>
      </div>
    </div>
    <!-- <img src="@/assets/navigation/前端.svg" alt=""> -->
    <div class="troduction">
      <div class="left">
        <Group />
      </div>
      <div class="center">
        <div class="name">
          <h2 class="title">关于ITAEM</h2>
          <p>
            艾腾团队（原ITAEM团队）成立于2011年，初创至今，团队走过了八个春秋，是数计院成立时间最为悠久的团队之一。
          </p>
          <p>技术实力强劲，是一个以比赛和研究技术为主要目标的团队。</p>
          <p>艾腾团队现专注于发展两大方向，互联网方向、人工智能方向。</p>
        </div>
        <div class="explain">
          <h2 class="title">ITAEM的含义</h2>
          <p># ITAEM != ITAEM</p>
          <p>TEAM是名词队伍</p>
          <p>TEAM是动词合作</p>
          <p>将TEAM变化成TAEM代表着创新而我们团队里每个人是I</p>
          <p>我们对整个团队的热爱</p>
          <p>热衷于创新和研究的精神</p>
          <p>就是对IT行业最原始的向往和追求</p>
          <p>不断创新 颠覆想象吧</p>
        </div>
      </div>
      <div class="right">
        <Senior />
      </div>
    </div>
    <div class="ITAEMAcitivity">
      <Activity />
    </div>
    <!-- <div class="reward">
      <div class="item">
        <img src="" alt="">
        <div class="text">
          <div class="Subheading">保研名单</div>
          <div class="heart">19届的李振明师兄——计科第一——获得推免名额</div>
          <div class="heart">19届的陈昊师兄——计科第一——获得推免名额</div>
          <div class="heart">18届的范文杰师兄——计科第一——</div>
          <div class="heart">19届的李振明师兄——计科第一——</div>
          <div class="heart">19届的李振明师兄——计科第一——</div>
        </div>
      </div>
    </div> -->
    <div class="Thank">
      <div class="title">
        写在最后
      </div>
      <p>
        诚挚的感谢
        <strong>ITAEM</strong>
        历届成员，没有你们就没有现在的我们。<br>先人种树，后人乘凉。<br>愿你我都有光明的未来
      </p>
      <div id="wrap" ref="wrapElement">
        <canvas id="canvas" ref="canvasElement"> canvas not support </canvas>
      </div>
    </div>
  </div>
</template>

<script setup >
import Group from "@/components/SwiperComponents/Group.vue";
import Senior from "@/components/SwiperComponents/Senior.vue";
import Activity from "@/components/SwiperComponents/Activity.vue";
import name from "./name.json";
import { onMounted, ref } from "@vue/runtime-core";
const canvasElement = ref(null)
const wrapElement = ref(null)
onMounted(() => {
  const canvas = canvasElement.value;
  const wrap = wrapElement.value
  if (typeof canvas.getContext === "undefined") {
    return;
  }
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "purple"; //设置填充颜色为紫色
  ctx.font = '20px "微软雅黑"'; //设置字体
  ctx.textBaseline = "bottom"; //设置字体底线对齐绘制基线
  ctx.textAlign = "left"; //设置字体对齐的方式
  // Canvas Resize
  function fitCanvasSize() {
    canvas.width = wrap.clientWidth;
    canvas.height = wrap.clientHeight;
  }
  fitCanvasSize();
  window.onresize = fitCanvasSize;
  // RequestAnimationFrame
  (function () {
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  //绘画ITAEM在正中心
  function centerText() {
    ctx.font = '50px "微软雅黑"';
    ctx.fillStyle = "#f6d365";
    ctx.fillText("ITAEM", canvas.width / 2 - 88, canvas.height / 2 - 22);
  }
  const colors = [
    "#30cfd0",
    "#96e6a1",
    "#4784bf",
    "#fef9d7",
    "#4d4398",
    "#ffffff",
  ];

  //Utility Function
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  // Objects
  function Particle(x, y, radius, color, text) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.text = text;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.001;
    this.distanceFormCenter = randomIntFromRange(150, canvas.height + 100);

    this.update = () => {
      // Move points over time
      this.radians += this.velocity;
      //Circular Motion
      this.x =
        Math.cos(this.radians) * this.distanceFormCenter + canvas.width / 2;
      this.y =
        Math.sin(this.radians) * this.distanceFormCenter + canvas.height / 2;
      this.draw();
    };

    this.draw = () => {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      // ctx.globalAlpha = .8;
      // ctx.fill();
      ctx.font = '10px "微软雅黑"';
      ctx.fillStyle = this.color;
      ctx.fillText(this.text, this.x, this.y);
    };
  }

  // Implementation
  let perticles;
  function init() {
    perticles = [];

    for (let i = 0; i < name.nameArray.length; i++) {
      const radius = Math.random() + 0.5;
      perticles.push(
        new Particle(
          canvas.width / 2,
          canvas.height / 2,
          radius,
          randomColor(colors),
          name.nameArray[i]
        )
      );
    }
  }

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    // var g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    // g.addColorStop(0, 'rgba(19,27,35,.05)');
    // g.addColorStop(1, 'rgba(10,20,67,.05)');
    // ctx.fillStyle = g;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    perticles.forEach((perticles) => {
      perticles.update();
    });
    centerText();
  }

  init();
  animate();
});
</script>

<style lang='scss' scoped>
@mixin container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.nav {
  width: 100%;
  height: 72px;
  background: #fff;
  align-items: center;
  box-shadow: 0 4px 30px 0 rgb(232 232 237 / 50%);
  .logo {
    display: flex;
  }
}
.direction {
  @include container;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  .logo{
    display: flex;
    align-items: center;
    img{
      width: 30px;
      height: 30px;
    }
    .logo-title{
      font-weight: 700;
      font-size: 25px;
      padding:0 10px;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
  }
  div.item {
    width: 90px;
    height: 72px;
    text-align: center;
    line-height: 72px;
    font-size: 15px;
    color: #555666;
    cursor: pointer;
  }
  div.item:hover {
    color: red;
  }
}
.troduction {
  @include container;
  margin: 30px auto;
  .right {
    width: 200px;
  }
  .center {
    flex: 1;
    margin: 0 20px;
    .name,
    .explain {
      padding: 20px;
    }
    .title {
      padding: 10px 0;
      font-size: 25px;
    }
  }
}
.ITAEMAcitivity {
  @include container;
}
.reward {
  @include container;
  .item {
    img {
      width: 90px;
      height: 90px;
      border-radius: 3px;
    }
  }
}
#wrap {
  height: 500px;
  margin: 0 auto;
}
canvas {
  display: block;
}
.Thank {
  height: 200px;
  .title {
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
    font-weight: 700;
    font-size: 25px;
  }
  p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 20px 0;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
  }
}
</style>