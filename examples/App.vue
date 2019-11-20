<template>
  <div id="app">
    <yzj-header />
    <yzj-drawer />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import YzjHeader from "./components/yzj-header.vue";
import YzjDrawer from "~/drawer";

export default Vue.extend({
  name: "app",
  components: {
    "yzj-header": YzjHeader,
    "yzj-drawer": YzjDrawer
  }
});
</script>

<style lang="scss">
@import "~/theme-chalk/src/index.scss";
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
