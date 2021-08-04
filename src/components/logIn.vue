<template>
  <div class="container">
    <div class="form-fild">
        <form>
            <label>Потребителско име:</label>
            <input type="text" name="username" v-model="userData.userName" required />
            <label>Парола:</label>
            <input type="password" name="password" v-model="userData.userPassword" required />
        </form>

        <button @click.prevent="submitLogIn">Вход</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                userName: '',
                userPassword: ''
            },
            loged: false,
        }
    },

    methods: {

        addUserDataToState() {
            this.$store.state.userData.userName = this.userData.userName;
            this.$store.state.userData.userPassword = this.userData.userPassword;
        },
        
        goToAllPosts(){
            this.addUserDataToState();
            this.$router.push('/');
        },

        submitLogIn() {
            this.$http.post('https://jsonplaceholder.typicode.com/users', {
                name: this.userData.userName,
                email: this.userData.userPassword,
                id: 1
            }).then(function(data){
                console.log(data);
                this.userData.userName = "";
                this.userData.userPassword = "";
                this.loged = true;
                this.$store.state.logedIn = this.loged;
                // console.log('this is store ' + this.$store.state.logedIn);
            });

            this.goToAllPosts();
        }
    },

    computed: {
        counter() {
            return this.$store.state.counter;
        }
    }
}
</script>

<style scoped>

    h1 {
        text-align: center;
    }

    .container {
        margin: 20px auto;
        width: 80%;
        background-color: moccasin;
    }

    .form-fild {
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
        font-size: 2rem;
    }

    form input {
        display: flex;
        padding: 8px;
        margin-bottom: 20px;
        border: none;
        border-radius: 20px;
        font-size: 2rem;
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
        font-size: 2rem;
        margin: 20px 0px 30px 0px;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
    }
</style>
