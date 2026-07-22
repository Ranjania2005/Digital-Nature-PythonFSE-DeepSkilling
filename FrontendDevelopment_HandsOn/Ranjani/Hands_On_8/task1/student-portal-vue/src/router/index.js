import { createRouter, createWebHistory } from 'vue-router'

import CoursesView from '../views/CoursesView.vue'


const router = createRouter({

  history: createWebHistory(),

  routes: [

    {
      path: '/',
      name: 'courses',
      component: CoursesView
    }

  ]

})


export default router