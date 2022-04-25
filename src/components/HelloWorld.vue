<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  background: {
    type: String,
    default: "pink",
  },
});

const flag = ref(false);

const click = () => {
  flag.value = true;
};
</script>

<template>
  <div class="container">
    <h1>Do you wanna have sex with me?</h1>
    <button @click="click" :style="`background: ${props.background};`">
      Yes
    </button>
    <p v-if="flag">thk</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
button {
  max-width: 320px;
}
</style>
