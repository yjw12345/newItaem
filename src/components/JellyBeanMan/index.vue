<template>
  <div id="pacman">
    <div class="pac-man">
      <div class="slider">
        <div class="slide-track">
          <div v-for="(item,index) in feedList" :key="index" class="slide" ref="item">
            <img :src="getLogoUrl(item)" alt="" :id="index" class="feed-item">
          </div>
        </div>
      </div>
      <div class="pacman-total">
        <div class="pacman-top"></div>
        <div class="pacman-bottom"></div>
      </div>
      <div class="money">
        <p>the more you learn,the more you gain</p>
        <div class="count">${{money}}</div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, Ref, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
const item: any = ref(null);
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

const money: Ref<HTMLElement | any> = ref(3000);

const changeSize = () => {};
onMounted(() => {
  const func1 = () => {
    for (let i = 5; i < item.value.length; i++) {
      for (let j = 5; j > 0; j--) {
        if (i + j == 10) {
          item.value[i].style.transform = "scale(" + 0.2 * j + ")";
          //setInterval(func2,3600)
        }
      }
    }
  };
  const func2 = () => {
    for (let i = 3; i < 7; i++) {
      for (let j = 5; j > 0; j--) {
        if (i + j == 8) {
          //  clearInterval(timer1);
          item.value[i].style.transform = "scale(" + 0.2 * j + ")";
          //  setInterval(func3,5600)
        }
      }
    }
  };
  const func3 = () => {
    for (let i = 1; i < 6; i++) {
      for (let j = 5; j > 0; j--) {
        if (i + j == 6) {
          // clearInterval(timer2);
          item.value[i].style.transform = "scale(" + 0.2 * j + ")";
        }
      }
    }
  };
  const func4 = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 4; j > 0; j--) {
        if (i + j == 4) {
          // clearInterval(timer2);
          item.value[i].style.transform = "scale(" + 0.2 * j + ")";
        }
      }
    }
  };
  const origin = () => {
    for (let i = 0; i < item.value.length; i++) {
      item.value[i].style.transform = "scale(1)";
    }
    const timer1 = setTimeout(func1, 1000);
    const timer2 = setTimeout(func2, 3500);
    const timer3 = setTimeout(func3, 5000);
    const timer4 = setTimeout(func4, 6000);
  };
  origin();
  const timer4 = setInterval(origin, 8000);
});
/*-----------End----------- */
</script>

<style lang="scss">
  #pacman{
    background-color: skyblue;
  }
/* pacman's css */
.pac-man {
  display: flex;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  margin-top: 100px;
}
.pacman-total {
  z-index: 999;
}

.pacman-top {
  background-color: yellow;
  height: 120px;
  width: 240px;
  border-radius: 120px 120px 0 0;
  animation: spin1 1s infinite linear;
}
/* @keyframes smaller {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.6);
  }
}
 */
.slider {
  position: absolute;
  left: 0;
  background: transparent;
  //box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
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
    left: -800px;
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
  height: 120px;
  width: 240px;
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
$animationSpeed: 4s;
// Animation
@keyframes scroll {
  0% {
    transform: translateX(calc(-250px * 7));
    transform: scale(1);
  }
  50% {
    transform: translateX(calc(-250px * 3.5));
    transform: scale(0.7);
  }
  100% {
    transform: translateX(0);
    transform: scale(0.5);
  }
}

.test {
  transform: scale(0.5);
}
// Styling
</style>