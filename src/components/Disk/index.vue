<template>
  <div id="backend">
    <div class="Disk" ref="Disk">
      <div
        class="turntable"
        :style="tableCss"
        ref="turntable"
        @mousedown="tableDown"
      >
        <div
          class="ball"
          v-for="(item, index) in colorList"
          :key="index"
          :style="item"
        >
          <img
            draggable="false"
            v-if="index < headList.length"
            :src="headList[index]"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="CardShow">
        <div class="cardList" @mousedown="ListDown" :style="ListCss">
          <div
            class="card"
            v-for="(item, index) in colorList"
            :style="item"
            :key="index"
          >
            <div class="introduce">
              <img
                draggable="false"
                v-if="index < headList.length"
                :src="headList[index]"
                alt=""
                srcset=""
              />
              <div class="total">
                <p class="name">{{ Infor[index].name }}</p>
                <p>
                  昵称 : {{ Infor[index].nickname }} | 联系方式 :
                  {{ Infor[index].contact }}
                </p>
                <p>
                  码龄 : {{ Infor[index].yard }} | 目标 :
                  {{ Infor[index].target }}
                </p>
              </div>
            </div>
            <div class="infor">
              <div class="detail">
                <span>自我介绍</span>
                : {{ Infor[index].selfIntrduction }}
              </div>
              <div class="detail">
                <span>兴趣爱好</span> : {{ Infor[index].habit }}
              </div>
              <div class="detail">
                <span>格言</span> : {{ Infor[index].motto }}
              </div>
            </div>
            <div class="other" v-if="Infor[index].other">
              <img
                :src="otherImg(Infor[index].other)"
                alt=""
                srcset=""
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, Ref, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import Infor from "./infor.json";
function otherImg(href: string) {
  return new URL(href, import.meta.url).href;
}
const imgList = ["元润", "奕泽", "振壹", "黄徽冠", "远健", "黄捷宇"];
const colorList = reactive([
  "background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);",
  "background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);",
  "background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);",
  "background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);",
  "background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);",
  "background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);",
]);
const headList:any = [];
const Disk: Ref<HTMLElement | null> = ref(null);
// 这一串都是给headlist加入图像地址，这里面弄这么复杂主要是因为防止展示的师兄的数量没有达到六的情况
for (let i = 0; i < imgList.length; i++) {
  const el = imgList[i];
  headList.push(getImageUrl(el));
}
// for (let i = imgList.length; i < colorList.length; i++) {
//   const el = colorList[i];
//   headList.push(el);
// }
// if (imgList.length < 6) {
//   headList.push(colorList);
// }
function getImageUrl(name: string) {
  return new URL(`./后端头像/${name}.jpg`, import.meta.url).href;
}
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
  position: 0,
});


const circle: Circle = { X: 1, Y: 1 };
// 转盘的flag
let turnflag = false;
const turntable: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  circle.X = turntable.value!.offsetLeft + 60 + Disk.value!.getBoundingClientRect().left;
  circle.Y = turntable.value!.offsetTop + 60 + Disk.value!.getBoundingClientRect().right;
  Disk.value!.getBoundingClientRect().left
  imgOpacityChange()
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
    data.position = Math.round((data.deg % 360) / 60);
    data.position = Math.round((data.deg % 360) / 60);
    data.deg = Math.round((data.deg % 360) / 60) * 60;
    imgOpacityChange()
    imgOpacityChange()
  }, 50);
}
// 给图片弄一个显隐样式
function imgOpacityChange() {
  for (let i = 0; i < turntable.value!.children.length; i++) {
    const el = turntable.value!.children[i];
    el.classList.remove("active");
    if (i == Math.abs(data.position)) {
      el.classList.add("active");
    }
  }
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
    data.position = Math.round((data.deg % 360) / 60);
  }, 50);
}
</script>

<style lang='scss' scoped>
div.Disk {
  width: 400px;
  margin: 0 auto;
  position: relative;
}

.turntable {
  $Width: 120px;
  $half-width:60px;
  position: absolute;
  z-index: 10;
  left: -129px;
  top: 142px;
  width: $Width;
  height: $Width;
  border-radius: 50%;
  background-color: black;
  // margin: 200px auto;
  position: relative;
  transform: rotate(180deg);


  .ball {
    opacity: 0.2;
    opacity: 0.2;
    $ballWidth: 35px;
    position: absolute;
    width: $ballWidth;
    height: $ballWidth;
    border-radius: 50%;
    background: #169fe6;
    transform-origin: $half-width $half-width;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .active {
    opacity: 1;
    transition: opacity 0.5s;
  }
  .active {
    opacity: 1;
    transition: opacity 0.5s;
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
  $Width: 400px;
  $Height: 700px;
  border-radius: 14px;
  width: $Width;
  overflow: hidden;
  .cardList {
    position: relative;
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
      // align-items: center;
      border-radius: 14px;
      box-shadow: -1px 15px 30px -12px black;
      .introduce {
        display: flex;
        margin-top: 50px;
        align-items: center;
        justify-content: center;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        div.total {
          margin-left: 15px;
          .name {
            color: #b87100;
            font-family: PingFang SC;
            font-size: 25px;
          }
        }
      }
      .infor {
        .detail {
          margin: 20px;
          span {
            font-weight: bold;
          }
        }
      }
      .other {
        margin: 0 auto;
        img {
          width: 400px;
          height: 353px;
        }
      }
    }
    @mixin cardSon($num) {
      @for $ing from 1 through $num {
        > div:nth-child(#{$ing}) {
          transform: rotateY(($ing - 1) * 60deg) translateZ(400px);
        }
      }
    }
    @include cardSon(6);
  }
}
</style>