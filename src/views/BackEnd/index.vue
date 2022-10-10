<template>
  <div class="stage">
    <section class="intro slide--0" id="slide-0">
      <div class="intro__content">
        <h1 class="intro__title">Back-End</h1>
        <p class="intro__txt">
后台就是与数据打交道的，对前端传来的数据进存储管理，然后当前端需要什么数据时再返回给前端，说白了就是数据处理师，就好比前端是银行的柜台服务员，后端就是看管银行保险库的人员一样，前端传来数据就如同柜台服务员提交订单和物品，然后交给后端保险库人员去存储处理。
        </p>
      </div>
    </section>

    <section class="slide slide--1" id="slide-1">
      <div class="col col--1 slide1_col1">
        <div class="col__content col__content--1">
          <h2 class="col__content-title">
            <span class="line__inner">IDEA</span><br><span class="line__inner" style="font-size:30px;letter-spacing:0.2vw;margin: -152px 0 0 84px;">试试吧👉</span>
          </h2>
          <div class="col__content-wrap">
            <p class="col__content-txt">
              是一个适合用来写项目的编译器，因为IDEA编译器有自动补全代码的功能，也就是说你不需要准确的去记住JAVA语言的关键字，而且IDEA编译器可以直接帮你写完一些繁杂但又必需的方法（例如一个类的get、set的方法），除此之外IDEA编译器的集成功能也很强大，例如IDEA编译器的插件、Spring boot项目的直接创建等等。
            </p>
            <a href="#" class="slide-link">
              <div class="slide-link__circ"></div>
              <div class="slide-link__line"></div>
            </a>
          </div>
        </div>
        <a href="#slide-2" class="slide__scroll-link">
          <div class="slide__scroll-line"></div>
        </a>
      </div>
      <div class="col col--2 slide1_col2">
        <!-- <div class="col__image-wrap">
          <img
            class="img img--1"
            src="https://assets.codepen.io/61488/duda-1.jpg"
          />
        </div> -->
        <Editor/>
      </div>
    </section>

    <section class="slide slide--2" id="slide-2">
      <div class="col col--1">
        <div class="col__content col__content--2">
          <h2 class="col__content-title">
            <span class="line__inner">Look</span>
          </h2>
          <div class="col__content-wrap">
            <p class="col__content-txt">
              20届：吴远健师兄，黄捷宇师兄<br/>
        21届：唐奕泽师兄，钟振壹师兄，黄徽冠师兄，朱元润师兄<br/>
        六位师兄各有所长各有所好,具体请看-->
            </p>
            <a href="#" class="slide-link">
              <div class="slide-link__circ"></div>
              <div class="slide-link__line"></div>
            </a>
          </div>
        </div>
        <a href="#slide-3" class="slide__scroll-link">
          <div class="slide__scroll-line"></div>
        </a>
      </div>
      <div class="col col--2 bg">
        <div class="col__image-wrap diskCon">
          <Disk class="disk"/>
        </div>
      </div>
    </section>

    <section class="slide slide--3" id="slide-3">
      <div class="col col--2 slide3_col1">
        <div class="salary">
          <img src="../../assets/后端薪资/salary1.png" alt="" class="salaryImg">
          <img src="../../assets/后端薪资/salary2.png" alt="" class="salaryImg">
        </div>
       <JellyBeanMan class="Jelly"/>
      </div>
      <div class="col col--1 slide3_col2">
        <div class="col__content col__content--3">
          <h2 class="col__content-title">
            <span class="line__inner">Salary</span>
          </h2>
          <div class="col__content-wrap">
            <p class="col__content-txt">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Etiam porta sem malesuada magna mollis euismod.
            </p>
          </div>
        </div>
      </div>
      
    </section>

    <footer class="footer" id="slide-7">
      <a class="footer__link" target="_blank"
        >欢迎加入后端大家庭！</a
      >
      <a class="footer__link-top" href="#slide-0"
        >Top<span class="footer__link-top-line"></span
      ></a>
      <p class="footer__copyright">ITAEM 2021 🐸</p>
    </footer>
  </div>
</template>

