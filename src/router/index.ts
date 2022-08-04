import { createRouter, createWebHashHistory } from 'vue-router';
// import routes from 'virtual:generated-pages';
import routes from './root';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// routes.push({
//   path: '/',
//   redirect: '/demo',
// });
// console.log(routes);
// debugger;
//导入生成的路由数据
console.log(routes, '路由信息');
debugger;
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  next();
});

//配置路由元信心
router.afterEach((_to, _from) => {
  NProgress.done();
});

export default router;
