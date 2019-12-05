import yzjButton from './button/index.js'
import yzjDrawer from './drawer/index.js'

const components = [yzjButton, yzjDrawer]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  yzjButton,
  yzjDrawer
}
