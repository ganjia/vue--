// 入口文件
import Vue from 'vue'

import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css"
// 导入APP 根组件
import App from './App.vue'
// 导入自己的 router.js 模块
import router from './router.js'
// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
new Vue({
    el: '#app',
    render: h => h(App),
    router //挂载路由对象 VM 实例上
})