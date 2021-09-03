<template>
  <nav>
    <ul class="main-links">
        <li><router-link to="/">Начало</router-link></li>
        <li v-if="$store.state.logedIn"><router-link to="/add-post">Добавяне на публикация</router-link></li>
        <li v-if="$store.state.logedIn"><router-link to="/all-posts">Всички публикации</router-link></li>
    </ul>
    <ul class="login-links">
      <li v-if="$store.state.logedIn" >{{ $store.state.userData.userName }}</li>
      <li v-if="!$store.state.logedIn"><router-link to="/log-in">Вход</router-link></li>
      <li v-if="$store.state.logedIn" @click="changeStatus"><router-link to="/sign-out">Изход</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logIn: this.$store.state.logedIn,
    }
  },

  methods: {
    changeStatus(){
      // this.logIn = !this.logIn;
      this.$store.state.logedIn = !this.$store.state.logedIn;
    }
  }
}
</script>

<style scoped>

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #444;
        padding: 14px 0;
        margin: 0 auto 20px;
        width: 80%;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        margin: 0;
    }

    li {
        display: flex;
        color: #fff;
    }

    a {
        color: #fff;
        text-decoration: none;
        padding: 6px 20px;
        border-radius: 10px;
        font-size: 1.2rem;
    }

    .login-links {
      margin-right: 40px;
    }

    .router-link-exact-active {
        background-color: #eee;
        color: #444;
    }
</style>
