<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
    <a class="navbar-brand" href="/"> eCommerce </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-if="name">
          <a class="nav-link" href="/"> Home </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="name">
          <a class="nav-link" href="/add"> Add </a>
        </li>
        <li class="nav-item" v-if="!name">
          <a class="nav-link" href="/signup"> SignUp </a>
        </li>
        <li class="nav-item" v-if="!name">
          <a class="nav-link" href="/login"> Login </a>
        </li>
        <li class="nav-item" v-if="name">
          <a class="nav-link" v-on:click="logout"> LogOut </a>
        </li>
      </ul>
      <div class="user" v-if="name">
        <p>
          Welcome :<span>{{ name}}</span>
        </p>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    logout() {
    //   localStorage.clear();
    //   this.$router.push("/login");
    //   window.location.reload();
    },
  },
//   mounted(){
//     this.name=localStorage.getItem("username");
//   }
};
</script>