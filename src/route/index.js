
const routes = [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['view/index.vue'], resolve)
  },
  {
    path: '/user',
    meta: {
      title: '用户页'
    },
    component: (resolve) => require(['view/user.vue'], resolve)
  }
]



export default routes
