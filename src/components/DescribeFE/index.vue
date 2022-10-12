<script setup>
import { onMounted, ref } from 'vue'
import ScrollReveal from 'scrollreveal'
const toRotate = '什么是前端?'
let text = ref('')
let delta = 300 - Math.random() * 100
let isDeleting = false
const setText = (i) => {
  text.value = i
}
const tick = () => {
  let updatedText = isDeleting ? toRotate.substring(0, text.value.length - 1) : toRotate.substring(0, text.value.length + 1)
  setText(updatedText)
  if (updatedText.length === toRotate.length) {
    isDeleting = true
  } else if (updatedText.length == 0) {
    isDeleting = false
  }
}
onMounted(() => {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
  })
  sr.reveal('.about ', { origin: 'left' })
  sr.reveal('.main ', { origin: 'right' })
  sr.reveal('.about-css ', { origin: 'right' })
  let timer = setInterval(tick, delta)
})
</script>

<template>
  <div id="describe">
    <div class="main">
      <div class="pic">
        <img src="@/assets/frondEnd-tech-logo/frondend.jpg" alt="">
      </div>
      <div class="desc">
        <h1 class="title">{{text}}</h1>
        前端又称Web前端。前端即网站前台部分,运行在PC端,移动端等浏览器上展现给用户浏览的网页。前端是网页给访问网站的人看的内容和页面。是为了网页或者网页应用,使用
        <span>HTML</span>
        ,
        <span>CSS</span>
        以及<span>JS</span>

        代码,用户能够看到并且和这些页面进行交流。
      </div>
    </div>
    <section class="about section">
      <div class="about-container">
        <div class="about-data">
          <h2 class="about-title">What is HTML?<br>
            Let us learn about it</h2>
          <p class="about-description">
            HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。除 HTML 以外的其它技术则通常用来描述一个网页的表现与展示效果（如 CSS），或功能与行为（如 JavaScript）。
          </p>
        </div>
        <div class="about-img">
          <img src="../../assets/frondEnd-tech-logo/html.png" alt="">
          <!-- html's logo -->
        </div>
      </div>
    </section>
    <section class="about about-css section">
      <div class="about-container">
        <div class="about-img">
          <img src="../../assets/frondEnd-tech-logo/css.png" alt="">
          <!-- html's logo -->
        </div>
        <div class="about-data">
          <h2 class="about-title">What is CSS?<br>
            Let us learn about it</h2>
          <p class="about-description">
            层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 样式表 语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。
          </p>
        </div>
      </div>
    </section>
    <section class="about section">
      <div class="about-container">
        <div class="about-data">
          <h2 class="about-title">What is JavaScript?<br>
            Let us learn about it</h2>
          <p class="about-description">
            JavaScript 编程语言允许你在 Web 页面上实现复杂的功能。如果你看到一个网页不仅仅显示静态的信息，而是显示依时间更新的内容，或者交互式地图，或者 2D/3D 动画图像，或者滚动的视频播放器，等等——你基本可以确定，这需要 JavaScript 的参与。
          </p>
        </div>
        <div class="about-img">
          <img src="../../assets/frondEnd-tech-logo/js.png" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
#describe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: -webkit-radial-gradient(
      closest-corner,
      rgba(16, 47, 70, 0) 60%,
      rgba(16, 47, 70, 0.2)
    ),
    -webkit-linear-gradient(108deg, #e0da81, #e0a681 10%, #a9b5f2 90%);
  .main {
    display: flex;
    padding: 100px 0;
    margin: 0 auto;
    .title {
      height: 100px;
    }
    .desc {
      width: 400px;
      margin-top: 20px;
      font-size: 20px;
      text-indent: 2em;
      span {
        background-color: yellow;
      }
    }
    .pic {
      width: 300px;
      margin-right: 250px;
      padding: 20px;
    }
  }
}
/*=============== ABOUT ===============*/
.section {
  padding: 80px 0;
}
.about {
  width: 1200px;
  margin: 0 auto;
  .about-container {
    display: flex;
    row-gap: 2.5rem;
    justify-content: space-around;
    .about-data {
      text-align: center;
      padding: 20px;
      .about-title {
        font-size: 30px;
      }
      .about-description {
        width: 250px;
        padding: 10px 0;
        font-size: 20px;
      }
    }
    .about-img {
      display: flex;
      column-gap: 1rem;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>