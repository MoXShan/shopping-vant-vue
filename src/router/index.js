import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('@/views/Main.vue')

// tabbar
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Vip = () => import('@/views/vip/Vip.vue')
const Car = () => import('@/views/car/Car.vue')
const My = () => import('@/views/my/My.vue')

const Search = () => import('@/views/home/actions/search/Search.vue')
const SearchResult = () => import('@/views/home/actions/search/SearchResult.vue')

const ProductDetail = () => import('@/views/productDetail/ProductDetail.vue')

const Login = () => import('@/views/login/Login.vue')
const Register = () => import('@/views/login/Register.vue')
const ForgetPassword = () => import('@/views/login/ForgetPassword.vue')

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/category',
          name: 'Category',
          component: Category,
        },
        {
          path: '/vip',
          name: 'Vip',
          component: Vip,
        },
        {
          path: '/car',
          name: 'Car',
          component: Car,
        },
        {
          path: '/my',
          name: 'My',
          component: My,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/forget-password',
      name: 'ForgetPassword',
      component: ForgetPassword,
    },
    {
      path: '/home-search',
      name: 'search',
      component: Search,
    },
    {
      path: '/search-result',
      name: 'SearchResult',
      component: SearchResult,
    },
    {
      path: '/product-detail',
      name: 'ProductDetail',
      component: ProductDetail,
    },
  ],
})
