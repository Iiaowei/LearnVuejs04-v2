// commonJS规范
const {add, mul} = require('./js/mathUtils')

console.log(add(20, 30))
console.log(mul(20, 30))

// ES6规范
import {name, age, height} from "./js/info"

console.log(name)
console.log(age)
console.log(height)

require('./css/normal.css')
require('./css/special.less')

document.writeln('<h2>hello</h2>')

import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

document.writeln('<span>哈哈哈哈</span>')