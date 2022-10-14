<template>
  <div class="heart">
    <section class="excellent">
      <div class="text">
        <p class="title">团队优秀师兄介绍</p>
        <p>ITAEM安卓部门虽然比较年轻，但是已经毕业/即将毕业的师兄都很优秀。</p>
        <p>17届的张泽鸿师兄已经入职网易工作。</p>
        <p>
          19届即将毕业的陈昊师兄，于2022年获得大学生计算机设计大赛国家一等奖，并作为软件专业第一报送暨南大学。
        </p>
      </div>
      <div class="img">
        <img src="@/assets/安卓/person.jpg" alt="" srcset="" />
      </div>
    </section>
    <section class="java">
      <div class="img">
        <img src="@/assets/安卓/java.png" alt="" srcset="" />
      </div>
      <div class="text">
        <p class="title">Java</p>
        <p>Java是可以用来从事安卓开发的编程语言之一。</p>
        <p>
          Java作为一款面向对象的编程语言，相对比较容易上手学习，也是部分专业的必修课程。
        </p>
        <p>所以用Java入门安卓是个不错选择。</p>
      </div>
    </section>
    <section class="tool1">
      <div class="text">
        <p class="title">Android Studio</p>
        <p>
          <a href="https://developer.android.google.cn/studio"
            >Android Studio</a
          >
          是谷歌推出的一个基于IntelliJ 。
        </p>
        <p>IDEA的安卓集成开发工具，是如今进行安卓原生开发的主流工具</p>
        <p>
          我们可以在android
          studio上，开发手机、平板、可穿戴设备（谷歌眼镜、手表）、TV、自动汽车等app。
        </p>
      </div>
      <div class="img">
        <img src="@/assets/安卓/tool.png" alt="" srcset="" />
      </div>
    </section>
    <section class="tool2">
      <div class="img">
        <img src="@/assets/安卓/tool.jpg" alt="" srcset="" />
      </div>
      <div class="text">
        <p class="title">Kotlin</p>
        <p>kotlin是一种在 Java 虚拟机上运行的静态类型编程语言</p>
        <p>被称之为 Android 世界的Swift，由 JetBrains 设计开发并开源</p>
        <p>在Google I/O 2017中，Google 宣布 Kotlin 成为 Android 官方开发语言</p>
        <p>
          Kotlin拥有很多优点，诸如：简洁性，安全性（可以避免空指针异常等整个类的错误），互操作性等等。
        </p>
      </div>
    </section>
    <section class="androidStrong">
      <div class="plane">
        <div class="text">
          <p class="title">游戏</p>
          <p>
            安卓端还能制作游戏,坦克大战,飞机大战等等童年回忆完全可以由你一行行代码写出来
          </p>
        </div>
        <div class="img">
          <img class="gif" src="@/assets/安卓/飞机大战.gif" alt="" srcset="" />
        </div>
      </div>
      <div class="SpecialEffects">
        <div class="text">
          <p class="title">特效</p>
          <p>
            在学习安卓后,我们不只是可以制作微信等工具类app,还可以实现出有趣而又华丽的特效,安卓有独属于自己的可视化界面。
          </p>
        </div>
        <div class="img">
          <img class="gif" src="@/assets/安卓/特效.gif" alt="" srcset="" />
        </div>
      </div>
    </section>
    <section class="wallpaper">
      <div class="img">
        <img class="gif" src="@/assets/安卓/壁纸1.gif" alt="" srcset="" />
        <img class="gif" src="@/assets/安卓/壁纸2.gif" alt="" srcset="" />
        <img class="gif" src="@/assets/安卓/壁纸3.gif" alt="" srcset="" />
      </div>
      <div class="text">
        <p class="title">壁纸</p>
        <p>
          想必大家手机上都有各式各样的炫酷壁纸,而我们安卓也可以自定义出独属于自己的动态壁纸,体验从无到有制作动态壁纸的成就感
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import ScrollReveal from "scrollreveal";
onMounted(() => {
  const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
    reset: true,
  });
  sr.reveal(".excellent ", { origin: "left" });
  sr.reveal(".java ", { origin: "right" });
  sr.reveal(".tool1 ", { origin: "left" });
  sr.reveal(".tool2 ", { origin: "right" });
  sr.reveal(".androidStrong ", { origin: "left" });
  sr.reveal(".wallpaper ", { origin: "right" });
});
</script>

<style lang='scss' scoped>
@font-face {
  font-family: 铁蒺藜体;
  src: url(@/assets/font-family/铁蒺藜体.TTF);
}

.heart {
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  overflow: hidden;
  section {
    width: 1200px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;

    > div {
      width: 500px;
    }
    .text {
      p {
        margin: 10px 0;
      }
      p.title {
        font-size: 30px;
        font-family: 铁蒺藜体;
        font-weight: bold;
      }
      p:not(.title) {
        font-size: 18px;
      }
    }
    .img {
      display: flex;
      justify-content: center;
      img:hover {
        transform: scale(1.05);
      }
      img {
        width: 500px;
        transition: all 0.2s;
        box-shadow: 0px 17px 23px rgba(0, 0, 0, 0.34);
      }
    }
  }
  .excellent {
    img {
      width: 400px;
    }
  }
  .androidStrong {
    > div {
      display: flex;
      flex-direction: column;
      .img {
        margin-top: 40px;

        img {
          display: block;
          width: 300px;
          height: 600px;
        }
      }
    }
  }
  .wallpaper {
    .img {
      display: flex;
      img {
        width: 200px;
        height: 350px;
      }
    }
  }
}
</style>