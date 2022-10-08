<template>
  <div id="pacman">
    <div class="pac-man">
      <div class="slider">
        <div class="slide-track" ref="slider">
          <div v-for="(item, index) in feedList" :key="index" class="slide">
            <img :src="getLogoUrl(item)" alt="" :id="index" class="feed-item" />
          </div>
        </div>
      </div>
      <div class="pacman-total">
        <div class="pacman-top"></div>
        <div class="pacman-bottom"></div>
      </div>
      <div class="money">
        <p>the more you learn,the more you gain</p>
        <div class="count">${{ money }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, Ref, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
const slider: Ref<HTMLElement | null> = ref(null);
/* 后端技术栈logo*/
/*-----------Start------------ */
const getLogoUrl = (name: String) => {
  return new URL(`../../assets/backEnd-tech-logo/${name}`, import.meta.url)
    .href;
};
const feedList: string[] = [
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
const money: Ref<number> = ref(3000);
const addMoney = () => {
  money.value += 25;
};

onMounted(() => {
  // 1800是总位移，1080是实际动画位移时间，8000是动画发生的时间
  const imgList = slider.value!.children;
  let timer: number;
  function anmiation() {
    money.value = 3000;
    clearInterval(timer);
    setTimeout(() => {
      timer = setInterval(addMoney, 5);
    }, 2200);
    const time = ((1080 / 1800) * 8000) / 9;
    for (let i = 0; i < imgList.length; i++) {
      const el = imgList[imgList.length - i - 1];
      setTimeout(() => {
        el.animate(
          [
            { transform: "scale(1.0)" },
            { transform: "scale(0.5)" },
            { transform: "scale(0.5)" },
            { transform: "scale(0.5)" },
            { transform: "scale(1.0)" },
          ],
          {
            duration: 3000,
            fill: "forwards",
          }
        );
      }, time * i + 2200);
    }
  }
  slider.value!.addEventListener("webkitAnimationStart", anmiation);
  slider.value!.addEventListener("webkitAnimationIteration", anmiation);
});
</script>

<style lang="scss">
#pacman {
  background-color: skyblue;
  height: 286px;
  margin: 10px 0 0 0;
}
/* pacman's css */
.pac-man {
  display: flex;
  position: absolute;
  bottom: 71px;
  left: -242px;
  width: 1200px;
  // margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  // margin-top: 100px;
}
.pacman-total {
  z-index: 999;
}
.pacman-top,
.pacman-bottom {
  height: 120px;
  width: 240px;
}
.pacman-top {
  background-color: yellow;
  border-radius: 120px 120px 0 0;
  animation: spin1 1s infinite linear;
}

.slider {
  position: absolute;
  left: 0;
  background: transparent;
  height: 100px;
  overflow: hidden;
  width: 800px;
  top: 50%;
  transform: translateY(-50%);
  @keyframes scrollSlider {
    0% {
      left: -1000px;
    }
    100% {
      left: 800px;
    }
  }
  .slide-track {
    position: absolute;
    left: -1000px;
    animation: scrollSlider 8s linear infinite;
    display: flex;
  }

  .slide {
    height: 100px;
    width: 120px;
    transition: all 0.5s;
    img {
      // animation: smaller 1s forwards;
      width: 80px;
      height: 80px;
      margin: 10px 20px;
      // transform: translateX(-50px);
    }
  }
}

.money {
  font-size: 30px;
  font-weight: 700;
}
.pacman-bottom {
  background-color: yellow;
  border-radius: 0 0 120px 120px;
  animation: spin2 1s infinite linear;
}
/*pacman's animation*/
@keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-35deg);
  }
}
@keyframes spin1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(35deg);
  }
}
</style>