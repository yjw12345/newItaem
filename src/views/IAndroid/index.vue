<template>
  <div>
    <Animation />
    <AndroidText v-if="flag"/>
  </div>
</template>

<script setup>
import Animation from "@/components/Android3d.vue";
// import Animation from "@/components/AndroidText/index.vue";
import { defineAsyncComponent, onMounted, ref } from "@vue/runtime-core";
import AndroidText from "@/components/AndroidText/index.vue";
let flag=ref(false)
setTimeout(() => {
  flag.value=true
}, 500);
</script>

<style>
</style>