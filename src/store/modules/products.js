import axios from "axios";

const state={
    products:[]
};
const getters={
    /* allProducts Have Total State Variable Data */
    allProducts:state=> state.products
};
const actions={
    /* GET All Prodcts Data */
    async getProducts({commit}){
        const response= await axios.get("http://localhost:3000/products");
        commit("setProducts",response.data);
    },

    /* Add New Products Data */
    async addProduct({commit},product){
        const response=await axios.post("http://localhost:3000/products",product);
        commit("newProducts",response.data);
    },

    /* Delete Selected Products Data */
    async deleteProduct({commit},id){
        await axios.delete(`http://localhost:3000/products/${id}`);
        commit("removeProduct", id);
    }
};
const mutations={
    /* GET Data Set to State Variables */
    setProducts:(state,setProductsResponse)=>(state.products=setProductsResponse),

    /* Append to  Products into State in Top Level By Using unshift() */
    newProducts:(state,newProductsResponse)=>(state.products.unshift(newProductsResponse)),

   /* Delete Product Based on Id */
    removeProduct:(state,id)=> (state.products=state.products.filter(product=>product.id!==id))
};

export default {
    state,
    getters,
    actions,
    mutations
}