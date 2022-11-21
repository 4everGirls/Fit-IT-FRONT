import datePicker from './datePicker'

datePicker.install = Vue => Vue.component(datePicker.name,datePicker)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(datePicker);
}

export default datePicker