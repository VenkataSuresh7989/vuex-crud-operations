<template>
  <ul class="products-listing">
    <li v-for="product in allProducts" :key="product.id">
      {{ product.title }} | {{ product.price | currency }}
      <button v-on:click="deleteProduct(product.id)">Close</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  filters: {
    currency: function (value) {
      return "₹ " + parseFloat(value).toFixed(2);
    },
  },
  methods: {
    /* Get All products data by calling getProducts() from product.js & DELETE selected id product data */
    ...mapActions(["getProducts", "deleteProduct"]),
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
