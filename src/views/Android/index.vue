<template>
  <div class="Android">
    <div class="Robot" ref="robot">
      <div class="android-container">
        <div class="left-arm"></div>
        <div class="droid">
          <div class="antenna"></div>
          <div class="head"></div>
          <div class="droid-body"></div>
          <div class="left-leg"></div>
          <div class="right-leg"></div>
        </div>
        <div class="right-arm"></div>
      </div>
      <div class="floor"></div>
    </div>

    <div class="Phone" ref="phone">
      <div id="frame">
        <div id="innerFrame">
          <div id="top-gadgets">
            <div class="front-camera"></div>
            <div class="front-speaker"></div>
            <div class="light-sensor"></div>
          </div>
          <div id="screen" ref="mobileScreen">
            <div
              class="imgList"
              @mousedown="begin"
              ref="LongBox"
              :style="imgList.transform"
            >
              <img
                src="@/assets/安卓手机图片/1.jpg"
                draggable="false"
                alt=""
                srcset=""
              />
              <img
                src="@/assets/安卓手机图片/2.jpg"
                draggable="false"
                alt=""
                srcset=""
              />
              <img
                src="@/assets/安卓手机图片/3.jpg"
                draggable="false"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div id="touch-buttons">
            <div id="option-button">
              <div class="menu stack1"></div>
              <div class="menu stack2"></div>
              <div class="menu stack3"></div>
            </div>
            <div id="home-button">
              <div class="home-menu cat1 div1"></div>
              <div class="home-menu cat1 div2"></div>
              <div class="home-menu cat1 div3"></div>
              <div class="home-menu div4"></div>
              <div class="home-menu div5"></div>
              <div class="home-menu div6"></div>
            </div>
            <div id="back-nav-button">
              <div class="arrow-head stack1"></div>
              <div class="arrow-head stack2"></div>
              <div class="arrow-shaft"></div>
              <div class="arrow tail"></div>
            </div>
          </div>
          <div id="sidebuttons">
            <div class="volume-up"></div>
            <div class="power-button"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <canvas id="canvas" ref="canvas"></canvas>
    </div>
    <div class="LogoRain" ref="LogoList" >

      <img src="@/assets/软件logo/unnamed(1).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(2).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(3).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(4).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(5).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(6).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(7).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(8).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(9).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(10).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(11).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(12).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(13).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(14).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(15).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(16).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(17).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(19).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(20).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(21).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(22).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(23).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(24).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(25).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(26).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(27).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(28).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(29).webp" alt="" />
      <img src="@/assets/软件logo/unnamed(30).webp" alt="" />
    </div>
  </div>
</template>

<script setup >
import { onMounted, reactive, ref } from "@vue/runtime-core";

// 首先是引入所有的图片
const LogoList = ref(null);
const robot = ref(null);
// 这个是图片下落的时候左边的范围控制
const left = ref(0);
function randRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
const picture = function () {
  const width = document.body.clientWidth;
  const imgList = LogoList.value.children;
  // 图片宽度
  const imgWidth = 64;
  function Rain(i) {
    const element = imgList[i];
    element.style.display = "block";
    var dropLeft = randRange(left.value, width - imgWidth);
    element.style.left = dropLeft + "px";
    // const anmiation = element.getAnimations()[0];
    // console.log(anmiation);
    element.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(2000px)" }],
      {
        duration: 4000,
        easing: "ease",
        fill: "forwards",
      }
    );
    // element.getAnimations()[0].play();
  }
  let countNum = 0;
  setInterval(() => {
    Rain(countNum);
    if (countNum >= imgList.length - 1) {
      countNum -= imgList.length;
    }
    countNum++;
  }, 50);
};
const mobileScreen = ref(null);
const phone = ref(null);
const LongBox = ref(null);

onMounted(() => {
  setTimeout(() => {
    robot.value.classList.remove("Robot");
    robot.value.classList.add("Robot2");
    setTimeout(() => {
      picture();
      let canvas = document.getElementById("canvas");
      canvas.classList.add("opacityChange");
      setTimeout(() => {
        canvas.classList.remove("opacityChange");
        phone.value.classList.add("opacityChange");
        left.value = 350;
      }, 3000);
    }, 4000);
  }, 2500);
});

// 位置,还有位移距离
const imgList = reactive({
  transform: "",
  location: 0,
  // 这个是长度的意思
  size: 0,
  // 有多少张图片，后面可以写成响应式
  imgNumber: 3,
});
// 一张图片的宽度
const width = 320;

