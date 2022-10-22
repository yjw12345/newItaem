<template>
<div class="Enter">
  <Planet />
  <EnterDoor v-if="done" />
  <DoorAnimation :done="NextDoor" />
    
</div>
</template>

<script setup>
import DoorAnimation from "@/components/EnterComponentns/DoorAnimation.vue";
import EnterDoor from "@/components/EnterComponentns/EnterDoor.vue";
import Planet from "@/components/EnterComponentns/Planet.vue";
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

// 这里监听anmition动画的完成，如果完成了，就返回来监听
const done = ref(false);
function NextDoor(){
    setTimeout(() => {
        done.value=true
    }, 500);
}
</script>

<style lang='scss' scoped>
.Enter{
    // overflow:hidden加上这个属性比较好
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
}
</style>