<script>
import gsap from "gsap";
// import {gsap, ScrollTrigger, ScrollToPlugin, SplitText} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { SplitText } from "gsap/TextPlugin";
import Editor from "@/components/Editor/index.vue"
import Disk from "@/components/Disk/index.vue";
import JellyBeanMan from "@/components/JellyBeanMan/index.vue"
export default {
  components:{Editor,Disk,JellyBeanMan},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    // gsap.registerPlugin(SplitText);
    const select = (e) => document.querySelector(e);
    const selectAll = (e) => document.querySelectorAll(e);

    const stage = select(".stage");
    const slides = selectAll(".slide");
    const links = selectAll(".slide__scroll-link");
    // const titles = selectAll(".col__content-title");
    let slideID = 0;

    

    function initIntro() {
      // animate the intro elements into place

      let tl = gsap.timeline({ delay: 1.2 });

      tl.from(
          ".intro__txt",
          {
            x: -100,
            opacity: 0,
            ease: "power4",
            duration: 3,
          },
          0.7
        )

      // set up scrollTrigger animation for the when the intro scrolls out

      let stl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          scrub: 1,
          start: "top bottom", // position of trigger meets the scroller position
          end: "bottom top",
        },
      });

      stl
        .to(".intro__title", {
          x: 400,
          ease: "power4.in",
          duration: 3,
        })
        .to(
          ".intro__txt",
          {
            y: 100,
            ease: "power4.in",
            duration: 3,
          },
          0
        );
    }

    function initLinks() {
      // ScrollToPlugin links

      links.forEach((link, index, e) => {
        let linkST = link.querySelector(".slide__scroll-line");

        link.addEventListener("click", (e) => {
      console.log(2);
          e.preventDefault();
          gsap.to(window, {
            duration: 2,
            scrollTo: {
              y: "#slide-" + (index + 2),
            },
            ease: "power2.inOut",
          });
          slideID++;
        });

        link.addEventListener("mouseover", (e) => {
          gsap.to(linkST, {
            y: 40,
            transformOrigin: "bottom center",
            duration: 0.6,
            ease: "power4",
          });
        });

        link.addEventListener("mouseout", (e) => {
      console.log(3);

          gsap.to(linkST, {
            y: 0,
            transformOrigin: "bottom center",
            duration: 0.6,
            ease: "power4",
          });
        });
      });

      // ScrollToPlugin link back to the top

      let top = select(".footer__link-top");

      top.addEventListener("click", (e) => {
      console.log(4);

        e.preventDefault();
        scrollTop();
      });

      top.addEventListener("mouseover", (e) => {
      console.log(5);

        gsap.to(".footer__link-top-line", {
          scaleY: 3,
          transformOrigin: "bottom center",
          duration: 0.6,
          ease: "power4",
        });
                console.log(111);
      });

      top.addEventListener("mouseout", (e) => {
      console.log(6);

        gsap.to(".footer__link-top-line", {
          scaleY: 1,
          transformOrigin: "bottom center",
          duration: 0.6,
          ease: "power4",
        });
      });

      // Dummy slide links

      let slideLinks = selectAll(".slide-link");

      slideLinks.forEach((slideLink, index, e) => {
        let slideL = slideLink.querySelector(".slide-link__line");

        slideLink.addEventListener("mouseover", (e) => {
          console.log(1);
          gsap.to(slideL, {
            x: 20,
            scaleX: 0.3,
            transformOrigin: "right center",
            duration: 0.8,
            ease: "power4",
          });
        });
        slideLink.addEventListener("mouseout", (e) => {
          
          gsap.to(slideL, {
            x: 0,
            scaleX: 1,
            transformOrigin: "right center",
            duration: 0.8,
            ease: "power4",
          });
        });
      });
    }

    function initSlides() {
      // Animation of each slide scrolling into view

      slides.forEach((slide, i) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "40% 50%", // position of trigger meets the scroller position
          },
        });

        tl.from(slide.querySelectorAll(".col__content-title"), {
          ease: "power4",
          y: "+=5vh",
          duration: 2.5,
        })
          .from(
            slide.querySelectorAll(".line__inner"),
            {
              y: 200,
              duration: 2,
              ease: "power4",
              stagger: 0.1,
            },
            0
          )
          .from(
            slide.querySelectorAll(".col__content-txt"),
            {
              x: 100,
              y: 50,
              opacity: 0,
              duration: 2,
              ease: "power4",
            },
            0.4
          )
          .from(
            slide.querySelectorAll(".slide-link"),
            {
              x: -100,
              y: 100,
              opacity: 0,
              duration: 2,
              ease: "power4",
            },
            0.3
          )
          .from(
            slide.querySelectorAll(".slide__scroll-link"),
            {
              y: 200,
              duration: 3,
              ease: "power4",
            },
            0.4
          )
          .to(
            slide.querySelectorAll(".slide__scroll-line"),
            {
              scaleY: 0.6,
              transformOrigin: "bottom left",
              duration: 2.5,
              ease: "elastic(1,0.5)",
            },
            1.4
          );
      });

      // External footer link scroll animation

      gsap.from(".footer__link", {
        scrollTrigger: {
          trigger: ".footer",
          scrub: 2,
          start: "50% 100%", // position of trigger meets the scroller position
          end: "0% 0%",
        },
        y: "20vh",
        ease: "sine",
      });
    }

    function initParallax() {
      slides.forEach((slide, i) => {
        let imageWrappers = slide.querySelectorAll(".col__image-wrap");

        gsap.fromTo(
          imageWrappers,
          {
            y: "-30vh",
          },
          {
            y: "30vh",
            scrollTrigger: {
              trigger: slide,
              scrub: true,
              start: "top bottom", // position of trigger meets the scroller position
              snap: {
                snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
                duration: 1,
                ease: "power4.inOut",
              },
            },
            ease: "none",
          }
        );
      });
    }

    function scrollTop() {
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: "#slide-0",
        },
        ease: "power2.inOut",
      });
      gsap.to(".footer__link-top-line", {
        scaleY: 1,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "power4",
      });
    }

    // function initKeys() {
    //   document.addEventListener("keydown", (e) => {
    //     e.preventDefault();
    //     if (event.keyCode == 40) {
    //       //down arrow to next slide
    //       if (slideID <= slides.length) {
    //         slideID++;
    //         gsap.to(window, {
    //           duration: 2,
    //           scrollTo: {
    //             y: "#slide-" + slideID,
    //           },
    //           ease: "power2.inOut",
    //         });
    //       }
    //     } else if (event.keyCode == 38) {
    //       // up arrow to top
    //       slideID = 0;
    //       scrollTop();
    //     }
    //   });
    // }

    function init() {
      gsap.set(stage, { autoAlpha: 1 });
      initIntro();
      initLinks();
      initSlides();
      initParallax();
      // initKeys();
    }

    window.onload = () => {
      init();
    };
  },
    
};
</script>