function begin(e) {
  // 获获取距离
  let position = e.pageX;
  const mobile = LongBox.value;
  function move(e) {
    let pageX = e.pageX
    let changdu = e.pageX - position;
    position = e.pageX;
    imgList.size -= changdu;
    let size = imgList.size;
    console.log({ pageX, changdu, size ,position});
    imgList.transform = `transform:translateX(${-imgList.size + "px"})`;
  }
  function up() {
    console.log("down");
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", up);
  }
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", up);
  // 还原

}

// onMounted(() => {
//   const screen = mobileScreen.value;
//   function screenfunc(e) {
//     let x = e.offsetX;
//     screen.addEventListener("mousemove", (e) => {
//       console.log(e.offsetX);
//     });
//     screen.addEventListener("mouseup", () => {
//       screen.removeEventListener("mousedown", screenfunc);
//     });
//   }
//   screen.addEventListener("mousedown", screenfunc);
// });

onMounted(() => {
  window.addEventListener("resize", resizeCanvas, false);
  window.addEventListener("DOMContentLoaded", onLoad, false);

  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  var canvas,
    ctx,
    w,
    h,
    particles = [],
    probability = 0.04,
    xPoint,
    yPoint;

  function onLoad() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    resizeCanvas();

    window.requestAnimationFrame(updateWorld);
  }

  function resizeCanvas() {
    if (!!canvas) {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
  }

  function updateWorld() {
    update();
    paint();
    window.requestAnimationFrame(updateWorld);
  }

  function update() {
    if (particles.length < 500 && Math.random() < probability) {
      createFirework();
    }
    var alive = [];
    for (var i = 0; i < particles.length; i++) {
      if (particles[i].move()) {
        alive.push(particles[i]);
      }
    }
    particles = alive;
  }

  function paint() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < particles.length; i++) {
      particles[i].draw(ctx);
    }
  }

  function createFirework() {
    xPoint = Math.random() * (w - 200) + 100;
    yPoint = Math.random() * (h - 200) + 100;
    var nFire = Math.random() * 50 + 100;
    var c =
      "rgb(" +
      ~~(Math.random() * 200 + 55) +
      "," +
      ~~(Math.random() * 200 + 55) +
      "," +
      ~~(Math.random() * 200 + 55) +
      ")";
    for (var i = 0; i < nFire; i++) {
      var particle = new Particle();
      particle.color = c;
      var vy = Math.sqrt(25 - particle.vx * particle.vx);
      if (Math.abs(particle.vy) > vy) {
        particle.vy = particle.vy > 0 ? vy : -vy;
      }
      particles.push(particle);
    }
  }

  function Particle() {
    this.w = this.h = Math.random() * 4 + 1;

    this.x = xPoint - this.w / 2;
    this.y = yPoint - this.h / 2;

    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;

    this.alpha = Math.random() * 0.5 + 0.5;

    this.color;
  }

  Particle.prototype = {
    gravity: 0.05,
    move: function () {
      this.x += this.vx;
      this.vy += this.gravity;
      this.y += this.vy;
      this.alpha -= 0.01;
      if (
        this.x <= -this.w ||
        this.x >= screen.width ||
        this.y >= screen.height ||
        this.alpha <= 0
      ) {
        return false;
      }
      return true;
    },
    draw: function (c) {
      c.save();
      c.beginPath();

      c.translate(this.x + this.w / 2, this.y + this.h / 2);
      c.arc(0, 0, this.w, 0, Math.PI * 2);
      c.fillStyle = this.color;
      c.globalAlpha = this.alpha;

      c.closePath();
      c.fill();
      c.restore();
    },
  };
});
</script>

