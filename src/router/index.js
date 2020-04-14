import Vue from 'vue'
import Router from 'vue-router'//路由：根据不同的路径，映射到不同的组件中
import Home from "@/components/Home";
import View from "@/components/View";

Vue.use(Router)

const page = name => () => import('@/page/' + name)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: View,
      children: [
        {path: '/',component: Home},
        {path: '/vuebase/hello',component: page('vuebase/'+'Hello')},
        {path: '/vuebase/on',component: page('vuebase/'+'On')},
        {path: '/vuebase/hello',component: page('vuebase/'+'Hello')},
        {path: '/vuebase/hello',component: page('vuebase/'+'Hello')},
        {path: '/vuebase/hello',component: page('vuebase/'+'Hello')},
        {path: '/vuebase/hello',component: page('vuebase/'+'Hello')},
      ]
    }
  ]
})


