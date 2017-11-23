/**
 * Created by artemkopytko on 03.05.17.
 */

import Home from '@/components/HelloWorld.vue'
import Posts from '@/components/Posts.vue'
import NewPost from '@/components/NewPost.vue'
import EditPost from '@/components/EditPost.vue'

// import Home from './components/Home/Home.vue'
// import Portfolio from './components/Portfolio/Portfolio.vue'
// import Blog from './components/Blog/Blog.vue'
// import Auth  from './components/Auth/Auth.vue'
// import Dashboard from './components/Dashboard/Dashboard.vue'
// import SignUp from './components/SignUp/SignUp.vue'

//
// const Home = resolve => {
//     require.ensure(['./components/Home/Home.vue'], () => {
//         resolve(require('./components/Home/Home.vue'))
//     });
// };
//
// const Portfolio = resolve => {
//     require.ensure(['./components/Portfolio/Portfolio.vue'], () => {
//         resolve(require('./components/Portfolio/Portfolio.vue'));
//     });
// };
//
// const Blog = resolve => {
//     require.ensure(['./components/Blog/Blog.vue'], () => {
//         resolve(require('./components/Blog/Blog.vue'));
//     });
// };
//
// const Auth = resolve => {
//     require.ensure(['./components/Auth/Auth.vue'], () => {
//         resolve(require('./components/Auth/Auth.vue'));
//     });
// };
//
// const Dashboard = resolve => {
//     require.ensure(['./components/Dashboard/Dashboard.vue'], () => {
//         resolve(require('./components/Dashboard/Dashboard.vue'));
//     });
// };
//
// const SignUp = resolve => {
//     require.ensure(['./components/SignUp/SignUp.vue'], () => {
//         resolve(require('./components/SignUp/SignUp.vue'));
//     });
// };

export const routes = [
  { path: '', component: Home, name: 'Home'},
  { path: '/posts', component: Posts, name:'Posts'},
  { path: '/posts/new', component: NewPost, name: 'NewPost'},
  { path: '/posts/:id', component: EditPost, name: 'EditPost'},
  { path: '*', redirect:'/' }
];
