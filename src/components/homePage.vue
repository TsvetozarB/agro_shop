<template>
  <div class="container">
    <h1 v-if="$store.state.logedIn" >Здравейте {{ $store.state.userData.userName }}</h1>
    <h1 v-else>Добре дошли в нашият уеб сайт !!!</h1>

    <div v-if="!$store.state.logedIn" class="sample-posts">

      <div class="col-1">
        <h3>Това се търси:</h3>
        <ul v-for="post in $store.state.posts" :key="post.id">
          <li v-if="post.userId = 1">{{ post.title }}</li>
        </ul>
      </div>

      <div class="col-2">
        <h3>Това се предлага:</h3>
        <ul v-for="post in $store.state.posts" :key="post.id">
          <li v-if="post.userId = 2">{{ post.title }}</li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  components: {
    
  },

  data() {
    return {
      
    }
  },

  created() {
    
  },

}
</script>

<style scoped>

  .container {
    background-color: moccasin;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
  }

  h1 {
    text-align: center;
  }

  .sample-posts {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }

  .col-1 , .col-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    background-color: #fff;
    width: 100%;
  }

  h3 {
    width: 100%;
    text-align: center;
    border-bottom: 5px solid moccasin;
    padding: 10px;
    margin: 0px;
  }

  .col-1 ul{
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  ul {
    list-style-type: none;
  }

  

</style>
