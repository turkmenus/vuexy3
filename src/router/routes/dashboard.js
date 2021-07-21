export default [
  {
    path: '/anasayfa',
    name: 'anasayfa',
    component: () => import('@/views/sayfalar/homepage/homepage.vue'),
  },
  {
    path: '/customers',
    name: 'customers',
    component: () => import('@/views/sayfalar/customers/customers.vue'),
  },
  {
    path: '/transporters',
    name: 'transporters',
    component: () => import('@/views/sayfalar/transporters/transporters.vue'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/sayfalar/orders/orders.vue'),
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('@/views/sayfalar/todolist/todolist.vue'),
  },
]
