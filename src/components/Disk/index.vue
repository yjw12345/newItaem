<template>
  <div id="backend">
    <div class="Disk" ref="Disk">
      <div class="turntable" :style="tableCss" ref="turntable" @mousedown="tableDown">
        <div class="ball" v-for="(item, index) in colorList" :key="index" :style="item">
          <img draggable="false" v-if="index < headList.length - 2" :src="headList[index]" alt="" srcset="" />
        </div>
      </div>
      <div class="CardShow">
        <div class="cardList" @mousedown="ListDown" :style="ListCss">
          <div class="card" v-for="(item, index) in colorList" :style="item" :key="index">
            <img draggable="false" v-if="index < headList.length - 2" :src="headList[index]" alt="" srcset="" />
            <p class="name">唐奕泽</p>
            <p class="nickName">310</p>
            <p class="phone">453912245</p>
            <p class="detail">
              我就是江湖上人见人爱花见花开车见车载，人称上天入地无所不能英俊潇洒风流倜傥玉树临风学富五车高大威猛拥有千万‘粉丝’迷倒万千少女,号称一朵梨花压海棠的玉面小白龙，帅到掉榨!
            </p>
            <p class="love">打篮球</p>
            <p class="proverb">键盘敲烂，月薪过万</p>
            <p class="target">华工&暨大</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, Ref, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import * as Infor from "./infor.json";
console.log(Infor);
const imgList = ["黄徽冠", "奕泽", "元润", "远健", "振壹"];
const colorList = reactive([
  "background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);",
  "background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);",
  "background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);",
  "background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);",
  "background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);",
  "background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);",
]);
const headList: any = [];
const Disk: Ref<HTMLElement | null> = ref(null);

// const headList: any[] = [];
for (let i = 0; i < imgList.length; i++) {
  const el = imgList[i];
  headList.push(getImageUrl(el));
}
for (let i = imgList.length; i < colorList.length; i++) {
  const el = colorList[i];
  headList.push(el);
}
if (imgList.length < 6) {
  headList.push(colorList);
}
function getImageUrl(name: string) {
  return new URL(`./后端头像/${name}.jpg`, import.meta.url).href;
}
let tupian = getImageUrl("黄徽冠");

/* 后端技术栈logo*/
/*-----------Start------------ */
const getLogoUrl = (name: String) => {
  return new URL(`../../assets/backEnd-tech-logo/${name}`, import.meta.url)
    .href;
};
const feedList: any[] = [
  "go.jpg",
  "hutool.jpg",
  "java.jpg",
  "spring.png",
  "mysql.jpg",
  "go.jpg",
  "java.jpg",
  "spring.png",
  "mysql.jpg",
];

/*-----------End----------- */
// 获取圆心的位置
type Circle = {
  X: number;
  Y: number;
};
const data = reactive({
  lastX: 1,
  radius: 5,
  deg: 0,
});
const circle: Circle = { X: 1, Y: 1 };
// 转盘的flag
let turnflag = false;
const turntable: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  circle.X = turntable.value!.offsetLeft + 60 + Disk.value!.offsetLeft;
  circle.Y = turntable.value!.offsetTop + 60 + Disk.value!.offsetTop;
  console.log(circle);
});
// 求角度的办法
function getAngle(x: number, y: number) {
  let a = Math.atan2(y, x);
  let ret = (a * 180) / Math.PI; //弧度转角度，方便调试
  if (ret > 360) {
    ret -= 360;
  }
  if (ret < 0) {
    ret += 360;
  }
  return ret;
}

const tableCss = computed(() => {
  const time = turnflag ? "transition-duration:500ms;" : "";
  return `transform:rotate(${data.deg + "deg"});` + time;
});

function tableDown(e: MouseEvent) {
  console.log(circle);
  turnflag = false;
  const table = turntable.value;
  let ret = getAngle(e.pageX - circle.X, e.pageY - circle.Y);
  function move(e: MouseEvent) {
    const nextRet = getAngle(e.pageX - circle.X, e.pageY - circle.Y);
    const moveRet = nextRet - ret;
    ret = nextRet;
    data.deg += moveRet;
  }
  function Up() {
    tableRestore();
    document?.removeEventListener("mousemove", move);
    document?.removeEventListener("mouseup", Up);
  }
  document?.addEventListener("mousemove", move);
  document?.addEventListener("mouseup", Up);
}