<style lang='scss' scoped>
#screen {
  // grab是拖拽组件
  cursor: grab;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  .imgList {
    position: absolute;
    height: 100%;
    display: flex;
    z-index: 0;
    img {
      width: 320px;
      height: 540px;
      position: relative;
      z-index: 20;
    }
  }
}
.Phone {
  position: absolute;
  z-index: 10;
  left: 20px;
  top: 30px;
  opacity: 0;
  transition: opacity 1s;
}
.Android {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.opacityChange {
  opacity: 1;
}
@keyframes fall {
  to {
    margin-top: 2000px;
  }
}
.LogoRain {
  margin: 0 auto;
  position: absolute;
  top: 0;
  img {
    display: none;
    position: absolute;
    width: 64px;
    height: 64px;
    // animation: fall 4s ease infinite;
  }
}
canvas {
  background: #ffffff;
  opacity: 0;
  transition: opacity 1s;
}
.Robot {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  .left-arm,
  .right-arm,
  .antenna:before,
  .antenna:after,
  .head,
  .droid-body,
  .left-leg,
  .right-leg {
    background: #a4c639;
  }
  .left-arm,
  .right-arm,
  .left-leg,
  .right-leg,
  .droid {
    float: left;
  }

  .android-container {
    width: 200px;
    margin: 20px auto;
    animation: droid-rotate 2s ease-in-out infinite;
    transform-origin: bottom left;
  }

  @keyframes droid-rotate {
    0%,
    100% {
      transform: rotate(0);
    }
    25%,
    75% {
      transform: rotate(-5deg);
    }
  }

  .droid {
    width: 125px;
    height: 165px;
    margin: 0 auto;
  }

  .left-arm,
  .right-arm {
    width: 25px;
    height: 65px;
    border-radius: 15px;
    margin: 105px 5px 0;
    transform-origin: center 12.5px;
  }
  .left-arm {
    animation: arm-dangle 2s ease-in-out infinite;
  }
  @keyframes arm-dangle {
    0%,
    100% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(6deg);
    }
    25%,
    75% {
      transform: rotate(13deg);
    }
  }

  .right-arm {
    animation: wave 2s ease-in-out infinite;
  }

  @keyframes wave {
    0%,
    100% {
      transform: rotate(0);
    }
    25%,
    50%,
    75% {
      transform: rotate(-125deg);
    }
    40%,
    60% {
      transform: rotate(-165deg) translateY(3px);
    }
  }

  .antenna:before,
  .antenna:after {
    display: inline-block;
    content: "";
    width: 3px;
    height: 20px;
    margin: 25px 15px -10px 35px;
    transform-origin: center bottom;
    border-radius: 3px;
  }
  .antenna:before {
    transform: rotate(-30deg);
  }
  .antenna:after {
    transform: rotate(30deg);
  }

  .head {
    width: 125px;
    height: 60px;
    border-radius: 60px 60px 0 0;
    margin-bottom: 5px;
  }

  /* Eyes */
  .head:after,
  .head:before {
    display: inline-block;
    content: "";
    width: 10px;
    height: 10px;
    background: #eee;
    border-radius: 50%;
    margin: 25px 0 0 32px;
  }
  .head:after {
    margin-left: 40px;
  } /* Right eye */

  .droid-body {
    width: 125px;
    height: 100px;
  }
  .left-leg,
  .right-leg {
    width: 25px;
    height: 50px;
    margin: -10px 0 0 25px;
    border-radius: 0 0 15px 15px;
    transform-origin: center top;
  }
  .left-leg {
    animation: leg 2s ease-in-out infinite;
  }

  @keyframes leg {
    0%,
    100% {
      transform: rotate(0);
    }
    25%,
    75% {
      transform: rotate(10deg) translateY(2px);
    }
  }
}
@keyframes robotFly {
  0% {
    top: 300px;
  }
  50% {
    top: 300px;
  }
  100% {
    top: -600px;
  }
}
.Robot2 {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  animation: robotFly 4s forwards;
  .left-arm,
  .right-arm,
  .antenna:before,
  .antenna:after,
  .head,
  .droid-body,
  .left-leg,
  .right-leg {
    background: #a4c639;
  }
  .left-arm,
  .right-arm,
  .left-leg,
  .right-leg,
  .droid {
    float: left;
  }

  .android-container {
    width: 200px;
    margin: 20px auto;
    transform-origin: bottom left;
  }

  .droid {
    width: 125px;
    height: 165px;
    margin: 0 auto;
  }

  .left-arm,
  .right-arm {
    width: 25px;
    height: 65px;
    border-radius: 15px;
    margin: 105px 5px 0;
    transform-origin: center 12.5px;
  }

  @keyframes flyLeft {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes flyRight {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-180deg);
    }
  }
  .left-arm {
    animation: flyLeft 2s ease forwards;
  }

  .right-arm {
    animation: flyRight 2s ease forwards;
  }

  .antenna:before,
  .antenna:after {
    display: inline-block;
    content: "";
    width: 3px;
    height: 20px;
    margin: 25px 15px -10px 35px;
    transform-origin: center bottom;
    border-radius: 3px;
  }
  .antenna:before {
    transform: rotate(-30deg);
  }
  .antenna:after {
    transform: rotate(30deg);
  }

  .head {
    width: 125px;
    height: 60px;
    border-radius: 60px 60px 0 0;
    margin-bottom: 5px;
  }

  /* Eyes */
  .head:after,
  .head:before {
    display: inline-block;
    content: "";
    width: 10px;
    height: 10px;
    background: #eee;
    border-radius: 50%;
    margin: 25px 0 0 32px;
  }
  .head:after {
    margin-left: 40px;
  } /* Right eye */

  .droid-body {
    width: 125px;
    height: 100px;
  }
  .left-leg,
  .right-leg {
    width: 25px;
    height: 50px;
    margin: -10px 0 0 25px;
    border-radius: 0 0 15px 15px;
    transform-origin: center top;
  }
  .left-leg {
  }
}

