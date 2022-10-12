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
        <img src="../../assets/frondEnd-tech-logo/frondend.jpg" alt="">
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
          <h2 class="about-title">* 前端的基本技术栈是什么？<br>
            &nbsp;&nbsp;&nbsp;Let us learn about it</h2>
          <p class="about-description">
            <strong>HTML</strong><br>（超文本标记语言HyperText Markup Language）<br>
            <strong>CSS</strong><br> (层叠样式表Cascading Style Sheets）是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。<br>
            <strong>JavaScript</strong><br>编程语言允许你在 Web 页面上实现复杂的功能。
          </p>
        </div>
        <div class="about-img">
          <img src="../../assets/frondEnd-tech-logo/threeskills.png" id="threeskills" alt="">
          <!-- html's logo -->
        </div>
      </div>
    </section>
    <section class="about about-css section">
      <div class="about-container">
        <div class="about-img">
          <img src="../../assets/frondEnd-tech-logo/frame.jpg" id="frame" alt="">
          <!-- html's logo -->
        </div>
        <div class="about-data">
          <h2 class="about-title">* 入门前端难吗？前端的就业景如何？<br>
            &nbsp;&nbsp;&nbsp;Let us learn about it</h2>
          <p class="about-description">
            前端入门比较简单，从开始学的三件套中，大部分属于记忆型，需要理解的不多。并且前端的反馈性远远大于其他方向，无论你写了什么，都会真实的反馈在页面上。前端debugger也很强，前端的错误一般可以通过控制台直接找到问题。但是高级的前端，需要精通js语言，去深入框架。目前，市场上的高级前端程序员需求仍然很大。
          </p>
        </div>
      </div>
    </section>
    <section class="about section">
      <div class="about-container">
        <div class="about-data">
          <h2 class="about-title">* 团队前端成员介绍<br>
            &nbsp;&nbsp;&nbsp;Let us learn about it</h2>
          <p class="about-description">
            团队的前端传承很久，出现了许多学习和技术方面都很优秀的师兄师姐们，如已经通过保研前往暨南大学的麦丽莹师姐，还有不少毕业进入大厂的师兄师姐们。团队的前端经常会进行讨论，一起学习，分享经验。
          </p>
        </div>
        <div class="about-img">
          <img src="../../assets/frondEnd-tech-logo/team.jpg" id="team" alt="">
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
  font-family: "Roboto", sans-serif;

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
      transform: scale(1);
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      img {
        box-shadow: 0px 17px 23px rgba(0, 0, 0, 0.34);
      }
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
      text-align: left;
      padding: 20px;
      .about-title {
        font-size: 30px;
      }
      .about-description {
        width: 300px;
        padding: 10px 0;
        font-size: 20px;
        margin-left: 30px;
      }
    }
    .about-img {
      display: flex;
      column-gap: 1rem;
      align-items: center;
      justify-content: center;
      transform: scale(1);
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      #threeskills {
        width: 500px;
        transform: scale(1.5);
        box-shadow: 0px 17px 23px rgba(0, 0, 0, 0.34);
      }
      #frame,
      #team {
        width: 400px;
        transform: scale(1.2);
        box-shadow: 0px 17px 23px rgba(0, 0, 0, 0.34);
      }
    }
  }
}
</style>