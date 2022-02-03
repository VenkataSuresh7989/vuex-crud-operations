<template>
    <div class="add-product">
        <form v-on:submit.prevent="onSubmit">
            <input type="text" v-model="title" placeholder="Add Product..."/>
            <input type="text" v-model="price" placeholder="Add Price..."/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "AddProduct",
  data() {
    return {
      title: "",
      price: ""
    };
  },
  methods: {
    /* ADD new products */  
    ...mapActions(["addProduct"]),
    onSubmit() {
      this.addProduct({
        title: this.title,
        price: this.price
      });
      /* After submit data clear the input fields */
      this.title='',
      this.price=''
    }
  }
};
</script>