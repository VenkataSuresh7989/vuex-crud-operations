<template>
  <div>    
    <div class="login">
      <h1>Login</h1>
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="login">Login</button>
      <p>
        <router-link to="/signup">SignUp</router-link>
      </p>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "Login",
  data() {
    {
      return {
        email: "",
        password: "",
      };
    }
  },
  methods: {
      login() {}
    // async login() {
    //   {
    //     if (this.email !== "" && this.password !== "") {
    //       let result = await axios.get("http://localhost:3000/users?email=" +this.email +"&password=" +this.password);

    //       if (result.status == 200 && result.data.length > 0) {
    //         localStorage.setItem("username",this.email);
    //         localStorage.setItem("password",this.password);
    //         //localStorage.setItem("user-info", JSON.stringify(result.data[0]));
    //         this.$router.push("/");
    //         window.location.reload();
    //       } else {
    //         alert("Invalid User Details");
    //       }
    //     } else {
    //       alert("Field is Empty");
    //     }
    //   }
    // },
  },
};
</script>
<style scoped>
.login{ text-align:center; }
.login button{
    max-width: 300px; width:100%;margin:0 auto 15px auto;
}
.login input{
      width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-right: auto;
  margin-bottom: 30px;
  margin-left: auto;
  border: 1px solid skyblue;
}
.login button{
      width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #000;
  cursor: pointer;
}
</style>