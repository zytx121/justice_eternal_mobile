export default [
  {
    path: '',
    redirect: {
      name: 'showList'
    }
  },
  {
    path: 'showList',
    name: 'showList',
    component: resolve => require(['@/components/showList.vue'], resolve)
  },
  {
    path: 'showDetail/:number',
    name: 'showDetail',
    component: resolve => require(['@/components/showDetail.vue'], resolve)
  }
]