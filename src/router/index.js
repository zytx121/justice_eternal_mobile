import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/show.vue'
import Recommond from '@/components/recommond.vue'
import recommondPlay from '@/components/recommondPlay.vue'
import Info from '@/components/info.vue'
import About from '@/components/about.vue'
import Comments from '@/components/comment.vue'
import Instruction from '@/components/instruction.vue'
import Start from '@/components/start.vue'
import showRoutes from './show-routes'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'show',
      redirect: {
      name: 'showList'
      } 
    },
    {
    path: '/show',
    component: Show,
    children: showRoutes
       
    },
    {
      path: '/recommond',
      name: 'Recommond',
      component: Recommond,     
    },
    {
      path: '/recommondPlay/:aid',
      name: 'recommondPlay',
      component: recommondPlay,
      child: [
        {
          path: '/recommondPlay/:aid/info',
          name: 'Info',
          component: Info
        },
         {
          path: '/comment/:aid/comments',
          name: 'Comments',
          component: Comments
        },
      ]
    },
    {
      path: '/about',
      component: About
    },

    {
      path: '/instruction',
      component: Instruction
    },
    {
      path: '/start',
      component: Start
    }
  ]
})
