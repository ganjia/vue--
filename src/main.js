// 入口文件
import Vue from 'vue'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import "./lib/mui/css/mui.min.css";
// 导入APP 根组件
import App from './App.vue'
import router from './router'

new Vue({
    el: '#app',
    render: h => h(App),
    router
})