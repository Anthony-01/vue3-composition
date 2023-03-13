<template>
  <Teleport to="#modal">
    <div class="wrapper">
      <div class="content" v-show="visible">
        <slot>this is a modal!</slot>
        <button @click="onClose">Close</button>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "modal",
  props: {
    visible: Boolean,
  },
  emits: {
    close: null,
  },
  setup(props, { emit }) {
    const onClose = () => {
      console.log("close!!!");
      emit("close");
    };
    return {
      onClose,
    };
  },
});
</script>
<style scoped>
.wrapper {
  width: 200px;
  height: 200px;
  left: 50%;
  top: 50%;
  position: relative;
  transform: translate(-50%, -50%);
}
</style>
