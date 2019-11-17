import yzjButton from './button/index.js'
import yzjMenu from './menu/index.js'

const components = [yzjButton, yzjMenu]

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
  yzjMenu
}
