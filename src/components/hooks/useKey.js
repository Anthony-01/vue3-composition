import { ref } from "vue";
function userKey() {
  const isPress = ref(false);
  const onChangeKey = (e) => {
    e.keyCode == 72 ? (isPress.value = true) : (isPress.value = false);
    // isPress.value = true;
  };
  document.addEventListener("keydown", onChangeKey);
  return {
    isPress,
  };
}

export default userKey;
