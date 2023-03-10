<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  {{ count }}
  <button @click="increase">提交</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: "App",
  // components: {
  //   HelloWorld
  // }
  setup() {
    let count = ref(0);
    const increase = () => {
      count.value++;
    };
    return {
      count,
      increase,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
