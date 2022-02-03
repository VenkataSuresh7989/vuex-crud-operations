<template>
  <div class="app">
    <div>
      <p style="color:white">Welcome: <span style="color:rgb(248, 68, 96)">{{ this.$store.state.userName }}</span></p>
    </div>
    <AddProduct />
    <Products />
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import AddProduct from "./components/AddProduct.vue";

export default {
  name: "app",

  components: {
    Products,
    AddProduct,
  },
};
</script>
