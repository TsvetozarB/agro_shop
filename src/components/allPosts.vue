<template>
  <div class="container">
    <h1>Списък с публикации</h1> <!-- List with all posts -->
    <input class="search-box" type="text" v-model="search" placeholder="search blogs">
    <div class="posts-list">

            <div v-for="post in filteredPosts" :key="post.id" class="post">
                <h3 class="post-title"> {{ post.title | to-uppercase }} </h3>
                <p class="post-body">{{ post.body }}</p>
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
      posts: [],
      search: ''
    }
  },

  created() {

    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      this.$store.state.posts = data.body.slice(0,20);
    })
  },

  computed: {
      filteredPosts() {
          return this.$store.state.posts.filter((posts) => {
              return posts.title.match(this.search);
          })
      }
  }


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
    margin-top: 30px;
    text-align: center;
}

.search-box {
    margin: 0px 90px 0px auto;
    height: 20px;
    border: 3px solid moccasin;
}

.posts-list {
    background-color: moccasin;
    display: flex;
    flex-direction: column;
    width: 60%;
}

.post {
    border: 1px solid moccasin;
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    background-color: #fff;
}

.post h3 {
    text-align: center;
}
</style>
