import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'Map',
      component: () => import('@/components/aMap.vue')
    },
    {
      path: '/async-script',
      name: 'AsyncScript',
      component: () => import('@/components/async-script.vue')
    },
    {
      path: '/env',
      name: 'ENV',
      component: () => import('@/components/env.vue')
    },
    {
      path: '/file-xlsx',
      name: 'FileXlsx',
      component: () => import('@/components/file-xlsx.vue')
    },
    {
      path: '/image',
      name: 'Image',
      component: () => import('@/components/image.vue')
    },
    {
      path: '/json',
      name: 'Json',
      component: () => import('@/components/json.vue')
    },
    {
      path: '/number',
      name: 'Number',
      component: () => import('@/components/number.vue')
    },
    {
      path: '/pin-yin',
      name: 'PinYin',
      component: () => import('@/components/pin-yin.vue')
    },
    {
      path: '/storage',
      name: 'Storage',
      component: () => import('@/components/storage.vue')
    },
    {
      path: '/string',
      name: 'String',
      component: () => import('@/components/string.vue')
    },
    {
      path: '/url',
      name: 'Url',
      component: () => import('@/components/url.vue')
    },
    {
      path: '/uuid',
      name: 'Uuid',
      component: () => import('@/components/uuid.vue')
    },
    {
      path: '/wechat',
      name: 'Wechat',
      component: () => import('@/components/wechat.vue')
    }
  ]
})

export default router
