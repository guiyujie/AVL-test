import Vue from 'vue';
import VueRouter from 'vue-router';
import auth from 'middleware/auth';
import middlewarePipeline from 'middleware/middlewarePipeline';
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['view/index.vue'], resolve)
  },
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: (resolve) => require(['view/login.vue'], resolve)
  },
  {
    path: '/user',
    meta: {
      title: '用户页',
      middleware: [auth]
    },
    component: (resolve) => require(['view/user.vue'], resolve)
  }
]

const router = new VueRouter({
  routes
})
//
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
