<template>
  <div id="add-post">
    <h2>Добавяне на нова публикация</h2> <!-- Add a new post-->
    <div v-if="!submitted" class="form-fild">
      <form>
        <label>Заглавие на публикацията:</label> <!-- Post title-->
        <input id="title-id" type="text" v-model="postData.title" required />
        <label>Подробно описание на публикацията:</label> <!-- Post description -->
        <textarea id="content-id" name="post-content" v-model="postData.content" rows="10" required></textarea>
        
      </form>

      <div class="tags">
        <label>Отрова</label> <!-- Repelent -->
        <input id="tag-id-1" type="checkbox" value="repelent" v-model="postData.tags">
        <label>Тор</label> <!-- Fertilizer -->
        <input id="tag-id-2" type="checkbox" value="fertilizer" v-model="postData.tags">
      </div>
      <button @click.prevent="submitPost">Добави</button> <!-- submit -->
    </div>
    <div v-if="submitted" class="error-text">
      <p >Благодаря, че добавихте вашата публикация!</p> <!-- Thanks for adding your post -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postData: {
        title: "",
        content: "",
        tags: []
      },
      submitted: false,
    }
  },
  methods: {

    checkForError() {
      if(this.postData.title == "") {

        if ( !this.postData.title == "" && document.getElementById("title-id").classList.contains('red-box-shadow') ) {
          document.getElementById("title-id").classList.remove('red-box-shadow');
        } else {
          document.getElementById("title-id").classList.add('red-box-shadow');
        }
      } else {
        if ( document.getElementById("title-id").classList.contains('red-box-shadow') ) {
          document.getElementById("title-id").classList.remove('red-box-shadow');
        }
      }

      if(this.postData.content == "") {

        if ( !this.postData.content == "" && document.getElementById("content-id").classList.contains('red-box-shadow') ) {
          document.getElementById("content-id").classList.remove('red-box-shadow');
        } else {
          document.getElementById("content-id").classList.add('red-box-shadow');
        }
      } else {
        if ( document.getElementById("content-id").classList.contains('red-box-shadow') ) {
          document.getElementById("content-id").classList.remove('red-box-shadow');
        }
      }

      if(this.postData.tags.length == 0) {
        
        if ( !this.postData.tags.length == 0 && document.getElementById("tag-id-1").classList.contains('red-box-shadow') ) {
          document.getElementById("tag-id-1").classList.remove('red-box-shadow');
        } else {
          document.getElementById("tag-id-1").classList.add('red-box-shadow');
        }

        if ( !this.postData.tags.length == 0 && document.getElementById("tag-id-2").classList.contains('red-box-shadow') ) {
          document.getElementById("tag-id-2").classList.remove('red-box-shadow');
        } else {
          document.getElementById("tag-id-2").classList.add('red-box-shadow');
        }
      } else {
        if ( document.getElementById("tag-id-1").classList.contains('red-box-shadow') ) {
          document.getElementById("tag-id-1").classList.remove('red-box-shadow');
        }

        if ( document.getElementById("tag-id-2").classList.contains('red-box-shadow') ) {
          document.getElementById("tag-id-2").classList.remove('red-box-shadow');
        }
      }
    },

    submitPost() {

      if(this.postData.title == "" || this.postData.content == "" || this.postData.tags.length == 0) {
        
        this.checkForError();
        
      } else {
        this.$http.post('https://jsonplaceholder.typicode.com/posts', {
          title: this.postData.title,
          body: this.postData.content,
          userId: 1
        }).then(function(data){
          console.log(data);
          this.submitted = true;
          this.postData.title = "";
          this.postData.content = "";
        });
      }
    }
  }
}
</script>

<style scoped>
  #add-post *{
    box-sizing: border-box;
    position: relative;
  }

  #add-post {
    margin: 20px auto;
    width: 80%;
    background-color: moccasin;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    padding-top: 20px;
  }

  div.form-fild {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  form label {
    display: flex;
    margin: 20px auto 10px;
    font-size: 1.5rem;
  }

  form input[type="text"], textarea {
    display: flex;
    padding: 8px;
    margin-bottom: 20px;
    border: none;
    border-radius: 20px;
    font-size: 22px;
  }

  input:focus, textarea:focus {
    outline: none;
    box-shadow: 0 0 10px #719ECE;
  }

  div.tags {
    display: flex;
    margin: 10px;
  }

  .tags input {
    margin-right: 20px;
  }

  div.form-fild button {
    color: #fff;
    background-color: orange;
    font-size: 20px;
    margin: 20px 0px 30px 0px;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
  }

  .error-text {
    position: absolute;
    background-color: #fff;
    width: 50%;
    margin: 10px auto;
    font-size: 30px;
    text-align-last: center;
    padding: 15px 0px;
    top: -15px;
    border-radius: 20px;
  }

  .red-box-shadow {
    box-shadow: 0 0 10px #cf736a;
  }
</style>
