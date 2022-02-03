<template>
  <div>
    <h1>Dashboard</h1>
    <Products />
  </div>
</template>
<script>
import Products from "./Products.vue";
export default {
  name: "Dashboard",
  components: {
    Products,
  },
};
</script>
