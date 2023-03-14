<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <!-- {{ count }}
  <button @click="increase">提交</button> -->
  <!-- <button @click="onClick">打开</button>
    <h1>{{ isPress }}</h1> -->
  <div class="main-container">
    <modal :visible="visible" @close="onClose"></modal>
    <GlobalHeader :user="user"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import modal from "./components/teleport/modal.vue";
import userKey from "./components/hooks/useKey.js";
import ColumnList, { ColumnItem } from "./components/ColumnList/ColumnList.vue";
import GlobalHeader, {
  UserProps,
} from "./components/GlobalHeader/GlobalHeader.vue";

// import HelloWorld from './components/HelloWorld.vue';
const list: ColumnItem[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 3,
    title: "test3的专栏",
    description:
      "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
];

const user: UserProps = {
  isLogin: true,
  name: "anthony",
};

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld
    modal,
    ColumnList,
    GlobalHeader,
  },
  data() {
    return {
      // visible: false,
      list: list,
      user: user,
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
