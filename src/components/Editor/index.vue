<template>
  <div class="BOX">
    <div class="contain">
      <codemirror
        id="editor1"
        v-model="code"
        placeholder="Welcome To ITAEM..."
        :style="style"
        :autofocus="true"
        :indent-with-tab="true"
        :tabSize="2"
        :extensions="extensions"
        @ready="log('ready', $event)"
        @change="change()"
        @focus="log('focus', $event)"
        @blur="log('blur', $event)"
      />
    </div>
    <div id="bird" class="sprite bird1"><div id="shit" class="shit"></div></div>
  </div>
</template>
<script>
import { Codemirror } from "vue-codemirror";
import { onMounted } from "@vue/runtime-core";
// import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { oneDark } from "@codemirror/theme-one-dark";

import { ref, reactive } from "vue";
export default {
  components: {
    Codemirror,
  },
  setup() {
    const code = ref(`Welcome To ITAEM...`);
    const extensions = [java(), oneDark];

    const style = reactive({
      position: "absolute",
      top: "67px",
      left: "120px",
      height: "564px",
      width: "80%",
      margin: "auto",
    });

    onMounted(() => {
      const editor = document.getElementById("editor1");
      const editorStyle = editor.firstChild;
      console.log(editorStyle);
      editorStyle.style.top=53+"px"
      editorStyle.style.width = '77%'
      editorStyle.style.left = 80+'px'
      editorStyle.style.height = 451+'px'
      editorStyle.style.backgroundColor = "transparent";
    });
    //------------------------------------------------
    // 设置小鸟扇翅膀
    var i = 0;
    var temp = 0;
    setInterval(function () {
      bird.className = `sprite bird${i++ % 3} ${
        temp == 1 ? "toLeft" : "toRight"
      }`;
      // bird.className = "sprite" + 'bird' + ((i++) % 3)
    }, 1000 / 10);
    // 防抖函数
    function debounce(fn, dur) {
      dur = dur || 100;
      var timer;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, dur);
      };
    }
    // 封装异步加载资源的方法
    function loadExternalResource(url, type) {
      return new Promise((resolve, reject) => {
        let tag;
        if (type === "js") {
          tag = document.createElement("script");
          tag.src = url;
        }
        if (tag) {
          tag.onload = () => resolve(url);
          tag.onerror = () => reject(url);
          document.head.appendChild(tag);
        }
      });
    }
    // 引入animator
    (async function InitalJs() {
      await loadExternalResource(
        "https://s1.qhres2.com/!bd39e7fb/animator-0.2.0.min.js",
        "js"
      );
    })();
    const urlLeft = "./小鸟（反）.png";
    // 监听鼠标移动事件，实现小鸟飞飞
    document.addEventListener(
      "mousemove",
      debounce(function (evt) {
        const birdLeft = bird.style.left;
        const index = birdLeft.indexOf("p");
        const nowLeft = birdLeft.substring(0, index);
        if (evt.clientX < nowLeft) {
          temp = 1;
        } else if (evt.clientX > nowLeft) {
          temp = 0;
        }
        var x = evt.clientX,
          y = evt.clientY,
          x0 = bird.offsetLeft,
          y0 = bird.offsetTop;

        // console.log(x, y);

        var a1 = new Animator(
          1000,
          function (ep) {
            bird.style.top = y0 + ep * (y - y0) + "px";
            bird.style.left = x0 + ep * (x - x0) + "px";
          },
          (p) => p * p
        );

        a1.animate();
      }, 10)
    );
    // document.addEventListener('mousedown',function(e){
    //   const shit = this.createElement('div')
    //   bird.appendChild(shit)
    //   shit.className = 'shit'
    //   shit.id = 'shit'
    // })
    document.addEventListener(
      "mouseup",
      debounce(function (e) {
        shit.className = "shit active";
        shit.style.visibility = "visible";
        setTimeout(() => {
          shit.style.visibility = "hidden";
          shit.className = "shit";
        }, 500);
      }, 500)
    );
    return {
      code,
      extensions,
      log: console.log,
      style,
    };
  },
  methods:{
    change(){
      const lineTol = document.getElementById
    }
  }
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
.BOX {
  position: relative;
  height: 100vh;
  // width: 100%;
  overflow: hidden;
}
.contain {
  position: relative;
  margin: 50px auto;
  width: 90%;
  height: 80vh;
  background-image: url(@/assets/IDEA1.png);
  background-size: 98% 91%;
  background-repeat: no-repeat;
  overflow: hidden;
}
// #editor1 :first-child{
//   top:52px;
//   left:77px;
//   width: 77%;
//   height: 454px;
//   margin:auto;
// }
#editor1 :nth-child(1) :nth-child(2) :nth-child(1) :first-child {
  // height: 100%;
  align-items:center;
  width: 27px;
  text-align: center;
  flex-shrink:unset;
  // flex-direction:unset
}
#editor1 :nth-child(1) :nth-child(2) :nth-child(1) :nth-child(2) {
  // height: 100%;
  width: 10px;
  align-items:center;
  flex-shrink:unset;
  // flex-direction:unset

}
#editor1 :nth-child(1) :nth-child(2) :nth-child(2){
  flex-shrink:unset;
  // flex-direction:unset

}

.sprite {
  display: inline-block;
  // display: none;
  // overflow: hidden;
  background-repeat: no-repeat;
  z-index: 1000;
}
.bird0 {
  width: 80px;
  height: 60px;
  background-position: -182px -2px;
}

.bird1 {
  width: 80px;
  height: 60px;
  background-position: -94px -2px;
}

.bird2 {
  width: 80px;
  height: 60px;
  background-position: -6px -2px;
}

#bird {
  position: absolute;
  left: 100px;
  top: 100px;
  transform: scale(0.5);
  /* transform-origin: x, y 以元素左上角为原点，重心距离原点x、y的距离 */
  transform-origin: -50% -50%;
}

.toRight {
  background-image: url(@/assets/angryBird/小鸟.png);
}

.toLeft {
  background-image: url(@/assets/angryBird/小鸟（反）.png);
}
#bird .shit {
  background-image: url(@/assets/angryBird/shitking.png);
  background-position-y: 33px;
  background-size: 600%;
  height: 100px;
  width: 100px;
  visibility: hidden;
  // transform: scale(1);
}
.active {
  // visibility: visible;
  transition: all 1s;
  transform: translateY(800px);
  scale: 3;
}
</style>