function tableRestore() {
  turnflag = true;
  setTimeout(() => {
    data.deg = Math.round((data.deg % 360) / 60) * 60;
  }, 50);
}

// 默认数量为6
// 初始化lastX
// 这个radius不是半径，可以理解为旋转周期，移动300px就更换60deg

let flag = false;
const ListCss = computed(() => {
  const time = flag ? "transition-duration:500ms;" : "";
  return `transform: rotateY(${data.deg % 360}deg);` + time;
});

function ListDown(e: MouseEvent): void {
  const Listdom = e.target;
  flag = false;
  //   这里记录点击的位置
  data.lastX = e.pageX;
  const Move = function (e: MouseEvent): void {
    let moveX = e.pageX - data.lastX;
    let deg = moveX / data.radius;
    console.log(data.deg);
    data.deg += deg;
    data.lastX = e.pageX;
  };
  const Up = function (e: MouseEvent): void {
    document?.removeEventListener("mousemove", Move);
    document?.removeEventListener("mouseup", Up);
    restore();
  };
  document?.addEventListener("mousemove", Move);
  document?.addEventListener("mouseup", Up);
}
function restore() {
  flag = true;
  setTimeout(() => {
    data.deg = Math.round((data.deg % 360) / 60) * 60;
    console.error(data.deg);
  }, 50);
}
</script>

<style lang='scss' scoped>
// @function ball($num){
//   @return 60*$num
// }
// @mixin ball($num) {
//   .ball:nth-of-type($num) {
//     transform: rotate($num * 60deg) translateX(183px) translateY(22px);
//   }
// }
// @include ball(1);
// @include ball(2);
// @include ball(3);
// @include ball(4);
// @include ball(5);
// @include ball(6);
  $Width: 120px;
  $half-Width:60px;
  /* 此处修改是因为vsc命令行报错`$Width/2`,看着难受 */
div.Disk {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  position: relative;
}
.turntable {
  position: absolute;
  z-index: 10;
  left: -60px;
  top: 55px;
  width: $Width;
  height: $Width;
  border-radius: 50%;
  background-color: black;
  // margin: 200px auto;
  position: relative;
  transform: rotate(180deg);
  .ball {
    $ballWidth: 35px;
    position: absolute;
    width: $ballWidth;
    height: $ballWidth;
    border-radius: 50%;
    background: #169fe6;
    transform-origin: $half-Width $half-Width;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  // md，这里本来想用scss生成器的，结果他妈的搞不出来
  @mixin ball($num) {
    @for $var from 1 through $num {
      .ball:nth-of-type(#{$var}) {
        transform: rotate(($var + 1) * 60deg) translateX(20px) translateY(12px);
      }
    }
  }
  @include ball(6);
}
.CardShow {
  $Width: 300px;
  $Height: 380px;
  border-radius: 14px;
  width: $Width;
  height: $Height;
  overflow: hidden;
  .cardList {
    position: relative;
    // margin: 200px auto;
    margin-right: 70px;
    width: $Width;
    height: $Height;
    transform-style: preserve-3d;
    &:hover {
      animation-play-state: paused;
    }
    .card {
      position: absolute;
      top: 0;
      left: 0;
      width: $Width;
      height: $Height;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 14px;
      box-shadow: -1px 15px 30px -12px black;
      // box-shadow: 20px 20px 60px black, -20px -20px 60px black;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    @mixin cardSon($num) {
      @for $ing from 1 through $num {
        div:nth-child(#{$ing}) {
          transform: rotateY(($ing - 1) * 60deg) translateZ(400px);
        }
      }
    }
    @include cardSon(6);

    div:hover {
      box-shadow: 0 0 30px #169fe6;
    }
  }
}
</style>