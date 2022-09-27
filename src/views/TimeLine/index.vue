<template >
  <div class="timeLine">
    <canvas
      id="c"
      ref="canvas"
      style="position: absolute; z-index: -1; text-align: center"
    ></canvas>
    <div class="content">
      <div class="Linecow"></div>
      <div class="title">招新时间线</div>
      <div class="Linecow2">
        <div class="Linerow">
          <div class="circle">
            <div class="p">宣讲会-10.8</div>
            <div class="hide"></div>
          </div>
          <div class="circle">
            <div class="p">一轮招新-10.11</div>
            <div class="hide"></div>
          </div>
          <div class="circle">
            <div class="p">二轮招新-11月份</div>
            <div class="hide"></div>
          </div>
          <div class="circle">
            <div class="p">三轮招新-第二学期开始</div>
            <div class="hide"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
// 这里面则是招新时间线了，
const canvas = ref(null);
onMounted(() => {
  var canvas = document.getElementById("c");
  var ctx = canvas.getContext("2d");
  var w, h;
  var pi = Math.PI;
  var all_attribute = {
    num: 100, // 个数
    start_probability: 0.08, // 如果数量小于num，有这些几率添加一个新的
    size_min: 1, // 初始爱心大小的最小值
    size_max: 2, // 初始爱心大小的最大值
    size_add_min: 0.3, // 每次变大的最小值（就是速度）
    size_add_max: 0.5, // 每次变大的最大值
    opacity_min: 0.3, // 初始透明度最小值
    opacity_max: 0.5, // 初始透明度最大值
    opacity_prev_min: 0.003, // 透明度递减值最小值
    opacity_prev_max: 0.005, // 透明度递减值最大值
    light_min: 0, // 颜色亮度最小值
    light_max: 90, // 颜色亮度最大值
  };
  var style_color = find_random(0, 360);
  var all_element = [];
  window_resize();

  function start() {
    window.requestAnimationFrame(start);
    // style_color += 0.1;
    //更改背景色hsl(颜色值，饱和度，明度)
    // ctx.fillStyle = 'hsl(' + style_color + ',100%,97%)';
    ctx.fillStyle = "black";

    //void ctx.fillRect(x, y, width, height);
    //fillRect()方法绘制一个填充了内容的矩形，这个矩形的开始点（左上点）在(x, y) ，
    //它的宽度和高度分别由width 和 height 确定，填充样式由当前的fillStyle 决定。
    ctx.fillRect(0, 0, w, h);
    if (
      all_element.length < all_attribute.num &&
      Math.random() < all_attribute.start_probability
    ) {
      all_element.push(new ready_run());
    }
    all_element.map(function (line) {
      line.to_step();
    });
  }

  function ready_run() {
    this.to_reset();
  }

  function arc_heart(x, y, z, m) {
    //绘制爱心图案的方法，参数x,y是爱心的初始坐标，z是爱心的大小，m是爱心上升的速度
    y -= m * 10;

    ctx.moveTo(x, y);
    z *= 0.05;
    //bezierCurveTo() 是 Canvas 2D API 绘制三次贝赛尔曲线路径的方法。该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 moveTo() 进行修改。
    ctx.bezierCurveTo(
      x,
      y - 3 * z,
      x + 5 * z,
      y - 3 * z,
      x + 25 * z,
      y - 3 * z
    );
    ctx.bezierCurveTo(
      x + 25 * z,
      y - 3 * z,
      x + 25 * z,
      y + 13 * z,
      x + 25 * z,
      y + 33 * z
    );
    ctx.bezierCurveTo(
      x + 25 * z,
      y + 33 * z,
      x + 5 * z,
      y + 33 * z,
      x,
      y + 33 * z
    );
  }
  ready_run.prototype = {
    to_reset: function () {
      var t = this;
      t.x = find_random(0, w);
      t.y = find_random(0, h);
      t.size = find_random(all_attribute.size_min, all_attribute.size_max);
      t.size_change = find_random(
        all_attribute.size_add_min,
        all_attribute.size_add_max
      );
      t.opacity = find_random(
        all_attribute.opacity_min,
        all_attribute.opacity_max
      );
      t.opacity_change = find_random(
        all_attribute.opacity_prev_min,
        all_attribute.opacity_prev_max
      );
      t.light = find_random(all_attribute.light_min, all_attribute.light_max);
      t.color = "#1dff08";
    },
    to_step: function () {
      var t = this;
      t.opacity -= t.opacity_change;
      t.size += 0.5 * t.size_change;
      if (t.opacity <= 0) {
        t.to_reset();
        return false;
      }
      ctx.fillStyle = t.color;
      ctx.globalAlpha = t.opacity;
      ctx.beginPath();
      arc_heart(t.x, t.y, t.size, t.size);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
    },
  };

  function window_resize() {
    //如果需要铺满内容可以换下面这个
    //w=$("body").width();
    //h=$("body").height();
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.height = h;
    canvas.width = w;
  }
  //调整浏览器窗口大小
  //   $(window).resize(function () {
  //     window_resize();
  //   });
  //返回一个介于参数1和参数2之间的随机数
  function find_random(num_one, num_two) {
    return Math.random() * (num_two - num_one) + num_one;
  }
  start();
});
</script>

<style lang='scss' scoped>
.timeLine {
  canvas {
    width: 100vw;
    height: 100vh;
  }
  .content {
    width: 600px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    .Linecow {
      margin: 0 auto;
      width: 4px;
      height: 60px;
      background-color: #ffffff;
    }
    .title {
      height: 70px;
      background-color: #ffffff;
      text-align: center;
      line-height: 70px;
      font-size: 30px;
      color: #e21890;
    }
    .Linecow2 {
      .hide {
        position: absolute;
        background: black;
        top: -14px;
        right: 9px;
        width: 200px;
        height: 20px;
        z-index: 5;
        opacity: 1;
        // animation: hide 2s forwards;
      }
      .circle {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #ffffff;
        margin: 20px auto;
        position: relative;
        .p {
          position: absolute;
          top: -14px;
          right: 9px;
          border-bottom: #ffffff 1px solid;
          color: #ffffff;
          width: 200px;
          //   animation: move 2s forwards;
        }
        @keyframes hideLeft {
          0% {
            width: 200px;
            left: 9px;
          }
          100% {
            width: 0;
            left: 209px;
          }
        }
        @keyframes hideRight {
          0% {
            width: 200px;
            right: 9px;
          }
          100% {
            width: 0;
            right: 209px;
          }
        }

        @keyframes move {
          0% {
            opacity: 0;
            width: 80px;
          }
          100% {
            opacity: 1;
            width: 200px;
          }
        }
        &:nth-of-type(2n) .p {
          left: 9px;
          text-align: left;
        }
        &:nth-of-type(2n) .hide {
          left: 9px;
          animation: hideLeft 2s forwards;
        }
        &:nth-of-type(2n + 1) .p {
          right: 9px;
          text-align: right;
        }
        &:nth-of-type(2n + 1) .hide {
          right: 9px;
          animation: hideRight 2s forwards;
        }
      }
    }
  }
}
</style>