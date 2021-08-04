import homePage from './components/homePage.vue';
import addPost from './components/addPost.vue';
import allPosts from './components/allPosts.vue';
import logIn from './components/logIn.vue';

export default [
    { path: '/', component: homePage },
    { path: '/add-post', component: addPost },
    { path: '/all-posts', component: allPosts },
    { path: '/log-in', component: logIn },
    { path: '/sign-out', redirect: '/'}
]