<style lang="scss" scoped>
:root {
  --dark: #242423;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  min-height: 100vh;
}

.logo,
h1,
h2 {
  margin: 0;
  line-height: 1;
  font-family: "Cinzel", serif;
  font-weight: 400;
}

p {
  margin: 0;
}

.stage {
  position: relative;
  background: white;
  visibility: hidden;
}

/*  ========================================================================== 
    Nav Header
    ========================================================================== */

.header {
  position: fixed;
  left: 40px;
  top: 24px;
  z-index: 100;
  display: flex;

  @media all and (max-width: 768px) {
    display: block;
    left: 24px;
  }
}

.logo {
  font-size: 27px;
  letter-spacing: -1px;
}

.nav-btn,
.nav-btn__svg {
  width: 56px;
  height: 30px;
}

.nav-btn {
  display: block;
  margin: -2px 0 0 56px;

  @media all and (max-width: 768px) {
    margin: 18px 0 0 -6px;
  }
}

.nav-btn__svg {
  pointer-events: none;
}

/*  ========================================================================== 
    Intro
    ========================================================================== */

.intro,
.footer {
  height: 100vh;
}

.intro {
  position: relative;
  // padding: 5vw
  background: #c0d7d8;
  overflow: hidden;
}

.intro__content {
  position: absolute;
  right: 8%;
  bottom: 15%;
  z-index: 3;

  @media all and (max-width: 768px) {
    right: auto;
  }
}

.intro__title {
  font-size: 25vw;
  overflow: hidden;
  letter-spacing: -2.3vw;
  padding-right: 2.3vw;

  @media all and (max-width: 768px) {
    margin-bottom: 5vh;
  }
}

.intro__img {
  position: absolute;
  width: 35%;
  max-width: 390px;
  height: auto;

  @media all and (max-width: 768px) {
    width: 75vw;
  }
}

.intro__img--1 {
  z-index: 2;
  left: 10%;
  bottom: 35%;

  @media all and (max-width: 768px) {
    // top: 15vh;
    left: 50%;
    bottom: 50vh;
  }
}

.intro__img--2 {
  z-index: 1;
  left: 25%;
  bottom: 40%;

  @media all and (max-width: 768px) {
    // top: 2vh;
    left: 70%;
    bottom: 60vh;
  }
}

.intro__txt {
  max-width: 35vw;
  margin-left: 25vw;

  @media all and (max-width: 768px) {
    max-width: 80vw;
    margin-left: 5vw;
  }
}

/*  ========================================================================== 
    Slides
    ========================================================================== */

.slide {
  display: flex;
  align-items: stretch;
  height: 100vh;
  overflow: hidden;

  &:nth-of-type(even) {
    background: #c4cdc4;
  }

  @media all and (max-width: 768px) {
    display: block;
    position: relative;
  }
}

/*  Columns
    ========================================================================== */

.col {
  flex-basis: 50%;

  @media all and (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100vh;
  }
}

.col--1 {
  position: relative;
  z-index: 1;

  @media all and (max-width: 768px) {
    position: relative;
    z-index: 1;
  }
}

