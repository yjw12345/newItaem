<template>
  <div class="EnterDoor">
    <!-- 首先是上面的状态栏 -->
    <div class="Infor">
      <div class="Image">
        <div class="Team">
          <div class="White"></div>
          <div class="NameInfor">
            <div class="TeamName">ITAEM</div>
            <div class="TeamDetail">计算机程序开发 实验室</div>
          </div>
        </div>
        <div class="State">
          <div></div>
          招新工作ing!!......
        </div>
      </div>
      <div class="Join">
        <router-link to="frontend">join us? ~</router-link>
      </div>
    </div>
    <!-- 然后是中间的几行文字 -->
    <div class="ContentCenter">
      <div class="text">ITAEM</div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
    </div>
    <!-- 那两条线 -->
    <div class="TopLine"></div>
    <div class="UnderLine"></div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' >
@keyframes OpacityChange {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
div.EnterDoor {
    position: relative;
    animation: 1s OpacityChange;
    width: 100vw;
    height: 100vh;
  div.Infor {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    div.Image {
      display: flex;
      div.Team {
        display: flex;
        div.White {
          height: 50px;
          width: 50px;
          background-color: #ffffff;
        }
        div.NameInfor {
          margin-left: 20px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          div.TeamName {
            font-size: 19px;
            font-weight: bold;
          }
          div.TeamDetail {
            font-size: 12px;
          }
        }
      }
      div.State {
        margin-left: 30px;
        text-align: center;
        color: #ffffff;
        line-height: 50px;
        div {
          width: 15px;
          height: 15px;
          display: inline-block;
          background-color: #20db3f;
          border-radius: 50%;
        }
      }
    }
    div.Join {
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      color: #ffffff;
      width: 135px;
      background-color: #b54d4d;
      cursor: pointer;
    }
  }
  div.ContentCenter {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    div.text {
        font-size: 50px;
        color: #ffffff;
        text-align: center;
    }
    div.row {
        background-color: #ffffff;
        height: 30px;
        margin: 15px auto;
    }

    div:nth-of-type(2){
            width: 264px;
    }
    div.row:nth-of-type(3) {
        width: 330px;
    }
    div.row:nth-of-type(4) {
        width: 200px;
    }
  }
  @keyframes ChangeHeightTop {
    0%{
        height: 0;
        top: 200px;
    }
    100%{
        height: 200px;
        top: 0;
    }
  }
  @keyframes ChangeHeightBottom {
    0%{
        height: 0;
        bottom: 200px;
    }
    100%{
        height: 200px;
        bottom: 0;
    }
  }
  div.TopLine,div.UnderLine{
    width: 1px;
    position: absolute;
    left: 50%;
    background-color: #ffffff;
    // height: 200px;
  }
  div.TopLine{
    top: 200px;
    animation: 2s ChangeHeightTop forwards;

  }
  div.UnderLine{
    bottom: 200px;
    animation: 2s ChangeHeightBottom forwards;

  }
}
</style>