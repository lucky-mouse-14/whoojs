// 路由规则
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import ('@/views/home'),
  },
]

export default routes