.col--2 {
  position: relative;
  overflow: hidden;

  @media all and (max-width: 768px) {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
  }
}
.slide1_col1{
  flex-basis: 30%;
}
.slide1_col2{
  flex-basis: 70%;
}
.slide3_col1{
  flex-basis: 70%;
}
.slide3_col2{
  flex-basis: 30%;
}
/*  ========================================================================== 
    Column Content
    ========================================================================== */

.col__content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  height: 100%;
  padding: 0vw 4vw 10vw;

  @media all and (max-width: 768px) {
    width: 80%;
  }
}

.col__content--1 {
  background: #d8c0c0;

  @media all and (max-width: 768px) {
    background: rgba(#d8c0c0, 0.9);
  }
}

.col__content--2 {
  background: #cdd5e0;

  @media all and (max-width: 768px) {
    background: rgba(#cdd5e0, 0.9);
  }
}

.col__content--3 {
  background: #f3d3b0;

  @media all and (max-width: 768px) {
    background: rgba(#f3d3b0, 0.9);
  }
}

.col__content--4 {
  background: #f8e9e6;

  @media all and (max-width: 768px) {
    background: rgba(#f8e9e6, 0.9);
  }
}

.col__content--5 {
  background: #d1e2ec;

  @media all and (max-width: 768px) {
    background: rgba(#d1e2ec, 0.9);
  }
}

.col__content--6 {
  background: #d7cec5;

  @media all and (max-width: 768px) {
    background: rgba(#d7cec5, 0.9);
  }
}

/*  Column Content
    ========================================================================== */

.col__content-title {
  margin: 0 0 2vw;
  font-size: 11vw;
  letter-spacing: -0.8vw;

  @media all and (max-width: 768px) {
    margin: 0 0 6vw;
    font-size: 18vw;
  }
}

.col__content-wrap {
  display: flex;
  justify-content: flex-end;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
}

.col__content-txt {
  max-width: 22vw;
  order: 2;
  margin-left: 32px;

  @media all and (max-width: 768px) {
    order: 1;
    max-width: 40vw;
    margin: 0 0 10vw 10vw;
  }
}

.slide-link {
  position: relative;
  order: 1;
  display: flex;
  justify-content: flex-end;
  width: 75px;
  height: 53px;

  > * {
    pointer-events: none;
  }

  @media all and (max-width: 768px) {
    order: 2;
    align-self: flex-end;
  }
}

.slide-link__circ {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  border: 1px solid var(--dark);
}

.slide-link__line {
  position: absolute;
  top: 25px;
  left: 0;
  width: 64px;
  height: 3px;
  background: var(--dark);
}

.line {
  overflow: hidden;

  &:nth-of-type(even) {
    margin-top: -1vw;
  }
}

.line__inner {
  display: block;
}

.slide__scroll-link {
  position: absolute;
  right: -113px;
  bottom: 3.5vw;
  display: block;
  width: 140px;
  height: 140px;
  background: var(--dark);
  overflow: hidden;

  @media all and (max-width: 768px) {
    display: none;
  }
}

.slide__scroll-line {
  position: absolute;
  left: 26px;
  bottom: 0;
  width: 1px;
  height: 100%;
}

.slide--0 {
  .slide__scroll-line {
    background: #c0d7d8;
  }
}

.slide--1 {
  .slide__scroll-line {
    background: #d8c0c0;
  }
}

.slide--2 {
  .slide__scroll-line {
    background: #cdd5e0;
  }
}

.slide--3 {
  .slide__scroll-line {
    background: #f3d3b0;
  }
}

.slide--4 {
  .slide__scroll-line {
    background: #f8e9e6;
  }
}

.slide--5 {
  .slide__scroll-line {
    background: #d1e2ec;
  }
}

.slide--6 {
  .slide__scroll-line {
    background: #d7cec5;
  }
}

/*  ========================================================================== 
    Column Image
    ========================================================================== */

.col__image-wrap {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 160vh;
}

.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/*  ========================================================================== 
    Footer
    ========================================================================== */

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #cecece;
}

.footer__link {
  font-size: 5vw;
  color: var(--dark);
  text-decoration: none;
  font-family: "Cinzel", serif;
}

.footer__link-top {
  position: absolute;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: var(--dark);
  font-size: 18px;
  color: white;
  text-decoration: none;
  font-family: "Cinzel", serif;
}

.footer__link-top-line {
  position: absolute;
  top: -50px;
  left: 50%;
  width: 1px;
  height: 50px;
  background: var(--dark);
}

.footer__copyright {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
}
.disk{
  margin: 62px auto;
}
.salary{
  display: flex;
  justify-content: space-evenly;
}
.salaryImg{
  width: 400px;
  height: 400px;
}
.diskCon{
  top:57%
}
.bg{
  background-image: url("https://assets.codepen.io/61488/duda-5.jpg");
}
</style>
