<template>
  <div class="home">
    <cart :count="cartCount" :cart-products="cartProducts"></cart>
    <el-button @click="getData()" type="warning">Get Data</el-button
    ><br /><br />
    <el-row :gutter="10">
      <el-col :span="6" :key="product.id" v-for="product in products">
        <product
          :description="product.description"
          :id="product.id"
          :image="product.image"
          @add-to-cart="addToCart"
        ></product>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import Product from "@/components/Product.vue";
import { URL } from "@/services/config.js";

export default {
  name: "Home",
  components: {
    Cart,
    Product,
  },
  template: ``,
  methods: {
    getData() {
      this.$http.get(URL).then((res) => {
        this.products = res.data;
      });
    },
    addToCart(id) {
      this.cartCount++;
      const product = this.products.find((product) => product.id === id);
      this.cartProducts.push(product);
    },
  },
  data() {
    return {
      products: [],
      cartProducts: [],
      cartCount: 0,
    };
  },
  mounted() {
    this.getData();
  },
};
</script>