.Phone {
  #frame {
    width: 330px;
    height: 640px;
    display: block;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  #innerFrame {
    background: #e0b348 !important;
    width: inherit;
    height: inherit;
    border-radius: 2rem;
  }

  .front-camera {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: black;
    position: absolute;
    top: 2rem;
    margin-left: 2rem;
    border: 2px solid gray;
  }

  .front-speaker {
    width: 4rem;
    height: 8px;
    background: grey;
    border-radius: 4px;
    position: absolute;
    top: 2.25rem;
    margin-left: 7.8rem;
  }

  .light-sensor {
    width: 1.5rem;
    height: 15px;
    background: black;
    border-radius: 2rem;
    position: absolute;
    margin-left: 15rem;
    top: 2rem;
  }

  #screen {
    width: 320px;
    height: 540px;
    background: black;
    // position: absolute;
    top: 3.6rem;
    margin-left: 5px;
  }

  .home-menu.cat1 {
    width: 1rem;
  }

  .div1.home-menu.cat1 {
    transform: translate(20px, 2px) rotate(-25deg);
  }

  .div2.home-menu.cat1 {
    transform: translate(33px, 2px) rotate(25deg);
  }

  .div3.home-menu.cat1 {
    transform: translate(44px, -3.5px);
    width: 2px;
    height: 0.4rem;
  }

  .div4.home-menu {
    transform: translate(23px, 4px);
    width: 2px;
    height: 0.6rem;
  }

  .div5.home-menu {
    transform: translate(44px, 4px);
    width: 2px;
    height: 0.6rem;
  }

  .div6.home-menu {
    transform: translate(23px, 14px);
    width: 1.439rem;
    height: 2px;
  }

  .home-menu {
    position: absolute;
    top: 38.5rem;
    background: white;
    width: 2px;
    height: 1.7px;
    margin-left: 7.5rem;
  }

  #option-button .menu {
    width: 1.6rem;
    height: 2px;
    margin-left: 2.5rem;
    position: absolute;
    background: white;
  }

  .menu.stack1 {
    top: 38.5rem;
  }

  .menu.stack2 {
    top: 39rem;
    width: 1.2rem !important;
    margin-left: 2.87rem !important;
  }

  .menu.stack3 {
    top: 39.5rem;
    width: 1.2rem !important;
    margin-left: 2.87rem !important;
  }

  #back-nav-button > div {
    margin-left: 15.5rem;
    top: 39rem;
    position: absolute;
    width: 2rem;
    height: 2px;
    background: white;
    border-radius: 2px;
  }

  .arrow-head.stack1 {
    transform: translate(0px, -3px) rotate(-19deg);
    width: 0.9rem !important;
  }

  .arrow-head.stack2 {
    transform: translate(0px, 3px) rotate(19deg);
    width: 0.9rem !important;
  }

  .arrow-shaft {
    width: 1.6rem !important;
  }

  #back-nav-button > div.arrow.tail {
    transform: translate(23px, 2px) rotate(45deg);
    width: 0.4rem !important;
  }

  .volume-up {
    width: 5px;
    height: 5.5rem;
    position: absolute;
    margin-left: 20.58rem;
    /*background: slategrey;*/
    background: #9e9e9e;
    top: 5rem;
    border-top-right-radius: 3.5px;
    border-bottom-right-radius: 3.5px;
  }

  .power-button {
    width: 5px;
    height: 3rem;
    position: absolute;
    margin-left: 20.58rem;
    background: #9e9e9e;
    top: 12rem;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}
</style>