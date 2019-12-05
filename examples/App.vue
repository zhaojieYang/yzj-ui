<template>
  <div id="app">
    <yzj-header />
    <yzj-drawer :visible="visible">
    </yzj-drawer>
    <button class="yzj-drawer-toggle"
            @click.stop="ftoggleDrawer()">抽屉</button>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import YzjHeader from "./components/yzj-header.vue";

export default Vue.extend({
  name: "app",
  components: {
    "yzj-header": YzjHeader
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    ftoggleDrawer() {
      this.visible = !this.visible;
    }
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

  .yzj-drawer-toggle {
    display: none;
    position: fixed;
    bottom: 3px;
    left: 3px;
    z-index: 500;
  }

  @media screen and (max-width: 768px) {
    .yzj-drawer-toggle {
      display: block;
    }
  }
}
</style>
