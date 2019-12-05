<template>
  <transition name="yzj-drawer-fade">
    <div v-show="visible"
         class="yzj-drawer-wrapper">
      <div class="yzj-drawer-container"
           :class="visible ? 'yzj-drawer__open' : ''">
        <aside class="yzj-drawer"
               :class="direction"
               :style="cdrawerStyle">
          <slot></slot>
        </aside>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'yzj-drawer',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    size: {
      type: [String, Number],
      default: '206px'
    },
    direction: {
      type: String,
      default: 'ltr'
    }
  },
  computed: {
    cdrawerStyle () {
      let style = {}
      let drawerSize = this.size
      if (
        typeof drawerSize === 'string' &&
        (drawerSize.indexOf('%') !== -1 || drawerSize.indexOf('px') !== -1)
      ) {
        drawerSize = drawerSize
      } else {
        drawerSize = Number(drawerSize) + 'px'
      }
      switch (this.direction) {
        case 'ttb':
        case 'btt':
          style.height = drawerSize
          break
        case 'rtl':
        default:
          style.width = drawerSize
      }
      return style
    }
  },
  methods: {
    ftoggleDrawer () {
      this.visible = !this.visible
    },
    fcloseDrawer () {
      this.visible = true
    },
    fopenDrawer () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
@import "~/theme-chalk/src/components/drawer.scss";
</style>
