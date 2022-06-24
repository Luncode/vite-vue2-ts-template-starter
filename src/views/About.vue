<template>
  <div class="container">
    <h1>About</h1>
    <h2>
        Power By Luncode
    </h2>
    <p>请我喝咖啡：</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
});
</script>
<style lang="scss" scoped>
.container {
  text-align: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
