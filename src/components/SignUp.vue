<template>
  <div>
    <div class="register">
      <h1>SignUp</h1>
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="signUp">Sign Up</button>
      <p><router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (this.name !== "" && this.email !== "" && this.password !== "") {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.log(result);

        if (result.status == 201) {
          alert("SignUp Successfull");
          this.$router.push("/login");
          window.location.reload();
        }
      } else {
        alert("Field is Empty");
      }
    },
  },
  //   mounted() {
  //     {
  //       let user = localStorage.getItem("user-info");
  //       if (user) {
  //         this.$router.push("/");
  //       }
  //     }
  //   },
};
</script>
<style scoped>
.register{
    text-align:center;
}
.register button{
    max-width: 300px; width:100%;margin:0 auto 15px auto;
}

.register input{
      width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-right: auto;
  margin-bottom: 30px;
  margin-left: auto;
  border: 1px solid skyblue;
}

.register button{
      width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #000;
  cursor: pointer;
}
</style>