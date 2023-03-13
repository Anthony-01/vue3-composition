<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  {{ count }}
  <button @click="increase">提交</button>
  <modal :visible="visible" @close="onClose"></modal>
  <button @click="onClick">打开</button>
  <h1>{{ isPress }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import modal from "./components/teleport/modal.vue";
import userKey from "./components/hooks/useKey.js";
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld
    modal,
  },
  data() {
    return {
      // visible: false,
    };
  },
  setup() {
    const visible = ref(false);
    let count = ref(0);
    const increase = () => {
      count.value++;
      visible.value = false;
    };
    const onClick = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    const { isPress } = userKey();
    return {
      count,
      increase,
      visible,
      onClick,
      onClose,
      isPress,
    };
  },
  methods: {
    // onClick() {
    //   this.visible = true;
    // },
    // onClose() {
    //   this.visible = false;
    // },
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
