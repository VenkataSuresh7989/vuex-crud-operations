<template>
  <div >
    <div>
      <Navbar/>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",

  components: {
    Navbar,
  },
};
</script>
