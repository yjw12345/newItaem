<template>
  <div class="AI">
    <img src="@/assets/image.png" alt="" id="nagivation" />
    <div class="Line" style="height: 200px"></div>
    <img src="@/assets/AI/大脑子.svg" alt="" id="bigBrain" />
    <div class="Line" style="height: 80px"></div>
    <div class="first container">
      <div class="introduce">
        <div class="title"><span>人工智能</span><span>是什么？</span></div>
        <ul>
          <li class="first">其实人工智能遍布我们日常的身边</li>
          <li>你是否惊讶于：</li>
          <li>BILIBILI主页给你推送的，都是你经常流量的类型？</li>
          <li>网易云，QQ音乐给你每日推送的歌单都符合你的胃口？</li>
          <li>通过一系列的问答题，可以大致推理出你的性格？</li>
          <li>无人机 能智能地在天空翱翔？</li>
          <li>校园和手机电脑一下子就能认出你漂亮的面孔？</li>
          <li>机器人居然能在下棋的领域能爆杀人类大师？</li>
          <li style="list-style-type: none">.............</li>
        </ul>
      </div>
      <div class="football">
        <img src="@/assets/AI/足球.png" alt="" />
        <p>预测足球比赛 球员的下一步动作</p>
      </div>
    </div>
    <div class="Line" style="height: 200px"></div>
    <div class="AIName">
      <div class="firstTitle">ITAEM 实验室 中的AI小组</div>
      <div class="secondTitle">欢迎报考 ITAEM 人工智能领域</div>
    </div>
    <div class="secondLine container">
      <div class="white">
        <img src="@/assets/AI/see2.jpg" alt="" srcset="">
      </div>
      <div class="Line" style="height: 600px; background-color: #cf876f"></div>
      <div class="atmosphere">
        <div class="learn">互帮互助的学习氛围!</div>
        <div class="same">师兄师姐 永远 和师弟师妹处于同一阶级!</div>
        <div class="talk">
          在ITAEM 实验室，你永远可以和学长一起在会议室中讨论大家的见解,
          通过课堂讨论互动的形式, 让学习人工智能更加有趣 与 有冲劲!
        </div>
        <div class="match">
          以师兄 冲锋带头, 一起参加各种含金量比赛! 相互学习,相互尊重才是大学生
          实验室该有的学习氛围!
        </div>
        <img src="@/assets/AI/脑子.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="ball"></div>

    <div class="plan container">实现真正的物联网技术, 顺应5G传输时代!</div>
    <div class="thirdLine container">
      <div class="study">
        我们以兴趣为主,在学习的过程中,我们添加多种搭载人工智能的工具比如我们的树莓派以及Arduino开发板,
        去实现多种好玩的人工智能物件, 在ITAEM我们会一起去合作,
        一起去开发大家都喜欢的玩意, 比如说 会识别特定声纹的机器小狗等等
      </div>
      <div class="Line" style="height: 269px; background: #d8d8d8"></div>
      <div class="score">
        <p>AI 计科(卓越班) 志杰师兄 保研到深圳大学 攻读 人工智能硕士学位</p>
        <p>AI 计科 振明师兄 以计科第一名 获得保研推免资格</p>
        <p>AI 计科 吴远健师兄 考研到华南理工大学</p>
      </div>
    </div>
    <div class="container fourthLine">
      <div class="yuanjian">
        <img src="@/assets/AI/书签.svg" alt="" srcset="" />
        <div class="peopleInfor">
          <p class="brother">现役师兄 :</p>
          <div class="mailbox">
            <div class="head"></div>
            <div class="mailboxInfor">
              <p>计算机科学系 AI 吴远健</p>
              <p>邮箱: racheinwu@outlook.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="showWork">
        <img src="@/assets/AI/tupian.svg" alt="" />
      </div>
      <div class="Robot">
        <img src="@/assets/AI/robotLine.svg" id="robotLine" alt="" srcset="" />
        <img src="@/assets/AI/robot.svg" id="robot" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.AI {
  background-color: #0d1221;
  position: relative;

  .first {
    .introduce {
      span:nth-of-type(1) {
        font-family: SourceHanSansCN-Bold;
        font-size: 80px;
        font-weight: bold;
        line-height: 40px;
        letter-spacing: 0em;
        color: #38dbd5;
      }
      span:nth-of-type(2) {
        font-family: SourceHanSansCN-Bold;
        font-size: 30px;
        font-weight: bold;
        line-height: 17px;
        letter-spacing: 0em;
        color: #9e9e9e;
      }
      ul {
        margin-top: 40px;

        li {
          margin-left: 20px;
          font-family: SourceHanSansCN-Regular;
          font-size: 20px;
          font-weight: normal;
          line-height: 25px;
          letter-spacing: 0em;
          color: #9e9e9e;
          list-style-type: circle;
        }
        li.first {
          margin-left: 0;
        }
      }
    }
    .football {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        font-weight: normal;
        line-height: 25px;
        letter-spacing: 0em;
        color: #9e9e9e;
      }
    }
  }
  .secondLine {
    .white {
      width: 500px;
      height: 643px;
      // background: #d8d8d8;
      img{
        width: 100%;
      }
    }
    .atmosphere {
      width: 500px;
      div {
        margin: 10px 0;
      }
      .learn {
        font-family: SourceHanSansCN-Bold;
        font-size: 50px;
        font-weight: bold;
        letter-spacing: 0em;
        color: #ffeda5;
      }
      .same {
        font-family: SourceHanSansCN-Medium;
        font-size: 25px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
        color: #9e9e9e;
      }
      .talk,
      .match {
        font-family: SourceHanSansCN-Bold;
        font-size: 23px;
        font-weight: bold;
        line-height: 40px;
        letter-spacing: 0.03em;
        color: #ffffff;
      }
      img {
      }
    }
  }
  .plan {
    font-family: SourceHanSansCN-Bold;
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
    letter-spacing: 0em;
    color: #ffffff;
    padding-top: 30px;
  }
  .thirdLine {
    padding-top: 40px;
    .study {
      font-family: SourceHanSansCN-Bold;
      font-size: 24px;
      font-weight: bold;
      line-height: 43px;
      letter-spacing: 0em;
      color: #b5b5b5;
    }
    .score {
      p {
        font-family: SourceHanSansCN-Bold;
        font-size: 17px;
        font-weight: bold;
        line-height: 42px;
        letter-spacing: 0em;
        color: #9e9e9e;
      }
    }
    .study,
    .score {
      width: 500px;
    }
  }
  .ball {
    width: 21px;
    height: 21px;
    background: #d8d8d8;
    margin: 20px auto;
    border-radius: 50%;
  }
  .fourthLine {
    position: relative;
    .yuanjian {
      height: 280px;

      img {
        width: 140px;
      }
      .peopleInfor {
        padding-top: 20px;
        font-family: SourceHanSansCN-Bold;
        font-size: 20px;
        font-weight: bold;
        line-height: 17px;
        letter-spacing: 0em;
        color: #9e9e9e;
        display: inline-block;
        .brother {
          margin-bottom: 20px;
        }
        .mailbox {
          display: flex;
          width: 300px;
          justify-content: space-between;
          align-items: center;
          .head {
            width: 50px;
            height: 50px;
            background-color: #d8d8d8;
          }
          p {
          }
          .mailboxInfor {
          }
        }
      }
    }
    .peopleInfor {
    }
    .showWork {
      img {
        width: 600px;
      }
    }
    .Robot {
      position: absolute;
      bottom: 0;
      @keyframes move {
        0%{
          left: 58px;
        }
        100%{
          left: 364px;
        }
      }
      #robotLine {
        position: absolute;
        bottom: 0;
        left: 0px;
        width: 625px;
      }
      #robot {
        position: absolute;
        bottom: 53px;
        height: 130px;
        left: 58px;
        animation: move 5s linear 1s infinite alternate ;;
        
      }
    }
  }
  .AIName {
    margin: 30px 0;
    div {
      text-align: center;
    }
    .firstTitle {
      font-family: SourceHanSansCN-Bold;
      font-size: 70px;
      font-weight: bold;
      letter-spacing: 0em;
      color: #d8d8d8;
    }
    .secondTitle {
      font-family: SourceHanSansCN-Bold;
      font-size: 25px;
      font-weight: bold;
      line-height: 30px;
      letter-spacing: 0em;
      color: #9e9e9e;
    }
  }
  #nagivation {
    fill: #710212;
    position: absolute;
    left: 20px;
    top: 20px;
  }

  #bigBrain {
    width: 800px;
    height: 400px;
    margin: 0 auto;
    display: block;
  }
  .Line {
    width: 1px;
    background-color: #d8d8d8;
    margin: 0 auto;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>